/* =========================================================
   IELTS LISTENING: audio mini-practice

   Original practice units for the Listening strategy lessons.
   Each unit plays one of the generated recordings in
   audio/ielts-listening/, asks a small set of questions, then
   reveals answer feedback and the transcript after submission.

   Load BEFORE ielts.js. ielts.js calls
   window.IELTS.audioPractice.renderForLesson(lessonId) when it
   renders a Listening lesson; this file owns everything else:
   data, per-unit state, rendering of the practice body, and its
   own click/change handling (scoped to its own cards).

   Question kinds:
     single - choose one option
     multi  - choose exactly two options (both must be correct)
     text   - type a short answer; matched case-insensitively
              against a list of acceptable answers

   The recordings are synthetic Edge TTS practice voices, not
   official IELTS recordings. All questions and transcripts are
   original. See ielts/CONTENT_INVENTORY.md.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    var AUDIO_BASE = "audio/ielts-listening/";

    /* ---------------- content ---------------- */

    var UNITS = {
        "ielts-l1-booking": {
            title: "Booking a course",
            context: "A caller telephones a centre to book a class.",
            questions: [
                { kind: "single", prompt: "Which class does the caller book?",
                  options: ["The 9:00 Saturday class", "The new 10:30 Saturday class", "A weekday evening class"], answer: 1,
                  explanation: "The 9:00 group is full. The receptionist offers the new Saturday class at 10:30, and the caller accepts it." },
                { kind: "single", prompt: "Why can't the caller take the 9:00 class?",
                  options: ["It was cancelled", "It moved to a different day", "That group is full"], answer: 2,
                  explanation: "The receptionist says the class 'used to start at nine, but that group is full'." }
            ],
            transcript: "Good morning, Greenfield Centre. How can I help?\nI'd like to book the photography course. Is the Saturday class at nine?\nIt used to start at nine, but that group is full. The new Saturday class begins at 10:30 and we still have places.\n10:30 works for me. Please book me onto that one."
        },
        "ielts-l1-course-options": {
            title: "Choosing an evening course",
            context: "A caller asks about an evening English course.",
            questions: [
                { kind: "single", prompt: "Which day does the caller choose?",
                  options: ["Tuesday", "Thursday", "Saturday"], answer: 1,
                  explanation: "The Tuesday group is full, so the caller takes the Thursday class instead. The first day mentioned is a distractor." },
                { kind: "single", prompt: "What costs extra?",
                  options: ["The digital materials", "The printed book", "The enrollment form"], answer: 1,
                  explanation: "Digital materials are included in the fee; the printed book costs an extra £12." },
                { kind: "multi", prompt: "Which TWO statements are true?",
                  options: ["The Tuesday group still has places", "The Thursday class runs from 6:00 to 7:30", "The digital materials are included", "The printed book is included in the fee"], answer: [1, 2],
                  explanation: "The Thursday class runs 6:00-7:30 and the digital materials are included. The Tuesday group is full and the printed book costs extra." }
            ],
            transcript: "Good afternoon, Westbridge Language Centre. How can I help you?\nI'm interested in the evening English course. Does it run on Tuesdays?\nThe Tuesday group is full now, but we have a Thursday class from 6:00 until 7:30.\nThursday would be better. Is the course book included in the fee?\nThe digital materials are included. The printed book costs an extra £12.\nThat's fine. Please send me the enrollment form."
        },
        "ielts-l3-multiple-choice": {
            title: "Discussing a report",
            context: "Two students discuss a report on urban transport.",
            questions: [
                { kind: "single", prompt: "What will the report focus on?",
                  options: ["Bus services", "Cycling", "Public transport fares"], answer: 1,
                  explanation: "The writer planned to focus on bus services, but found the survey results about cycling more interesting. The first plan is a distractor." },
                { kind: "single", prompt: "What did most survey respondents say?",
                  options: ["They cycle more than before", "They would cycle more if routes were safer", "They prefer using the bus"], answer: 1,
                  explanation: "The number cycling has not increased much, but most respondents said they would cycle more if there were safer routes." },
                { kind: "single", prompt: "What will the writer recommend?",
                  options: ["Buying more bicycles for the public scheme", "Improving protected cycle lanes first", "Building safer routes after buying bicycles"], answer: 1,
                  explanation: "The writer rejects buying more bicycles and recommends improving protected cycle lanes first." }
            ],
            transcript: "Have you finished the report on urban transport?\nAlmost. I was going to focus on bus services, but the survey results were more interesting than I expected.\nThe cycling data?\nExactly. The number of people cycling hasn't increased much, but most respondents said they'd cycle more if there were safer routes.\nSo what will your recommendation be?\nRather than buying more bicycles for the public scheme, I think the city should improve protected cycle lanes first."
        },
        "ielts-l1-matching": {
            title: "Where to study",
            context: "Three speakers talk about places to study. Match each statement to what you hear.",
            questions: [
                { kind: "single", prompt: "The first speaker says the library...",
                  options: ["is too noisy", "closes too early", "stays open late"], answer: 1,
                  explanation: "The first speaker likes that the library is quiet, but says it closes too early for them." },
                { kind: "single", prompt: "The second speaker likes the study cafe because...",
                  options: ["it is quiet", "it stays open late", "it closes early"], answer: 1,
                  explanation: "The second speaker says the cafe stays open late, although it can get noisy." },
                { kind: "single", prompt: "What does the third speaker decide to do?",
                  options: ["Study at the cafe in the afternoon", "Use the library in the afternoon", "Study at home all day"], answer: 1,
                  explanation: "The third speaker will use the library in the afternoon and go home before it closes." }
            ],
            transcript: "The library is quiet, but it closes too early for me.\nI like the study cafe. It stays open late, although it can get noisy.\nThen I'll use the library in the afternoon and go home before closing."
        },
        "ielts-l1-matching-activities": {
            title: "Choosing a club",
            context: "A speaker compares three clubs and chooses one. Track which details belong to which club.",
            questions: [
                { kind: "single", prompt: "Why did the photography club not suit the speaker?",
                  options: ["It meets indoors", "Meetings are outdoors and the weather has been bad", "It meets on Wednesdays"], answer: 1,
                  explanation: "Most photography club meetings are outdoors and the weather has been awful." },
                { kind: "single", prompt: "Why can't the speaker join the film society?",
                  options: ["It meets on Wednesdays, when the speaker works late", "It focuses on drawing", "It meets too early in the morning"], answer: 0,
                  explanation: "The film society meets on Wednesdays and the speaker works late on Wednesdays." },
                { kind: "single", prompt: "Which group will the speaker try, and why?",
                  options: ["The photography club, to be outdoors", "The film society, to watch films", "The art group, to improve drawing"], answer: 2,
                  explanation: "The art group meets on Saturday mornings, which the speaker can manage, and focuses on drawing." }
            ],
            transcript: "I tried the photography club, but most meetings are outdoors and the weather has been awful.\nI joined the film society. We watch a film on Wednesdays and discuss it afterwards.\nThat sounds interesting, but I work late on Wednesdays. The art group meets on Saturday mornings. They focus on drawing rather than painting.\nI could manage Saturdays. I want to improve my drawing, so I'll try the art group."
        },
        "ielts-l2-campus-map": {
            title: "Finding your way on campus",
            context: "A guide explains where two buildings are. Keep your position as the speaker moves.",
            questions: [
                { kind: "single", prompt: "Where is the student services office?",
                  options: ["The first building on the right after turning left at the fountain", "Opposite the sports hall", "Beside the car park"], answer: 0,
                  explanation: "Walk to the fountain, turn left, and student services is the first building on your right." },
                { kind: "single", prompt: "Where is the computer room?",
                  options: ["Next to the main entrance", "Opposite the sports hall, beside the car park", "In front of the fountain"], answer: 1,
                  explanation: "The computer room is opposite the sports hall and beside the car park." },
                { kind: "single", prompt: "What must you cross to reach the computer room?",
                  options: ["The main path", "The sports hall", "The small bridge"], answer: 2,
                  explanation: "Continue beyond student services and cross the small bridge to reach the computer room." }
            ],
            transcript: "You are standing at the main entrance of the campus. Walk along the path until you reach the fountain. Turn left there and the student services office is the first building on your right. If you need the computer room, continue beyond student services and cross the small bridge. The computer room is opposite the sports hall beside the car park."
        },
        "ielts-l2-directions": {
            title: "In the garden",
            context: "A guide describes a short route through a garden.",
            questions: [
                { kind: "single", prompt: "Where is the greenhouse?",
                  options: ["On the right of the main path", "On the left, opposite the benches", "Behind the tool shed"], answer: 0,
                  explanation: "Walking straight ahead along the main path, the greenhouse is on your right." },
                { kind: "single", prompt: "Where is the tool shed?",
                  options: ["On the right, next to the greenhouse", "On the left, opposite the benches", "Before the main path"], answer: 1,
                  explanation: "Continue past the greenhouse and the tool shed is on the left, opposite the benches." }
            ],
            transcript: "When you enter the garden, walk straight ahead along the main path. The greenhouse is on your right. Continue past it and you'll find the tool shed on the left, opposite the benches."
        },
        "ielts-l2-form-completion": {
            title: "Library membership form",
            context: "Complete the form. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
            questions: [
                { kind: "text", prompt: "1. Name:", accept: ["daniel price"], answerLabel: "Daniel Price",
                  explanation: "The caller gives his name as Daniel Price." },
                { kind: "text", prompt: "2. Postcode:", accept: ["ls6 2qj", "ls62qj"], answerLabel: "LS6 2QJ",
                  explanation: "The postcode is LS6 2QJ. Listen for each letter and number." },
                { kind: "text", prompt: "3. Contact number:", accept: ["07742816935"], answerLabel: "07742816935",
                  explanation: "The phone number is 07742816935." },
                { kind: "text", prompt: "4. Membership starts:", accept: ["3 november", "3rd november", "the 3rd of november", "3rd of november", "november 3", "november 3rd"], answerLabel: "3 November",
                  explanation: "The membership starts on the 3rd of November." }
            ],
            transcript: "Could I take a few details for your library membership?\nOf course. My name is Daniel Price.\nAnd your postcode?\nIt's LS6 2QJ.\nThank you. What is the best number to contact you on?\n07742816935.\nFinally, the membership starts on the 3rd of November."
        },
        "ielts-l1-notes": {
            title: "Science workshop notes",
            context: "Complete the notes. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
            questions: [
                { kind: "text", prompt: "1. Day and date: Thursday the", accept: ["18th", "18", "eighteenth"], answerLabel: "18th",
                  explanation: "The workshop is on Thursday the 18th." },
                { kind: "text", prompt: "2. Start time:", accept: ["2:15", "2.15", "14:15", "two fifteen"], answerLabel: "2:15",
                  explanation: "It starts at 2:15 in the afternoon." },
                { kind: "text", prompt: "3. Students must bring a", accept: ["notebook"], answerLabel: "notebook",
                  explanation: "Students should bring a notebook; all other equipment is provided." }
            ],
            transcript: "The science workshop is on Thursday the 18th. It starts at 2:15 in the afternoon. Please bring a notebook. All other equipment is provided."
        },
        "ielts-l2-museum": {
            title: "Museum information",
            context: "Complete the notes. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
            questions: [
                { kind: "text", prompt: "1. The museum opens at", accept: ["9:30", "9.30", "09:30", "half past nine", "nine thirty"], answerLabel: "9:30",
                  explanation: "It opens at half past nine every morning except Monday." },
                { kind: "text", prompt: "2. The museum is closed on", accept: ["monday", "mondays"], answerLabel: "Monday",
                  explanation: "The museum is open every morning except Monday." },
                { kind: "text", prompt: "3. Guided tours begin at", accept: ["11", "11:00", "11.00", "eleven"], answerLabel: "11",
                  explanation: "Guided tours begin at eleven." },
                { kind: "text", prompt: "4. Visitors should meet beside the", accept: ["main staircase", "staircase"], answerLabel: "main staircase",
                  explanation: "Visitors should meet beside the main staircase." }
            ],
            transcript: "The history museum opens at half past nine every morning except Monday. Guided tours begin at eleven and visitors should meet beside the main staircase."
        },
        "ielts-l3-lecture-notes": {
            title: "Lecture: sleep and memory",
            context: "Complete the notes and answer the question. Write NO MORE THAN TWO WORDS for each gap.",
            questions: [
                { kind: "text", prompt: "1. Sleep helps the brain ______ information collected during the day.", accept: ["organize", "organise"], answerLabel: "organize / organise",
                  explanation: "The lecture says sleep helps the brain organize information. Both spellings are acceptable." },
                { kind: "single", prompt: "2. In the experiment, participants who slept after learning a list of words...",
                  options: ["remembered more items the next morning", "remembered fewer items the next morning", "remembered the same number of items"], answer: 0,
                  explanation: "Participants who slept remembered more items than those who stayed awake." },
                { kind: "text", prompt: "3. Sleep does not replace regular ______; the two work best together.", accept: ["revision"], answerLabel: "revision",
                  explanation: "The researchers stress that sleep does not replace regular revision." }
            ],
            transcript: "Today we're looking at sleep and memory. Research suggests that sleep helps the brain organize information collected during the day. In one experiment, participants who slept after learning a list of words remembered more items the following morning than participants who stayed awake. The effect was strongest when sleep began within a few hours of learning. However, researchers stress that sleep does not replace regular revision; the two work best together."
        },
        "ielts-l2-sentence-completion": {
            title: "The community garden",
            context: "Complete the sentences. Write NO MORE THAN TWO WORDS for each answer.",
            questions: [
                { kind: "text", prompt: "1. The garden was created from an unused ______.", accept: ["car park", "carpark"], answerLabel: "car park",
                  explanation: "Local residents turned an unused car park into a green space." },
                { kind: "text", prompt: "2. Volunteers meet every ______ morning.", accept: ["sunday"], answerLabel: "Sunday",
                  explanation: "Volunteers meet every Sunday morning." },
                { kind: "text", prompt: "3. The most popular feature is the small ______.", accept: ["pond"], answerLabel: "pond",
                  explanation: "The small pond, which attracts birds and insects, is the most popular feature." },
                { kind: "text", prompt: "4. Next year, the group hopes to build a ______.", accept: ["greenhouse", "green house"], answerLabel: "greenhouse",
                  explanation: "The group hopes to build a greenhouse next year." }
            ],
            transcript: "The community garden project began three years ago when local residents turned an unused car park into a green space. Volunteers meet every Sunday morning. They grow vegetables, look after the fruit trees, and teach children how to compost food waste. The most popular feature is the small pond, which attracts birds and insects. Next year, the group hopes to build a greenhouse."
        },
        "ielts-l2-short-answer": {
            title: "The walking tour",
            context: "Answer the questions. Write NO MORE THAN FOUR WORDS for each answer.",
            questions: [
                { kind: "text", prompt: "1. Where will the walking tour begin?", accept: ["at the information desk", "the information desk", "information desk", "information desk inside the railway station", "at the information desk inside the railway station"], answerLabel: "At the information desk (inside the railway station)",
                  explanation: "The tour begins at the information desk inside the railway station." },
                { kind: "text", prompt: "2. How long will the tour last?", accept: ["90 minutes", "about 90 minutes", "1 hour 30 minutes", "one and a half hours", "an hour and a half"], answerLabel: "About 90 minutes",
                  explanation: "The tour lasts about 90 minutes, including a short break by the river." },
                { kind: "text", prompt: "3. What should visitors bring?", accept: ["a bottle of water", "bottle of water", "water"], answerLabel: "A bottle of water",
                  explanation: "Visitors should bring a bottle of water; the map and safety equipment are provided." }
            ],
            transcript: "Where will the walking tour begin? At the information desk inside the railway station at 10:00. How long will the tour last? About 90 minutes, including a short break by the river. What should visitors bring? A bottle of water. We provide the map and safety equipment."
        },
        "ielts-l4-lecture": {
            title: "Trees and city temperatures",
            context: "Listen to a short lecture extract and choose the paraphrase that keeps the original meaning.",
            questions: [
                { kind: "single", prompt: "1. 'Their leaves provide shade' means the same as:",
                  options: ["The leaves block sunlight from the street", "The leaves absorb water from the air", "The leaves produce oxygen for the street"], answer: 0,
                  explanation: "Providing shade means blocking sunlight. The other options change the meaning." },
                { kind: "single", prompt: "2. Which paraphrase keeps the meaning of 'water released from the leaves also cools the surrounding air'?",
                  options: ["The leaves heat the air around them", "Moisture from the leaves lowers the air temperature nearby", "The leaves store water to warm the street"], answer: 1,
                  explanation: "'Water released' becomes 'moisture from the leaves', and 'cools the surrounding air' becomes 'lowers the air temperature nearby'. Same meaning, different words." },
                { kind: "single", prompt: "3. 'Planting trees can reduce the local temperature' is closest in meaning to:",
                  options: ["Trees make the area cooler", "Trees change the local climate permanently", "Trees reduce the number of hot days"], answer: 0,
                  explanation: "Reducing the local temperature means making the area cooler. The other options claim more than the speaker said." }
            ],
            transcript: "Trees can make urban streets more comfortable during summer. Their leaves provide shade, while water released from the leaves also cools the surrounding air. For this reason, planting trees can reduce the local temperature during hot periods."
        }
    };


    /* Map and plan exercises: the plans are drawn with the lettered places left unnamed,
       so the student must follow the spoken directions to find each place. */
    var LETTER_OPTIONS = ["A", "B", "C", "D", "E"];
    UNITS["ielts-l2-campus-map"].visual = { kind: "scene", title: "Campus plan", alt: "Campus plan. The main entrance is at the bottom. A path leads up to a fountain. A second path leads left (west) from the fountain, crossing a stream by a small bridge. Buildings are marked A to F.",
        panels: [{ h: 270, items: [
            { t: "water", x: 78, y: 60, w: 14, h: 190 },
            { t: "text", x: 98, y: 82, s: "stream", size: 10 },
            { t: "road", x1: 180, y1: 236, x2: 180, y2: 160, w: 14 },
            { t: "text", x: 180, y: 256, s: "MAIN ENTRANCE", size: 10, anchor: "middle", weight: "bold" },
            { t: "road", x1: 180, y1: 160, x2: 24, y2: 160, w: 14 },
            { t: "road", x1: 70, y1: 160, x2: 100, y2: 160, w: 20, color: "#fcd34d" },
            { t: "text", x: 85, y: 186, s: "bridge", size: 10, anchor: "middle" },
            { t: "circle", x: 180, y: 160, r: 15, fill: "#bae6fd", stroke: "#38bdf8" },
            { t: "text", x: 180, y: 140, s: "fountain", size: 10, anchor: "middle" },
            { t: "rect", x: 112, y: 114, w: 56, h: 34, fill: "#fde68a", stroke: "#f59e0b", label: "A", size: 14 },
            { t: "rect", x: 24, y: 108, w: 46, h: 38, fill: "#dbeafe", stroke: "#60a5fa", label: "B", size: 14 },
            { t: "rect", x: 24, y: 174, w: 46, h: 46, fill: "#dcfce7", stroke: "#86efac", label: "C", size: 14 },
            { t: "rect", x: 24, y: 58, w: 46, h: 40, fill: "#e5e7eb", stroke: "#9ca3af", label: "D", size: 14 },
            { t: "rect", x: 204, y: 176, w: 70, h: 44, fill: "#ede9fe", stroke: "#c4b5fd", label: "E", size: 14 },
            { t: "rect", x: 204, y: 100, w: 70, h: 44, fill: "#fce7f3", stroke: "#f9a8d4", label: "F", size: 14 }
        ] }] };
    UNITS["ielts-l2-campus-map"].questions.push(
        { kind: "single", prompt: "Look at the campus plan. Which letter is the student services office?", options: LETTER_OPTIONS, answer: 0,
          explanation: "Turn left at the fountain: the first building on your right (the north side of the path) is A." },
        { kind: "single", prompt: "Look at the campus plan. Which letter is the computer room?", options: LETTER_OPTIONS, answer: 1,
          explanation: "Beyond student services, cross the bridge: the computer room is opposite the sports hall (C), beside the car park (D). That is B." });
    UNITS["ielts-l2-directions"].visual = { kind: "scene", title: "Garden plan", alt: "Garden plan. The entrance is at the bottom, with a main path going straight up. Places are marked A to E: A and B on the right, C and D on the left, E at the top.",
        panels: [{ h: 260, items: [
            { t: "road", x1: 180, y1: 232, x2: 180, y2: 70, w: 16 },
            { t: "text", x: 180, y: 252, s: "ENTRANCE", size: 10, anchor: "middle", weight: "bold" },
            { t: "rect", x: 200, y: 150, w: 74, h: 54, fill: "#dcfce7", stroke: "#86efac", label: "A", size: 14 },
            { t: "rect", x: 200, y: 92, w: 74, h: 28, fill: "#fde68a", stroke: "#f59e0b", label: "B", size: 14 },
            { t: "rect", x: 86, y: 90, w: 74, h: 36, fill: "#e5e7eb", stroke: "#9ca3af", label: "C", size: 14 },
            { t: "rect", x: 90, y: 150, w: 70, h: 50, fill: "#bae6fd", stroke: "#38bdf8", label: "D", size: 14 },
            { t: "rect", x: 120, y: 30, w: 120, h: 30, fill: "#fce7f3", stroke: "#f9a8d4", label: "E", size: 14 }
        ] }] };
    UNITS["ielts-l2-directions"].questions.push(
        { kind: "single", prompt: "Look at the garden plan. Which letter is the greenhouse?", options: LETTER_OPTIONS, answer: 0,
          explanation: "Walking straight ahead along the main path, the greenhouse is on your right: A." },
        { kind: "single", prompt: "Look at the garden plan. Which letter is the tool shed?", options: LETTER_OPTIONS, answer: 2,
          explanation: "Past the greenhouse, the tool shed is on the left, opposite the benches (B): C." });

    /* Which units appear in which lesson. A recording can serve more
       than one lesson when it trains a different sub-skill. */
    var LESSON_UNITS = {
        "mcq": ["ielts-l1-booking", "ielts-l1-course-options", "ielts-l3-multiple-choice"],
        "matching": ["ielts-l1-matching", "ielts-l1-matching-activities"],
        "map": ["ielts-l2-campus-map", "ielts-l2-directions"],
        "completion": ["ielts-l2-form-completion", "ielts-l1-notes", "ielts-l2-museum", "ielts-l3-lecture-notes"],
        "sentence": ["ielts-l2-sentence-completion"],
        "short-answer": ["ielts-l2-short-answer"],
        "prediction": ["ielts-l1-notes-predict"],
        "paraphrasing": ["ielts-l4-lecture"]
    };

    /* Prediction uses the same recording as the notes completion, but
       with predict-first questions instead. */
    UNITS["ielts-l1-notes-predict"] = {
        title: "Predict, then listen: the science workshop",
        context: "Before you press play, read each gap and predict the kind of information that fits. Then listen and check your predictions.",
        questions: [
            { kind: "single", prompt: "1. 'The workshop is on ______ the 18th.' What kind of word fits this gap?",
              options: ["A day of the week", "A month", "A price"], answer: 0,
              explanation: "The date 'the 18th' needs a day of the week before it. Listen for which day." },
            { kind: "single", prompt: "2. 'It starts at ______.' What kind of information fits this gap?",
              options: ["A place", "A time", "A name"], answer: 1,
              explanation: "'Starts at' followed by a gap almost always asks for a time." },
            { kind: "text", prompt: "3. Now listen: the workshop is on ______ the 18th.", accept: ["thursday"], answerLabel: "Thursday",
              explanation: "The workshop is on Thursday the 18th." },
            { kind: "text", prompt: "4. It starts at ______.", accept: ["2:15", "2.15", "14:15", "two fifteen"], answerLabel: "2:15",
              explanation: "It starts at 2:15 in the afternoon." }
        ],
        transcript: "The science workshop is on Thursday the 18th. It starts at 2:15 in the afternoon. Please bring a notebook. All other equipment is provided.",
        audioSrc: "ielts-l1-notes"
    };

    /* ---------------- state ---------------- */

    var states = {};

    function unitState(id) {
        if (!states[id]) states[id] = { answers: {}, checked: false, showTranscript: false };
        return states[id];
    }

    /* ---------------- helpers ---------------- */

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }

    function norm(s) {
        return String(s).toLowerCase().trim()
            .replace(/[.,!?;:'"£$-]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function isCorrect(q, value) {
        if (q.kind === "single") return String(value) === String(q.answer);
        if (q.kind === "multi") {
            if (!Array.isArray(value) || value.length !== q.answer.length) return false;
            return q.answer.every(function (a) { return value.indexOf(String(a)) !== -1; });
        }
        var v = norm(value == null ? "" : value);
        if (!v) return false;
        var vFlat = v.replace(/\s+/g, "");
        return q.accept.some(function (a) {
            var na = norm(a);
            return na === v || na.replace(/\s+/g, "") === vFlat;
        });
    }

    function isAnswered(q, value) {
        if (q.kind === "single") return typeof value === "string" && value !== "";
        if (q.kind === "multi") return Array.isArray(value) && value.length === q.answer.length;
        return norm(value == null ? "" : value) !== "";
    }

    function correctText(q) {
        if (q.kind === "single") return q.options[q.answer];
        if (q.kind === "multi") return q.answer.map(function (a) { return q.options[a]; }).join(" and ");
        return q.answerLabel || q.accept[0];
    }

    /* ---------------- rendering ---------------- */

    function renderQuestion(unitId, qi, q, st) {
        var value = st.answers[qi];
        var checked = st.checked;
        var correct = checked && isCorrect(q, value);
        var html = '<fieldset class="ielts-ap-question' + (checked ? (correct ? " ielts-answer-correct" : " ielts-answer-incorrect") : "") + '">';
        html += '<p class="ielts-question-prompt">' + esc(q.prompt) + '</p>';
        if (q.kind === "multi") html += '<p class="ielts-note">Select TWO answers.</p>';
        if (q.kind === "text") {
            html += '<input type="text" class="ielts-ap-text" autocomplete="off" data-ielts-ap-input="' + esc(unitId) + ':' + qi + '"' +
                (typeof value === "string" ? ' value="' + esc(value) + '"' : "") + (checked ? " disabled" : "") + '>';
        } else {
            q.options.forEach(function (opt, i) {
                var val = String(i);
                var isChosen = q.kind === "multi" ? (Array.isArray(value) && value.indexOf(val) !== -1) : String(value) === val;
                var isAnswer = q.kind === "multi" ? q.answer.indexOf(i) !== -1 : q.answer === i;
                html += '<label class="ielts-option"><input type="' + (q.kind === "multi" ? "checkbox" : "radio") + '" name="ap-' + esc(unitId) + '-' + qi + '" value="' + val + '" data-ielts-ap-input="' + esc(unitId) + ':' + qi + '"' +
                    (isChosen ? " checked" : "") + (checked ? " disabled" : "") + '> <span>' + esc(opt) + '</span>' +
                    (checked && isAnswer ? ' <strong class="ielts-correct-label">Correct answer</strong>' : "") + '</label>';
            });
        }
        if (checked) {
            html += '<p class="ielts-answer-feedback"><strong>' + (correct ? "Correct" : "Correct answer: " + esc(correctText(q))) + '</strong>' +
                (q.explanation ? ' — ' + esc(q.explanation) : "") + '</p>';
        }
        html += '</fieldset>';
        return html;
    }

    function renderBody(unitId) {
        var unit = UNITS[unitId];
        var st = unitState(unitId);
        var html = '<p class="ielts-note">' + unit.questions.length + ' questions · feedback and transcript appear after you check your answers.</p>';
        unit.questions.forEach(function (q, qi) {
            html += renderQuestion(unitId, qi, q, st);
        });
        if (st.checked) {
            var score = 0;
            unit.questions.forEach(function (q, qi) { if (isCorrect(q, st.answers[qi])) score += 1; });
            html = '<p class="ielts-ap-score">You got ' + score + ' of ' + unit.questions.length + ' correct.</p>' + html;
        }
        html += '<div class="ielts-ap-actions">';
        if (!st.checked) {
            html += '<button type="button" class="start-button" data-ielts-ap-action="check" data-ielts-ap-unit="' + esc(unitId) + '">Check answers</button>';
        } else {
            html += '<button type="button" class="secondary-button" data-ielts-ap-action="retry" data-ielts-ap-unit="' + esc(unitId) + '">Try again</button>';
            html += '<button type="button" class="secondary-button" data-ielts-ap-action="transcript" data-ielts-ap-unit="' + esc(unitId) + '">' + (st.showTranscript ? "Hide transcript" : "Show transcript") + '</button>';
        }
        html += '</div>';
        if (st.checked && st.showTranscript) {
            html += '<div class="ielts-ap-transcript"><strong>Transcript</strong>\n' + esc(unit.transcript) + '</div>';
        }
        return html;
    }

    function renderUnit(unitId) {
        var unit = UNITS[unitId];
        if (!unit) return "";
        var src = AUDIO_BASE + encodeURIComponent(unit.audioSrc || unitId) + ".mp3";
        return '<section class="ielts-card ielts-ap" data-ielts-ap-card="' + esc(unitId) + '">' +
            '<p class="ielts-session-label">Audio practice · original recording, not an official IELTS test</p>' +
            '<h3>' + esc(unit.title) + '</h3>' +
            '<p class="ielts-note">' + esc(unit.context) + '</p>' +
            (unit.visual && ns.visuals ? ns.visuals.render(unit.visual) : '') +
            '<audio class="ielts-ap-audio" controls preload="none" src="' + esc(src) + '"></audio>' +
            '<div class="ielts-ap-body" data-ielts-ap-body="' + esc(unitId) + '">' + renderBody(unitId) + '</div>' +
            '</section>';
    }

    function refreshBody(unitId) {
        var el = document.querySelector('[data-ielts-ap-body="' + unitId + '"]');
        if (el) el.innerHTML = renderBody(unitId);
    }

    /* ---------------- public API (used by ielts.js) ---------------- */

    ns.audioPractice = {
        unitsForLesson: function (lessonId) {
            return (LESSON_UNITS[lessonId] || []).slice();
        },
        renderForLesson: function (lessonId) {
            var ids = LESSON_UNITS[lessonId];
            if (!ids || !ids.length) return "";
            var html = '<h3 class="ielts-ap-heading">Audio practice</h3>' +
                '<p class="ielts-note">Listen to each recording once, answer the questions, then check. These are original practice recordings, not official IELTS material.</p>';
            ids.forEach(function (id) { html += renderUnit(id); });
            return html;
        }
    };

    /* ---------------- events (scoped to practice cards) ---------------- */

    function fromCard(el) {
        var card = el && el.closest ? el.closest("[data-ielts-ap-card]") : null;
        return card ? card.getAttribute("data-ielts-ap-card") : null;
    }

    document.addEventListener("click", function (event) {
        var btn = event.target && event.target.closest ? event.target.closest("[data-ielts-ap-action]") : null;
        if (!btn) return;
        var unitId = btn.getAttribute("data-ielts-ap-unit");
        if (!unitId || !UNITS[unitId] || fromCard(btn) !== unitId) return;
        var st = unitState(unitId);
        var action = btn.getAttribute("data-ielts-ap-action");
        if (action === "check") {
            var unit = UNITS[unitId];
            var missing = unit.questions.some(function (q, qi) { return !isAnswered(q, st.answers[qi]); });
            if (missing) { window.alert("Please answer every question before checking."); return; }
            st.checked = true;
            st.showTranscript = false;
        } else if (action === "retry") {
            st.answers = {};
            st.checked = false;
            st.showTranscript = false;
        } else if (action === "transcript") {
            st.showTranscript = !st.showTranscript;
        } else {
            return;
        }
        refreshBody(unitId);
    });

    function recordInput(input) {
        var key = input.getAttribute("data-ielts-ap-input");
        if (!key) return;
        var sep = key.lastIndexOf(":");
        var unitId = key.slice(0, sep);
        var qi = Number(key.slice(sep + 1));
        if (!UNITS[unitId] || isNaN(qi)) return;
        var st = unitState(unitId);
        if (st.checked) return;
        var q = UNITS[unitId].questions[qi];
        if (!q) return;
        if (q.kind === "text") {
            st.answers[qi] = input.value;
        } else if (q.kind === "multi") {
            var vals = Array.isArray(st.answers[qi]) ? st.answers[qi] : [];
            if (input.checked && vals.indexOf(input.value) === -1) vals.push(input.value);
            if (!input.checked) vals = vals.filter(function (v) { return v !== input.value; });
            st.answers[qi] = vals;
        } else {
            st.answers[qi] = input.value;
        }
    }

    document.addEventListener("change", function (event) {
        var input = event.target;
        if (input && input.hasAttribute && input.hasAttribute("data-ielts-ap-input")) recordInput(input);
    });
    document.addEventListener("input", function (event) {
        var input = event.target;
        if (input && input.hasAttribute && input.hasAttribute("data-ielts-ap-input") && input.type === "text") recordInput(input);
    });
})();
