IELTS Listening audio integration (IELTS-only overlay)

Included files:
- index.html: loads audio practice data and updates IELTS CSS/JS cache versions.
- ielts/ielts.js: audio players, answer checking, feedback, retry, and transcript reveal inside relevant Listening lessons.
- ielts/ielts.css: responsive audio practice styling.
- ielts/audio-practice.js: 14 original scripts, questions, answer keys, explanations, transcripts and lesson mapping.

Install into your existing project:
1. Back up/commit the current project first.
2. Extract this ZIP into the project root and replace the included files.
3. Confirm the 14 MP3s are in audio/ielts-listening/ with filenames matching the IDs (for example ielts-l1-booking.mp3).
4. Open the website locally and test IELTS > Listening. Open each lesson, play its audio, answer, check feedback, retry, and reveal the transcript.
5. Commit/push the changed files and MP3s to GitHub to publish.

Scope: IELTS source files plus the IELTS CSS/JS references in index.html only. TOEFL and EST source files are untouched. Audio scripts and questions are original practice material, not official IELTS recordings. Review each question against the generated MP3 before publishing if you edited any script before generating audio. These are short formative exercises, not a complete 40-question mock test.
