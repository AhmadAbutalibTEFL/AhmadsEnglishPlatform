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
          topics: ["Skimming and scanning", "True / False / Not Given", "Matching headings", "Completion questions", "Academic and General Training practice sets"], status: "available", hub: "reading" },
        { id: "s5-6", label: "Sessions 5\u20136", skill: "Writing", title: "Writing Task 1 and Task 2",
          topics: ["Task 2 essay structure", "Task 1 reports and letters", "Coherence and cohesion", "Practice tasks with model answers"], status: "available", hub: "writing" },
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

    var VIEWS = { "": 1, course: 1, library: 1, listening: 1, reading: 1, writing: 1, speaking: 1 };

    /* ---------- state ---------- */

    var state = { view: "", track: loadTrack(), quiz: false, quizSubmitted: false, answers: {}, lessonId: null, lessonSkill: "listening", lessonChecked: false, lessonAnswer: null, practiceId: null, practiceAnswers: {}, practiceSubmitted: false, taskId: null, checks: {} };
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
        var html = header("IELTS \u00b7 " + trackLabel().toUpperCase(), "IELTS Preparation",
            "Prepare for all four IELTS skills. Follow the guided course or choose what to practise yourself.");
        html += trackPicker();

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
            "What the IELTS Listening test involves, with an orientation quiz, strategy lessons and original audio practice.");
        if (!D) {
            return html + '<div class="ielts-banner">Listening information could not be loaded.</div>' +
                backRow(goButton("\u2190 IELTS dashboard", "", "secondary-button"));
        }

        html += '<div class="ielts-banner ielts-banner-preview">' + status("Learning module", "open") +
            ' Start with the orientation quiz, then study the question-type lessons and listening sub-skills below. The mini-practices use original illustrative text; they are not full audio-based IELTS tests.</div>';
        html += '<p class="ielts-note ielts-track-note">You are viewing the <strong>' + esc(trackLabel()) + '</strong> track. ' +
            'The Listening test is the same for Academic and General Training, so this page does not change with your choice.</p>';
        html += '<section class="ielts-card ielts-quiz-launch"><p class="ielts-session-label">First interactive activity</p>' +
            '<h3>Intro to IELTS Listening: Check Your Understanding</h3>' +
            '<p>12 marks · 11 questions, including one choose-two question. Check your understanding of the test format.</p>' + bestLine("listening-quiz") +
            '<button type="button" class="start-button" data-ielts-quiz-start>Start activity →</button></section>';

        // overview
        html += '<h3 class="ielts-heading">Listening at a glance</h3><dl class="ielts-facts">';
        D.facts.forEach(function (f) { html += '<div class="ielts-fact"><dt>' + esc(f.label) + '</dt><dd>' + esc(f.value) + '</dd></div>'; });
        html += '</dl>';

        // four parts (collapsed: tap to open)
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

        // question-type library: one collapsed block per group, tap to open
        html += '<h3 class="ielts-heading">Question types</h3>' +
            '<p class="ielts-legend"><strong>Status key:</strong> ' + status("Available", "open") + ' ready to use ' +
            status("Preview", "preview") + ' partly built ' + status("Planned", "planned") + ' not built yet</p>';
        D.questionGroups.forEach(function (g) {
            var groupHtml = '<p class="ielts-note">' + esc(g.summary) + '</p><ul class="ielts-type-rows">';
            g.types.forEach(function (t) {
                groupHtml += '<li class="ielts-type-row"><div><strong>' + esc(t.title) + '</strong>' +
                    '<span class="ielts-type-sum">' + esc(t.summary) + '</span>' +
                    '<span class="ielts-type-meta">' + (t.session ? 'Guided Course \u00b7 Session ' + t.session : 'Guided Course placement to be confirmed') + '</span></div>' +
                    status(statusName(t.status), t.status === "available" ? "open" : t.status) + '</li>';
            });
            groupHtml += '</ul>';
            html += disclosure(g.title + ' (' + g.types.length + ')', groupHtml);
        });

        // Teaching pathway built from the instructor's handout (pp. 7–16), with original illustrative mini-practice.
        html += '<h3 class="ielts-heading">Learn the question types and strategies</h3>' +
            "<p>Each lesson includes a step-by-step strategy, Do's and Don'ts, a worked example, and a quick self-check.</p>" +
            '<div class="ielts-lesson-grid">';
        LISTENING_LESSONS.forEach(function (L) {
            html += '<article class="ielts-card ielts-lesson-card"><p class="ielts-session-label">' +
                (L.session === 1 ? 'Session 1' : 'Session 2') + ' · ' + esc(L.type) + '</p><h3>' + esc(L.title) + '</h3>' +
                '<p>' + esc(L.purpose) + '</p><button type="button" class="secondary-button" data-ielts-lesson="' + esc(L.id) + '">Open lesson →</button></article>';
        });
        html += '</div>';

        // what is coming (collapsed: tap to open)
        var futureHtml = '<ul class="ielts-future">';
        D.futureFeatures.forEach(function (f) { futureHtml += '<li>' + esc(f) + ' ' + status("Planned", "planned") + '</li>'; });
        futureHtml += '</ul>';
        html += disclosure('Coming to Listening', futureHtml);

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

    function findReadingSet(id) {
        var sets = (ns.readingData || {}).practiceSets || [];
        for (var i = 0; i < sets.length; i++) if (sets[i].id === id) return sets[i];
        return null;
    }

    function findWritingTask(id) {
        var tasks = (ns.writingData || {}).tasks || [];
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

    function lessonsGrid(lessons) {
        var html = '<div class="ielts-grid">';
        lessons.forEach(function (L) {
            var checked = ns.progress && ns.progress.mastered("lesson:" + L.id);
            html += '<article class="ielts-card"><p class="ielts-session-label">Session ' + L.session + ' \u00b7 ' + esc(L.type) + '</p>' +
                '<h3>' + esc(L.title) + (checked ? ' \u2713' : '') + '</h3>' +
                '<p>' + esc(L.purpose) + '</p>' +
                '<button type="button" class="secondary-button" data-ielts-lesson="' + esc(L.id) + '">Open lesson \u2192</button></article>';
        });
        return html + '</div>';
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
        state.lessonSkill = skillId;
        var skillTitle = skillById(skillId).title;
        var phases = PHASE_LABELS[skillId] || PHASE_LABELS.listening;
        var html = header('IELTS \u00b7 ' + skillTitle.toUpperCase() + ' \u00b7 SESSION ' + L.session, L.title, L.purpose);
        html += '<div class="ielts-lesson-toolbar">' + status(L.type, 'open') + '<span class="ielts-note">Original lesson and example \u00b7 tap a section to open it</span></div>';
        html += disclosure(phases[0], '<ul class="ielts-lesson-list">' + L.before.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        html += disclosure(phases[1], '<ul class="ielts-lesson-list">' + L.during.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        if (L.after.length) html += disclosure(phases[2], '<ul class="ielts-lesson-list">' + L.after.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        html += '<div class="ielts-paths">';
        html += disclosure('Do', '<ul class="ielts-lesson-list">' + L.dos.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        html += disclosure('Don\'t', '<ul class="ielts-lesson-list">' + L.donts.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
        html += '</div>';
        html += '<section class="ielts-card ielts-worked-example"><p class="ielts-session-label">Worked example \u00b7 original illustrative text</p><blockquote>' + esc(L.example) + '</blockquote>' +
            '<h3>Think it through</h3><p><strong>' + esc(L.question) + '</strong></p><div class="ielts-practice-options">';
        L.options.forEach(function (opt, i) {
            html += '<label class="ielts-option"><input type="radio" name="ielts-lesson-answer" value="' + i + '" data-ielts-lesson-answer ' + (String(state.lessonAnswer) === String(i) ? 'checked' : '') + (state.lessonChecked ? ' disabled' : '') + '><span>' + esc(opt) + '</span></label>';
        });
        html += '</div>';
        if (!state.lessonChecked) html += '<button type="button" class="start-button" data-ielts-lesson-check ' + (state.lessonAnswer === null ? 'disabled' : '') + '>Check answer</button>';
        else html += '<p class="ielts-answer-feedback ' + (state.lessonAnswer === L.answer ? 'ielts-answer-correct' : 'ielts-answer-incorrect') + '"><strong>' + (state.lessonAnswer === L.answer ? 'Correct.' : 'Not quite.') + '</strong> ' + esc(L.feedback) + '</p><button type="button" class="secondary-button" data-ielts-lesson-retry>Try again</button>';
        html += '</section>';
        if (skillId === "listening" && ns.audioPractice && typeof ns.audioPractice.renderForLesson === "function") {
            html += ns.audioPractice.renderForLesson(L.id);
        }
        var list = lessonsForSkill(skillId);
        var li = list.indexOf(L);
        var nav = '';
        if (li > 0) nav += '<button type="button" class="secondary-button" data-ielts-lesson="' + esc(list[li - 1].id) + '">\u2190 Previous lesson</button>';
        nav += goButton('All ' + skillTitle + ' lessons', skillId, 'secondary-button');
        if (li < list.length - 1) nav += '<button type="button" class="start-button" data-ielts-lesson="' + esc(list[li + 1].id) + '">Next lesson \u2192</button>';
        html += '<div class="ielts-back-row">' + nav + '</div>';
        return html;
    }

    /* ---------- READING ---------- */

    function viewReading() {
        var D = ns.readingData;
        var html = header('IELTS \u00b7 READING \u00b7 ' + trackLabel().toUpperCase(), 'Reading',
            'What the IELTS Reading test involves, with strategy lessons and original practice sets with full answer keys.');
        if (!D) {
            return html + '<div class="ielts-banner">Reading information could not be loaded.</div>' +
                backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        }
        html += '<div class="ielts-banner ielts-banner-preview">' + status('Learning module', 'open') +
            ' Study the four strategy lessons, then take a practice set. Every set is original, auto-scored, and shows the answer key with the exact passage evidence after you submit.</div>';
        html += '<p class="ielts-note ielts-track-note">You are viewing the <strong>' + esc(trackLabel()) + '</strong> track. ' +
            'Academic and General Training Reading differ, so each practice set below is marked with its track.</p>';
        html += '<h3 class="ielts-heading">Reading at a glance</h3>' + factsBlock(D);
        html += trackPair(D);
        html += disclosure('The question types (' + D.questionTypes.length + ')',
            '<ul class="ielts-type-list">' + D.questionTypes.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>');
        html += sourceNote(D);
        html += '<h3 class="ielts-heading">Strategy lessons</h3>' + lessonsGrid(D.lessons);
        html += '<h3 class="ielts-heading">Practice sets</h3><div class="ielts-grid">';
        D.practiceSets.forEach(function (set) {
            var key = 'reading-set:' + set.id;
            var attempted = ns.progress && ns.progress.best(key) !== null;
            html += '<article class="ielts-card"><p class="ielts-session-label">' + (set.track === 'general' ? 'General Training' : 'Academic') + ' \u00b7 ' + set.questions.length + ' questions</p>' +
                '<h3>' + esc(set.title) + '</h3><p>' + esc(set.intro) + '</p>' + bestLine(key) +
                '<button type="button" class="start-button" data-ielts-practice="' + esc(set.id) + '">' + (attempted ? 'Retry set \u2192' : 'Start set \u2192') + '</button></article>';
        });
        html += '</div>';
        html += backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        return html;
    }

    function viewReadingSet() {
        var set = findReadingSet(state.practiceId);
        if (!set) { state.practiceId = null; return viewReading(); }
        var html = header('IELTS \u00b7 READING \u00b7 PRACTICE', set.title, set.intro);
        if (state.practiceSubmitted) {
            var total = set.questions.length, correct = 0;
            set.questions.forEach(function (q, i) { if (Number(state.practiceAnswers[i]) === q.answer) correct += 1; });
            var pct = Math.round(correct / total * 100);
            html += '<div class="ielts-card ielts-quiz-result"><h3>Your result</h3><p class="ielts-quiz-score">' + correct + ' / ' + total + ' \u00b7 ' + pct + '%</p>' +
                '<p>' + (pct >= (ns.progress ? ns.progress.masteryPct : 80) ? 'Mastered - great work.' : 'Review the answer key below - every answer shows its passage evidence - then try again.') + '</p>' + bestLine('reading-set:' + set.id) + '</div>';
        }
        html += '<section class="ielts-card ielts-passage"><p class="ielts-session-label">Reading passage \u00b7 original text</p><h3>' + esc(set.passageTitle) + '</h3>' +
            set.passage.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</section>';
        html += '<form class="ielts-quiz-form" data-ielts-practice-form>';
        set.questions.forEach(function (q, i) {
            var chosen = state.practiceAnswers[i];
            var isCorrect = state.practiceSubmitted && Number(chosen) === q.answer;
            html += '<fieldset class="ielts-card ielts-question' + (state.practiceSubmitted ? (isCorrect ? ' ielts-answer-correct' : ' ielts-answer-incorrect') : '') + '"><legend>Question ' + (i + 1) + '</legend>' +
                '<p class="ielts-question-prompt">' + esc(q.prompt) + '</p>';
            q.options.forEach(function (opt, j) {
                html += '<label class="ielts-option"><input type="radio" name="pq' + i + '" value="' + j + '" data-ielts-practice-answer="' + i + '"' +
                    (String(chosen) === String(j) ? ' checked' : '') + (state.practiceSubmitted ? ' disabled' : '') + '> <span>' + esc(opt) + '</span>' +
                    (state.practiceSubmitted && q.answer === j ? '<strong class="ielts-correct-label">Correct answer</strong>' : '') + '</label>';
            });
            if (state.practiceSubmitted) {
                html += '<p class="ielts-answer-feedback"><strong>' + (isCorrect ? 'Correct' : 'Correct answer: ' + esc(q.options[q.answer])) + '</strong> \u2014 ' + esc(q.explanation) + '</p>';
            }
            html += '</fieldset>';
        });
        html += '</form>';
        if (!state.practiceSubmitted) html += '<button type="button" class="start-button" data-ielts-practice-submit>Submit answers</button>';
        else html += '<button type="button" class="start-button" data-ielts-practice-retry>Try again</button>';
        html += backRow('<button type="button" class="secondary-button" data-ielts-practice-back>\u2190 Back to Reading</button>');
        return html;
    }

    /* ---------- WRITING ---------- */

    function viewWriting() {
        var D = ns.writingData;
        var html = header('IELTS \u00b7 WRITING \u00b7 ' + trackLabel().toUpperCase(), 'Writing',
            'What the IELTS Writing test involves, with strategy lessons and original practice tasks with model answers.');
        if (!D) {
            return html + '<div class="ielts-banner">Writing information could not be loaded.</div>' +
                backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        }
        html += '<div class="ielts-banner ielts-banner-preview">' + status('Learning module', 'open') +
            ' Study the three lessons, then write a practice task in the built-in editor. Your draft saves on this device as you type, and each task has an original model answer and a self-check on the four official criteria.</div>';
        html += '<p class="ielts-note ielts-track-note">You are viewing the <strong>' + esc(trackLabel()) + '</strong> track. ' +
            'Task 1 differs between Academic and General Training; Task 2 is the same essay for both.</p>';
        html += '<h3 class="ielts-heading">Writing at a glance</h3>' + factsBlock(D);
        html += trackPair(D);
        html += '<h3 class="ielts-heading">How Writing is marked</h3>' + criteriaCards(D.criteria);
        html += sourceNote(D);
        html += '<h3 class="ielts-heading">Strategy lessons</h3>' + lessonsGrid(D.lessons);
        html += '<h3 class="ielts-heading">Practice tasks</h3><div class="ielts-grid">';
        D.tasks.forEach(function (t) {
            var key = 'writing-task:' + t.id;
            var done = ns.progress && ns.progress.best(key) !== null;
            html += '<article class="ielts-card"><p class="ielts-session-label">' +
                (t.track === 'both' ? 'Both tracks' : t.track === 'general' ? 'General Training' : 'Academic') + ' \u00b7 ' + t.minWords + '+ words \u00b7 ~' + t.minutes + ' min</p>' +
                '<h3>' + esc(t.title) + (done ? ' \u2713' : '') + '</h3>' +
                '<p>' + esc(t.instructions.slice(0, 110)) + '\u2026</p>' +
                (done ? '<p class="ielts-note">Completed \u00b7 recorded in your progress</p>' : '') +
                '<button type="button" class="start-button" data-ielts-task="' + esc(t.id) + '">' + (done ? 'Open task again \u2192' : 'Open task \u2192') + '</button></article>';
        });
        html += '</div>';
        html += backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        return html;
    }

    function dataTableHtml(t) {
        if (!t.dataTable) return '';
        var dt = t.dataTable;
        var html = '<table class="ielts-data-table"><caption class="ielts-note">' + esc(dt.caption) + '</caption><thead><tr>';
        dt.headers.forEach(function (h) { html += '<th>' + esc(h) + '</th>'; });
        html += '</tr></thead><tbody>';
        dt.rows.forEach(function (r) {
            html += '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
        });
        return html + '</tbody></table>';
    }

    function criteriaChecklist(criteria, activityKey, hint) {
        var recorded = ns.progress && ns.progress.best(activityKey) !== null;
        var html = '<section class="ielts-card"><p class="ielts-session-label">Self-evaluation</p><h3>Check yourself against the official criteria</h3>' +
            '<p class="ielts-note">' + esc(hint) + '</p>';
        criteria.forEach(function (c, i) {
            html += '<label class="ielts-check-item"><input type="checkbox" data-ielts-check="' + i + '"' + (recorded ? ' checked disabled' : '') + '>' +
                '<span><strong>' + esc(c.name) + ':</strong> ' + esc(c.plain) + '</span></label>';
        });
        if (recorded) html += '<p class="ielts-answer-feedback ielts-answer-correct"><strong>Completed.</strong> Recorded in your progress.</p>';
        else html += '<button type="button" class="start-button" data-ielts-task-complete="' + esc(activityKey) + '" disabled>Mark as complete</button>';
        return html + '</section>';
    }

    function viewWritingTask() {
        var t = findWritingTask(state.taskId);
        if (!t) { state.taskId = null; return viewWriting(); }
        var draft = loadDraft(t.id);
        var html = header('IELTS \u00b7 WRITING \u00b7 PRACTICE', t.title,
            'About ' + t.minutes + ' minutes \u00b7 write at least ' + t.minWords + ' words.');
        html += '<section class="ielts-card"><p class="ielts-session-label">The task \u00b7 original prompt</p><p><strong>' + esc(t.instructions) + '</strong></p>' +
            dataTableHtml(t) + '</section>';
        html += '<section class="ielts-card"><p class="ielts-session-label">Your answer</p>' +
            '<textarea class="ielts-editor" rows="12" data-ielts-draft="' + esc(t.id) + '" placeholder="Write your answer here\u2026">' + esc(draft) + '</textarea>' +
            '<p class="ielts-word-count">Words: <span data-ielts-wc>' + wordCount(draft) + '</span> / ' + t.minWords + ' minimum</p>' +
            '<p class="ielts-note">Your draft saves automatically on this device as you type.</p></section>';
        html += disclosure('Model answer - compare after you write',
            t.modelAnswer.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
            '<p class="ielts-note">One of many good answers \u00b7 original, written to a band 8-9 standard.</p>');
        html += criteriaChecklist(ns.writingData.criteria, 'writing-task:' + t.id, t.checklistHint);
        html += backRow('<button type="button" class="secondary-button" data-ielts-task-back>\u2190 Back to Writing</button>');
        return html;
    }

    /* ---------- SPEAKING ---------- */

    function viewSpeaking() {
        var D = ns.speakingData;
        var html = header('IELTS \u00b7 SPEAKING \u00b7 ' + trackLabel().toUpperCase(), 'Speaking',
            'What the IELTS Speaking test involves, with a lesson per part and original practice with sample answers.');
        if (!D) {
            return html + '<div class="ielts-banner">Speaking information could not be loaded.</div>' +
                backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        }
        html += '<div class="ielts-banner ielts-banner-preview">' + status('Learning module', 'open') +
            ' One lesson per part of the test, then practise with an original cue card and discussion set. You practise aloud on your own - nothing is recorded or uploaded.</div>';
        html += '<p class="ielts-note ielts-track-note">You are viewing the <strong>' + esc(trackLabel()) + '</strong> track. ' +
            'The Speaking test is identical for Academic and General Training, so this page does not change with your choice.</p>';
        html += '<h3 class="ielts-heading">Speaking at a glance</h3>' + factsBlock(D);
        html += '<div class="ielts-grid">';
        D.parts.forEach(function (p) {
            html += '<article class="ielts-card"><p class="ielts-session-label">' + esc(p.name) + ' \u00b7 ' + esc(p.time) + '</p>' +
                '<p>' + esc(p.what) + '</p><p class="ielts-note">' + esc(p.tip) + '</p></article>';
        });
        html += '</div>';
        html += '<h3 class="ielts-heading">How Speaking is marked</h3>' + criteriaCards(D.criteria);
        html += sourceNote(D);
        html += '<h3 class="ielts-heading">Strategy lessons</h3>' + lessonsGrid(D.lessons);
        html += '<h3 class="ielts-heading">Practice</h3><div class="ielts-grid">';
        D.practice.forEach(function (item) {
            var key = 'speaking-practice:' + item.id;
            var done = ns.progress && ns.progress.best(key) !== null;
            html += '<article class="ielts-card"><p class="ielts-session-label">Part ' + item.part + ' practice</p>' +
                '<h3>' + esc(item.title) + (done ? ' \u2713' : '') + '</h3>' +
                '<p>' + esc(item.prepNote) + '</p>' +
                (done ? '<p class="ielts-note">Completed \u00b7 recorded in your progress</p>' : '') +
                '<button type="button" class="start-button" data-ielts-task="' + esc(item.id) + '">' + (done ? 'Open practice again \u2192' : 'Open practice \u2192') + '</button></article>';
        });
        html += '</div>';
        html += backRow(goButton('\u2190 IELTS dashboard', '', 'secondary-button'));
        return html;
    }

    function viewSpeakingItem() {
        var item = findSpeakingItem(state.taskId);
        if (!item) { state.taskId = null; return viewSpeaking(); }
        var html = header('IELTS \u00b7 SPEAKING \u00b7 PRACTICE', item.title, item.prepNote);
        if (item.kind === 'cuecard') {
            html += '<section class="ielts-card"><p class="ielts-session-label">Cue card \u00b7 original</p><h3>' + esc(item.cueCard.topic) + '</h3>' +
                '<p>You should say:</p><ul class="ielts-cue-bullets">' +
                item.cueCard.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></section>';
            var notes = loadDraft(item.id);
            html += '<section class="ielts-card"><p class="ielts-session-label">Your keyword notes</p>' +
                '<textarea class="ielts-editor" rows="4" data-ielts-draft="' + esc(item.id) + '" placeholder="One or two words per bullet point\u2026">' + esc(notes) + '</textarea>' +
                '<p class="ielts-note">Notes save automatically on this device.</p></section>';
        } else {
            html += '<section class="ielts-card"><p class="ielts-session-label">Discussion questions \u00b7 original</p><ul class="ielts-cue-bullets">' +
                item.questions.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ul></section>';
        }
        var sampleBody = item.sampleAnswer.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
        if (item.samplePhrases && item.samplePhrases.length) {
            sampleBody += '<p class="ielts-note">Useful phrases: ' + item.samplePhrases.map(esc).join(' \u00b7 ') + '</p>';
        }
        html += disclosure('Sample answer - compare after you practise', sampleBody +
            '<p class="ielts-note">One of many good answers \u00b7 original, written to a band 8-9 standard.</p>');
        html += criteriaChecklist(ns.speakingData.criteria, 'speaking-practice:' + item.id,
            'Judge your spoken practice honestly against the four official criteria.');
        html += backRow('<button type="button" class="secondary-button" data-ielts-task-back>\u2190 Back to Speaking</button>');
        return html;
    }

    /* ---------- dashboard progress card ---------- */

    function progressCard() {
        if (!ns.progress) {
            return '<div class="ielts-card ielts-progress"><p><strong>No progress recorded yet.</strong></p>' +
                '<p class="ielts-note">Complete a quiz, lesson self-check or practice activity and your progress appears here.</p></div>';
        }
        var groups = [
            { label: 'Listening', ids: ['listening-quiz'].concat(LISTENING_LESSONS.map(function (l) { return 'lesson:' + l.id; })) },
            { label: 'Reading', ids: lessonsForSkill('reading').map(function (l) { return 'lesson:' + l.id; }).concat(((ns.readingData || {}).practiceSets || []).map(function (s) { return 'reading-set:' + s.id; })) },
            { label: 'Writing', ids: lessonsForSkill('writing').map(function (l) { return 'lesson:' + l.id; }).concat(((ns.writingData || {}).tasks || []).map(function (t) { return 'writing-task:' + t.id; })) },
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

    function render() {
        if (!root) return;
        var v = state.view, html;
        if (state.lessonId) html = viewLessonPage();
        else if (v === "listening" && state.quiz) html = viewListeningQuiz();
        else if (v === "reading" && state.practiceId) html = viewReadingSet();
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
    }

    /* ---------- public entry point ---------- */

    function show(view, track) {
        view = (typeof view === "string" && Object.prototype.hasOwnProperty.call(VIEWS, view)) ? view : "";
        if (validTrack(track)) state.track = track;
        if (view !== state.view) { state.quiz = false; state.quizSubmitted = false; state.answers = {}; state.lessonId = null; state.lessonChecked = false; state.lessonAnswer = null; state.practiceId = null; state.practiceAnswers = {}; state.practiceSubmitted = false; state.taskId = null; state.checks = {}; }
        state.view = view;

        root = document.getElementById("ielts-root");
        if (typeof window.hideAllScreens === "function") window.hideAllScreens();
        var screen = document.getElementById("ielts-screen");
        if (screen) screen.style.display = "block";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function route() {
        return "ielts" + (state.view ? "/" + state.view : "") + "?track=" + state.track;
    }

    function onClick(event) {
        var el = event.target.closest ? event.target.closest("button") : null;
        if (!el || !root || !root.contains(el)) return;

        if (el.hasAttribute("data-ielts-lesson")) {
            state.lessonId = el.getAttribute("data-ielts-lesson"); state.lessonChecked = false; state.lessonAnswer = null; render();
            window.scrollTo({top:0,behavior:"smooth"});
        } else if (el.hasAttribute("data-ielts-lesson-check")) {
            if (state.lessonAnswer !== null) {
                state.lessonChecked = true;
                var foundL = findLessonAnywhere(state.lessonId);
                if (ns.progress && foundL && state.lessonAnswer === foundL.lesson.answer) ns.progress.record("lesson:" + foundL.lesson.id, 100);
                render();
            }
        } else if (el.hasAttribute("data-ielts-lesson-retry")) {
            state.lessonChecked = false; state.lessonAnswer = null; render();
        } else if (el.hasAttribute("data-ielts-quiz-start")) {
            state.quiz = true; state.quizSubmitted = false; state.answers = {}; render();
        } else if (el.hasAttribute("data-ielts-quiz-back")) {
            state.quiz = false; state.quizSubmitted = false; state.answers = {}; render();
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
        } else if (el.hasAttribute("data-ielts-practice")) {
            state.practiceId = el.getAttribute("data-ielts-practice");
            state.practiceAnswers = {}; state.practiceSubmitted = false; render();
            window.scrollTo({top:0,behavior:"smooth"});
        } else if (el.hasAttribute("data-ielts-practice-submit")) {
            var pset = findReadingSet(state.practiceId);
            if (pset) {
                var pmissing = pset.questions.some(function (q, i) { return typeof state.practiceAnswers[i] !== "string"; });
                if (pmissing) { window.alert("Please answer every question before submitting."); return; }
                state.practiceSubmitted = true;
                if (ns.progress) {
                    var pcorrect = 0;
                    pset.questions.forEach(function (q, i) { if (Number(state.practiceAnswers[i]) === q.answer) pcorrect += 1; });
                    ns.progress.record("reading-set:" + pset.id, Math.round(pcorrect / pset.questions.length * 100));
                }
                render();
                window.scrollTo({top:0,behavior:"smooth"});
            }
        } else if (el.hasAttribute("data-ielts-practice-retry")) {
            state.practiceAnswers = {}; state.practiceSubmitted = false; render();
        } else if (el.hasAttribute("data-ielts-practice-back")) {
            state.practiceId = null; state.practiceAnswers = {}; state.practiceSubmitted = false; render();
        } else if (el.hasAttribute("data-ielts-task")) {
            state.taskId = el.getAttribute("data-ielts-task"); state.checks = {}; render();
            window.scrollTo({top:0,behavior:"smooth"});
        } else if (el.hasAttribute("data-ielts-task-back")) {
            state.taskId = null; state.checks = {}; render();
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
            var nextView = el.getAttribute("data-ielts-view");
            if (nextView === "listening") { state.lessonId = null; state.lessonChecked = false; state.lessonAnswer = null; state.quiz = false; }
            window.showIELTS(nextView);
        } else if (el.hasAttribute("data-ielts-courses")) {
            if (typeof window.showCourseHub === "function") window.showCourseHub();
        }
    }

    var rootAtLoad = document.getElementById("ielts-root");
    if (rootAtLoad) {
        rootAtLoad.addEventListener("click", onClick);
        rootAtLoad.addEventListener("input", function (event) {
            var field = event.target;
            if (!field || !field.hasAttribute || !field.hasAttribute("data-ielts-draft")) return;
            var draftId = field.getAttribute("data-ielts-draft");
            try { window.localStorage.setItem("ieltsDraft." + draftId, field.value); } catch (e) { /* ignore */ }
            var wc = root.querySelector("[data-ielts-wc]");
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
            if (input.hasAttribute("data-ielts-practice-answer") && !state.practiceSubmitted) {
                state.practiceAnswers[input.getAttribute("data-ielts-practice-answer")] = input.value;
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
