/* =========================================================
   IELTS LISTENING - exam-style practice, Test B (Parts 1 and 2)
   ALL scripts and questions are ORIGINAL to PassMyEnglish.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var X = ns.lx = ns.lx || { tests: [], helpers: {} };
    var H = X.helpers, R = H.R, S = H.S, T = H.T, M = H.M;
    function add(t) { X.tests.push(t); }

    /* ================= TEST B, PART 1 ================= */
    add({
        id: "lx-b1", test: "B", part: 1, minutes: 8, kind: "Conversation",
        title: "Test B, Part 1: Looking for student housing",
        typeName: "Part 1: Table and note completion",
        context: "A student telephones a letting agent to ask about three houses. Complete the table and the notes.",
        lessons: ["completion", "prediction"],
        voices: { Paul: "en-GB-ThomasNeural", Leila: "en-GB-LibbyNeural" },
        script: [
            ["Paul", "Hallam Lettings, Paul Grant speaking."],
            ["Leila", "Hello, my name's Leila Nasser. I'm starting a master's course at the university in September, and I need somewhere to live. A friend told me you have student houses."],
            ["Paul", "We do. I have three at the moment that might suit you. Shall I go through them?"],
            ["Leila", "Yes, please."],
            ["Paul", "The first is Oak House. It's in Northgate, which is about twenty minutes by bus from the university. The rent is ninety pounds a week. Oh, sorry, I'm looking at last year's list. It's ninety-five now."],
            ["Leila", "Are the bills included?"],
            ["Paul", "Only the internet. You pay for gas and electricity separately."],
            ["Leila", "I see. What's the next one?"],
            ["Paul", "The second is Bridge Court, near the harbour. It's modern, with a lot of light. That one is a hundred and ten pounds a week, but it's only ten minutes' walk from the university. It also has a small gym in the basement, which residents can use for free."],
            ["Leila", "That sounds nice, but rather expensive."],
            ["Paul", "It is the dearest of the three. The third is Elm Lodge, in Eastfield. That's the cheapest, at eighty pounds a week. The number fourteen bus goes direct from there to the university and takes about fifteen minutes."],
            ["Leila", "Elm Lodge sounds good for my budget, but I'd like to see Bridge Court as well."],
            ["Paul", "No problem. Just so you know, for any of our houses we ask for a deposit, which is the same as four weeks' rent, and you get it back when you leave if there is no damage."],
            ["Leila", "That's fine. When could I view them?"],
            ["Paul", "How about Wednesday afternoon?"],
            ["Leila", "Oh, I have a class on Wednesday. Thursday would be better."],
            ["Paul", "Thursday at four o'clock, then. I'll take you to both houses in my car."],
            ["Leila", "Wonderful. Thank you, Mr Grant."]
        ],
        parts: [{
            instruction: "Questions 1\u20138. Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
            kind: "table",
            template: ["Property|Area|Rent per week|Feature", "Oak House|[[1]]|\u00a3[[2]]|[[3]] is included in the rent", "Bridge Court|Harbour|\u00a3[[4]]|has a [[5]] in the basement", "Elm Lodge|[[6]]|\u00a3[[7]]|bus number [[8]] goes to the university"],
            qs: [
                T("Area of Oak House", ["Northgate"], "\"It's in Northgate\"."),
                T("Rent for Oak House", ["95", "ninety-five", "ninety five"], "He first says ninety but corrects himself: \"It's ninety-five now.\""),
                T("What is included at Oak House", ["internet", "the internet"], "\"Only the internet.\" Gas and electricity are extra."),
                T("Rent for Bridge Court", ["110", "a hundred and ten", "one hundred and ten"], "\"a hundred and ten pounds a week\"."),
                T("What Bridge Court has", ["gym", "a gym"], "\"a small gym in the basement\"."),
                T("Area of Elm Lodge", ["Eastfield"], "\"Elm Lodge, in Eastfield\"."),
                T("Rent for Elm Lodge", ["80", "eighty"], "\"the cheapest, at eighty pounds a week\"."),
                T("Bus number", ["14", "fourteen"], "\"The number fourteen bus goes direct\".")
            ]
        }, {
            instruction: "Questions 9\u201310. Complete the notes. Write ONE WORD AND/OR A NUMBER for each answer.",
            kind: "notes",
            template: ["The deposit is the same as [[1]] weeks' rent.", "Viewing: [[2]] at 4 pm"],
            qs: [
                T("Weeks of rent for the deposit", ["4", "four"], "\"the same as four weeks' rent\"."),
                T("Day of the viewing", ["Thursday"], "Wednesday is rejected because of her class: \"Thursday would be better.\"")
            ]
        }],
        vocab: [["deposit", "money you pay first and get back later if nothing is damaged"], ["bills", "payments for gas, water, electricity"], ["view (a house)", "go and look at it before you rent it"], ["dearest", "the most expensive"]]
    });

    /* ================= TEST B, PART 2 ================= */
    add({
        id: "lx-b2", test: "B", part: 2, minutes: 9, kind: "Monologue", qOffset: 10,
        title: "Test B, Part 2: The Harbour Community Centre",
        typeName: "Part 2: Choose two, multiple choice and matching",
        context: "The manager of a community centre describes the autumn programme. Listen and answer the questions.",
        lessons: ["mcq", "matching"],
        voices: { Manager: "en-US-JennyNeural" },
        script: [
            ["Manager", "Hello, everyone, and thanks for coming to our open evening at the Harbour Community Centre. I'll start by telling you what's new, then the practical details, and finally I'll take you through the autumn timetable."],
            ["Manager", "Over the summer we spent the money we raised on several improvements. Many of you will notice that the floor in the main hall is brand new. It had been in a terrible state for years. The kitchen has also been completely refitted, so we can finally run cooking classes. The car park is next on our list, and the roof will be done the year after. The website is still being redesigned, I'm afraid."],
            ["Manager", "Now, membership. For adults the yearly fee is thirty pounds. Students pay twenty. And people over sixty-five pay only fifteen, which is the lowest rate we can offer."],
            ["Manager", "To register for a class, you'll need to come to the front desk or phone us. We hope to be able to do it online next year, but not yet. Please don't just turn up to the first class, because we limit the numbers."],
            ["Manager", "One more point. In the pottery class, we supply the clay, the tools and the use of the kilns. All you need to bring is an apron, because it gets messy."],
            ["Manager", "So now the timetable. The classes this autumn are yoga, pottery, photography, guitar and choir."],
            ["Manager", "Yoga was on Tuesdays last term, but because so many people asked for an earlier start to the week, we've moved it to Mondays. It's at seven in the evening."],
            ["Manager", "Pottery is on Thursdays. That's the day the kilns are fired, so it works well for us. Photography is on Saturdays, because you need daylight and most people are free. The group goes out to take pictures around the harbour."],
            ["Manager", "Guitar lessons are on Wednesdays. We had wanted Fridays, but the teacher works somewhere else on Fridays. And choir, which is very popular, takes place on Friday evenings, so you can relax before the weekend."],
            ["Manager", "That's the overview. If you'd like to join anything, please come and see me at the desk before you leave tonight."]
        ],
        parts: [{
            instruction: "Questions 11 and 12. Choose TWO letters, A\u2013E. Which TWO things at the centre have recently been improved?",
            qs: [
                M("Questions 11 and 12", ["the car park", "the kitchen", "the heating", "the floor of the main hall", "the website"], [1, 3], "\"the floor in the main hall is brand new\" and \"The kitchen has also been completely refitted\". The car park, the roof and the website are still to come.")
            ]
        }, {
            instruction: "Questions 13\u201315. Choose the correct letter, A, B or C.",
            qs: [
                R("How much does a person over sixty-five pay for membership?", ["\u00a315", "\u00a320", "\u00a330"], 0, "\"people over sixty-five pay only fifteen\". Thirty is the adult fee and twenty is for students."),
                R("How can people register for classes?", ["online", "at the front desk or by phone", "at the first class"], 1, "\"you'll need to come to the front desk or phone us\". Online is planned for next year."),
                R("What should people bring to the pottery class?", ["an apron", "their own clay", "nothing"], 0, "\"we supply the clay, the tools\" and the kilns. \"All you need to bring is an apron\".")
            ]
        }, {
            instruction: "Questions 16\u201320. On which day is each class held? Choose FIVE answers from the box and write the correct letter, A\u2013G, next to Questions 16\u201320.",
            box: { title: "Days", items: ["A  Monday", "B  Tuesday", "C  Wednesday", "D  Thursday", "E  Friday", "F  Saturday", "G  Sunday"] },
            choices: ["A", "B", "C", "D", "E", "F", "G"],
            qs: [
                S("Yoga", 0, "It was on Tuesdays, but \"we've moved it to Mondays\"."),
                S("Pottery", 3, "\"Pottery is on Thursdays.\""),
                S("Photography", 5, "\"Photography is on Saturdays\"."),
                S("Guitar", 2, "\"Guitar lessons are on Wednesdays.\" Friday was wanted but the teacher is busy."),
                S("Choir", 4, "\"takes place on Friday evenings\".")
            ]
        }],
        vocab: [["refit", "fit new equipment or furniture"], ["fee", "the price you pay to join or use something"], ["kiln", "a very hot oven for baking clay"], ["limit", "keep to a maximum number"]]
    });
})();
