#!/usr/bin/env python3
"""Make the audio for the IELTS exam-style Listening parts and the Speaking examiner
questions and model answers, with Microsoft Edge TTS (free, needs internet).

    python -m pip install edge-tts
    node export_exam_scripts.js          # writes ielts/exam-audio-scripts.json
    python make_ielts_exam_audio.py      # writes MP3 files into audio/
    python make_ielts_exam_audio.py --only lx-a1

Each unit: {id, dir, lines: [[voice, text, pauseAfterSeconds?], ...]}.
Voices are synthetic practice voices, not official IELTS recordings."""
import argparse, asyncio, json, subprocess, sys, tempfile
from pathlib import Path
import edge_tts

HERE = Path(__file__).resolve().parent
SRC = HERE / "ielts" / "exam-audio-scripts.json"

async def synth(voice, text, path, rate):
    for attempt in range(4):
        try:
            await edge_tts.Communicate(text, voice, rate=rate).save(str(path))
            if path.exists() and path.stat().st_size > 500:
                return
        except Exception as e:
            print("retry", attempt, e, file=sys.stderr)
            await asyncio.sleep(1.5)
    raise RuntimeError("TTS failed: " + text[:40])

def silence(path, secs):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
                    "-t", str(secs), "-q:a", "9", str(path)], check=True)

async def build(unit, sem):
    out = HERE / unit["dir"] / (unit["id"] + ".mp3")
    out.parent.mkdir(parents=True, exist_ok=True)
    rate = unit.get("rate", "-4%")
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        parts = []
        async def one(i, line):
            p = tmp / f"{i:03d}.mp3"
            async with sem:
                await synth(line[0], line[1], p, rate)
            return p
        files = await asyncio.gather(*[one(i, l) for i, l in enumerate(unit["lines"])])
        lead = tmp / "lead.mp3"; silence(lead, 0.7)
        concat = [lead]
        prev = None
        for i, (f, l) in enumerate(zip(files, unit["lines"])):
            pause = l[2] if len(l) > 2 else (0.35 if prev == l[0] else 0.65)
            if i:
                s = tmp / f"s{i:03d}.mp3"; silence(s, pause); concat.append(s)
            concat.append(f); prev = l[0]
        lst = tmp / "list.txt"
        lst.write_text("".join(f"file '{p}'\n" for p in concat))
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(lst),
                        "-ar", "24000", "-ac", "1", "-b:a", "48k", str(out)], check=True)
    print("made", out.relative_to(HERE), round(out.stat().st_size / 1024), "KB")

async def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--only", default=""); ap.add_argument("--skip-existing", action="store_true")
    a = ap.parse_args()
    units = json.loads(SRC.read_text())
    if a.only: units = [u for u in units if u["id"].startswith(a.only)]
    if a.skip_existing: units = [u for u in units if not (HERE / u["dir"] / (u["id"] + ".mp3")).exists()]
    sem = asyncio.Semaphore(10)
    for i in range(0, len(units), 12):
        await asyncio.gather(*[build(u, sem) for u in units[i:i + 12]])

asyncio.run(main())
