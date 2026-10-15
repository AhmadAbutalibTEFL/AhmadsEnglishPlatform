#!/usr/bin/env python3
"""
Bulk-generate the TOEFL SPEAKING model audio (Listen and Repeat sentences +
Take an Interview questions) with Microsoft Edge TTS (free, no API key).

Reads speaking-audio-scripts.json (72 units) and writes audio/speaking/<id>.mp3
ONLY for recordings that do not exist yet. If <id>.mp3 or <id>.wav is already
there, that unit is skipped and the file is never overwritten or deleted.
There is no --force option on purpose; to redo one recording, delete that one
file yourself and run the script again.

Setup (once):    pip install -U edge-tts
Run from the repo root (the folder that contains index.html):
    node export_speaking_scripts.js            # only if you edited the speaking text
    python make_audio_edge_speaking.py --dry-run
    python make_audio_edge_speaking.py --only sp-repeat-g1-01   # test ONE file first
    python make_audio_edge_speaking.py                          # generate everything missing

Voices:
  * Listen and Repeat: each sentence rotates through 6 voices (3 female, 3 male),
    so you hear different speakers, like the real test.
  * Take an Interview: one interviewer voice per set (the same "person" asks all
    4 questions), rotating between sets.
Speed: repeat sentences -8% (same as the old browser voice, 0.92), interview -5%.
"""
import argparse
import asyncio
import json
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent
SCRIPTS = HERE / "speaking-audio-scripts.json"
OUT_DIR = HERE / "audio" / "speaking"

CONFIRMED = {
    "f": ["en-US-AriaNeural", "en-US-JennyNeural", "en-US-MichelleNeural", "en-US-AvaNeural", "en-US-EmmaNeural"],
    "m": ["en-US-GuyNeural", "en-US-AndrewNeural", "en-US-BrianNeural", "en-US-ChristopherNeural",
          "en-US-EricNeural", "en-US-RogerNeural", "en-US-SteffanNeural"],
}

# Listen and Repeat: rotated per sentence (alternating female / male).
REPEAT_POOL = [("f", "en-US-JennyNeural"), ("m", "en-US-GuyNeural"), ("f", "en-US-AriaNeural"),
               ("m", "en-US-BrianNeural"), ("f", "en-US-MichelleNeural"), ("m", "en-US-AndrewNeural")]
# Take an Interview: one voice per set, rotated per set.
INTERVIEW_POOL = [("f", "en-US-AriaNeural"), ("m", "en-US-ChristopherNeural"), ("f", "en-US-AvaNeural"),
                  ("m", "en-US-GuyNeural"), ("f", "en-US-JennyNeural"), ("m", "en-US-RogerNeural")]

DEFAULT_RATE = {"repeat": "-8%", "interview": "-5%"}


def build_prefs(units):
    """{unit_id: (gender, preferred_voice)} computed over ALL units, so voices stay the
    same whatever --only you use."""
    prefs, set_index, repeat_n = {}, {}, 0
    for unit in units:
        if unit["task"] == "repeat":
            prefs[unit["id"]] = REPEAT_POOL[repeat_n % len(REPEAT_POOL)]
            repeat_n += 1
        else:
            key = (unit["task"], unit["set"])
            if key not in set_index:
                set_index[key] = len(set_index)
            prefs[unit["id"]] = INTERVIEW_POOL[set_index[key] % len(INTERVIEW_POOL)]
    return prefs


def resolve(pref, available, live):
    """Preferred voice -> confirmed same-gender voices -> any live en-US voice of that gender."""
    gender, preferred = pref
    candidates = [preferred] + CONFIRMED[gender] + (live or {}).get(gender, [])
    voice = next((c for c in candidates if available is None or c in available), None)
    if voice is None:
        raise RuntimeError(f"no {gender} voice available")
    note = f"{preferred} unavailable -> {voice}" if voice != preferred else None
    return voice, note


def has_audio(uid):
    return (OUT_DIR / f"{uid}.mp3").exists() or (OUT_DIR / f"{uid}.wav").exists()


def short(voice):
    return voice.replace("en-US-", "").replace("Neural", "")


async def load_available():
    import edge_tts
    avail, live = set(), {"f": [], "m": []}
    for v in await edge_tts.list_voices():
        if v.get("Locale") != "en-US":
            continue
        name = v["ShortName"]
        avail.add(name)
        gender = {"Female": "f", "Male": "m"}.get(v.get("Gender"))
        if gender and "Multilingual" not in name:
            live[gender].append(name)
    return avail, live


async def synth(text, voice, rate):
    import edge_tts
    audio = bytearray()
    async for chunk in edge_tts.Communicate(text, voice, rate=rate).stream():
        if chunk["type"] == "audio":
            audio.extend(chunk["data"])
    if not audio:
        raise RuntimeError("no audio received")
    return bytes(audio)


async def main_async(args):
    units = json.loads(SCRIPTS.read_text(encoding="utf-8"))
    prefs = build_prefs(units)
    todo = [u for u in units if u["id"].startswith(args.only)]
    if not todo:
        sys.exit(f"No unit ids start with '{args.only}'.")

    if args.dry_run:
        missing = 0
        for unit in todo:
            voice, _ = resolve(prefs[unit["id"]], None, None)
            state = "exists " if has_audio(unit["id"]) else "MISSING"
            missing += state == "MISSING"
            text = " ".join(l["text"] for l in unit["lines"])
            print(f"{state} {unit['id']:20} {len(text.split()):3} words  {short(voice):12} {text[:55]}")
        print(f"\n{missing} of {len(todo)} recordings would be generated; existing files are never touched.")
        return

    pending = [u for u in todo if not has_audio(u["id"])]
    for unit in todo:
        if unit not in pending:
            print(f"skip    {unit['id']} (already exists)")
    if not pending:
        print("\nNothing to do: every recording already exists.")
        return

    try:
        available, live = await load_available()
    except Exception as error:
        sys.exit(f"Could not reach the Edge TTS service ({error}). Check your internet/VPN and try again.")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    done = failed = 0
    for unit in pending:
        uid = unit["id"]
        voice, note = resolve(prefs[uid], available, live)
        if note:
            print(f"note    {uid}: {note}")
        rate = args.rate or DEFAULT_RATE.get(unit["task"], "-5%")
        text = " ".join(l["text"] for l in unit["lines"])
        mp3, tmp = OUT_DIR / f"{uid}.mp3", OUT_DIR / f"{uid}.mp3.part"
        for attempt in range(3):
            try:
                data = await synth(text, voice, rate)
                if has_audio(uid):  # appeared while we were working: never overwrite
                    print(f"skip    {uid} (file appeared meanwhile, left untouched)")
                    break
                tmp.write_bytes(data)
                tmp.replace(mp3)
                print(f"done    {uid}  ({short(voice)}, {rate})  -> {mp3.name}")
                done += 1
                break
            except Exception as error:
                if tmp.exists():
                    tmp.unlink()
                wait = 3 * (attempt + 1)
                print(f"retry   {uid}: {error}  (waiting {wait}s)")
                time.sleep(wait)
        else:
            print(f"FAILED  {uid}")
            failed += 1
        time.sleep(args.pause)

    print(f"\nFinished: {done} created, {failed} failed. Existing files were not touched.")
    if failed:
        print("Run the same command again; it only redoes what is still missing.")


def main():
    ap = argparse.ArgumentParser(description="Generate missing TOEFL Speaking model audio with Edge TTS.")
    ap.add_argument("--only", default="", help="only ids that start with this text, e.g. sp-repeat- or sp-interview-i1 or sp-repeat-g1-01")
    ap.add_argument("--rate", default="", help="override speed for everything, e.g. -10%%, +0%%")
    ap.add_argument("--pause", type=float, default=0.5, help="seconds between files (default 0.5)")
    ap.add_argument("--dry-run", action="store_true", help="show voices and what is missing; no network")
    args = ap.parse_args()
    if not args.dry_run:
        try:
            import edge_tts  # noqa: F401
        except ImportError:
            sys.exit("Run: pip install -U edge-tts")
    asyncio.run(main_async(args))


if __name__ == "__main__":
    main()
