# IELTS Listening Go 1 — validation report

## What was checked
- The six original mini-practice scripts parse as valid JSON.
- The Edge TTS generator passes Python bytecode compilation.
- Its dry-run completes and lists all six units and their assigned voices without making any speech-service requests.
- The website already points audio playback to `audio/ielts-listening/<unit-id>.mp3`, which matches the generator's output folder and filenames.
- The generator uses `edge-tts`, not Google Gen AI, and requires no Gemini API key.

## What is not yet verified
- MP3 generation and playback were not run in this environment because `edge-tts` is not installed and the generation service requires internet access.
- Browser playback and end-to-end learner interactions have not been independently verified.

## Requirements on the user's computer
1. Python 3.10+ (recommended).
2. `python -m pip install edge-tts`
3. FFmpeg installed and available on PATH (used to join multi-speaker dialogue lines into one MP3).
4. Internet access to Microsoft's Edge TTS service.

## First run
From the repository root:

```bash
python make_ielts_audio_edge.py --dry-run
python make_ielts_audio_edge.py --only ielts-l1-booking
```

Listen to `audio/ielts-listening/ielts-l1-booking.mp3`. If it sounds acceptable, generate all six:

```bash
python make_ielts_audio_edge.py
```

The generator skips existing files unless `--force` is used. Edge TTS avoids Gemini API/token quotas but still relies on Microsoft's online service; it is not offline. Generated speech is synthetic practice audio, not official IELTS audio.
