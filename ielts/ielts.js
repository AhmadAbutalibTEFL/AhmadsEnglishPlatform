/* =========================================================
   IELTS MODULE: Phase 1 (foundation and dashboard)

   Everything lives under window.IELTS. The only global function is
   showIELTS(view, track), which navigation.js wraps (like showESTCourse
   etc.) so the browser history and #/ielts/... routes stay in one place.

   Views:  ""  dashboard      course   Guided Course overview
           library  Practice Library      listening  Listening hub
           reading | writing | speaking   planned-skill screens

   Listening content comes from ielts/listening-data.js (window.IELTS.listeningData).
   The introductory questionnaire scores answers locally; no audio or progress tracking is included yet.
   Load listening-data.js and then this file BEFORE navigation.js.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    var STORAGE_KEY = "ahmads-english.ielts.v1.track";

    var TRACKS = {
        academic: "Academic",
        general: "General Training"
    };
    var DEFAULT_TRACK = "academic";

    /* ---------- content (data-driven: extend these arrays later) ---------- */

    var SKILLS = [
        {
            id: "listening", icon: "🎧", title: "Listening",
            summary: "Follow spoken English and answer a range of question types.",
            available: true,
            statusText: "Interactive activity available",
            statusKind: "open"
        },
        { id: "reading", icon: "📖", title: "Reading",
          summary: "Build strategies for the IELTS Reading passages and question types.",
          available: true, statusText: "Interactive module available", statusKind: "open" },
        { id: "writing", icon: "✍️", title: "Writing",
          summary: "Prepare for Writing Task 1 and Writing Task 2.",
          available: true, statusText: "Interactive module available", statusKind: "open" },
        { id: "speaking", icon: "🎙️", title: "Speaking",
          summary: "Prepare for Speaking Parts 1 to 3.",
          available: true, statusText: "Interactive module available", statusKind: "open" }
    ];

    // Based on the instructor's eight-session intensive course.
    // status: "planned" until real lessons and activities exist for that block.
    var COURSE = [
        { id: "s1", label: "Session 1", skill: "Listening", title: "Listening introduction",
          topics: ["Introduction to IELTS Listening", "Multiple choice", "Matching and classification"], status: "available", hub: "listening" },
        { id: "s2", label: "Session 2", skill: "Listening", title: "Listening question types and sub-skills",
          topics: ["Plan, map and diagram labelling", "Form, note, table and summary completion", "Sentence completion", "Short-answer questions", "Prediction: grammar form, synonyms, subject and function", "Paraphrasing: synonyms, word form, sentence structure, active/passive"], status: "available", hub: "listening" },
        { id: "s3-4", label: "Sessions 3\u20134", skill: "Reading", title: "Reading",
          topics: ["Skimming and scanning", "All 11 question types: matching (headings, information, features, sentence endings), completion (sentence, summary and flow chart, diagram labels), True / False / Not Given, Yes / No / Not Given, multiple choice, short answer", "Academic and General Training practice sets"], status: "available", hub: "reading" },
        { id: "s5-6", label: "Sessions 5\u20136", skill: "Writing", title: "Writing Task 1 and Task 2",
          topics: ["Academic Task 1: line graph, bar chart, pie chart, table, process, map", "General Training Task 1: formal, semi-formal and informal letters", "Task 2: opinion, discussion, advantages and disadvantages, problem and solution, direct questions", "Coherence and cohesion", "Practice tasks with model answers"], status: "available", hub: "writing" },
        { id: "s7-8", label: "Sessions 7\u20138", skill: "Speaking", title: "Speaking Parts 1\u20133",
          topics: ["Part 1 interview", "Part 2 long turn", "Part 3 discussion", "Practice with sample answers"], status: "available", hub: "speaking" }
    ];
    var COURSE_MOCKS = { title: "Two full mock exams", note: "Part of the overall course plan.", status: "planned" };

    var LISTENING_QUIZ = [
        { id: 1, type: "single", prompt: "How long is the Listening section of the IELTS test?", options: ["30 minutes", "40 minutes", "50 minutes", "15 minutes"], answer: "1", explanation: "For paper-based tests, allow about 30 minutes for Listening plus 10 minutes to transfer answers." },
        { id: 2, type: "single", prompt: "How much time is allotted for transferring answers onto the answer sheet in the Listening section?", options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"], answer: "1" },
        { id: 3, type: "single", prompt: "In the computer-based IELTS, how much time is given for checking answers in the Listening section?", options: ["1 minute", "2 minutes", "3 minutes", "5 minutes"], answer: "1" },
        { id: 4, type: "single", prompt: "How many parts are there in the Listening section of the IELTS test?", options: ["2", "3", "4", "5"], answer: "2" },
        { id: 5, type: "single", prompt: "How many questions are there in each part of the Listening section?", options: ["5", "10", "15", "20"], answer: "1" },
        { id: 6, type: "single", prompt: "Which part of the Listening test involves a conversation between two speakers?", options: ["Part 1", "Part 2", "Part 3", "Part 4"], answer: "0" },
        { id: 7, type: "single", prompt: "What type of genre is typically found in Section 4 of the Listening test?", options: ["Conversation between two speakers", "Talk by one speaker about an everyday social topic", "Conversation between multiple speakers", "Academic lecture on a subject"], answer: "3", note: "Wording revised to make the intended answer unambiguous." },
        { id: 8, type: "single", prompt: "In which part of the Listening test is the topic focused on educational needs and training sessions?", options: ["Part 1", "Part 2", "Part 3", "Part 4"], answer: "2" },
        { id: 9, type: "single", prompt: "What is the maximum number of words allowed for writing answers in the Listening section?", options: ["One word", "Two words", "Three words", "It changes for the next set of questions"], answer: "3" },
        { id: 10, type: "single", prompt: "How many raw score points out of 40 are required to achieve a Listening band score of 7?", options: ["16", "23", "30", "35"], answer: "2" },
        { id: 11, type: "multi", prompt: "Questions 11–12. Which TWO of the following keys to success in the IELTS Listening section should you eliminate as irrelevant?", options: ["Practice", "Memorization", "Synonyms", "Identify Question Type", "Follow Answer Strategy", "Vocabulary", "Handwriting practice"], answer: ["1", "6"] }
    ];



    /* Instructor-aligned Listening teaching lessons. Mini-practices below are original
       illustrative text-based exercises, not publisher test items or audio simulations. */
    var LISTENING_LESSONS = [
      {id:"mcq",session:1,title:"Multiple Choice",type:"Question type",purpose:"Choose one answer or the required number of options. The recording may mention several options, so match meaning—not just repeated words.",before:["Read the task instruction first and mark how many answers are required.","Read the question and options; underline the key idea in each.","Predict synonyms and the kind of information that would prove each option."],during:["Follow the recording in question order.","Keep listening after a possible answer: speakers may correct themselves or reject an earlier idea.","Notice contrast and correction signals such as but, however, actually, although and instead."],after:["Check that you selected the required number of options.","Ask what evidence supports the choice and why the distractors are wrong."],dos:["Paraphrase options in your own words before listening.","Keep a tentative mark until the speaker finishes the idea."],donts:["Don't choose an option only because you hear the same word.","Don't stop listening after the first matching phrase."],example:"We first considered the 9 a.m. tour, but it was fully booked. The 11 a.m. tour still has places, so let's take that one.",question:"Which tour do they decide to take?",options:["The 9 a.m. tour","The 11 a.m. tour","They decide not to go"],answer:1,feedback:"The speaker rejects 9 a.m. because it is fully booked, then chooses 11 a.m. The first time mentioned is a distractor."},
      {id:"matching",session:1,title:"Matching and Classification",type:"Question type",purpose:"Match people, items or statements in the task to options. You must track which speaker or item each detail belongs to and recognise paraphrases.",before:["Read every option and identify the difference between them.","Predict how each option could be paraphrased.","Check whether options can be used once, more than once, or not at all."],during:["Follow the items in the order they appear in the recording, as the handout advises.","Listen for who said what, their opinion, and any change of view.","Mark an option used only if the instructions say it cannot be reused."],after:["Check that every question has a match and each match fits the correct person/item.","Review the words that signalled the match, not just a shared keyword."],dos:["Track speakers and their attitudes.","Use elimination carefully when an option is confirmed."],donts:["Don't assume a repeated word guarantees a match.","Don't cross out an option unless the instructions make it single-use."],example:"Mina: The online course is flexible, but I learn better when I can ask questions in person. Omar: I prefer online study because I can fit it around work.",question:"Who prefers online study because of work commitments?",options:["Mina","Omar","Both speakers"],answer:1,feedback:"Omar explicitly says he can fit online study around work. Mina values asking questions in person."},
      {id:"map",session:2,title:"Plan, Map and Diagram Labelling",type:"Question type",purpose:"Connect spoken directions or descriptions to a visual. The task may ask you to select a label from a list or write a word you hear.",before:["Read the title and instructions; inspect the whole visual.","Locate the entrance, compass points, corridors, landmarks and labels already supplied.","Trace the numbered route and predict likely direction language."],during:["Listen for signposting: first, next, opposite, beyond, on your left, at the far end.","Keep your position on the map as the speaker moves through the space.","Watch for corrections: a place may have moved or a first suggestion may be rejected."],after:["Check that each answer belongs in the numbered location.","Follow the word limit and copy labels accurately."],dos:["Use fixed landmarks to orient yourself.","Listen for relationships between places, not isolated nouns."],donts:["Don't guess from the picture alone.","Don't confuse left/right from the speaker's viewpoint with your own imagined viewpoint."],example:"Enter through the main door. The reception desk is straight ahead; the café is to its left. The library is beyond reception, at the end of the corridor.",question:"Which place is at the end of the corridor?",options:["The café","The library","The reception desk"],answer:1,feedback:"The speaker explicitly places the library at the end of the corridor. Reception is straight ahead and the café is to its left."},
      {id:"completion",session:2,title:"Form, Note, Table and Summary Completion",type:"Question type",purpose:"Fill gaps in an outline of facts or main ideas. Forms often capture details; notes and summaries condense information; tables organise categories; flow charts show stages.",before:["Read the word limit and the title.","Use the surrounding words to predict whether a name, number, noun, adjective or other form is needed.","Notice categories such as time, price, place, reason or stage."],during:["Listen for the idea even when the speaker uses different wording.","Wait for corrections and the completed meaning before writing.","Write the exact information needed; do not add words that are not required."],after:["Count words against the stated limit.","Check spelling, grammar, singular/plural and whether the answer fits the gap."],dos:["Predict the answer type before the audio reaches the gap.","Use headings and layout to organise your attention."],donts:["Don't exceed the word limit.","Don't write the first number or detail before the speaker corrects it."],example:"The workshop begins at 10:15. Sorry, that's the old schedule—the new start time is 10:50.",question:"What time does the workshop begin?",options:["10:15","10:50","11:15"],answer:1,feedback:"The speaker corrects the original time. The final confirmed time is 10:50."},
      {id:"sentence",session:2,title:"Sentence Completion",type:"Question type",purpose:"Complete a sentence that summarises important information from the recording. The missing words must fit both the meaning and the grammar of the sentence.",before:["Read the whole sentence, not only the gap.","Predict the grammar form and semantic category required.","Underline nearby clues and consider likely paraphrases."],during:["Listen for the idea expressed in the sentence, which may be paraphrased in the recording.","Use the words before and after the gap to locate the answer.","Listen through the end of the idea in case the speaker qualifies or corrects it."],after:["Read the completed sentence aloud mentally to check grammar and meaning.","Check spelling and the exact word limit."],dos:["Use context to predict whether a noun, verb, adjective or number is needed.","Check that the answer expresses the speaker's intended meaning."],donts:["Don't copy a nearby word that makes the sentence ungrammatical.","Don't assume the recording repeats the sentence word for word."],example:"The research team postponed the outdoor survey because of heavy rain.",question:"The outdoor survey was postponed because of ______.",options:["heavy rain","the research team","the equipment"],answer:0,feedback:"Heavy rain gives the reason and fits naturally after 'because of'."},
      {id:"short-answer",session:2,title:"Short-answer Questions",type:"Question type",purpose:"Answer direct questions with a brief fact from the recording, often a person, place, reason, number or object.",before:["Read each question and the word limit.","Identify exactly what is being asked: who, where, when, why, how many or what.","Predict the kind of answer and possible paraphrases."],during:["Listen for the specific fact that answers the question—not merely related information.","Pay attention to words before and after the answer, and to corrections."],after:["Answer only what is asked.","Check word count, spelling, number format and grammar."],dos:["Keep the answer concise and relevant.","Use the question's focus to filter details."],donts:["Don't give an explanation when only a name or number is requested.","Don't exceed the stated word limit."],example:"The visitor centre is open Tuesday to Sunday. On Mondays it is closed for maintenance.",question:"On which day is the visitor centre closed?",options:["Monday","Tuesday","Sunday"],answer:0,feedback:"The centre is closed on Mondays. Tuesday to Sunday are its opening days."},
      {id:"prediction",session:2,title:"Prediction Before Listening",type:"Sub-skill",purpose:"Use the preview time to predict what kind of information is likely to fill a gap or answer a question. Prediction narrows your attention; it does not guarantee the answer.",before:["Grammar: predict the form (noun, verb, adjective, number, etc.).","Synonyms: think of alternative expressions for key words.","Subject: identify whether you need a name, phone number, address, price or other detail.","Function: identify whether the task is asking for a label, list item, reason, instruction or example."],during:["Listen for meaning and the predicted category, while staying open to a different wording.","Adjust your prediction when the recording provides evidence."],after:["Check whether the answer fits the grammar and task purpose."],dos:["Use context clues in the words around the gap.","Make a quick prediction, then verify it from what you hear."],donts:["Don't treat a prediction as a fact.","Don't ignore an answer just because its wording differs from your prediction."],example:"Please call us on ______ to confirm your booking.",question:"What type of information is most likely required?",options:["A phone number","A person's opinion","A place description"],answer:0,feedback:"The verb 'call' and phrase 'confirm your booking' strongly suggest a phone number."},
      {id:"paraphrasing",session:2,title:"Recognising Paraphrasing",type:"Sub-skill",purpose:"The question paper and recording often express the same idea differently. Your job is to recognise meaning, not wait for identical words.",before:["Synonyms: cost → price; increasing → rising (context matters).","Word form: develop → development; grow → growth.","Sentence structure: combine ideas with a relative clause or other structure.","Active/passive: 'A tornado destroyed the house' ↔ 'The house was destroyed by a tornado'."],during:["Listen for equivalent meaning and relationships, not just matching vocabulary.","Check whether the same people, actions, time and cause are preserved."],after:["Verify that the paraphrase keeps the original meaning; synonyms are not always interchangeable."],dos:["Build synonym awareness in context.","Use grammar and surrounding meaning together."],donts:["Don't assume every similar word means exactly the same thing.","Don't match a keyword while ignoring a changed meaning or contrast."],example:"Question wording: The cost of transport increased. Recording wording: Travel became more expensive.",question:"Which paraphrase keeps the same meaning?",options:["Travel became cheaper.","Travel became more expensive.","Travel was cancelled."],answer:1,feedback:"'Cost increased' and 'became more expensive' express the same change."}
    ];


    /* Listening visuals: the map lesson needs real plans, and the completion lesson a form. */
    var PLAN_LIBRARY = { kind: "scene", title: "Plan of a small library", alt: "Plan of a library. The entrance is at the bottom. Straight ahead in the entrance hall is a reception desk marked B, with a caf\u00e9 marked A to its left. A corridor leads up to a large room marked C at the far end. Rooms D and E are beside the corridor.",
        panels: [{ h: 262, items: [
            { t: "rect", x: 120, y: 178, w: 120, h: 62, fill: "#f3f4f6", stroke: "#d1d5db", label: "", rx: 4 },
            { t: "text", x: 180, y: 232, s: "ENTRANCE", size: 10, anchor: "middle", weight: "bold" },
            { t: "rect", x: 150, y: 190, w: 60, h: 20, fill: "#fde68a", stroke: "#f59e0b", label: "B", size: 13 },
            { t: "rect", x: 24, y: 180, w: 88, h: 58, fill: "#fce7f3", stroke: "#f9a8d4", label: "A", size: 15 },
            { t: "road", x1: 180, y1: 176, x2: 180, y2: 76, w: 40, color: "#e5e7eb" },
            { t: "rect", x: 130, y: 32, w: 100, h: 44, fill: "#dbeafe", stroke: "#60a5fa", label: "C", size: 15 },
            { t: "rect", x: 206, y: 100, w: 70, h: 44, fill: "#dcfce7", stroke: "#86efac", label: "D", size: 15 },
            { t: "rect", x: 84, y: 100, w: 70, h: 44, fill: "#ede9fe", stroke: "#c4b5fd", label: "E", size: 15 }
        ] }] };
    var PLAN_LEISURE = { kind: "scene", title: "Plan of a leisure centre", alt: "Plan of a leisure centre. The main doors are at the bottom of a corridor. On the right near the doors is room A. On the left, opposite it, is room B. Room C is at the far end. Rooms D and E are further up the corridor.",
        panels: [{ h: 262, items: [
            { t: "road", x1: 180, y1: 236, x2: 180, y2: 70, w: 40, color: "#e5e7eb" },
            { t: "text", x: 180, y: 252, s: "MAIN DOORS", size: 10, anchor: "middle", weight: "bold" },
            { t: "rect", x: 204, y: 160, w: 90, h: 60, fill: "#fde68a", stroke: "#f59e0b", label: "A", size: 15 },
            { t: "rect", x: 66, y: 160, w: 90, h: 60, fill: "#fce7f3", stroke: "#f9a8d4", label: "B", size: 15 },
            { t: "rect", x: 204, y: 98, w: 90, h: 54, fill: "#dcfce7", stroke: "#86efac", label: "D", size: 15 },
            { t: "rect", x: 66, y: 98, w: 90, h: 54, fill: "#ede9fe", stroke: "#c4b5fd", label: "E", size: 15 },
            { t: "rect", x: 86, y: 28, w: 188, h: 62, fill: "#dbeafe", stroke: "#60a5fa", label: "C", size: 15 }
        ] }] };
    LISTENING_LESSONS.forEach(function (L) {
        if (L.id === "map") {
            L.visual = PLAN_LIBRARY;
            L.example = "Enter through the main door. The reception desk is straight ahead; the caf\u00e9 is to its left. The library is beyond reception, at the end of the corridor. On the plan: reception is B, the caf\u00e9 is A, and the library is C.";
            L.practice = "A guide says: 'Go through the main doors. The gym is the first room on your right. Opposite it, on the left, are the changing rooms. The pool is at the far end of the corridor.' Keep your position as you read.";
            L.practiceVisual = PLAN_LEISURE;
            L.question = "Look at the plan above. Which letter shows the changing rooms?";
            L.options = ["Room A", "Room B", "Room C"]; L.answer = 1;
            L.feedback = "Walking in, 'the first room on your right' is A (the gym). 'Opposite it, on the left' is B, the changing rooms. The pool at the far end is C.";
        }
        if (L.id === "completion") {
            L.visual = { kind: "scene", title: "Workshop booking form", alt: "A form with lines: Event: science workshop. Day: Thursday. Start time: blank. Bring: notebook.", panels: [{ h: 130, compass: false, items: [
                { t: "rect", x: 30, y: 36, w: 300, h: 84, fill: "#ffffff", stroke: "#9ca3af", rx: 6 },
                { t: "text", x: 44, y: 58, s: "Event:  science workshop", size: 13, fill: "#1f2937" },
                { t: "text", x: 44, y: 78, s: "Day:  Thursday", size: 13, fill: "#1f2937" },
                { t: "text", x: 44, y: 98, s: "Start time:  ____________", size: 13, fill: "#1f2937" },
                { t: "text", x: 44, y: 116, s: "Bring:  notebook", size: 13, fill: "#1f2937" }
            ] }] };
        }
    });

    var VIEWS = { "": 1, course: 1, library: 1, listening: 1, reading: 1, writing: 1, speaking: 1 };

    /* ---------- state ---------- */

    var state = { view: "", track: loadTrack(), quiz: false, quizSubmitted: false, answers: {}, lessonId: null, lessonSkill: "listening", lessonChecked: false, lessonAnswer: null, practiceId: null, practiceAnswers: {}, practiceSubmitted: false, taskId: null, checks: {}, mockStep: 0 };
    var root = null;

    function validTrack(t) { return typeof t === "string" && Object.prototype.hasOwnProperty.call(TRACKS, t); }

    function loadTrack() {
        try {
            var v = window.localStorage.getItem(STORAGE_KEY);
            if (validTrack(v)) return v;
        } catch (e) { /* storage blocked or unavailable */ }
        return DEFAULT_TRACK;
    }

    function saveTrack(t) {
        try { window.localStorage.setItem(STORAGE_KEY, t); } catch (e) { /* ignore */ }
    }

    function skillById(id) {
        for (var i = 0; i < SKILLS.length; i++) if (SKILLS[i].id === id) return SKILLS[i];
        return null;
    }

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
        });
    }

    function trackLabel() { return TRACKS[state.track]; }

    /* ---------- rendering ---------- */

    function header(label, title, intro) {
        return '<div class="course-header">' +
            '<p class="course-label">' + esc(label) + '</p>' +
            '<h2 id="ielts-heading" tabindex="-1">' + esc(title) + '</h2>' +
            (intro ? '<p>' + esc(intro) + '</p>' : '') +
            '</div>';
    }

    function status(text, kind) {
        return '<span class="ielts-status ielts-status-' + kind + '">' + esc(text) + '</span>';
    }

    function goButton(label, view, cls) {
        return '<button type="button" class="' + cls + '" data-ielts-view="' + esc(view) + '">' + esc(label) + '</button>';
    }

    /* Collapsible block: closed by default, tap the title to open or close.
       Uses native details/summary so keyboard and screen readers work with no extra JS. */
    function disclosure(title, bodyHtml) {
        return '<details class="site-disclosure"><summary>' + esc(title) + '</summary>' +
            '<div class="sd-anim"><div class="sd-clip"><div class="site-disclosure-body">' + bodyHtml + '</div></div></div></details>';
    }

    function backRow(buttons) {
        return '<div class="ielts-back-row">' + buttons + '</div>';
    }

    function trackPicker() {
        var html = '<div class="ielts-track" role="group" aria-label="IELTS test type">' +
            '<p class="ielts-track-title">Choose your test type</p><div class="ielts-track-options">';
        Object.keys(TRACKS).forEach(function (id) {
            var on = id === state.track;
            html += '<button type="button" class="ielts-track-btn' + (on ? ' ielts-track-on' : '') +
                '" data-ielts-track="' + id + '" aria-pressed="' + on + '">' + esc(TRACKS[id]) + '</button>';
        });
        html += '</div><p class="ielts-note">Your choice is saved on this device and in the page link. ' +
            'It matters most for Reading and Writing; Listening and Speaking are the same for both.</p></div>';
        return html;
    }

    function skillCard(skill, buttonLabel) {
        return '<article class="ielts-card ielts-skill-card">' +
            '<div class="ielts-skill-icon" aria-hidden="true">' + skill.icon + '</div>' +
            '<h3>' + esc(skill.title) + '</h3>' +
            status(skill.statusText, skill.statusKind) +
            '<p>' + esc(skill.summary) + '</p>' +
            goButton(buttonLabel, skill.id, skill.available ? 'start-button' : 'secondary-button') +
            '</article>';
    }

    function viewDashboard() {
        var html = header("IELTS Preparation", "IELTS Preparation",
            "Prepare for all four IELTS skills. Follow the guided course or choose what to practise yourself.");

        html += '<h3 class="ielts-heading">The exam at a glance</h3><div class="ielts-stats">' +
            '<div class="ielts-stat"><strong>~2 hours 45 min</strong><span>Listening 30 + Reading 60 + Writing 60 minutes, plus Speaking 11\u201314 minutes</span></div>' +
            '<div class="ielts-stat"><strong>4 sections</strong><span>Listening, Reading, Writing, Speaking</span></div>' +
            '<div class="ielts-stat"><strong>Band 1\u20139</strong><span>Each skill is scored 1\u20139; their average is your overall band</span></div>' +
            '</div>' +
            '<div class="ielts-paths">' +
            '<article class="ielts-card"><p class="ielts-session-label">Academic</p><p>For university admission and professional registration. Reading uses academic texts, and Writing Task 1 is a report on a chart, table or diagram.</p></article>' +
            '<article class="ielts-card"><p class="ielts-session-label">General Training</p><p>For work and immigration. Reading uses everyday and workplace texts, and Writing Task 1 is a letter. Listening and Speaking are identical for both.</p></article>' +
            '</div>' +
            '<p class="ielts-note ielts-source">Format facts summarised in our own words from the official <a class="ielts-link" href="https://ielts.org/take-a-test/test-types" target="_blank" rel="noopener noreferrer">IELTS test format pages \u2197</a> (checked 15 November 2026). The Speaking test is a live interview and may be scheduled on a different day.</p>';

        html += '<h3 class="ielts-heading">How would you like to learn?</h3><div class="ielts-paths">' +
            '<article class="ielts-card ielts-path"><h3>Guided Course</h3>' +
            '<p>A structured pathway based on the eight-session intensive IELTS course.</p>' +
            goButton("Open Guided Course \u2192", "course", "start-button") + '</article>' +
            '<article class="ielts-card ielts-path"><h3>Practice Library</h3>' +
            '<p>Pick a skill or question type and practise independently.</p>' +
            goButton("Open Practice Library \u2192", "library", "start-button") + '</article></div>';

        html += '<h3 class="ielts-heading">The four skills</h3><div class="ielts-grid">';
        SKILLS.forEach(function (s) {
            html += skillCard(s, s.available ? "Open " + s.title + " hub \u2192" : "View " + s.title + " status");
        });
        html += '</div>';

        html += '<h3 class="ielts-heading">Mock tests</h3><div class="ielts-card ielts-mock">' +
            status("Planned \u00b7 not available yet", "planned") +
            '<p>Full IELTS mock tests are planned. They are not available yet.</p></div>';

        html += nextStepCard();
        html += '<h3 class="ielts-heading">Your progress</h3>' + progressCard();

        html += backRow('<button type="button" class="secondary-button" data-ielts-courses>\u2190 Back to Courses</button>');
        return html;
    }

    function viewCourse() {
        var html = header("IELTS \u00b7 GUIDED COURSE \u00b7 " + trackLabel().toUpperCase(), "Guided Course",
            "An overview of the eight-session intensive IELTS course.");
        html += '<div class="ielts-banner">Lessons and practice are now available for all eight sessions — Listening, Reading, Writing and Speaking. Full mock tests are still planned.</div>';
        html += '<ol class="ielts-course-list">';
        COURSE.forEach(function (b) {
            html += '<li class="ielts-card ielts-session"><div class="ielts-session-head">' +
                '<div><p class="ielts-session-label">' + esc(b.label) + ' \u00b7 ' + esc(b.skill) + '</p>' +
                '<h3>' + esc(b.title) + '</h3></div>' + status(b.status === "available" ? "Lessons available" : "Planned", b.status === "available" ? "open" : "planned") + '</div>';
            var topicsHtml = '<ul>';
            b.topics.forEach(function (t) { topicsHtml += '<li>' + esc(t) + '</li>'; });
            topicsHtml += '</ul>';
            html += disclosure('Session topics (' + b.topics.length + ')', topicsHtml);
            if (b.hub) html += '<div class="ielts-session-actions">' + goButton("Open " + b.skill + " hub \u2192", b.hub, "secondary-button") + '</div>';
            html += '</li>';
        });
        html += '<li class="ielts-card ielts-session"><div class="ielts-session-head"><div>' +
            '<p class="ielts-session-label">Course plan</p><h3>' + esc(COURSE_MOCKS.title) + '</h3></div>' +
            status("Planned", "planned") + '</div><p class="ielts-note">' + esc(COURSE_MOCKS.note) + '</p></li></ol>';
        html += backRow(goButton("\u2190 IELTS dashboard", "", "secondary-button") +
            goButton("Practice Library", "library", "secondary-button"));
        return html;
    }

    function viewLibrary() {
        var html = header("IELTS \u00b7 PRACTICE LIBRARY \u00b7 " + trackLabel().toUpperCase(), "Practice Library",
            "Choose a skill and practise on your own. Question types will appear under each skill as they are added.");
        html += '<div class="ielts-grid">';
        SKILLS.forEach(function (s) {
            var types = '';
            var qts = s.id === "listening" ? listeningTypes() : [];
            if (qts.length) {
                var listHtml = '<ul class="ielts-type-list">' + qts.map(function (q) {
                    return '<li>' + esc(q.title) + '</li>';
                }).join("") + '</ul>';
                types = disclosure('Question types (' + qts.length + ')', listHtml);
            }
            html += '<article class="ielts-card ielts-skill-card"><div class="ielts-skill-icon" aria-hidden="true">' + s.icon + '</div>' +
                '<h3>' + esc(s.title) + '</h3>' + status(s.statusText, s.statusKind) +
                '<p>' + esc(s.summary) + '</p>' + types +
                goButton(s.available ? "Open " + s.title + " hub \u2192" : "View " + s.title + " status", s.id,
                    s.available ? "start-button" : "secondary-button") + '</article>';
        });
        html += '</div>';
        html += backRow(goButton("\u2190 IELTS dashboard", "", "secondary-button"));
        return html;
    }

    function listeningTypes() {
        var out = [];
        ((ns.listeningData || {}).questionGroups || []).forEach(function (g) { out = out.concat(g.types); });
        return out;
    }

    function statusName(k) { return { available: "Available", preview: "Preview", planned: "Planned" }[k] || "Planned"; }

    function viewListening() {
        var D = ns.listeningData;
        var html = header("IELTS \u00b7 LISTENING \u00b7 " + trackLabel().toUpperCase(), "Listening",
            "Two complete practice tests, four parts each, with real recordings and 10 questions per part - just like the exam.");
        if (!D) {
            return html + '<div class="ielts-banner">Listening information could not be loaded.</div>' +
                backRow(goButton("\u2190 IELTS dashboard", "", "secondary-button"));
        }
        var sets = D.practiceSets || [];
        var done = sets.filter(function (s) { return ns.progress && ns.progress.best('listening-set:' + s.id) !== null; }).length;
        html += '<div class="ielts-banner ielts-banner-preview">' + status("Learning module", "open") +
            ' ' + sets.length + ' exam-style parts. Each has a strategy, a recording, a full question set, answers with the exact words to listen for, and a transcript. <strong>' + done + ' of ' + sets.length + ' tried.</strong></div>';
        html += '<p class="ielts-note ielts-track-note">The Listening test is the same for Academic and General Training, so this page does not change with your choice.</p>';
        html += '<section class="ielts-card ielts-quiz-launch"><p class="ielts-session-label">Start here \u00b7 5 minutes</p>' +
            '<h3>Check your understanding of the test</h3>' +
            '<p>11 short questions about how the Listening test works.</p>' + bestLine("listening-quiz") +
            '<button type="button" class="start-button" data-ielts-quiz-start>Start the quick check \u2192</button></section>';
        (D.testNames || []).forEach(function (tn) {
            var parts = sets.filter(function (x) { return x.test === tn; });
            var tdone = parts.filter(function (x) { return ns.progress && ns.progress.best('listening-set:' + x.id) !== null; }).length;
            html += '<h3 class="ielts-heading">Practice Test ' + tn + ' <span class="ielts-note">(' + tdone + ' of ' + parts.length + ' parts tried)</span></h3><div class="ielts-grid">';
            parts.forEach(function (set) {
                var key = 'listening-set:' + set.id;
                var attempted = ns.progress && ns.progress.best(key) !== null;
                html += '<article class="ielts-card"><p class="ielts-session-label">Part ' + set.part + ' \u00b7 ' + esc(set.kind) + '</p>' +
                    '<h3>' + esc(set.typeName.replace(/^Part \d: /, '')) + (ns.progress && ns.progress.mastered(key) ? ' \u2713' : '') + '</h3>' +
                    '<p>' + esc(set.context) + '</p><p class="ielts-note">Questions ' + set.qNums[0].toString().split('\u2013')[0] + '\u2013' + (set.qOffset + set.totalMarks) + '</p>' + bestLine(key) +
                    '<button type="button" class="start-button" data-ielts-practice="' + esc(set.id) + '">' + (attempted ? 'Practise again \u2192' : 'Strategy and practice \u2192') + '</button></article>';
            });
            html += '</div>';
        });
        html += '<h3 class="ielts-heading">Listening at a glance</h3><dl class="ielts-facts">';
        D.facts.forEach(function (f) { html += '<div class="ielts-fact"><dt>' + esc(f.label) + '</dt><dd>' + esc(f.value) + '</dd></div>'; });
        html += '</dl>';
        var partsHtml = '<div class="ielts-grid">';
        D.parts.forEach(function (p) {
            partsHtml += '<article class="ielts-card ielts-part"><p class="ielts-session-label">Part ' + p.id + '</p>' +
                '<h3>' + esc(p.format) + '</h3><p><strong>' + esc(p.speakers) + '</strong> \u00b7 ' + esc(p.context) + '</p>' +
                '<p class="ielts-note">' + esc(p.example) + '</p></article>';
        });
        partsHtml += '</div><p class="ielts-note ielts-source">Source: <a class="ielts-link" href="' + esc(D.source.url) +
            '" target="_blank" rel="noopener noreferrer">' + esc(D.source.label) + ' \u2197</a> (checked ' + esc(D.source.checked) +
            '), summarised in our own words. IELTS is jointly owned by the British Council, IDP IELTS and Cambridge University Press &amp; Assessment.</p>';
        html += disclosure('The four parts of the Listening test', partsHtml);
        html += '<p class="ielts-note">Our recordings use computer voices with different accents and are shorter than the real ones, so they are good for part-by-part practice. Real recordings are about 4 to 7 minutes per part.</p>';
        html += backRow(goButton("\u2190 IELTS dashboard", "", "secondary-button") +
            goButton("Practice Library", "library", "secondary-button"));
        return html;
    }



    function viewListeningQuiz() {
        var html = header("IELTS · LISTENING · INTRODUCTION", "Check Your Understanding",
            "Intro to IELTS Listening · 12 marks");
        if (state.quizSubmitted) {
            var score = scoreQuiz();
            html += '<div class="ielts-card ielts-quiz-result"><h3>Your result</h3><p class="ielts-quiz-score">' + score + ' / 12</p>' +
                '<p>' + (score === 12 ? 'Excellent work — every mark earned.' : 'Review the feedback below, then try again to improve your score.') + '</p></div>';
        } else {
            html += '<p class="ielts-note">Choose one answer for Questions 1–10. For Questions 11–12, select exactly two options. The choose-two item is worth two marks only when both correct answers are selected and no incorrect option is selected.</p>';
        }
        html += '<form class="ielts-quiz-form" data-ielts-quiz-form>';
        LISTENING_QUIZ.forEach(function (q) {
            var chosen = state.answers[q.id];
            var correct = state.quizSubmitted && (q.type === "single" ? chosen === q.answer : Array.isArray(chosen) && chosen.length === 2 && q.answer.every(function (a) { return chosen.indexOf(a) !== -1; }));
            html += '<fieldset class="ielts-card ielts-question' + (state.quizSubmitted ? (correct ? ' ielts-answer-correct' : ' ielts-answer-incorrect') : '') + '"><legend>' +
                (q.id === 11 ? 'Questions 11–12' : 'Question ' + q.id) + '</legend><p class="ielts-question-prompt">' + esc(q.prompt) + '</p>';
            if (q.type === "multi") html += '<p class="ielts-note">Select TWO answers.</p>';
            q.options.forEach(function (option, i) {
                var val = String(i), checked = q.type === "multi" ? Array.isArray(chosen) && chosen.indexOf(val) !== -1 : chosen === val;
                var isAnswer = q.type === "multi" ? q.answer.indexOf(val) !== -1 : q.answer === val;
                html += '<label class="ielts-option"><input type="' + (q.type === "multi" ? 'checkbox' : 'radio') + '" name="q' + q.id + (q.type === "multi" ? '[]' : '') + '" value="' + val + '" data-ielts-answer="' + q.id + '"' + (checked ? ' checked' : '') + (state.quizSubmitted ? ' disabled' : '') + '> <span>' + String.fromCharCode(97 + i) + ') ' + esc(option) + '</span>' +
                    (state.quizSubmitted && isAnswer ? '<strong class="ielts-correct-label">Correct answer</strong>' : '') + '</label>';
            });
            if (state.quizSubmitted) {
                var answerText = q.type === "multi" ? q.answer.map(function (a) { return String.fromCharCode(97 + Number(a)) + ') ' + q.options[Number(a)]; }).join(' and ') : String.fromCharCode(97 + Number(q.answer)) + ') ' + q.options[Number(q.answer)];
                html += '<p class="ielts-answer-feedback"><strong>' + (correct ? 'Correct' : 'Correct answer: ' + esc(answerText)) + '</strong>' + (q.explanation ? ' — ' + esc(q.explanation) : '') + '</p>';
                if (q.note) html += '<p class="ielts-note">Editorial note: ' + esc(q.note) + '</p>';
            }
            html += '</fieldset>';
        });
        html += '</form>';
        if (!state.quizSubmitted) html += '<button type="button" class="start-button" data-ielts-quiz-submit>Submit answers</button>';
        else html += '<button type="button" class="start-button" data-ielts-quiz-retry>Try again</button>';
        html += backRow('<button type="button" class="secondary-button" data-ielts-quiz-back>← Back to Listening</button>');
        return html;
    }

    function scoreQuiz() {
        var score = 0;
        LISTENING_QUIZ.forEach(function (q) {
            var chosen = state.answers[q.id];
            if (q.type === "single" && chosen === q.answer) score += 1;
            if (q.type === "multi" && Array.isArray(chosen) && chosen.length === 2 && q.answer.every(function (a) { return chosen.indexOf(a) !== -1; })) score += 2;
        });
        return score;
    }



    /* =====================================================
       READING / WRITING / SPEAKING modules + progress UI
       (data lives in ielts/reading-data.js, writing-data.js,
       speaking-data.js; storage in ielts/progress.js)
       ===================================================== */

    var PHASE_LABELS = {
        listening: ["Before listening", "While listening", "After listening"],
        reading: ["Before you read", "While you read", "After you read"],
        writing: ["Before you write", "While you write", "After you write"],
        speaking: ["Before you speak", "While you speak", "After you speak"]
    };

    function lessonsForSkill(skillId) {
        if (skillId === "listening") return LISTENING_LESSONS;
        var D = skillId === "reading" ? ns.readingData : skillId === "writing" ? ns.writingData : skillId === "speaking" ? ns.speakingData : null;
        return (D && D.lessons) || [];
    }

    function findLessonAnywhere(id) {
        var skills = ["listening", "reading", "writing", "speaking"];
        for (var s = 0; s < skills.length; s++) {
            var list = lessonsForSkill(skills[s]);
            for (var i = 0; i < list.length; i++) if (list[i].id === id) return { lesson: list[i], skill: skills[s] };
        }
        return null;
    }

    var curSet = null;
    function allSets() { return ((ns.readingData || {}).practiceSets || []).concat((ns.listeningData || {}).practiceSets || []); }
    function findReadingSet(id) {
        var sets = allSets();
        for (var i = 0; i < sets.length; i++) if (sets[i].id === id) return sets[i];
        return null;
    }
    function setKey(set) { return (set.skill === 'listening' ? 'listening-set:' : 'reading-set:') + set.id; }
    function qn(gi) { return curSet && curSet.qNums ? curSet.qNums[gi] : gi + 1; }
    function scoreSet(set, answers) {
        var total = 0, correct = 0, missed = [];
        set.questions.forEach(function (q, i) {
            var m = q.marks || 1; total += m;
            if (isRight(q, answers[i])) correct += m; else missed.push(qn(i));
        });
        return { total: total, correct: correct, missed: missed };
    }

    function findWritingTask(id) {
        var tasks = ((ns.writingData || {}).tasks || []).concat((ns.writingData || {}).fullTests || []);
        for (var i = 0; i < tasks.length; i++) if (tasks[i].id === id) return tasks[i];
        return null;
    }

    function findSpeakingItem(id) {
        var items = (ns.speakingData || {}).practice || [];
        for (var i = 0; i < items.length; i++) if (items[i].id === id) return items[i];
        return null;
    }

    function wordCount(text) {
        var words = String(text || "").trim().split(/\s+/).filter(Boolean);
        return words.length;
    }

    function loadDraft(id) {
        try { return window.localStorage.getItem("ieltsDraft." + id) || ""; } catch (e) { return ""; }
    }

    function factsBlock(D) {
        var html = '<dl class="ielts-facts">';
        D.facts.forEach(function (f) { html += '<div class="ielts-fact"><dt>' + esc(f.label) + '</dt><dd>' + esc(f.value) + '</dd></div>'; });
        return html + '</dl>';
    }

    function sourceNote(D) {
        if (!D.source || !D.source.url) return '';
        return '<p class="ielts-note ielts-source">Source: <a class="ielts-link" href="' + esc(D.source.url) +
            '" target="_blank" rel="noopener noreferrer">' + esc(D.source.label) + ' \u2197</a> (checked ' + esc(D.source.checked) +
            '), summarised in our own words. All passages, tasks and answers here are original. IELTS is jointly owned by the British Council, IDP IELTS and Cambridge University Press &amp; Assessment.</p>';
    }

    function trackPair(D) {
        if (!D.trackDifferences) return '';
        return '<div class="ielts-paths">' +
            '<article class="ielts-card"><p class="ielts-session-label">Academic</p><p>' + esc(D.trackDifferences.academic) + '</p></article>' +
            '<article class="ielts-card"><p class="ielts-session-label">General Training</p><p>' + esc(D.trackDifferences.general) + '</p></article></div>';
    }


    function trackOk(item) {
        return !item.track || item.track === "both" || item.track === state.track;
    }

    function visibleLessons(skillId) {
        return lessonsForSkill(skillId).filter(function (l) { return trackOk(l) && !l.strategyOnly; });
    }

    /* A lesson as the student sees it: the General Training version overrides the shared fields. */
    function lessonView(L) {
        var o = {};
        Object.keys(L).forEach(function (k) { o[k] = L[k]; });
        if (state.track === "general" && L.gt) Object.keys(L.gt).forEach(function (k) { o[k] = L.gt[k]; });
        return o;
    }

    function normAnswer(v) {
        return String(v == null ? "" : v).toLowerCase().replace(/[\u2019'`]/g, "").replace(/\s+/g, " ").replace(/\.$/, "").trim();
    }

    function isRight(q, val) {
        if (val === undefined || val === null || val === "") return false;
        if (q.type === "text") {
            var v = normAnswer(val);
            if (!v) return false;
            return q.accept.some(function (a) { return normAnswer(a) === v; });
        }
        if (q.type === "multi") {
            if (!Array.isArray(val)) return false;
            var got = val.map(Number).sort().join(","), want = q.answer.slice().sort().join(",");
            return got === want;
        }
        return Number(val) === q.answer;
    }

    function visualHtml(spec) {
        return spec && ns.visuals ? ns.visuals.render(spec) : "";
    }

    function setsForTrack() {
        return ((ns.readingData || {}).practiceSets || []).filter(function (s) { return s.track === state.track; });
    }

    function tasksForTrack() {
        return ((ns.writingData || {}).tasks || []).filter(trackOk);
    }

    function typeRows(groups) {
        var html = '';
        groups.forEach(function (g) {
            html += '<article class="ielts-card ielts-type-group"><h3>' + esc(g.group || g.name) + '</h3>' +
                (g.note ? '<p class="ielts-note">' + esc(g.note) + '</p>' : (g.blurb ? '<p class="ielts-note">' + esc(g.blurb) + '</p>' : '')) +
                '<ul class="ielts-type-rows">';
            g.types.forEach(function (t) {
                html += '<li class="ielts-type-row"><div><strong>' + esc(t.name) + '</strong>' +
                    (t.note ? '<span class="ielts-type-sum">' + esc(t.note) + '</span>' : '') + '</div>' +
                    '<button type="button" class="secondary-button" data-ielts-lesson="' + esc(t.lesson) + '">Open lesson \u2192</button></li>';
            });
            html += '</ul></article>';
        });
        return html;
    }

    function lessonCard(L) {
        var checked = ns.progress && ns.progress.mastered("lesson:" + L.id);
        return '<article class="ielts-card"><p class="ielts-session-label">' + esc(L.type) + '</p>' +
            '<h3>' + esc(L.title) + (checked ? ' \u2713' : '') + '</h3>' +
            '<p>' + esc(L.purpose) + '</p>' +
            '<button type="button" class="secondary-button" data-ielts-lesson="' + esc(L.id) + '">Open lesson \u2192</button></article>';
    }

    function lessonsGrid(lessons) {
        var hasFamilies = lessons.some(function (L) { return L.family; });
        if (!hasFamilies) {
            return '<div class="ielts-grid">' + lessons.map(lessonCard).join('') + '</div>';
        }
        var order = [], groups = {};
        lessons.forEach(function (L) {
            var f = L.family || "Lessons";
            if (!groups[f]) { groups[f] = []; order.push(f); }
            groups[f].push(L);
        });
        var html = '';
        order.forEach(function (f) {
            html += '<h4 class="ielts-subheading">' + esc(f) + '</h4><div class="ielts-grid">' + groups[f].map(lessonCard).join('') + '</div>';
        });
        return html;
    }

    function criteriaCards(criteria) {
        var html = '<div class="ielts-grid">';
        criteria.forEach(function (c) {
            html += '<article class="ielts-card"><h3>' + esc(c.name) + '</h3><p>' + esc(c.plain) + '</p></article>';
        });
        return html + '</div>';
    }

    function bestLine(activityKey) {
        if (!ns.progress) return '';
        var b = ns.progress.best(activityKey);
        if (b === null) return '';
        return '<p class="ielts-note">Best score: <strong>' + b + '%</strong>' +
            (ns.progress.mastered(activityKey) ? ' \u00b7 mastered \u2713' : ' \u00b7 mastery at ' + ns.progress.masteryPct + '%') + '</p>';
    }

    /* Generic lesson page - one renderer for all four skills. */
    function viewLessonPage() {
        var found = findLessonAnywhere(state.lessonId);
        if (!found) { state.lessonId = null; return viewDashboard(); }
        var L = found.lesson, skillId = found.skill;
        var P = lessonView(L);
        state.lessonSkill = skillId;
        var skillTitle = skillById(skillId).title;
        var phases = PHASE_LABELS[skillId] || PHASE_LABELS.listening;
        var html = header('IELTS \u00b7 ' + skillTitle.toUpperCase() + ' \u00b7 ' + (L.family ? L.family.toUpperCase() : 'SESSION ' + L.session), L.title, L.purpose);
        var trackNote = (L.gt && skillId === 'reading') ? ' \u00b7 your practice uses ' + trackLabel() + ' style texts' : '';
        html += '<div class="ielts-lesson-toolbar">' + status(L.type, 'open') + '<span class="ielts-note">Original lesson and example \u00b7 tap a section to open it' + esc(trackNote) + '</span></div>';
        html += disclosure(phases[0], '<ul class="ielts-lesson-list">' + L.before.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        html += disclosure(phases[1], '<ul class="ielts-lesson-list">' + L.during.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        if (L.after.length) html += disclosure(phases[2], '<ul class="ielts-lesson-list">' + L.after.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        html += '<div class="ielts-paths">';
        html += disclosure('Do', '<ul class="ielts-lesson-list">' + L.dos.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        html += disclosure('Don\'t', '<ul class="ielts-lesson-list">' + L.donts.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        html += '</div>';
        html += '<section class="ielts-card ielts-worked-example">';
        html += '<p class="ielts-session-label">Worked example \u00b7 original</p><blockquote>' + esc(P.example) + '</blockquote>' + visualHtml(P.visual);
        html += '<h3>Your turn - apply the skill</h3>';
        if (P.practice) html += '<blockquote>' + esc(P.practice) + '</blockquote>';
        html += visualHtml(P.practiceVisual);
        html += '<p><strong>' + esc(P.question) + '</strong></p>';
        html += '<div class="ielts-practice-options">';
        P.options.forEach(function (opt, i) {
            html += '<label class="ielts-option"><input type="radio" name="ielts-lesson-answer" value="' + i + '" data-ielts-lesson-answer ' + (String(state.lessonAnswer) === String(i) ? 'checked' : '') + (state.lessonChecked ? ' disabled' : '') + '><span>' + esc(opt) + '</span></label>';
        });
        html += '</div>';
        if (!state.lessonChecked) html += '<button type="button" class="start-button" data-ielts-lesson-check ' + (state.lessonAnswer === null ? 'disabled' : '') + '>Check answer</button>';
        else html += '<p class="ielts-answer-feedback ' + (state.lessonAnswer === P.answer ? 'ielts-answer-correct' : 'ielts-answer-incorrect') + '"><strong>' + (state.lessonAnswer === P.answer ? 'Correct.' : 'Not quite.') + '</strong> ' + esc(P.feedback) + '</p><button type="button" class="secondary-button" data-ielts-lesson-retry>Try again</button>';
        html += '</section>';
        if (skillId === "listening" && ns.audioPractice && typeof ns.audioPractice.renderForLesson === "function") {
            html += ns.audioPractice.renderForLesson(L.id);
        }
        var list = visibleLessons(skillId);
        var li = list.indexOf(L);
        var nav = '';
        if (li > 0) nav += '<button type="button" class="secondary-button" data-ielts-lesson="' + esc(list[li - 1].id) + '">\u2190 Previous lesson</button>';
        nav += goButton('All ' + skillTitle + ' lessons', skillId, 'secondary-button');
        if (li > -1 && li < list.length - 1) nav += '<button type="button" class="start-button" data-ielts-lesson="' + esc(list[li + 1].id) + '">Next lesson \u2192</button>';
        html += '<div class="ielts-back-row">' + nav + '</div>';
        return html;
    }

    /* ---------- READING ---------- */

    function groupedExamTypes() {
        var D = ns.readingData, order = [], groups = {};
        (D.examOrder || []).forEach(function (t) {
            if (!groups[t.group]) { groups[t.group] = []; order.push(t.group); }
            groups[t.group].push(t);
        });
        return order.map(function (g) { return { name: g, types: groups[g] }; });
    }

    function setForType(typeId) {
        var list = setsForTrack();
        for (var i = 0; i < list.length; i++) if (list[i].type === typeId) return list[i];
        return null;
    }

    function viewReading() {
        var D = ns.readingData;
        var html = header('IELTS \u00b7 READING \u00b7 ' + trackLabel().toUpperCase(), 'Reading',
            'Learn each question type, then practise it on a full exam-style passage with a complete set of questions.');
        if (!D) {
            return html + '<div class="ielts-banner">Reading information could not be loaded.</div>' +
                backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        }
        var sets = setsForTrack();
        var done = sets.filter(function (s) { return ns.progress && ns.progress.best('reading-set:' + s.id) !== null; }).length;
        html += '<div class="ielts-banner ielts-banner-preview">' + status('Learning module', 'open') +
            ' ' + sets.length + ' question types, each with a short strategy and one full practice passage. Every set is original, marks itself, and shows the evidence for each answer. <strong>' + done + ' of ' + sets.length + ' tried.</strong></div>';
        html += trackPicker();
        html += '<article class="ielts-card ielts-track-card"><p class="ielts-session-label">' + esc(trackLabel()) + ' Reading</p><p>' + esc(D.trackDifferences[state.track]) + '</p>' +
            '<p class="ielts-note">The question types are the same in both tests. Only the texts are different, so you see ' + esc(trackLabel()) + ' texts here.</p></article>';
        html += '<h3 class="ielts-heading">Start here</h3><div class="ielts-grid">' + lessonsGrid(D.lessons.filter(function (L) { return !L.strategyOnly; })) + '</div>';
        groupedExamTypes().forEach(function (g) {
            html += '<h3 class="ielts-heading">' + esc(g.name) + '</h3><div class="ielts-grid">';
            g.types.forEach(function (t) {
                var set = setForType(t.id);
                if (!set) return;
                var key = 'reading-set:' + set.id;
                var attempted = ns.progress && ns.progress.best(key) !== null;
                html += '<article class="ielts-card"><p class="ielts-session-label">' + esc(set.intro) + '</p>' +
                    '<h3>' + esc(t.name) + (ns.progress && ns.progress.mastered(key) ? ' \u2713' : '') + '</h3><p>' + esc(t.note) + '</p>' +
                    '<p class="ielts-note"><strong>Passage:</strong> ' + esc(set.passageTitle) + '</p>' + bestLine(key) +
                    '<button type="button" class="start-button" data-ielts-practice="' + esc(set.id) + '">' + (attempted ? 'Practise again \u2192' : 'Strategy and practice \u2192') + '</button></article>';
            });
            html += '</div>';
        });
        html += '<h3 class="ielts-heading">Reading at a glance</h3>' + factsBlock(D);
        html += sourceNote(D);
        html += backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        return html;
    }

    function paraHtml(p) {
        if (typeof p === 'string') return '<p>' + esc(p) + '</p>';
        return '<p><strong class="ielts-para-label">' + esc(p.l) + '</strong> ' + esc(p.t) + '</p>';
    }

    function answerText(q, part) {
        if (q.type === 'select') {
            var c = part.choices[q.answer], item = '';
            if (part.box) part.box.items.forEach(function (it) { if (it.indexOf(c + '  ') === 0 || it.indexOf(c + ' ') === 0) item = it.replace(/^\S+\s+/, ''); });
            return c + (item ? ' (' + item.replace(/\.$/, '') + ')' : '');
        }
        if (q.type === 'text') return q.answerLabel || q.accept[0];
        if (q.type === 'multi') return q.answer.map(function (j) { return String.fromCharCode(65 + j); }).join(' and ');
        return q.options[q.answer];
    }

    function feedbackHtml(q, gi, part) {
        var ok = isRight(q, state.practiceAnswers[gi]);
        return '<p class="ielts-answer-feedback ' + (ok ? 'ielts-answer-correct' : 'ielts-answer-incorrect') + '"><strong>' + (ok ? 'Correct' : 'Not quite. Correct answer: ' + esc(answerText(q, part))) + '</strong> \u2014 ' + esc(q.explanation) + '</p>';
    }

    function controlHtml(q, gi, part) {
        var sub = state.practiceSubmitted, chosen = state.practiceAnswers[gi];
        var cls = sub ? (isRight(q, chosen) ? ' ielts-ok' : ' ielts-bad') : '';
        if (q.type === 'select') {
            var h = '<select class="ielts-gap-select' + cls + '" data-ielts-practice-answer="' + gi + '" aria-label="Your answer to question ' + qn(gi) + '"' + (sub ? ' disabled' : '') + '><option value="">Choose</option>';
            part.choices.forEach(function (c, j) { h += '<option value="' + j + '"' + (String(chosen) === String(j) ? ' selected' : '') + '>' + esc(c) + '</option>'; });
            return h + '</select>';
        }
        return '<input type="text" class="ielts-ap-text ielts-gap-text' + cls + '" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer to question ' + qn(gi) + '" data-ielts-practice-text="' + gi + '"' +
            (typeof chosen === 'string' ? ' value="' + esc(chosen) + '"' : '') + (sub ? ' disabled' : '') + '>';
    }

    function gapped(line, base, part) {
        return esc(line).replace(/\[\[(\d+)\]\]/g, function (m, k) {
            var gi = base + Number(k) - 1;
            return '<span class="ielts-gap"><b class="ielts-qnum">' + qn(gi) + '</b>' + controlHtml(part.qs[Number(k) - 1], gi, part) + '</span>';
        });
    }

    function templateHtml(part, base) {
        var h = '<div class="ielts-card ielts-template ielts-template-' + esc(part.kind || 'summary') + '">';
        if (part.kind === 'flow') {
            h += '<div class="ielts-flow">' + part.template.map(function (l, i) {
                return (i ? '<div class="ielts-flow-arrow" aria-hidden="true">\u2193</div>' : '') + '<div class="ielts-flow-step">' + gapped(l, base, part) + '</div>';
            }).join('') + '</div>';
        } else if (part.kind === 'table') {
            h += '<div class="ielts-table-wrap"><table class="ielts-table">' + part.template.map(function (l, i) {
                var cells = l.split('|').map(function (c) { return (i === 0 ? '<th>' : '<td>') + gapped(c, base, part) + (i === 0 ? '</th>' : '</td>'); }).join('');
                return '<tr>' + cells + '</tr>';
            }).join('') + '</table></div>';
        } else if (part.kind === 'notes') {
            h += part.template.map(function (l) {
                return l.charAt(0) === '#' ? '<h4 class="ielts-note-head">' + esc(l.slice(1).trim()) + '</h4>' : '<p class="ielts-note-line">\u2022 ' + gapped(l, base, part) + '</p>';
            }).join('');
        } else {
            h += part.template.map(function (l) { return '<p class="ielts-summary-text">' + gapped(l, base, part) + '</p>'; }).join('');
        }
        h += '</div>';
        if (state.practiceSubmitted) {
            h += '<div class="ielts-card ielts-answers-list"><p class="ielts-session-label">Answers</p>' + part.qs.map(function (q, k) {
                return '<div class="ielts-feedback-row"><b class="ielts-qnum">' + qn(base + k) + '</b>' + feedbackHtml(q, base + k, part) + '</div>';
            }).join('') + '</div>';
        }
        return h;
    }

    function questionRows(part, base) {
        var h = '<div class="ielts-card ielts-qgroup">';
        part.qs.forEach(function (q, k) {
            var gi = base + k, chosen = state.practiceAnswers[gi], sub = state.practiceSubmitted;
            var ok = sub && isRight(q, chosen);
            h += '<div class="ielts-qrow' + (sub ? (ok ? ' ielts-answer-correct' : ' ielts-answer-incorrect') : '') + '">';
            if (q.type === 'select' || q.type === 'text') {
                h += '<div class="ielts-qline"><b class="ielts-qnum">' + qn(gi) + '</b><span class="ielts-qtext">' + esc(q.prompt) + '</span></div><div class="ielts-qcontrol">' + controlHtml(q, gi, part) + '</div>';
            } else if (q.type === 'multi') {
                h += '<div class="ielts-qline"><b class="ielts-qnum">' + qn(gi) + '</b><span class="ielts-qtext">' + esc(q.prompt) + '</span></div>';
                var picked = Array.isArray(chosen) ? chosen.map(String) : [];
                q.options.forEach(function (opt, j) {
                    h += '<label class="ielts-option"><input type="checkbox" value="' + j + '" data-ielts-practice-multi="' + gi + '"' + (picked.indexOf(String(j)) > -1 ? ' checked' : '') + (sub ? ' disabled' : '') + '> <span><b>' + String.fromCharCode(65 + j) + '</b> ' + esc(opt) + '</span></label>';
                });
            } else {
                h += '<div class="ielts-qline"><b class="ielts-qnum">' + qn(gi) + '</b><span class="ielts-qtext">' + esc(q.prompt) + '</span></div>';
                q.options.forEach(function (opt, j) {
                    var letter = q.options.length > 3 ? '<b>' + String.fromCharCode(65 + j) + '</b> ' : '';
                    h += '<label class="ielts-option"><input type="radio" name="pq' + gi + '" value="' + j + '" data-ielts-practice-answer="' + gi + '"' + (String(chosen) === String(j) ? ' checked' : '') + (sub ? ' disabled' : '') + '> <span>' + letter + esc(opt) + '</span></label>';
                });
            }
            if (sub) h += feedbackHtml(q, gi, part);
            h += '</div>';
        });
        return h + '</div>';
    }

    function lessonBody(L) {
        function list(a) { return '<ul class="ielts-lesson-list">' + a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; }
        return '<p>' + esc(L.purpose) + '</p><h4 class="ielts-subheading">Before the recording</h4>' + list(L.before) +
            '<h4 class="ielts-subheading">While you listen</h4>' + list(L.during) +
            (L.after && L.after.length ? '<h4 class="ielts-subheading">Before you move on</h4>' + list(L.after) : '') +
            '<h4 class="ielts-subheading">Do</h4>' + list(L.dos) + '<h4 class="ielts-subheading">Do not</h4>' + list(L.donts);
    }
    function strategyHtml(set) {
        if (set.skill === 'listening') {
            var inner = '';
            (set.lessons || []).forEach(function (id) {
                var f = findLessonAnywhere(id);
                if (f) inner += disclosure(f.lesson.title, lessonBody(f.lesson));
            });
            var tips = '<ul class="ielts-lesson-list"><li>Use the reading time. Read the questions and guess what kind of word each gap needs.</li><li>The answers come in the same order as the questions.</li><li>Listen for the idea, not the exact word. Speakers often change their mind, so wait for the final answer.</li><li>Check spelling, singular or plural, and the word limit.</li></ul>';
            return '<section class="ielts-card ielts-strategy"><p class="ielts-session-label">Strategy \u00b7 read this first</p><h3>' + esc(set.typeName) + '</h3>' +
                disclosure('Four rules for every Listening part', tips) + inner + '</section>';
        }
        var found = findLessonAnywhere(set.lesson);
        if (!found) return '';
        var L = found.lesson;
        function list(a) { return '<ul class="ielts-lesson-list">' + a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; }
        var body = '<h4 class="ielts-subheading">Before you answer</h4>' + list(L.before) +
            '<h4 class="ielts-subheading">While you read</h4>' + list(L.during) +
            (L.after && L.after.length ? '<h4 class="ielts-subheading">Before you move on</h4>' + list(L.after) : '') +
            '<h4 class="ielts-subheading">Do</h4>' + list(L.dos) + '<h4 class="ielts-subheading">Do not</h4>' + list(L.donts) +
            '<h4 class="ielts-subheading">Quick example</h4><blockquote>' + esc(L.example) + '</blockquote>';
        return '<section class="ielts-card ielts-strategy"><p class="ielts-session-label">Strategy \u00b7 read this first</p><h3>' + esc(set.typeName) + '</h3><p>' + esc(L.purpose) + '</p>' +
            disclosure('Open the step-by-step strategy', body) + '</section>';
    }

    function viewReadingSet() {
        var set = findReadingSet(state.practiceId);
        var LI = set && set.skill === 'listening';
        if (!set) { state.practiceId = null; return viewReading(); }
        curSet = set;
        var html = LI ? header('IELTS \u00b7 LISTENING \u00b7 TEST ' + set.test + ' \u00b7 PART ' + set.part, set.typeName, set.intro + '. Original recording.')
            : header('IELTS \u00b7 READING \u00b7 ' + (set.track === 'general' ? 'GENERAL TRAINING' : 'ACADEMIC'), set.typeName, set.intro + '. Original text.');
        if (state.practiceSubmitted) {
            var sc = scoreSet(set, state.practiceAnswers), total = sc.total, correct = sc.correct, missed = sc.missed;
            var pct = Math.round(correct / total * 100);
            html += '<div class="ielts-card ielts-quiz-result"><h3>Your result</h3><p class="ielts-quiz-score">' + correct + ' / ' + total + ' \u00b7 ' + pct + '%</p>' +
                '<p>' + (pct === 100 ? 'Perfect score. Well done!' : pct >= (ns.progress ? ns.progress.masteryPct : 80) ? 'Mastered - great work.' : pct >= 50 ? 'Good progress. Read each explanation below, find the evidence in the ' + (LI ? 'transcript' : 'text') + ', then try again.' : 'A good start. Read the strategy again, check each explanation below against the text, then try again.') + '</p>' + (missed.length ? '<p class="ielts-note">To review: question' + (missed.length > 1 ? 's ' : ' ') + missed.join(', ') + '</p>' : '') + bestLine(setKey(set)) + '</div>';
        }
        html += strategyHtml(set);
        if (LI) {
            html += '<section class="ielts-card ielts-audio-card" id="ielts-passage"><p class="ielts-session-label">Recording \u00b7 original script, synthetic voices</p><h3>' + esc(set.title.replace(/^Test [AB], Part \d: /, '')) + '</h3><p>' + esc(set.context) + '</p>' +
                '<audio class="ielts-ap-audio" controls preload="none" src="' + esc(set.audio) + '"></audio>' +
                '<p class="ielts-note">In the real test you hear the recording once, after about 30 seconds to read the questions. Try once without replaying, then listen again to check your answers.</p></section>';
        } else html += '<div class="ielts-timer"><button type="button" class="secondary-button" data-ielts-timer="' + set.minutes + '">\u23f1 Start ' + set.minutes + '-minute timer</button><span class="ielts-timer-display" data-ielts-timer-display aria-live="off"></span></div>';
        if (!LI) html += '<section class="ielts-card ielts-passage" id="ielts-passage"><p class="ielts-session-label">Reading text \u00b7 original</p><h3>' + esc(set.passageTitle) + '</h3>' +
            set.passage.map(paraHtml).join('') + visualHtml(set.visual) + '</section>';
        html += '<form class="ielts-quiz-form" data-ielts-practice-form onsubmit="return false">';
        var base = 0;
        set.parts.forEach(function (part) {
            html += '<p class="ielts-instruction">' + esc(part.instruction) + '</p>';
            if (part.box) html += '<div class="ielts-box"><p class="ielts-box-title">' + esc(part.box.title) + '</p><ul>' + part.box.items.map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ul></div>';
            if (part.visual) html += visualHtml(part.visual);
            html += '<button type="button" class="ielts-jump" data-ielts-jump>' + (LI ? '\u2191 Back to the recording' : '\u2191 Back to the passage') + '</button>';
            html += part.template ? templateHtml(part, base) : questionRows(part, base);
            base += part.qs.length;
        });
        html += '</form>';
        if (!state.practiceSubmitted) html += '<button type="button" class="start-button" data-ielts-practice-submit>Submit answers</button><p class="ielts-note">Unanswered questions count as wrong, as in the real test.</p>';
        else {
            if (set.vocab && set.vocab.length) html += '<section class="ielts-card"><p class="ielts-session-label">Words from this passage</p><ul class="ielts-vocab">' + set.vocab.map(function (v) { return '<li><strong>' + esc(v[0]) + '</strong> = ' + esc(v[1]) + '</li>'; }).join('') + '</ul></section>';
            html += '<button type="button" class="start-button" data-ielts-practice-retry>Try again</button>';
        }
        if (LI && state.practiceSubmitted) {
            html += disclosure('Read the transcript (check each answer against what was said)', set.script.map(function (l) { return '<p class="ielts-transcript-line"><strong>' + esc(l[0]) + ':</strong> ' + esc(l[1]) + '</p>'; }).join(''));
        }
        var list = LI ? ((ns.listeningData || {}).practiceSets || []) : setsForTrack(), at = list.indexOf(set), nav = '';
        if (at > 0) nav += '<button type="button" class="secondary-button" data-ielts-practice="' + esc(list[at - 1].id) + '">\u2190 ' + esc(list[at - 1].typeName) + '</button>';
        nav += '<button type="button" class="secondary-button" data-ielts-practice-back>' + (LI ? 'All Listening' : 'All Reading') + '</button>';
        if (at > -1 && at < list.length - 1) nav += '<button type="button" class="start-button" data-ielts-practice="' + esc(list[at + 1].id) + '">Next: ' + esc(list[at + 1].typeName) + ' \u2192</button>';
        html += backRow(nav);
        return html;
    }

    /* ---------- WRITING ---------- */

    function viewWriting() {
        var D = ns.writingData;
        var html = header('IELTS \u00b7 WRITING \u00b7 ' + trackLabel().toUpperCase(), 'Writing',
            'What the IELTS Writing test involves, with a strategy lesson for every task type and original practice tasks with model answers.');
        if (!D) {
            return html + '<div class="ielts-banner">Writing information could not be loaded.</div>' +
                backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        }
        var lessons = visibleLessons('writing'), tasks = tasksForTrack();
        html += '<div class="ielts-banner ielts-banner-preview">' + status('Learning module', 'open') +
            ' Study the lessons for your test, then write a practice task in the built-in editor. Your draft saves on this device as you type, and each task has an original model answer and a self-check on the four official criteria.</div>';
        html += trackPicker();
        html += '<h3 class="ielts-heading">Writing at a glance</h3>' + factsBlock(D);
        html += '<article class="ielts-card ielts-track-card"><p class="ielts-session-label">' + esc(trackLabel()) + ' Writing</p><p>' + esc(D.trackDifferences[state.track]) + '</p>' +
            '<p class="ielts-note">Task 2 is the same essay task in both tests. Only Task 1 differs, so this page shows only the ' + esc(trackLabel()) + ' Task 1 lessons and tasks.</p></article>';
        html += '<h3 class="ielts-heading">Strategy lessons (' + lessons.length + ')</h3>' + lessonsGrid(lessons);
        var fulls = ((D.fullTests || [])).filter(trackOk);
        if (fulls.length) {
            html += '<h3 class="ielts-heading">Full 60-minute tests</h3><div class="ielts-grid">';
            fulls.forEach(function (f) {
                var key = 'writing-task:' + f.id, done = ns.progress && ns.progress.best(key) !== null;
                html += '<article class="ielts-card"><p class="ielts-session-label">Task 1 + Task 2 \u00b7 60 min</p><h3>' + esc(f.title) + (done ? ' \u2713' : '') + '</h3><p>' + esc(f.blurb) + '</p>' +
                    '<button type="button" class="start-button" data-ielts-task="' + esc(f.id) + '">' + (done ? 'Take it again \u2192' : 'Start the full test \u2192') + '</button></article>';
            });
            html += '</div>';
        }
        html += '<h3 class="ielts-heading">' + esc(trackLabel()) + ' practice tasks (' + tasks.length + ')</h3><div class="ielts-grid">';
        tasks.forEach(function (t) {
            var key = 'writing-task:' + t.id;
            var done = ns.progress && ns.progress.best(key) !== null;
            html += '<article class="ielts-card"><p class="ielts-session-label">' +
                (t.track === 'both' ? 'Task 2' : 'Task 1') + (t.kind ? ' \u00b7 ' + esc(t.kind) : '') + ' \u00b7 ' + t.minWords + '+ words \u00b7 ~' + t.minutes + ' min</p>' +
                '<h3>' + esc(t.title) + (done ? ' \u2713' : '') + '</h3>' +
                '<p>' + esc(t.instructions.slice(0, 110)) + '\u2026</p>' +
                (done ? '<p class="ielts-note">Completed \u00b7 recorded in your progress</p>' : '') +
                '<button type="button" class="start-button" data-ielts-task="' + esc(t.id) + '">' + (done ? 'Open task again \u2192' : 'Open task \u2192') + '</button></article>';
        });
        html += '</div>';
        html += '<h3 class="ielts-heading">How Writing is marked</h3>' + disclosure('The four marking criteria', criteriaCards(D.criteria));
        html += sourceNote(D);
        html += backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        return html;
    }

    function dataTableHtml(t) {
        if (!t.dataTable) return '';
        var dt = t.dataTable;
        var html = '<div class="ielts-table-wrap"><table class="ielts-data-table"><caption class="ielts-note">' + esc(dt.caption) + '</caption><thead><tr>';
        dt.headers.forEach(function (h) { html += '<th>' + esc(h) + '</th>'; });
        html += '</tr></thead><tbody>';
        dt.rows.forEach(function (r) {
            html += '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
        });
        return html + '</tbody></table>';
    }

    function savedRating(key) { try { return JSON.parse(window.localStorage.getItem("ieltsRating." + key) || "null"); } catch (e) { return null; } }
    function bandEstimate(vals) {
        var n = 0, sum = 0;
        vals.forEach(function (v) { if (v) { n += 1; sum += Number(v); } });
        if (!n) return "";
        return (Math.round(sum / n * 2) / 2).toFixed(1);
    }
    function criteriaChecklist(criteria, activityKey, hint) {
        var recorded = ns.progress && ns.progress.best(activityKey) !== null;
        var rated = !!criteria[0].levels;
        var html = '<section class="ielts-card ielts-rater" data-ielts-rater="' + esc(activityKey) + '"><p class="ielts-session-label">Self-evaluation</p><h3>' + (rated ? 'Estimate your band' : 'Check yourself against the official criteria') + '</h3>' +
            '<p class="ielts-note">' + esc(hint) + (rated ? ' Be honest and pick the description that fits best. This is your own estimate, not an official score.' : '') + '</p>';
        if (rated) {
            var saved = savedRating(activityKey) || [];
            criteria.forEach(function (c, i) {
                html += '<fieldset class="ielts-rate-group"><legend><strong>' + esc(c.name) + '</strong></legend>';
                [5, 6, 7, 8].forEach(function (b, j) {
                    html += '<label class="ielts-option"><input type="radio" name="rate' + i + '" value="' + b + '" data-ielts-rate="' + i + '"' + (String(saved[i]) === String(b) ? ' checked' : '') + '> <span><b>Band ' + (b === 8 ? '8 to 9' : b) + ':</b> ' + esc(c.levels[j]) + '</span></label>';
                });
                html += '</fieldset>';
            });
            html += '<p class="ielts-answer-feedback ielts-estimate" data-ielts-estimate>' + (saved.length ? 'Your estimate: <strong>Band ' + bandEstimate(saved) + '</strong>' : 'Choose one description for each criterion to see your estimate.') + '</p>';
            html += '<button type="button" class="start-button" data-ielts-task-complete="' + esc(activityKey) + '"' + (saved.length === criteria.length ? '' : ' disabled') + '>' + (recorded ? 'Update my rating' : 'Save my rating') + '</button>';
            if (recorded) html += '<p class="ielts-note">Saved in your progress. You can change it after another try.</p>';
            return html + '</section>';
        }
        criteria.forEach(function (c, i) {
            html += '<label class="ielts-check-item"><input type="checkbox" data-ielts-check="' + i + '"' + (recorded ? ' checked disabled' : '') + '>' +
                '<span><strong>' + esc(c.name) + ':</strong> ' + esc(c.plain) + '</span></label>';
        });
        if (recorded) html += '<p class="ielts-answer-feedback ielts-answer-correct"><strong>Completed.</strong> Recorded in your progress.</p>';
        else html += '<button type="button" class="start-button" data-ielts-task-complete="' + esc(activityKey) + '" disabled>Mark as complete</button>';
        return html + '</section>';
    }

    /* ---- quick checks for Writing (a helper, not a marker) ---- */
    var LINKERS = ['however', 'therefore', 'moreover', 'furthermore', 'in addition', 'for example', 'for instance', 'as a result', 'on the other hand', 'in contrast', 'whereas', 'while', 'although', 'despite', 'because', 'consequently', 'overall', 'in conclusion', 'firstly', 'secondly', 'finally', 'in summary', 'similarly', 'by contrast'];
    function analyseWriting(text, t, kindOverride) {
        var out = [], words = text.trim() ? text.trim().split(/\s+/) : [], n = words.length, lower = text.toLowerCase();
        var paras = text.split(/\n\s*\n|\n/).filter(function (x) { return x.trim(); }).length;
        var sentences = text.split(/[.!?]+\s/).filter(function (x) { return x.trim(); }).length || 1;
        var kind = kindOverride || (t.track === 'both' ? 'essay' : t.track === 'general' ? 'letter' : 'report');
        var min = t.minWords || (kind === 'essay' ? 250 : 150);
        out.push({ ok: n >= min, t: n + ' words. The minimum is ' + min + '.' + (n < min ? ' Short answers lose marks.' : '') });
        out.push({ ok: kind === 'essay' ? paras >= 4 : kind === 'letter' ? paras >= 3 : paras >= 3, t: paras + ' paragraph' + (paras === 1 ? '' : 's') + '. ' + (kind === 'essay' ? 'Aim for 4 or 5: introduction, two body paragraphs, conclusion.' : kind === 'letter' ? 'Aim for 3 or 4 short paragraphs.' : 'Aim for an introduction, an overview and 2 detail paragraphs.') });
        var found = LINKERS.filter(function (w) { return lower.indexOf(w) > -1; });
        out.push({ ok: found.length >= 4, t: 'Linking words used: ' + (found.length ? found.slice(0, 8).join(', ') : 'none') + '. Use a range, but not in every sentence.' });
        out.push({ ok: n / sentences >= 12 && n / sentences <= 30, t: 'Average sentence length: ' + Math.round(n / sentences) + ' words. Mix short and long sentences (12 to 30 is a healthy range).' });
        var freq = {}, stop = ' the a an and of to in is are was were it that this for on with as be by at or from have has had not but they their there which will can would more most also than so if you your we our i me my ';
        words.forEach(function (w) { w = w.toLowerCase().replace(/[^a-z']/g, ''); if (w.length > 3 && stop.indexOf(' ' + w + ' ') < 0) freq[w] = (freq[w] || 0) + 1; });
        var rep = Object.keys(freq).filter(function (w) { return freq[w] >= 5; }).sort(function (a, b) { return freq[b] - freq[a]; }).slice(0, 3);
        out.push({ ok: !rep.length, t: rep.length ? 'Repeated often: ' + rep.map(function (w) { return w + ' (' + freq[w] + ')'; }).join(', ') + '. Try synonyms.' : 'No word is overused.' });
        if (kind === 'letter') {
            out.push({ ok: /^\s*dear\b/i.test(text), t: 'Starts with "Dear ...".' });
            out.push({ ok: /(yours (sincerely|faithfully)|best wishes|kind regards|regards|love|take care|all the best)/i.test(text), t: 'Ends with a sign-off such as "Yours sincerely", "Kind regards" or "Best wishes".' });
        } else if (kind === 'report') {
            out.push({ ok: /(overall|in general|in summary|to summari[sz]e)/i.test(text), t: 'Contains an overview ("Overall ..."). The overview is essential in Academic Task 1.' });
        } else {
            out.push({ ok: /(in conclusion|to conclude|in summary|overall|to sum up)/i.test(text), t: 'Has a clear conclusion.' });
            out.push({ ok: /\b(i believe|i think|in my opinion|i agree|i disagree|i would argue|this essay)/i.test(text), t: 'States a position ("In my opinion ..."). Needed for opinion questions, helpful for others.' });
        }
        return out;
    }
    function qcHtml(items) {
        return '<ul class="ielts-qc">' + items.map(function (i) { return '<li class="' + (i.ok ? 'ielts-qc-ok' : 'ielts-qc-no') + '"><span aria-hidden="true">' + (i.ok ? '\u2713' : '!') + '</span> ' + esc(i.t) + '</li>'; }).join('') + '</ul>' +
            '<p class="ielts-note">This quick check counts words and spots patterns. It cannot judge ideas or grammar, so also compare with the model answer.</p>';
    }
    var WHY = {
        essay: ['The first paragraph answers the question directly in its own words and says what the essay will do.', 'Each body paragraph has ONE main idea, then an explanation, then an example.', 'The writer uses a range of linking words, but not in every sentence.', 'The conclusion repeats the position without adding new ideas.'],
        report: ['The first sentence says what the graph or diagram shows, in different words from the question.', 'There is a clear overview: the main trends or stages, without detail.', 'Figures are chosen and grouped, not all copied.', 'No opinions. Only what the data shows.'],
        letter: ['The opening says why you are writing, straight away.', 'Every bullet point in the task is covered, each in its own paragraph.', 'The tone matches the reader: polite and formal, or friendly and relaxed.', 'The ending tells the reader what happens next, then signs off correctly.']
    };

    function viewWritingFull(f) {
        var t1 = findWritingTask(f.t1), t2 = findWritingTask(f.t2);
        var html = header('IELTS \u00b7 WRITING \u00b7 FULL TEST', f.title, '60 minutes \u00b7 Task 1 (about 20 minutes, 150+ words) then Task 2 (about 40 minutes, 250+ words). Task 2 carries more marks.');
        html += '<div class="ielts-timer"><button type="button" class="secondary-button" data-ielts-timer="60">\u23f1 Start the 60-minute timer</button><span class="ielts-timer-display" data-ielts-timer-display aria-live="off"></span></div>';
        [[t1, 'Task 1', f.t1 + '-f', 'ts1'], [t2, 'Task 2', f.t2 + '-f', 'ts2']].forEach(function (x) {
            var t = x[0], did = x[2];
            html += '<section class="ielts-card"><p class="ielts-session-label">' + x[1] + ' \u00b7 ' + t.minWords + '+ words</p><p><strong>' + esc(t.instructions) + '</strong></p>' + visualHtml(t.visual) + dataTableHtml(t) +
                '<textarea class="ielts-editor" rows="12" data-ielts-draft="' + esc(did) + '" placeholder="Write ' + x[1] + ' here\u2026">' + esc(loadDraft(did)) + '</textarea>' +
                '<p class="ielts-word-count">Words: <span data-ielts-wc>' + wordCount(loadDraft(did)) + '</span> / ' + t.minWords + ' minimum</p>' +
                '<button type="button" class="secondary-button" data-ielts-qc="' + esc(did) + '" data-ielts-qc-task="' + esc(t.id) + '">Quick check ' + x[1] + '</button><div data-ielts-qc-out="' + esc(did) + '"></div></section>';
        });
        [[t1, 'Task 1'], [t2, 'Task 2']].forEach(function (x) {
            var wk = x[0].track === 'both' ? 'essay' : x[0].track === 'general' ? 'letter' : 'report';
            html += disclosure('Model answer for ' + x[1] + ' (open after you finish)', x[0].modelAnswer.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '<h4 class="ielts-subheading">Why this model works</h4><ul class="ielts-lesson-list">' + (x[0].why || WHY[wk]).map(function (y) { return '<li>' + esc(y) + '</li>'; }).join('') + '</ul>');
        });
        html += criteriaChecklist(ns.writingData.criteria, 'writing-task:' + f.id, 'Rate your Task 2 answer, which carries two thirds of the Writing mark.');
        html += backRow('<button type="button" class="secondary-button" data-ielts-task-back>\u2190 Back to Writing</button>');
        return html;
    }

    function viewWritingTask() {
        var t = findWritingTask(state.taskId);
        if (!t) { state.taskId = null; return viewWriting(); }
        if (t.t1) return viewWritingFull(t);
        var draft = loadDraft(t.id);
        var html = header('IELTS \u00b7 WRITING \u00b7 PRACTICE', t.title,
            'About ' + t.minutes + ' minutes \u00b7 write at least ' + t.minWords + ' words.');
        html += '<section class="ielts-card"><p class="ielts-session-label">The task \u00b7 original prompt</p><p><strong>' + esc(t.instructions) + '</strong></p>' +
            visualHtml(t.visual) + dataTableHtml(t) + '</section>';
        if (t.track === 'both') html += disclosure('Plan first (5 minutes)', '<p class="ielts-note">Real examiners reward clear planning. Note your answers to these, then write.</p><textarea class="ielts-editor" rows="5" data-ielts-draft="plan-' + esc(t.id) + '" placeholder="1 My opinion or answer:&#10;2 Main idea of paragraph 1 + example:&#10;3 Main idea of paragraph 2 + example:&#10;4 Conclusion:">' + esc(loadDraft('plan-' + t.id)) + '</textarea>');
        html += '<div class="ielts-timer"><button type="button" class="secondary-button" data-ielts-timer="' + t.minutes + '">\u23f1 Start ' + t.minutes + '-minute timer</button><span class="ielts-timer-display" data-ielts-timer-display aria-live="off"></span></div>';
        html += '<section class="ielts-card"><p class="ielts-session-label">Your answer</p>' +
            '<textarea class="ielts-editor" rows="12" data-ielts-draft="' + esc(t.id) + '" placeholder="Write your answer here\u2026">' + esc(draft) + '</textarea>' +
            '<p class="ielts-word-count">Words: <span data-ielts-wc>' + wordCount(draft) + '</span> / ' + t.minWords + ' minimum</p>' +
            '<p class="ielts-note">Your draft saves automatically on this device as you type.</p></section>';
        html += '<section class="ielts-card"><p class="ielts-session-label">Before you hand in</p><button type="button" class="secondary-button" data-ielts-qc="' + esc(t.id) + '">Run the quick check</button><div data-ielts-qc-out="' + esc(t.id) + '"></div></section>';
        var wk = t.track === 'both' ? 'essay' : t.track === 'general' ? 'letter' : 'report';
        html += disclosure('Model answer - compare after you write',
            t.modelAnswer.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
            '<p class="ielts-note">One of many good answers \u00b7 original, written to a band 8-9 standard.</p>' +
            '<h4 class="ielts-subheading">Why this model works</h4><ul class="ielts-lesson-list">' + (t.why || WHY[wk]).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        html += criteriaChecklist(ns.writingData.criteria, 'writing-task:' + t.id, t.checklistHint);
        html += backRow('<button type="button" class="secondary-button" data-ielts-task-back>\u2190 Back to Writing</button>');
        return html;
    }

    /* ---------- SPEAKING ---------- */

    /* ---- small tools used by Speaking: audio clip, countdown, private recorder ---- */
    var cdHandle = null, mediaRec = null, recChunks = [], recStream = null;
    function cdStop() { if (cdHandle) { clearInterval(cdHandle); cdHandle = null; } }
    function startCountdown(btn) {
        var secs = Number(btn.getAttribute("data-ielts-cd")), out = btn.parentNode.querySelector("[data-ielts-cd-out]");
        cdStop();
        var end = Date.now() + secs * 1000, label = btn.getAttribute("data-ielts-cd-done") || "Time is up.";
        function tick() {
            var left = Math.max(0, Math.round((end - Date.now()) / 1000));
            if (!out) { cdStop(); return; }
            out.textContent = left ? Math.floor(left / 60) + ":" + ("0" + (left % 60)).slice(-2) : label;
            if (!left) cdStop();
        }
        cdHandle = setInterval(tick, 500); tick();
    }
    function clip(src, label) {
        return '<div class="ielts-clip"><span class="ielts-note">' + esc(label) + '</span><audio class="ielts-ap-audio" controls preload="none" src="' + esc(src) + '"></audio></div>';
    }
    function cdButton(secs, label, done) {
        return '<div class="ielts-cd"><button type="button" class="secondary-button" data-ielts-cd="' + secs + '" data-ielts-cd-done="' + esc(done || "Time is up.") + '">\u23f1 ' + esc(label) + '</button><span class="ielts-timer-display" data-ielts-cd-out aria-live="off"></span></div>';
    }
    function recorderHtml(slot) {
        return '<div class="ielts-rec" data-ielts-rec-box="' + esc(slot) + '"><button type="button" class="secondary-button" data-ielts-rec="' + esc(slot) + '">\u25cf Record my answer</button>' +
            '<span class="ielts-note" data-ielts-rec-status>Optional. The recording stays on your phone and is not uploaded.</span><div data-ielts-rec-out></div></div>';
    }
    function toggleRecord(btn) {
        var box = btn.closest("[data-ielts-rec-box]"), st = box.querySelector("[data-ielts-rec-status]"), out = box.querySelector("[data-ielts-rec-out]");
        if (mediaRec && mediaRec.state === "recording") { mediaRec.stop(); return; }
        if (!navigator.mediaDevices || !window.MediaRecorder) { st.textContent = "Recording is not supported in this browser. You can still practise aloud."; return; }
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            recStream = stream; recChunks = [];
            mediaRec = new MediaRecorder(stream);
            mediaRec.ondataavailable = function (e) { if (e.data && e.data.size) recChunks.push(e.data); };
            mediaRec.onstop = function () {
                var blob = new Blob(recChunks, { type: mediaRec.mimeType || "audio/webm" });
                recStream.getTracks().forEach(function (t) { t.stop(); });
                btn.textContent = "\u25cf Record again"; st.textContent = "Listen to yourself. Then compare with the model answer.";
                out.innerHTML = '<audio class="ielts-ap-audio" controls src="' + URL.createObjectURL(blob) + '"></audio>';
                mediaRec = null;
            };
            mediaRec.start(); btn.textContent = "\u25a0 Stop"; st.textContent = "Recording... speak now.";
        }).catch(function () { st.textContent = "The microphone is blocked. Allow it in your browser settings, or practise aloud without recording."; });
    }

    function viewSpeaking() {
        var D = ns.speakingData;
        var html = header('IELTS \u00b7 SPEAKING \u00b7 ' + trackLabel().toUpperCase(), 'Speaking',
            'Practise all three parts with an examiner voice, model answers you can hear, and full mock interviews.');
        if (!D) {
            return html + '<div class="ielts-banner">Speaking information could not be loaded.</div>' +
                backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        }
        var mocks = D.practice.filter(function (x) { return x.kind === 'mock'; }), p1 = D.practice.filter(function (x) { return x.kind === 'part1'; }), cc = D.practice.filter(function (x) { return x.kind === 'cuecard'; });
        function card(item, label, desc, cta) {
            var done = ns.progress && ns.progress.best('speaking-practice:' + item.id) !== null;
            return '<article class="ielts-card"><p class="ielts-session-label">' + esc(label) + '</p><h3>' + esc(item.title.replace(/^Part \d( and 3)?: /, '')) + (done ? ' \u2713' : '') + '</h3><p>' + esc(desc) + '</p>' +
                '<button type="button" class="start-button" data-ielts-task="' + esc(item.id) + '">' + (done ? 'Practise again \u2192' : cta) + '</button></article>';
        }
        html += '<div class="ielts-banner ielts-banner-preview">' + status('Learning module', 'open') + ' The speaking test is the same for Academic and General Training. Speak out loud. You can record yourself to listen back; recordings stay on your phone and are never uploaded.</div>';
        html += '<h3 class="ielts-heading">Full mock interviews (about 12 minutes)</h3><div class="ielts-grid">';
        mocks.forEach(function (m) {
            var mm = D.mocks.filter(function (x) { return x.id === m.id; })[0], c = D.cueCards.filter(function (x) { return x.id === mm.card; })[0];
            html += card(m, 'Parts 1, 2 and 3', 'Card: ' + c.title.replace('Describe ', '').replace(/^an? /, '') + '.', 'Start the interview \u2192');
        });
        html += '</div><h3 class="ielts-heading">Part 1: Interview topics</h3><div class="ielts-grid">';
        p1.forEach(function (x) { html += card(x, 'Part 1 \u00b7 4 questions', x.prepNote, 'Practise this topic \u2192'); });
        html += '</div><h3 class="ielts-heading">Parts 2 and 3: Cue cards</h3><div class="ielts-grid">';
        cc.forEach(function (x) { html += card(x, 'Part 2 + Part 3', x.cueCard.topic, 'Open the cue card \u2192'); });
        html += '</div>';
        html += '<h3 class="ielts-heading">Speaking at a glance</h3>' + factsBlock(D);
        html += '<div class="ielts-grid">';
        D.parts.forEach(function (p) {
            html += '<article class="ielts-card"><p class="ielts-session-label">' + esc(p.name) + ' \u00b7 ' + esc(p.time) + '</p>' +
                '<p>' + esc(p.what) + '</p><p class="ielts-note">' + esc(p.tip) + '</p></article>';
        });
        html += '</div>';
        html += '<h3 class="ielts-heading">How Speaking is marked</h3>' + disclosure('The four marking criteria', criteriaCards(D.criteria));
        html += '<h3 class="ielts-heading">Strategy for each part</h3>';
        D.lessons.forEach(function (L) {
            var inner = '<p>' + esc(L.purpose) + '</p><h4 class="ielts-subheading">Before you speak</h4><ul class="ielts-lesson-list">' + L.before.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
                '<h4 class="ielts-subheading">While you speak</h4><ul class="ielts-lesson-list">' + L.during.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
                '<h4 class="ielts-subheading">Do</h4><ul class="ielts-lesson-list">' + L.dos.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
                '<h4 class="ielts-subheading">Do not</h4><ul class="ielts-lesson-list">' + L.donts.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
            html += disclosure(L.title, inner);
        });
        html += sourceNote(D);
        html += backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        return html;
    }

    function qaCard(q, n, slot, secs, phraseNote) {
        return '<section class="ielts-card"><p class="ielts-session-label">Question ' + n + '</p><p class="ielts-bubble"><strong>' + esc(q.q) + '</strong></p>' + clip(q.qAudio, 'Hear the examiner') +
            cdButton(secs, 'Start ' + secs + '-second answer timer', 'Time. Finish your sentence.') + recorderHtml(slot) +
            disclosure('Model answer (open after you try)', '<p>' + esc(q.a) + '</p>' + clip(q.aAudio, 'Hear the model answer') + '<p class="ielts-note">One of many good answers. Copy the structure and the linking words, not the exact words.</p>') + '</section>';
    }

    function viewSpeakingMock(item) {
        var D = ns.speakingData, m = D.mocks.filter(function (x) { return x.id === item.id; })[0];
        var card = D.cueCards.filter(function (c) { return c.id === m.card; })[0];
        var steps = [{ k: 'intro' }];
        m.p1.forEach(function (tid) { var t = D.part1Topics.filter(function (x) { return x.id === tid; })[0]; t.qs.forEach(function (q, i) { steps.push({ k: 'p1', t: t, q: q, i: i }); }); });
        steps.push({ k: 'p2' }, { k: 'prep' }, { k: 'talk' }, { k: 'round' }, { k: 'p3intro' });
        card.part3.forEach(function (q, i) { steps.push({ k: 'p3', q: q, i: i }); });
        steps.push({ k: 'end' });
        var at = Math.min(state.mockStep, steps.length - 1), st = steps[at], F = item.fixed;
        var html = header('IELTS \u00b7 SPEAKING \u00b7 MOCK INTERVIEW', item.title, 'Step ' + (at + 1) + ' of ' + steps.length + '. Press play, then answer out loud as in the real test.');
        html += '<div class="ielts-progressbar" aria-hidden="true"><span style="width:' + Math.round((at + 1) / steps.length * 100) + '%"></span></div>';
        var body = '', slot = 'mock-' + item.id + '-' + at;
        if (st.k === 'intro') body = '<p class="ielts-session-label">Examiner</p><p class="ielts-bubble">Good morning. My name is Sarah. Can you tell me your full name, please?</p>' + clip(F.intro, 'Play') + '<p class="ielts-note">Answer with your name and what you like to be called. Then start Part 1.</p>';
        else if (st.k === 'p1') body = '<p class="ielts-session-label">Part 1 \u00b7 ' + esc(st.t.title) + '</p><p class="ielts-bubble"><strong>' + esc(st.q.q) + '</strong></p>' + clip(st.q.qAudio, 'Play the question') + cdButton(30, 'Start 30-second timer', 'Time. Finish your sentence.') + recorderHtml(slot) + '<p class="ielts-note">Aim for 2 or 3 sentences: answer, reason, detail.</p>';
        else if (st.k === 'p2') body = '<p class="ielts-session-label">Part 2</p><p class="ielts-bubble">Now I am going to give you a topic. You have one minute to prepare and then you talk for one to two minutes.</p>' + clip(F.p2, 'Play');
        else if (st.k === 'prep') body = '<p class="ielts-session-label">Part 2 \u00b7 one minute to prepare</p><div class="ielts-cuecard"><h3>' + esc(card.title) + '</h3><p>You should say:</p><ul class="ielts-cue-bullets">' + card.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></div>' + clip(card.cueAudio, 'Hear the examiner read the card') + cdButton(60, 'Start 1-minute preparation', 'Preparation is over. Press Next to speak.') + '<textarea class="ielts-editor" rows="4" placeholder="Make notes here. Write keywords only."></textarea>';
        else if (st.k === 'talk') body = '<p class="ielts-session-label">Part 2 \u00b7 your talk</p><div class="ielts-cuecard"><h3>' + esc(card.title) + '</h3><ul class="ielts-cue-bullets">' + card.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></div>' + clip(F.talk, 'Examiner: please start') + cdButton(120, 'Start the 2-minute talk', 'Two minutes. The examiner stops you.') + recorderHtml(slot) + '<p class="ielts-note">Speak for the full two minutes. Cover every bullet point.</p>';
        else if (st.k === 'round') body = '<p class="ielts-session-label">Part 2 \u00b7 rounding-off question</p><p class="ielts-bubble"><strong>' + esc(card.rounding) + '</strong></p>' + clip(card.roundAudio, 'Play the question') + '<p class="ielts-note">Answer in one or two sentences.</p>' + clip(F.stop, 'Examiner closes Part 2');
        else if (st.k === 'p3intro') body = '<p class="ielts-session-label">Part 3</p><p class="ielts-bubble">We have been talking about this topic. Now I would like to discuss some more general questions.</p>' + clip(F.p3, 'Play');
        else if (st.k === 'p3') body = '<p class="ielts-session-label">Part 3 \u00b7 discussion</p><p class="ielts-bubble"><strong>' + esc(st.q.q) + '</strong></p>' + clip(st.q.qAudio, 'Play the question') + cdButton(45, 'Start 45-second timer', 'Time. Finish your point.') + recorderHtml(slot) + '<p class="ielts-note">Give an opinion, a reason and an example or comparison. Longer answers are expected here.</p>';
        else body = '<p class="ielts-session-label">Finished</p><p class="ielts-bubble">Thank you very much. That is the end of the speaking test.</p>' + clip(F.end, 'Play') + '<p><strong>Well done. Now compare yourself with the model answers and rate yourself below.</strong></p>' +
            '<div class="ielts-grid"><button type="button" class="secondary-button" data-ielts-task="sp2-' + esc(card.id) + '">Model answers: Part 2 and 3</button>' + m.p1.map(function (tid) { return '<button type="button" class="secondary-button" data-ielts-task="sp1-' + tid + '">Model answers: ' + esc(D.part1Topics.filter(function (x) { return x.id === tid; })[0].title) + '</button>'; }).join('') + '</div>';
        html += '<section class="ielts-card ielts-step">' + body + '</section>';
        html += '<div class="ielts-back-row">' + (at > 0 ? '<button type="button" class="secondary-button" data-ielts-mock-go="-1">\u2190 Back</button>' : '') +
            (at < steps.length - 1 ? '<button type="button" class="start-button" data-ielts-mock-go="1">Next \u2192</button>' : '<button type="button" class="secondary-button" data-ielts-mock-restart>Start again</button>') + '</div>';
        if (at === steps.length - 1) html += criteriaChecklist(D.criteria, 'speaking-practice:' + item.id, 'Think about your whole interview. If you recorded your answers, listen to them first.');
        html += backRow('<button type="button" class="secondary-button" data-ielts-task-back>\u2190 Back to Speaking</button>');
        return html;
    }

    function viewSpeakingItem() {
        var item = findSpeakingItem(state.taskId);
        if (!item) { state.taskId = null; return viewSpeaking(); }
        if (item.kind === 'mock') return viewSpeakingMock(item);
        var html = header('IELTS \u00b7 SPEAKING \u00b7 PRACTICE', item.title, item.prepNote);
        if (item.kind === 'part1') {
            item.questions.forEach(function (q, i) { html += qaCard(q, i + 1, item.id + '-' + i, 30); });
        } else {
            html += '<section class="ielts-card ielts-cuecard"><p class="ielts-session-label">Part 2 \u00b7 cue card \u00b7 original</p><h3>' + esc(item.cueCard.topic) + '</h3>' +
                '<p>You should say:</p><ul class="ielts-cue-bullets">' + item.cueCard.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' + clip(item.cueAudio, 'Hear the examiner read the card') + '</section>';
            html += '<section class="ielts-card"><p class="ielts-session-label">Step 1 \u00b7 one minute to prepare</p>' + cdButton(60, 'Start 1-minute preparation', 'Preparation is over. Start speaking.') +
                '<textarea class="ielts-editor" rows="4" data-ielts-draft="' + esc(item.id) + '" placeholder="Keywords only: one or two words per bullet point\u2026">' + esc(loadDraft(item.id)) + '</textarea><p class="ielts-note">Notes save on this device.</p></section>';
            html += '<section class="ielts-card"><p class="ielts-session-label">Step 2 \u00b7 speak for up to two minutes</p>' + cdButton(120, 'Start the 2-minute talk', 'Two minutes. Stop here.') + recorderHtml(item.id + '-talk') + '</section>';
            html += '<section class="ielts-card"><p class="ielts-session-label">Rounding-off question</p><p class="ielts-bubble"><strong>' + esc(item.rounding) + '</strong></p>' + clip(item.roundAudio, 'Hear the examiner') + '</section>';
            var sampleBody = item.sampleAnswer.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + clip(item.sampleAudio, 'Hear this model answer') +
                '<p class="ielts-note">Useful phrases: ' + item.samplePhrases.map(esc).join(' \u00b7 ') + '</p><p class="ielts-note">One of many good answers \u00b7 original, about 2 minutes, written to a band 8-9 standard.</p>';
            html += disclosure('Model answer (open after you try)', sampleBody);
            html += '<h3 class="ielts-heading">Part 3: Discussion</h3><p class="ielts-note">The examiner now asks deeper questions on the same topic. Answers are longer: opinion, reason, example.</p>';
            item.part3.forEach(function (q, i) { html += qaCard(q, i + 1, item.id + '-p3-' + i, 45); });
        }
        html += criteriaChecklist(ns.speakingData.criteria, 'speaking-practice:' + item.id, 'Judge your spoken practice against the four official criteria.');
        html += backRow('<button type="button" class="secondary-button" data-ielts-task-back>\u2190 Back to Speaking</button>');
        return html;
    }

    /* ---------- dashboard progress card ---------- */

    /* One clear "what to do next" suggestion, so the student never has to decide where to start. */
    function nextStepCard() {
        var pr = ns.progress, pick = null;
        if (pr) {
            var rs = setsForTrack().filter(function (x) { return pr.best('reading-set:' + x.id) === null; })[0];
            var ls = ((ns.listeningData || {}).practiceSets || []).filter(function (x) { return pr.best('listening-set:' + x.id) === null; })[0];
            var wt = tasksForTrack().filter(function (x) { return pr.best('writing-task:' + x.id) === null; })[0];
            if (pr.best('listening-quiz') === null) pick = { text: 'Start with the Listening orientation quiz (about 5 minutes).', label: 'Open Listening', view: 'listening' };
            else if (ls) pick = { text: 'Next Listening practice: ' + ls.title.replace('Test', 'Practice Test') + '.', label: 'Open Listening', view: 'listening' };
            else if (rs) pick = { text: 'Next Reading practice: ' + rs.typeName + '.', label: 'Open Reading', view: 'reading' };
            else if (wt) pick = { text: 'Next Writing task: ' + wt.title + '.', label: 'Open Writing', view: 'writing' };
        }
        if (!pick) pick = { text: 'Choose any skill and keep practising. Retry a set to beat your best score.', label: 'Open Reading', view: 'reading' };
        return '<h3 class="ielts-heading">Your next step</h3><div class="ielts-card ielts-next"><p><strong>' + esc(pick.text) + '</strong></p>' + goButton(pick.label + ' \u2192', pick.view, 'start-button') + '</div>';
    }

    function progressCard() {
        if (!ns.progress) {
            return '<div class="ielts-card ielts-progress"><p><strong>No progress recorded yet.</strong></p>' +
                '<p class="ielts-note">Complete a quiz, lesson self-check or practice activity and your progress appears here.</p></div>';
        }
        var groups = [
            { label: 'Listening', ids: ['listening-quiz'].concat(((ns.listeningData || {}).practiceSets || []).map(function (x) { return 'listening-set:' + x.id; })) },
            { label: 'Reading', ids: visibleLessons('reading').map(function (l) { return 'lesson:' + l.id; }).concat(setsForTrack().map(function (s) { return 'reading-set:' + s.id; })) },
            { label: 'Writing', ids: visibleLessons('writing').map(function (l) { return 'lesson:' + l.id; }).concat(tasksForTrack().map(function (t) { return 'writing-task:' + t.id; })) },
            { label: 'Speaking', ids: lessonsForSkill('speaking').map(function (l) { return 'lesson:' + l.id; }).concat(((ns.speakingData || {}).practice || []).map(function (p) { return 'speaking-practice:' + p.id; })) }
        ];
        var summaries = ns.progress.summarize(groups);
        var anyAttempted = summaries.some(function (s) { return s.attempted > 0; });
        if (!anyAttempted) {
            return '<div class="ielts-card ielts-progress"><p><strong>No progress recorded yet.</strong></p>' +
                '<p class="ielts-note">Complete a quiz, lesson self-check or practice activity and your progress appears here. Scores save on this device.</p></div>';
        }
        var html = '<div class="ielts-progress-grid">';
        summaries.forEach(function (s) {
            html += '<article class="ielts-card"><h3>' + esc(s.label) + '</h3>' +
                '<p><strong>' + s.attempted + '</strong> of ' + s.total + ' activities started</p>' +
                '<p><strong>' + s.mastered + '</strong> mastered</p>' +
                (s.average !== null ? '<p class="ielts-note">Average best score: ' + s.average + '%</p>' : '') + '</article>';
        });
        html += '</div><p class="ielts-note">Mastery = best score of ' + ns.progress.masteryPct + '% or more \u2014 the same rule as the TOEFL section. Progress is saved on this device.</p>';
        return html;
    }

    var timerHandle = null, timerEnd = 0;
    function stopTimer() { if (timerHandle) { clearInterval(timerHandle); timerHandle = null; } }
    function tickTimer() {
        var d = root && root.querySelector("[data-ielts-timer-display]");
        if (!d) { stopTimer(); return; }
        var left = Math.max(0, Math.round((timerEnd - Date.now()) / 1000));
        d.textContent = Math.floor(left / 60) + ":" + ("0" + (left % 60)).slice(-2) + " left";
        if (!left) { d.textContent = "Time is up. Finish your answers."; stopTimer(); }
    }

    function render() {
        if (!root) return;
        var v = state.view, html;
        if (state.lessonId) html = viewLessonPage();
        else if (v === "listening" && state.quiz) html = viewListeningQuiz();
        else if ((v === "reading" || v === "listening") && state.practiceId) html = viewReadingSet();
        else if (v === "writing" && state.taskId) html = viewWritingTask();
        else if (v === "speaking" && state.taskId) html = viewSpeakingItem();
        else if (v === "course") html = viewCourse();
        else if (v === "library") html = viewLibrary();
        else if (v === "listening") html = viewListening();
        else if (v === "reading") html = viewReading();
        else if (v === "writing") html = viewWriting();
        else if (v === "speaking") html = viewSpeaking();
        else html = viewDashboard();
        root.innerHTML = html;
        if (timerHandle) tickTimer();
    }

    /* ---------- public entry point ---------- */

    function show(view, track, sub) {
        view = (typeof view === "string" && Object.prototype.hasOwnProperty.call(VIEWS, view)) ? view : "";
        stopTimer(); cdStop(); state.mockStep = 0;
        if (view === "reading" && sub && sub.type === "lesson" && /^r-/.test(String(sub.id)) && sub.id !== "r-skimming") {
            var wanted = null;
            ((ns.readingData || {}).practiceSets || []).forEach(function (st) { if (st.lesson === sub.id && (!wanted || st.track === (validTrack(track) ? track : state.track))) wanted = st; });
            if (wanted) sub = { type: "set", id: wanted.id };
        }
        if (view === "listening" && sub && sub.type === "lesson") {
            var lw = null;
            ((ns.listeningData || {}).practiceSets || []).forEach(function (st) { if (!lw && st.lessons.indexOf(sub.id) > -1) lw = st; });
            if (lw) sub = { type: "set", id: lw.id };
        }
        if (validTrack(track)) state.track = track;
        if (view !== state.view) { state.quiz = false; state.quizSubmitted = false; state.answers = {}; state.lessonId = null; state.lessonChecked = false; state.lessonAnswer = null; state.practiceId = null; state.practiceAnswers = {}; state.practiceSubmitted = false; state.taskId = null; state.checks = {}; }
        state.view = view;
        /* Open the requested screen inside the view (a lesson, practice set, task or quiz),
           or - when no sub-screen is requested - return to the view's home screen. This is
           what makes the phone's Back button step back one screen instead of jumping to the
           IELTS dashboard, and it fixes same-view buttons such as "All Reading lessons". */
        if (sub && sub.type === "lesson" && findLessonAnywhere(sub.id)) {
            state.lessonId = sub.id; state.lessonChecked = false; state.lessonAnswer = null;
            state.practiceId = null; state.taskId = null; state.quiz = false;
        } else if (sub && sub.type === "set" && (state.view === "reading" || state.view === "listening") && findReadingSet(sub.id)) {
            state.practiceId = sub.id; state.practiceAnswers = {}; state.practiceSubmitted = false;
            state.lessonId = null; state.taskId = null; state.quiz = false;
        } else if (sub && sub.type === "task" &&
                ((state.view === "writing" && findWritingTask(sub.id)) || (state.view === "speaking" && findSpeakingItem(sub.id)))) {
            state.taskId = sub.id; state.checks = {};
            state.lessonId = null; state.practiceId = null; state.quiz = false;
        } else if (sub && sub.type === "quiz" && state.view === "listening") {
            state.quiz = true; state.quizSubmitted = false; state.answers = {};
            state.lessonId = null; state.practiceId = null; state.taskId = null;
        } else {
            state.lessonId = null; state.lessonChecked = false; state.lessonAnswer = null;
            state.practiceId = null; state.practiceAnswers = {}; state.practiceSubmitted = false;
            state.taskId = null; state.checks = {};
            state.quiz = false; state.quizSubmitted = false; state.answers = {};
        }

        root = document.getElementById("ielts-root");
        if (typeof window.hideAllScreens === "function") window.hideAllScreens();
        var screen = document.getElementById("ielts-screen");
        if (screen) screen.style.display = "block";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function route() {
        var r = "ielts" + (state.view ? "/" + state.view : "");
        if (state.lessonId) r += "/lesson/" + encodeURIComponent(state.lessonId);
        else if ((state.view === "reading" || state.view === "listening") && state.practiceId) r += "/set/" + encodeURIComponent(state.practiceId);
        else if ((state.view === "writing" || state.view === "speaking") && state.taskId) r += "/task/" + encodeURIComponent(state.taskId);
        else if (state.view === "listening" && state.quiz) r += "/quiz";
        return r + "?track=" + state.track;
    }

    function onClick(event) {
        var el = event.target.closest ? event.target.closest("button") : null;
        if (!el || !root || !root.contains(el)) return;

        if (el.hasAttribute("data-ielts-lesson")) {
            window.showIELTS(state.view, state.track, { type: "lesson", id: el.getAttribute("data-ielts-lesson") });
        } else if (el.hasAttribute("data-ielts-lesson-check")) {
            if (state.lessonAnswer !== null) {
                state.lessonChecked = true;
                var foundL = findLessonAnywhere(state.lessonId);
                if (ns.progress && foundL && state.lessonAnswer === lessonView(foundL.lesson).answer) ns.progress.record("lesson:" + foundL.lesson.id, 100);
                render();
            }
        } else if (el.hasAttribute("data-ielts-lesson-retry")) {
            state.lessonChecked = false; state.lessonAnswer = null; render();
        } else if (el.hasAttribute("data-ielts-quiz-start")) {
            window.showIELTS(state.view, state.track, { type: "quiz" });
        } else if (el.hasAttribute("data-ielts-quiz-back")) {
            window.showIELTS(state.view);
        } else if (el.hasAttribute("data-ielts-quiz-submit")) {
            var missing = LISTENING_QUIZ.some(function (q) {
                var a = state.answers[q.id]; return q.type === "single" ? typeof a !== "string" : !Array.isArray(a) || a.length !== 2;
            });
            if (missing) { window.alert("Please answer every question. Select exactly two options for Questions 11–12."); return; }
            state.quizSubmitted = true;
            if (ns.progress) ns.progress.record("listening-quiz", Math.round(scoreQuiz() / 12 * 100));
            render();
        } else if (el.hasAttribute("data-ielts-quiz-retry")) {
            state.quizSubmitted = false; state.answers = {}; render();
        } else if (el.hasAttribute("data-ielts-timer")) {
            if (timerHandle) { stopTimer(); var dd = root.querySelector("[data-ielts-timer-display]"); if (dd) dd.textContent = ""; el.textContent = "\u23f1 Start " + el.getAttribute("data-ielts-timer") + "-minute timer"; }
            else {
                timerEnd = Date.now() + Number(el.getAttribute("data-ielts-timer")) * 60000;
                timerHandle = setInterval(tickTimer, 1000); tickTimer(); el.textContent = "Stop timer";
            }
        } else if (el.hasAttribute("data-ielts-jump")) {
            var pe = document.getElementById("ielts-passage");
            if (pe && pe.scrollIntoView) pe.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (el.hasAttribute("data-ielts-practice")) {
            window.showIELTS(state.view, state.track, { type: "set", id: el.getAttribute("data-ielts-practice") });
        } else if (el.hasAttribute("data-ielts-practice-submit")) {
            var pset = findReadingSet(state.practiceId);
            if (pset) {
                stopTimer();
                state.practiceSubmitted = true;
                curSet = pset;
                if (ns.progress) {
                    var psc = scoreSet(pset, state.practiceAnswers);
                    ns.progress.record(setKey(pset), Math.round(psc.correct / psc.total * 100));
                }
                render();
                window.scrollTo({top:0,behavior:"smooth"});
            }
        } else if (el.hasAttribute("data-ielts-practice-retry")) {
            state.practiceAnswers = {}; state.practiceSubmitted = false; render();
        } else if (el.hasAttribute("data-ielts-practice-back")) {
            window.showIELTS(state.view);
        } else if (el.hasAttribute("data-ielts-task")) {
            window.showIELTS(state.view, state.track, { type: "task", id: el.getAttribute("data-ielts-task") });
        } else if (el.hasAttribute("data-ielts-task-back")) {
            window.showIELTS(state.view);
        } else if (el.hasAttribute("data-ielts-qc")) {
            var qid = el.getAttribute("data-ielts-qc"), qta = root.querySelector('[data-ielts-draft="' + qid + '"]'), qout = root.querySelector('[data-ielts-qc-out="' + qid + '"]');
            var qtask = findWritingTask(el.getAttribute("data-ielts-qc-task") || qid);
            if (qta && qout && qtask) qout.innerHTML = qcHtml(analyseWriting(qta.value, qtask));
        } else if (el.hasAttribute("data-ielts-rec")) {
            toggleRecord(el);
        } else if (el.hasAttribute("data-ielts-cd")) {
            startCountdown(el);
        } else if (el.hasAttribute("data-ielts-mock-go")) {
            state.mockStep = Math.max(0, state.mockStep + Number(el.getAttribute("data-ielts-mock-go")));
            cdStop(); render(); window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (el.hasAttribute("data-ielts-mock-restart")) {
            state.mockStep = 0; cdStop(); render(); window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (el.hasAttribute("data-ielts-task-complete")) {
            if (ns.progress) ns.progress.record(el.getAttribute("data-ielts-task-complete"), 100);
            render();
        } else if (el.hasAttribute("data-ielts-track")) {
            var t = el.getAttribute("data-ielts-track");
            if (validTrack(t)) {
                saveTrack(t);
                window.showIELTS(state.view, t);
            }
        } else if (el.hasAttribute("data-ielts-view")) {
            window.showIELTS(el.getAttribute("data-ielts-view"));
        } else if (el.hasAttribute("data-ielts-courses")) {
            if (typeof window.showCourseHub === "function") window.showCourseHub();
        }
    }

    var rootAtLoad = document.getElementById("ielts-root");
    if (rootAtLoad) {
        rootAtLoad.addEventListener("click", onClick);
        rootAtLoad.addEventListener("input", function (event) {
            var field = event.target;
            if (field && field.hasAttribute && field.hasAttribute("data-ielts-practice-text") && !state.practiceSubmitted) {
                state.practiceAnswers[field.getAttribute("data-ielts-practice-text")] = field.value;
                return;
            }
            if (!field || !field.hasAttribute || !field.hasAttribute("data-ielts-draft")) return;
            var draftId = field.getAttribute("data-ielts-draft");
            try { window.localStorage.setItem("ieltsDraft." + draftId, field.value); } catch (e) { /* ignore */ }
            var wcSec = field.closest("section");
            var wc = wcSec ? wcSec.querySelector("[data-ielts-wc]") : null;
            if (wc) wc.textContent = String(wordCount(field.value));
        });
        rootAtLoad.addEventListener("change", function (event) {
            var input = event.target;
            if (!input) return;
            if (input.hasAttribute("data-ielts-lesson-answer") && !state.lessonChecked) {
                state.lessonAnswer = Number(input.value);
                var checkBtn = root.querySelector("[data-ielts-lesson-check]"); if (checkBtn) checkBtn.disabled = false;
                return;
            }
            if (input.hasAttribute("data-ielts-practice-multi") && !state.practiceSubmitted) {
                var mk = input.getAttribute("data-ielts-practice-multi");
                var cur = Array.isArray(state.practiceAnswers[mk]) ? state.practiceAnswers[mk].slice() : [];
                if (input.checked && cur.indexOf(input.value) === -1) cur.push(input.value);
                if (!input.checked) cur = cur.filter(function (v) { return v !== input.value; });
                state.practiceAnswers[mk] = cur;
                return;
            }
            if (input.hasAttribute("data-ielts-practice-answer") && !state.practiceSubmitted) {
                state.practiceAnswers[input.getAttribute("data-ielts-practice-answer")] = input.value;
                return;
            }
            if (input.hasAttribute("data-ielts-rate")) {
                var rater = input.closest("[data-ielts-rater]"), vals = [];
                rater.querySelectorAll("fieldset").forEach(function (fs) { var c = fs.querySelector("input:checked"); vals.push(c ? c.value : null); });
                var est = rater.querySelector("[data-ielts-estimate]");
                var allIn = vals.every(function (v) { return v; });
                if (est) est.innerHTML = bandEstimate(vals) ? ('Your estimate so far: <strong>Band ' + bandEstimate(vals) + '</strong>' + (allIn ? '' : ' (choose all four)')) : '';
                var btn = rater.querySelector("[data-ielts-task-complete]"); if (btn) btn.disabled = !allIn;
                if (allIn) { try { window.localStorage.setItem("ieltsRating." + rater.getAttribute("data-ielts-rater"), JSON.stringify(vals)); } catch (e) { /* ignore */ } }
                return;
            }
            if (input.hasAttribute("data-ielts-check")) {
                state.checks[input.getAttribute("data-ielts-check")] = input.checked;
                var boxes = root.querySelectorAll("[data-ielts-check]");
                var allOn = boxes.length > 0;
                boxes.forEach(function (b) { if (!b.checked) allOn = false; });
                var doneBtn = root.querySelector("[data-ielts-task-complete]");
                if (doneBtn) doneBtn.disabled = !allOn;
                return;
            }
            if (!input.hasAttribute("data-ielts-answer") || state.quizSubmitted) return;
            var id = input.getAttribute("data-ielts-answer");
            if (input.type === "checkbox") {
                var vals = state.answers[id] || [];
                if (input.checked && vals.indexOf(input.value) === -1) vals.push(input.value);
                if (!input.checked) vals = vals.filter(function (v) { return v !== input.value; });
                state.answers[id] = vals;
            } else state.answers[id] = input.value;
        });
    }

    ns.route = route;
    ns.getTrack = function () { return state.track; };
    ns.tracks = Object.keys(TRACKS);
    ns.views = Object.keys(VIEWS).filter(Boolean);
    window.showIELTS = show;
})();
