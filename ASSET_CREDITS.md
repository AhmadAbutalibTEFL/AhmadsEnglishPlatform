# Asset credits

This file records visual assets (logos, icons, images, fonts) used by the site, and separately lists the learning-content references and tools behind the lessons. A citation alone does not grant permission to use a work; when permission is unclear, the site uses an original treatment instead.

Last reviewed: 2026-10-16.

## Visual assets

| Asset | Source / rights holder | Licence or usage terms | Attribution required | Where used |
|---|---|---|---|---|
| Course badges (EST, TOEFL, IELTS, SAT, ELA, GE, YL, TT) | Original: plain text in a CSS badge, created for this site | Site owner's own work | No | Course hub cards (`script.js`, `site-chrome.css`) |
| Header wordmark and monogram placeholder ("AA") | Original: styled text | Site owner's own work | No | Header, footer, About Me (`site-chrome.css`) |
| Portrait `assets/images/ahmad-portrait.jpg` | Ahmad Abutalib (to be added by the owner) | Owner's own photo | No | About Me section |
| Fonts | None loaded. The site uses the visitor's system fonts (Arial/Helvetica, Georgia/Times) | Not applicable | No | Whole site |
| Emoji on inner lesson screens (TOEFL, EST) | Unicode characters drawn by the visitor's operating system; no image files are shipped | Not applicable | No | Lesson screens |

### Logos deliberately not used

The names TOEFL, IELTS, SAT, Cambridge, CELTA and TTT belong to their respective owners (for example ETS, the IELTS partners, College Board, Cambridge University Press & Assessment). Permission to use their official logos has not been established, so the site shows only plain-text names and original badges, with no official logos, and does not imply endorsement.

### Design inspiration

The layout of the header, footer and About section was informed by the general structure of mainstream reference websites (including the Cambridge Dictionary). No branding, colours, code, images or text were copied.

## Learning-content references

These are references used by lessons, not visual assets. Items marked "to confirm" need the maintainer to verify reuse rights.

| Reference | Used for | Status |
|---|---|---|
| Erica Meltzer, grammar and reading references (page numbers shown on the EST Session 2 screen) | Source citation for EST Session 2 topics | To confirm: make sure any text or exercises are original or used with permission |
| ETS, "About the TOEFL iBT test" (https://www.ets.org/toefl/test-takers/ibt/about/content.html?version=after-jan-2026) | External link for the official test format | Link only; no ETS content reproduced |

## Tools used to produce audio

Listening and speaking audio under `audio/` is generated with text-to-speech tools whose scripts are in this repository:

- Google Gemini text-to-speech, via `make_audio.py`
- Microsoft Edge text-to-speech, via `make_audio_edge_speaking.py`

Check each provider's current terms for publishing generated audio, and record any attribution they require here.

## Adding a new asset

Before adding a third-party logo, icon, image or font, add a row above with: name, original source URL, rights holder, licence or terms, required attribution, and where it is used. If the terms are unclear, use an original design instead.
