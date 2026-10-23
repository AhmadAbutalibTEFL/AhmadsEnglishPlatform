/* =========================================================
   EST COURSE DATA

   Single source of truth for the EST course map.
   - estSessions: the 21-session instructional sequence (Ahmad's plan),
     built around Erica Meltzer's two SAT books. Titles, chapter numbers
     and page numbers come from that plan; nothing here is inferred.
   - estExam: the official EST I HS Literacy 2026 structure, taken from
     the "EST High School Assessment Suite Description Document (2026)".

   Component status
     live      a lesson exists on the site and can be opened
     prepared  the teaching material is prepared but not on the site yet
     planned   in the plan, not prepared yet
   ========================================================= */
(function () {
    "use strict";

    var GRAMMAR_BOOK = "The Ultimate Guide to SAT Grammar";
    var READING_BOOK = "The Complete Guide to SAT Reading";

    function intro(title) {
        return { kind: "intro", title: title, short: title, status: "planned" };
    }
    function grammar(chapter, title, page, short) {
        return { kind: "grammar", book: GRAMMAR_BOOK, chapter: chapter, title: title, short: short || title, page: page || null, status: "planned" };
    }
    function reading(chapter, title, page, short) {
        return { kind: "reading", book: READING_BOOK, chapter: chapter, title: title, short: short || title, page: page || null, status: "planned" };
    }
    function revision(title) {
        return { kind: "revision", title: title, short: title, status: "planned" };
    }
    function test(title, short) {
        return { kind: "test", title: title, short: short || title, status: "planned" };
    }
    function practice(title) {
        return { kind: "practice", title: title, short: title, status: "planned" };
    }
    function drills() { return practice("Drill Exercises"); }

    var sessions = [
        [intro("Ice Breaking & Introduction"), practice("Diagnostic Test")],
        [grammar(0, "Parts of Speech", 9), reading(1, "Vocabulary in Context", 43), drills()],
        [grammar(1, "Is it Relevant? Adding, Deleting, and Revising", 16, "Is it Relevant?"),
         reading(2, "Making the Leap: From Concrete to Abstract", 65, "Concrete to Abstract"), drills()],
        [grammar(2, "Sentence and Paragraph Order", 31), reading(3, "The Big Picture", 79), drills()],
        [grammar(3, "Infographics", 40), reading(4, "Supporting Evidence", 117), drills()],
        [grammar(4, "Shorter is Better", 53),
         reading(5, "Literal Comprehension: Same Idea, Different Words", 137, "Literal Comprehension"), drills()],
        [grammar(5, "Diction, Idioms, and Register", 61), reading(6, "Reasonable Inferences", 158), drills()],
        [grammar(6, "Sentences and Fragments", 71), reading(7, "Extended Reasoning and Analysis", 189), practice("Practice Test 2")],
        [grammar(7, "Combining & Separating Sentences", 85), reading(8, "Function Questions", 204), drills()],
        [grammar(null, "Cumulative Review", null), reading(9, "Tone and Attitude", 232), practice("Cumulative Practice")],
        [grammar(8, "Transitions", 95), reading(10, "Rhetorical Strategy", 255), drills()],
        [grammar(9, "Non-Essential & Essential Clauses", 113), reading(11, "Paired Passages", 276), drills()],
        [grammar(10, "Additional Comma Uses and Misuses", 134), reading(12, "Graphics and Data Analysis", 300)].concat([drills()]),
        [grammar(11, "Colons and Dashes", 139), grammar(12, "Question Marks", 143), drills()],
        [grammar(13, "Apostrophes: Plural vs. Possessive", 144, "Apostrophes"), grammar(14, "Pronoun and Noun Agreement", 153), drills()],
        [grammar(15, "Verbs: Agreement and Tense", 170), grammar(16, "Word Pairs and Comparisons", 193), practice("Practice Test 3")],
        [grammar(17, "Parallel Structure", 200), grammar(18, "Dangling and Misplaced Modifiers", 210), drills()],
        [grammar(19, "Relative Pronouns", 218),
         grammar(null, "Cumulative Review: All Punctuation and Transitions", 163, "Cumulative Review"), drills()],
        [test("Diagnostic Mock Test (85 questions)", "Diagnostic Mock Test"), revision("Targeted Revision")],
        [test("English Practice Test 1 + Drill Exercises", "English Practice Test 1")],
        [test("English Practice Test 2 + Drill Exercises", "English Practice Test 2")],
        [test("Practice Test 3 (checkpoint)"), test("Practice Test 4 (full-length mock)")]
    ];

    window.estSessions = sessions.map(function (components, index) {
        var number = index + 1;

        // Teaching materials for Sessions 1-7 (the highlighted rows of the plan) are prepared.
        // The diagnostic test is prepared too; the drill exercises are not.
        if (number <= 7) {
            components.forEach(function (c) {
                if (c.kind === "intro" || c.kind === "grammar" || c.kind === "reading" || c.title === "Diagnostic Test") {
                    c.status = "prepared";
                }
            });
        }

        // The only lesson that exists on the site today.
        if (number === 2) {
            components[0].status = "live";
            components[0].action = "showLearnMode";
        }

        // Lessons that exist on the site (content in est-lessons.js).
        var LIVE_LESSONS = {
            2: { reading: ["vocabulary-in-context"] },
            3: { grammar: ["relevance"], reading: ["concrete-to-abstract"] },
            4: { grammar: ["sentence-order"], reading: ["big-picture"] },
            5: { reading: ["supporting-evidence"] },
            6: { grammar: ["shorter-is-better"], reading: ["literal-comprehension"] },
            7: { grammar: ["diction-idioms-register"] },
            8: { grammar: ["sentences-fragments"], reading: ["extended-reasoning"], practice: ["drills-8"] },
            9: { grammar: ["combining-separating"], reading: ["function-questions"], practice: ["drills-9"] },
            10: { grammar: ["cumulative-review-1"], reading: ["tone-attitude"], practice: ["drills-10"] },
            11: { grammar: ["transitions"], reading: ["rhetorical-strategy"], practice: ["drills-11"] },
            12: { grammar: ["essential-clauses"], reading: ["paired-passages"], practice: ["drills-12"] },
            13: { grammar: ["comma-uses"], reading: ["graphics-data"], practice: ["drills-13"] },
            14: { grammar: ["colons-dashes", "question-marks"], practice: ["drills-14"] },
            15: { grammar: ["apostrophes", "pronoun-noun-agreement"], practice: ["drills-15"] },
            16: { grammar: ["verbs-agreement-tense", "word-pairs"], practice: ["drills-16"] },
            17: { grammar: ["parallel-structure", "dangling-modifiers"], practice: ["drills-17"] },
            18: { grammar: ["relative-pronouns", "punct-transitions-review"], practice: ["drills-18"] },
            19: { revision: ["targeted-revision"] }
        };
        var LIVE_TESTS = {
            19: ["s19-diagnostic-mock"],
            20: ["s20-practice-test-1"],
            21: ["s21-practice-test-2"],
            22: ["s22-practice-test-3", "s22-practice-test-4"]
        };
        var live = LIVE_LESSONS[number] || {};
        var used = {};
        components.forEach(function (c) {
            var list = live[c.kind];
            if (list) {
                used[c.kind] = used[c.kind] || 0;
                if (list[used[c.kind]]) {
                    c.lesson = list[used[c.kind]];
                    c.status = "live";
                    used[c.kind]++;
                }
            }
        });
        var tests = LIVE_TESTS[number] || [];
        components.filter(function (c) { return c.kind === "test"; }).forEach(function (c, i) {
            if (tests[i]) { c.test = tests[i]; c.status = "live"; }
        });

        return { number: number, components: components };
    });

    window.estTestIndex = {
        "s19-diagnostic-mock": { session: 19 },
        "s20-practice-test-1": { session: 20 },
        "s21-practice-test-2": { session: 21 },
        "s22-practice-test-3": { session: 22 },
        "s22-practice-test-4": { session: 22 }
    };

    window.estExam = {
        name: "EST I HS Literacy",
        edition: "2026 specifications",
        source: "EST High School Assessment Suite Description Document (2026 Specifications), Academic Assessment Ltd.",
        minutes: 90,
        items: 85,
        modules: [
            { number: 1, name: "Writing", items: 35, minutes: 30, stimulus: "2\u20133 passages, 300\u2013800 words each" },
            { number: 2, name: "Reading", items: 25, minutes: 30, stimulus: "2 passages, 400\u2013800 words each" },
            { number: 3, name: "Reading and Writing", items: 25, minutes: 30, stimulus: "Several short passages, 25\u2013100 words each" }
        ]
    };
})();
