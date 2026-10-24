/* =========================================================
   IELTS LISTENING: content data (Phase 2 foundation)

   Pure data, no behaviour. ielts.js reads window.IELTS.listeningData and
   renders it, so question types, parts and (later) lessons can be added
   here without touching the screen code. Load BEFORE ielts.js.

   STATUS values: "available" | "preview" | "planned"
   Nothing below is playable. Every learning activity is "planned".

   SOURCES
   - "official": paraphrased from the IELTS partners' public test-format page (see `source`).
   - "instructor": taken from the instructor's course plan as supplied in the project brief.
   No third-party questions, recordings, transcripts or answer keys are included.
   See ielts/CONTENT_INVENTORY.md for resource status and publication permissions.

   FUTURE RESOURCES (schema, intentionally empty in this phase)
   Each entry in `resources` would look like:
     { id, type: "lesson" | "practice-set" | "full-test" | "audio" | "transcript" | "answer-key",
       title, session: 1|2|null, questionType: "<type id>"|null,
       source: "<who owns it>", verified: false, publishPermission: false, url: "" }
   A resource must only ever be shown to learners when verified AND publishPermission are both true.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    ns.listeningData = {
        version: 1,

        source: {
            label: "IELTS official: Listening test format",
            url: "https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-listening",
            checked: "24 October 2026"
        },

        // Same test for both tracks: this is stated by the official IELTS format pages.
        sameForAllTracks: true,

        facts: [
            { label: "Parts", value: "4" },
            { label: "Questions", value: "40 (10 in each part)" },
            { label: "Time", value: "About 30 minutes + 10 minutes transfer time for paper-based tests" },
            { label: "Recordings", value: "Heard once only" },
            { label: "Accents", value: "Several, e.g. British, Australian, New Zealand and North American" },
            { label: "Marking", value: "1 mark per correct answer, reported as a band score" }
        ],

        parts: [
            { id: 1, format: "Conversation", speakers: "Two speakers", context: "Everyday social situation",
              example: "For example, a conversation about travel arrangements." },
            { id: 2, format: "Monologue", speakers: "One main speaker", context: "Everyday social situation",
              example: "For example, a talk about local facilities." },
            { id: 3, format: "Conversation", speakers: "Two main speakers", context: "Educational or training situation",
              example: "For example, university students discussing a task, sometimes with a tutor." },
            { id: 4, format: "Monologue", speakers: "One speaker", context: "Academic subject",
              example: "For example, a talk or lecture on an academic topic." }
        ],

        // Groups are an organising aid for learners. The six types come from the official format page;
        // `session` is set only where the instructor's plan names the type (Session 1).
        questionGroups: [
            {
                id: "choose-match", title: "Choosing and matching",
                summary: "Pick or link answers from options you are given.",
                types: [
                    { id: "multiple-choice", title: "Multiple choice", source: "instructor+official", session: 1, status: "planned",
                      summary: "Choose the correct answer from the options. Sometimes more than one answer is needed." },
                    { id: "matching-classification", title: "Matching and classification", source: "instructor+official", session: 1, status: "planned",
                      summary: "Match items from the recording to a list of options." }
                ]
            },
            {
                id: "completion", title: "Completion",
                summary: "Fill gaps using words or numbers from the recording, within a word limit.",
                types: [
                    { id: "form-note-table-flow-chart", title: "Form, note, table and summary completion", source: "official", session: null, status: "planned",
                      summary: "Complete an outline of the main facts and ideas in the recording." },
                    { id: "sentence-completion", title: "Sentence completion", source: "official", session: null, status: "planned",
                      summary: "Complete sentences that summarise important information." }
                ]
            },
            {
                id: "labelling", title: "Labelling",
                summary: "Link what you hear to a visual.",
                types: [
                    { id: "plan-map-diagram", title: "Plan, map and diagram labelling", source: "official", session: null, status: "planned",
                      summary: "Label a plan, map, diagram or set of pictures, following descriptions and directions." }
                ]
            },
            {
                id: "short-answer", title: "Short answers",
                summary: "Write brief answers to direct questions.",
                types: [
                    { id: "short-answer", title: "Short-answer questions", source: "official", session: null, status: "planned",
                      summary: "Answer questions with a few words, such as places, prices or times." }
                ]
            }
        ],

        // Session 2 topics are based on the instructor-provided Session 1–2 audit and handouts.
        sessions: [
            { session: 1, courseBlockId: "s1" },
            { session: 2, courseBlockId: "s2", note: "Plan/map/diagram labelling; form/note/table/summary completion; sentence completion; short-answer questions; prediction (grammar form, synonyms, subject and function); paraphrasing (synonyms, word form, sentence structure, active/passive)." }
        ],

        futureFeatures: [
            "Listening lessons",
            "Question-type practice",
            "Full Listening tests",
            "Answer review and explanations",
            "Audio playback and transcripts",
            "Progress tracking"
        ],

        resources: []
    };
})();
