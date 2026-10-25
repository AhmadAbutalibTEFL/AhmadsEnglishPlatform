#!/usr/bin/env python3
"""Generate original IELTS Listening mini-practice audio with Microsoft Edge TTS.

No Google/Gemini API key or token quota is required. Edge TTS needs an internet
connection and uses Microsoft's online speech service. Each speaker is rendered
with a different English voice; ffmpeg is used to join the lines into one MP3.

From the repository root:
    python -m pip install edge-tts
    python make_ielts_audio_edge.py --dry-run
    python make_ielts_audio_edge.py --only ielts-l1-booking
    python make_ielts_audio_edge.py --dry-run
    python make_ielts_audio_edge.py

Output: audio/ielts-listening/<unit-id>.mp3
"""
import argparse
import asyncio
import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
SCRIPTS = HERE / "ielts" / "audio-practice-scripts.json"
OUT_DIR = HERE / "audio" / "ielts-listening"

# Deliberately varied English voices. Each unit rotates to a different accent/voice
# combination, while different speakers within one recording always receive distinct
# voices. These are synthetic practice voices, not official IELTS recordings.
VOICE_POOL = [
    "en-GB-SoniaNeural", "en-GB-RyanNeural",
    "en-US-AriaNeural", "en-US-GuyNeural",
    "en-AU-NatashaNeural", "en-AU-WilliamNeural",
    "en-IE-EmilyNeural", "en-IE-ConnorNeural",
    "en-CA-ClaraNeural", "en-CA-LiamNeural",
    "en-GB-LibbyNeural", "en-GB-ThomasNeural",
]


def get_speakers(unit):
    return list(dict.fromkeys(line["sp"] for line in unit["lines"]))


def voice_plan(unit):
    # Rotate the starting point by unit so repeated roles don't always sound alike.
    names = get_speakers(unit)
    try:
        unit_number = sum((i + 1) * ord(ch) for i, ch in enumerate(unit["id"]))
    except Exception:
        unit_number = 0
    start = unit_number % len(VOICE_POOL)
    result = {}
    for i, name in enumerate(names):
        result[name] = VOICE_POOL[(start + i * 3) % len(VOICE_POOL)]
    # Guarantee unique voices for all speakers in a single recording.
    used = set()
    for name in names:
        if result[name] in used:
            result[name] = next(v for v in VOICE_POOL if v not in used)
        used.add(result[name])
    return result


async def render_unit(edge_tts, unit, output_path, rate, force):
    if output_path.exists() and not force:
        print(f"skip    {unit['id']} (already exists)")
        return "skipped"

    voices = voice_plan(unit)
    with tempfile.TemporaryDirectory(prefix="ielts_edge_") as temp_dir:
        temp = Path(temp_dir)
        segment_paths = []
        for i, line in enumerate(unit["lines"], start=1):
            segment_path = temp / f"segment_{i:03d}.mp3"
            voice = voices[line["sp"]]
            communicate = edge_tts.Communicate(line["text"], voice, rate=rate)
            await communicate.save(str(segment_path))
            segment_paths.append(segment_path)

        # Concatenate the individual speech lines in order without re-encoding.
        concat_file = temp / "concat.txt"
        concat_file.write_text(
            "\n".join("file '" + p.as_posix().replace("'", "'\\''") + "'" for p in segment_paths) + "\n",
            encoding="utf-8",
        )
        output_path.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(
            ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(concat_file), "-c", "copy", str(output_path)],
            check=True,
        )
    print(f"done    {unit['id']} -> {output_path.relative_to(HERE)}")
    return "created"


async def main_async(args):
    edge_tts = None
    if not args.dry_run:
        try:
            import edge_tts as edge_tts_module
            edge_tts = edge_tts_module
        except ImportError:
            sys.exit("Missing dependency. Run: python -m pip install edge-tts")

    units = json.loads(SCRIPTS.read_text(encoding="utf-8"))
    selected = [u for u in units if not args.only or u["id"].startswith(args.only)]
    if not selected:
        sys.exit(f"No unit IDs start with '{args.only}'.")

    if not args.dry_run and not shutil.which("ffmpeg"):
        sys.exit("ffmpeg is required to combine the different speakers into one MP3. Install ffmpeg and add it to PATH.")

    if args.dry_run:
        for unit in selected:
            words = sum(len(line["text"].split()) for line in unit["lines"])
            voices = ", ".join(f"{name}={voice}" for name, voice in voice_plan(unit).items())
            print(f"{unit['id']:24} {words:3} words | {voices}")
        print(f"\nPreview only: {len(selected)} unit(s); no audio generated.")
        return

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    created = skipped = failed = 0
    for unit in selected:
        try:
            status = await render_unit(edge_tts, unit, OUT_DIR / f"{unit['id']}.mp3", args.rate, args.force)
            if status == "created":
                created += 1
            else:
                skipped += 1
        except Exception as exc:
            failed += 1
            print(f"FAILED  {unit['id']}: {exc}")
    print(f"\nFinished: {created} created, {skipped} skipped, {failed} failed.")
    if failed:
        print("Fix the connection/service issue and rerun; completed files will be skipped.")


def main():
    parser = argparse.ArgumentParser(description="Generate IELTS Listening MP3s using Edge TTS (no Gemini API key).")
    parser.add_argument("--only", default="", help="only IDs starting with this text, e.g. ielts-l1-booking")
    parser.add_argument("--force", action="store_true", help="overwrite MP3 files that already exist")
    parser.add_argument("--rate", default="+0%", help="speech rate, e.g. -5%%, +0%%, +5%% (default: +0%%)")
    parser.add_argument("--dry-run", action="store_true", help="preview IDs and voices without contacting Edge TTS")
    args = parser.parse_args()
    asyncio.run(main_async(args))


if __name__ == "__main__":
    main()
