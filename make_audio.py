#!/usr/bin/env python3
"""
Bulk-generate the TOEFL Listening audio with the Gemini speech API.

Reads listening-audio-scripts.json (40 units) and writes one file per unit to
audio/listening/<id>.wav  (or .mp3 with --mp3 and ffmpeg installed).
Files that already exist are skipped, so you can stop and run it again.

Setup (once):
    pip install -U google-genai          # needs version 2.25.0 or newer
    set GEMINI_API_KEY=your-key          # Windows (cmd)
    export GEMINI_API_KEY=your-key       # macOS / Linux

Run from the repo root (the folder that contains index.html):
    python make_audio.py --dry-run       # preview voices, no API calls
    python make_audio.py --only lc-g1-01 # test ONE file first
    python make_audio.py                 # generate everything
"""
import argparse
import base64
import json
import shutil
import subprocess
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent
SCRIPTS = HERE / "listening-audio-scripts.json"
OUT_DIR = HERE / "audio" / "listening"

# Voices for named speakers in conversations (every conversation uses two different voices).
SPEAKER_VOICES = {
    "Maya": "Kore", "Mr. Evans": "Charon",
    "Lena": "Kore", "Omar": "Orus",
    "Sam": "Puck", "Ms. Torres": "Aoede",
    "Nora": "Leda", "Mr. Park": "Orus",
    "Kai": "Puck", "Professor Adams": "Charon",
}
FALLBACK_PAIR = ["Kore", "Charon"]

# Single-speaker units rotate through these voices, by prefix.
SINGLE_VOICES = {
    "lc": ["Achird", "Kore", "Puck", "Sulafat", "Zephyr", "Orus", "Leda", "Charon"],  # choose a response
    "la": ["Sulafat", "Achird", "Vindemiatrix"],                                    # announcements
    "lt": ["Charon", "Gacrux", "Sadaltager"],                                       # academic talks
}


def prefix(unit_id):
    return unit_id.split("-")[0]


def speakers_of(unit):
    seen = []
    for line in unit["lines"]:
        if line["sp"] not in seen:
            seen.append(line["sp"])
    return seen


def assign_voices(units):
    """Return {unit_id: {speaker: voice}} with stable, varied voices."""
    counters = {}
    plan = {}
    for unit in units:
        names = speakers_of(unit)
        if len(names) > 1:
            voices = {}
            for i, name in enumerate(names):
                voices[name] = SPEAKER_VOICES.get(name, FALLBACK_PAIR[i % 2])
            if len(set(voices.values())) < len(names):  # never let two speakers share a voice
                voices = {name: FALLBACK_PAIR[i % 2] for i, name in enumerate(names)}
            plan[unit["id"]] = voices
        else:
            pool = SINGLE_VOICES.get(prefix(unit["id"]), ["Kore"])
            n = counters.get(prefix(unit["id"]), 0)
            counters[prefix(unit["id"])] = n + 1
            plan[unit["id"]] = {names[0]: pool[n % len(pool)]}
    return plan


def synthesize(client, model, unit, voices, use_style):
    names = speakers_of(unit)
    multi = len(names) > 1
    content = []
    for line in unit["lines"]:
        note = {"type": "speech_metadata"}
        if multi:
            note["speaker"] = line["sp"]
        if use_style and line.get("cue"):
            note["style"] = line["cue"]
        content.append({"type": "text", "text": line["text"], "annotations": [note]})

    if multi:
        speech_config = {"speakers": [{"speaker": n, "voice": voices[n]} for n in names]}
    else:
        speech_config = [{"voice": voices[names[0]]}]

    interaction = client.interactions.create(
        model=model,
        input=[{"type": "user_input", "content": content}],
        response_format={"type": "audio"},          # unary request -> complete WAV file
        generation_config={"speech_config": speech_config},
    )
    return base64.b64decode(interaction.output_audio.data)


def to_mp3(wav_path):
    mp3_path = wav_path.with_suffix(".mp3")
    subprocess.run(
        ["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav_path), "-codec:a", "libmp3lame", "-q:a", "4", str(mp3_path)],
        check=True,
    )
    wav_path.unlink()
    return mp3_path


def main():
    ap = argparse.ArgumentParser(description="Generate TOEFL Listening audio with Gemini TTS.")
    ap.add_argument("--model", default="gemini-3.8-flash-tts",
                    help="gemini-3.8-flash-tts (best quality, default) or gemini-3.8-flash-lite-tts (cheaper/faster)")
    ap.add_argument("--only", default="", help="only ids that start with this text, e.g. lt- or lc-g1-01")
    ap.add_argument("--force", action="store_true", help="regenerate files that already exist")
    ap.add_argument("--no-style", action="store_true", help="ignore the [expression cues]")
    ap.add_argument("--mp3", action="store_true", help="convert to mp3 with ffmpeg (smaller files)")
    ap.add_argument("--dry-run", action="store_true", help="show the plan without calling the API")
    ap.add_argument("--pause", type=float, default=2.0, help="seconds to wait between files (default 2)")
    args = ap.parse_args()

    units = json.loads(SCRIPTS.read_text(encoding="utf-8"))
    plan = assign_voices(units)
    todo = [u for u in units if u["id"].startswith(args.only)]
    if not todo:
        sys.exit(f"No unit ids start with '{args.only}'.")

    if args.mp3 and not shutil.which("ffmpeg") and not args.dry_run:
        sys.exit("--mp3 needs ffmpeg installed and on your PATH. Run without --mp3 to keep .wav files.")

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    client = None
    if not args.dry_run:
        try:
            from google import genai
        except ImportError:
            sys.exit("Run: pip install -U google-genai   (version 2.25.0 or newer)")
        client = genai.Client()  # reads GEMINI_API_KEY from the environment

    done = skipped = failed = 0
    for unit in todo:
        uid = unit["id"]
        voices = plan[uid]
        words = sum(len(l["text"].split()) for l in unit["lines"])
        existing = [OUT_DIR / f"{uid}.wav", OUT_DIR / f"{uid}.mp3"]
        label = ", ".join(f"{s}={v}" for s, v in voices.items())

        if args.dry_run:
            print(f"{uid:12} {words:4} words  {label}")
            continue
        if not args.force and any(p.exists() for p in existing):
            print(f"skip    {uid} (already exists)")
            skipped += 1
            continue

        for attempt in range(4):
            try:
                audio = synthesize(client, args.model, unit, voices, not args.no_style)
                wav_path = OUT_DIR / f"{uid}.wav"
                wav_path.write_bytes(audio)
                final = to_mp3(wav_path) if args.mp3 else wav_path
                print(f"done    {uid}  ({label})  -> {final.name}")
                done += 1
                break
            except Exception as error:  # network, quota, or API errors
                wait = 5 * (2 ** attempt)
                print(f"retry   {uid}: {error}  (waiting {wait}s)")
                time.sleep(wait)
        else:
            print(f"FAILED  {uid}")
            failed += 1
        time.sleep(args.pause)

    if not args.dry_run:
        print(f"\nFinished: {done} created, {skipped} skipped, {failed} failed.")
        if failed:
            print("Run the same command again; it will only redo the missing files.")


if __name__ == "__main__":
    main()
