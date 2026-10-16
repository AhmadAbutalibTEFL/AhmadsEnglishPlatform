# Ahmad's English Platform

A growing, browser-based learning platform for English language learning and test preparation. The project brings interactive lessons, practice activities, and listening materials into one place.

**Live website:** https://ahmadabutalibtefl.github.io/AhmadsEnglishPlatform/  
**Source code:** https://github.com/AhmadAbutalibTEFL/AhmadsEnglishPlatform

> **Project status:** Active development. The platform contains working learning activities, and its content and features are being expanded incrementally. This README describes the current project rather than promising planned features.

## Learning areas

The current site includes learning activities and resources for:

- **Parts of Speech** — an interactive grammar activity.
- **EST preparation** — including an activity for Session 2.
- **TOEFL preparation** — Reading, Writing, Speaking, and Listening sections.

The scope and completeness of each section may differ while the platform is being developed.

## Current learning experience

Depending on the activity, learners may be able to:

- Read lesson explanations and strategies.
- Complete interactive practice questions.
- Receive immediate answer feedback.
- View results or progress within an activity.
- Retry an activity or return to the main navigation.
- Play listening audio where audio is provided.

## Technology

The website is a static site built with browser technologies:

- HTML
- CSS
- JavaScript
- JSON files for structured activity content
- Audio files served as static assets
- GitHub Pages for hosting

The site does not currently require a custom application server or database for its core static pages. Audio-generation scripts are development tools and are not needed by a learner visiting the live website.

## Repository structure

The following are the main files and directories used by the project. Additional files may be added as the platform grows.

| File or directory | Purpose |
|---|---|
| `index.html` | Main page and course/activity entry points |
| `style.css` | Main site styling |
| `site-chrome.css` | Styling for the header, footer, About Me section, and compact course hub |
| `site-chrome.js` | Header and footer link behavior (works with `navigation.js`) |
| `script.js` | JavaScript for the original Parts of Speech activity |
| `toefl-listening.js` | Listening activity and audio-player behavior |
| `listening-audio-scripts.json` | Source scripts and metadata used for listening audio generation |
| `audio/listening/` | Generated listening audio assets |
| `make_audio.py` | Python utility for generating audio with Gemini TTS |
| `make_audio_edge.py` | Alternative Python utility for generating audio with Edge TTS |
| `assets/images/` | Site images, including the About Me portrait (see `assets/images/README.md`) |
| `ASSET_CREDITS.md` | Credits and usage terms for logos, images, fonts, and content references |
| `README.md` | Project documentation |

Other TOEFL or EST JavaScript and content files support individual activities. When adding or renaming files, update this table so it remains accurate.

## Run the site locally

The website is static, so a build step is not normally required.

1. Download or clone the repository.
2. Keep the directory structure intact, especially the audio and content files.
3. Open `index.html` in a browser to do a quick check.

For more reliable local testing, use a local HTTP server rather than opening the file directly. If Python is installed, open a terminal in the project directory and run:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Listening audio workflow (maintainers)

The audio-generation scripts are for maintainers, not website visitors. `make_audio.py` uses the Google Gen AI Python SDK and a Gemini API key to generate audio from `listening-audio-scripts.json`.

### Prerequisites

- Python installed on your computer
- A valid Gemini API key
- The Google Gen AI SDK

Install or update the SDK:

```bash
python -m pip install -U google-genai
```

### Set the API key in Windows Command Prompt

Set the key for the current Command Prompt session:

```cmd
set GEMINI_API_KEY=YOUR_API_KEY
```

Replace the placeholder locally with your own key. Do not paste the key into this README, website JavaScript, source files, screenshots, or public issues.

### Preview and generate

From the repository directory, preview the work first:

```cmd
python make_audio.py --dry-run
```

To generate a single track, use an ID that exists in `listening-audio-scripts.json`:

```cmd
python make_audio.py --only lc-p1-03
```

The ID above is an example; use the desired valid ID for your task. Check the script's current command-line help and options before using any additional flags:

```cmd
python make_audio.py --help
```

Generated audio and API quotas depend on the selected model and the limits of your Google AI Studio project. Check the current quota before running a large batch. Existing recordings should be checked before generation to avoid overwriting files you want to preserve.

An alternative Edge TTS generator is also present in the repository. Its output may sound different from Gemini-generated audio, so listen to generated tracks before deciding whether to use them in the published site.

## Deploy to GitHub Pages

The live site is hosted with GitHub Pages.

1. Make and test changes locally.
2. Review the changed files before committing.
3. Commit the intended source files and assets.
4. Push the commit to the `main` branch.
5. In the repository, open **Settings → Pages** and confirm the publishing source is the `main` branch and `/ (root)` if that is the current configuration.
6. Open the live website and test the affected page or activity.

**Important:** Static assets referenced by the site must be committed and pushed too. Uploading only HTML, CSS, and JavaScript will not publish untracked audio files.

## Security and content ownership

- Never commit API keys, passwords, private credentials, or secret `.env` files.
- A key used in a browser-based website is visible to visitors; keep provider API keys in maintainer-only environments.
- Only publish content, questions, images, and audio that you created or have permission to use.
- Record third-party visual assets and content references in `ASSET_CREDITS.md`.
- Check repository changes before publishing, especially generated assets and configuration files.

## Quality checklist before a release

- [ ] The live website opens without a 404 error.
- [ ] Course navigation and return-to-home paths work.
- [ ] Each changed activity can be completed.
- [ ] Answer feedback and results behave as expected.
- [ ] Listening activities load their required audio.
- [ ] The affected pages work on desktop and mobile.
- [ ] Browser developer tools show no new blocking errors.
- [ ] Required audio and content files are included in the commit.
- [ ] No API keys or other secrets are included.
- [ ] Documentation and links reflect the current release.

## Roadmap

The following are development priorities, not claims that the features are already complete:

- Keep documentation and project structure up to date.
- Improve and verify reliability across current learning activities.
- Standardize reusable lesson and question formats.
- Expand the learning library incrementally.
- Gather learner feedback and prioritize improvements based on actual use.

## Contributing and feedback

This is an evolving educational project. When suggesting a change, describe the affected learning area, the issue or learning need, and how the expected behavior can be tested.
