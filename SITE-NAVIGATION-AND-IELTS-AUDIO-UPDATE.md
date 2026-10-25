# Site navigation and IELTS audio update

## What's changed
- Added a persistent course sidebar across the single-page site.
- Desktop uses a fixed left sidebar and a wider content area; mobile uses a collapsible menu.
- Sidebar links use the existing navigation functions for Home, IELTS, TOEFL, and EST. Planned course links lead to the course hub.
- Updated the IELTS Edge TTS voice plan to rotate through British, American, Australian, Irish, and Canadian English voices, with different voices for speakers within each recording.
- The IELTS lessons already map the 14 original practice recordings to the relevant question-type lessons. The audio player, answer checking, feedback, retry, and transcript reveal are implemented in `ielts/ielts.js` and `ielts/audio-practice.js`.

## Regenerating the MP3s with more varied voices
The existing MP3 files will not change merely by replacing the Python generator. To regenerate all 14 using the new voice plan, open Command Prompt in the project folder and run:

```bat
set "PATH=C:\Users\Ahmad\Downloads\Claude\ffmpeg-n9.0-latest-win64-gpl-9.0\bin;%PATH%"
python make_ielts_audio_edge.py --dry-run
python make_ielts_audio_edge.py --force
```

This requires `edge-tts` installed (`python -m pip install edge-tts`) and an internet connection to Microsoft's Edge TTS service. The `--force` option overwrites the existing MP3s. Listen to a sample from each accent before committing all regenerated files. Voice availability can vary by service.

## Before publishing
1. Open `index.html` locally and test desktop and mobile navigation.
2. Test Home, IELTS, TOEFL, and EST from the sidebar, including browser Back/Forward.
3. Open each of the eight IELTS Listening strategy lessons and check that the expected audio practice appears.
4. For each audio item, check play, answer selection, answer feedback, retry, and transcript reveal.
5. Commit the changed files and MP3s to GitHub. No live repository was modified by this update.

The recordings and questions are original practice materials, not official IELTS recordings or official IELTS test questions.
