/* =========================================================
   IELTS LISTENING - exam-style practice, Test A (Parts 1 and 2)
   Each part = one recording + 10 questions, in the order and layout
   of the real paper. Audio is synthetic speech made from the script
   below. ALL scripts and questions are ORIGINAL to PassMyEnglish.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var X = ns.lx = ns.lx || { tests: [], helpers: {} };
    X.helpers = {
        R: function (p, o, a, e) { return { type: "radio", prompt: p, options: o, answer: a, explanation: e }; },
        S: function (p, a, e) { return { type: "select", prompt: p, answer: a, explanation: e }; },
        T: function (p, acc, e) { return { type: "text", prompt: p, accept: acc, explanation: e, answerLabel: acc[0] }; },
        M: function (p, o, a, e) { return { type: "multi", prompt: p, options: o, answer: a, explanation: e }; }
    };
    var H = X.helpers, R = H.R, S = H.S, T = H.T;
    function add(t) { X.tests.push(t); }

    /* ---------- map for Test A, Part 2 ---------- */
    var PARK = {
        kind: "scene", title: "Map of Westfield Park", alt: "Map of a park. The main entrance is at the bottom. A path runs straight up from the entrance and crosses a second path that runs left to right. A lake is at the top left. Buildings are labelled A to H.",
        panels: [{ h: 262, compass: false, items: [
            { t: "water", x: 30, y: 30, w: 85, h: 80 }, { t: "text", x: 72, y: 74, s: "Lake", anchor: "middle", size: 12 },
            { t: "road", x1: 180, y1: 240, x2: 180, y2: 50, w: 12 }, { t: "road", x1: 24, y1: 130, x2: 336, y2: 130, w: 12 },
            { t: "rect", x: 40, y: 145, w: 50, h: 36, label: "A", fill: "#fef3c7" },
            { t: "rect", x: 105, y: 145, w: 50, h: 36, label: "B", fill: "#fef3c7" },
            { t: "rect", x: 205, y: 145, w: 50, h: 36, label: "C", fill: "#fef3c7" },
            { t: "rect", x: 275, y: 145, w: 50, h: 36, label: "D", fill: "#fef3c7" },
            { t: "rect", x: 205, y: 62, w: 50, h: 36, label: "E", fill: "#fef3c7" },
            { t: "rect", x: 275, y: 62, w: 50, h: 36, label: "F", fill: "#fef3c7" },
            { t: "rect", x: 125, y: 62, w: 40, h: 36, label: "G", fill: "#fef3c7" },
            { t: "rect", x: 156, y: 16, w: 48, h: 28, label: "H", fill: "#fef3c7" },
            { t: "rect", x: 150, y: 232, w: 60, h: 22, label: "Main entrance", fill: "#dbeafe", size: 10 },
            { t: "tree", x: 60, y: 215 }, { t: "tree", x: 90, y: 225 }, { t: "tree", x: 290, y: 220 }, { t: "tree", x: 315, y: 205 }
        ] }]
    };

    /* ================= TEST A, PART 1 ================= */
    add({
        id: "lx-a1", test: "A", part: 1, minutes: 8, kind: "Conversation",
        title: "Test A, Part 1: Booking a kayaking trip",
        typeName: "Part 1: Form completion",
        context: "A customer telephones a company to book a kayaking trip. Listen and complete the booking form.",
        lessons: ["completion", "prediction"],
        voices: { Tom: "en-GB-RyanNeural", Dana: "en-AU-NatashaNeural" },
        script: [
            ["Tom", "Riverside Adventure Weekends, Tom speaking. How can I help?"],
            ["Dana", "Hello. I'd like to book a kayaking trip for some friends and me. Is that possible?"],
            ["Tom", "Of course. I'll take a few details for the booking form. Can I have your name, please?"],
            ["Dana", "Dana Whitfield."],
            ["Tom", "Could you spell the surname for me?"],
            ["Dana", "Yes. It's W, H, I, T, F, I, E, L, D."],
            ["Tom", "Thank you, Ms Whitfield. And a contact number?"],
            ["Dana", "My mobile is oh seven seven oh oh, nine oh oh, four three one."],
            ["Tom", "Got it. Now, which weekend were you thinking of? We still have places on Saturday the twenty-first of June."],
            ["Dana", "Oh, that's a bit late for us. Is the fourteenth possible? That's a week earlier."],
            ["Tom", "Let me check. Yes, there's space on the fourteenth, but only for groups of up to six."],
            ["Dana", "That's fine. There will be four adults, and one child."],
            ["Tom", "How old is the child?"],
            ["Dana", "My nephew. He's nine."],
            ["Tom", "That's no problem. Children under ten are welcome, but they must wear a smaller life jacket, which we provide. The trip starts from the boathouse at the end of Mill Lane. Most people leave their cars in the main car park there."],
            ["Dana", "Is there anything we should bring?"],
            ["Tom", "A change of clothes is a good idea. And because it can be windy on the water, bring a waterproof jacket. Don't worry about a hat, we have spares."],
            ["Dana", "How much is it?"],
            ["Tom", "The normal price is forty-five pounds per person, but groups of four or more get a discount, so for you it's thirty-eight pounds each."],
            ["Dana", "That's very good. And is lunch included?"],
            ["Tom", "Yes, a picnic lunch is included. Does anyone in your group have special dietary needs?"],
            ["Dana", "One of us is vegetarian."],
            ["Tom", "No problem. We'll make sure there's a vegetarian lunch. And finally, how did you hear about us?"],
            ["Dana", "A friend recommended you. He came on one of your trips last summer."],
            ["Tom", "Lovely. We'll send you an email to confirm everything. Thanks for calling, Ms Whitfield."]
        ],
        parts: [{
            instruction: "Questions 1\u201310. Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
            kind: "notes",
            template: ["# Riverside Adventure Weekends: booking form", "Customer name: Dana [[1]]", "Phone: 07700 [[2]]", "Date of trip: Saturday [[3]] June", "Number of adults: [[4]]", "Age of the child: [[5]]", "Meeting point: the boathouse at the end of [[6]] Lane", "Bring: a change of clothes and a waterproof [[7]]", "Price per person: \u00a3[[8]]", "Special meal needed: [[9]]", "Heard about us from: a [[10]]"],
            qs: [
                T("Surname", ["Whitfield"], "She spells it: \"W, H, I, T, F, I, E, L, D\"."),
                T("Phone number (last six digits)", ["900431", "900 431", "07700900431"], "She says \"nine oh oh, four three one\"."),
                T("Date in June", ["14", "14th", "fourteenth"], "The 21st is rejected. She asks for \"the fourteenth\" and Tom confirms there is space."),
                T("Number of adults", ["4", "four"], "She says \"four adults, and one child\". The child is not an adult."),
                T("Age of the child", ["9", "nine"], "\"He's nine.\" Tom adds that children \"under ten\" are welcome, but that is the rule, not the age."),
                T("Name of the lane", ["Mill"], "\"the boathouse at the end of Mill Lane\"."),
                T("What to bring", ["jacket", "waterproof jacket"], "\"bring a waterproof jacket\". The hat is a distractor: \"Don't worry about a hat\"."),
                T("Price per person (pounds)", ["38", "thirty-eight", "thirty eight"], "The normal price is forty-five, but the group discount makes it \"thirty-eight pounds each\"."),
                T("Special meal", ["vegetarian"], "\"One of us is vegetarian.\""),
                T("How she heard about the company", ["friend", "a friend"], "\"A friend recommended you.\"")
            ]
        }],
        vocab: [["discount", "a lower price"], ["dietary needs", "foods a person cannot or does not eat"], ["recommend", "tell someone that something is good"], ["spare", "extra, kept in case it is needed"]]
    });

    /* ================= TEST A, PART 2 ================= */
    add({
        id: "lx-a2", test: "A", part: 2, minutes: 9, kind: "Monologue", qOffset: 10,
        title: "Test A, Part 2: Welcome to Westfield Park",
        typeName: "Part 2: Multiple choice and map labelling",
        context: "The manager of a city park welcomes new volunteers. Listen, then answer the questions.",
        lessons: ["mcq", "map"],
        voices: { Manager: "en-GB-SoniaNeural" },
        script: [
            ["Manager", "Good morning, everyone, and welcome to Westfield Park. Thanks for coming along on a cold day. I'm going to tell you a little about the park, and then show you where things are."],
            ["Manager", "The park has a long history. It began as a private garden in nineteen twenty-five, belonging to a local factory owner. He did not open it to the public. That only happened in nineteen fifty-two, when the city council bought the land, and ever since then it has been free for everyone to enter."],
            ["Manager", "The biggest change in recent years is the lake. People often think it has always been there, but it was dug only ten years ago. At first the idea was just to make the park look nicer, but now its main purpose is to hold rainwater, so the streets nearby don't flood after heavy storms. The birds seem to like it too."],
            ["Manager", "Entry is free, as I said, but we do charge for car parking, and that money pays for our gardeners. Most of our visitors walk or cycle, so I'd encourage you to do the same."],
            ["Manager", "Now, events. Our Sunday market used to be held in the car park, but it is moving to the area beside the café from next month, so there will be more space for stalls. The free concerts in summer will stay where they are. And we are adding a children's science day in the autumn."],
            ["Manager", "Finally, volunteers. We have more than a hundred, and we are very grateful. We have enough people to help in the café and to guide school groups. What we really need now are people to look after the flower beds, especially at weekends, so if you have a choice, please think about that."],
            ["Manager", "Right, let me explain the layout, so look at the map. You are standing at the main entrance, at the bottom of the map. A path leads straight ahead, going north. There is another path that crosses it from west to east."],
            ["Manager", "Just before you reach the crossing, there are two buildings facing each other across the main path. On the left is the information centre. That's where you can pick up leaflets and where I have my office. On the right is the café, which is open from nine until five."],
            ["Manager", "If you carry on past the café, along the same side, you come to the last building on that side, at the eastern end. Those are the toilets, and they are open all day."],
            ["Manager", "Now go to the crossing and turn left, towards the west. The first building you come to on your right, between the lake and the main path, is our bird hide. It is a good place to sit quietly, and in winter you can often see ducks and herons from there."],
            ["Manager", "Keep going west to the end of the path. On your left, at the far end, is the children's playground. It was rebuilt last year, and it's very popular."],
            ["Manager", "Back at the crossing, if you turn right and go east, the two buildings on the north side are the greenhouse, nearest the main path, and our storage sheds beyond it. Those are for staff only. And at the very top of the main path is the sports hall, which you can book for classes."],
            ["Manager", "Okay. Does anyone have any questions before we go and have a look?"]
        ],
        parts: [{
            instruction: "Questions 11\u201315. Choose the correct letter, A, B or C.",
            qs: [
                R("When did the park open to the public?", ["in 1925", "in 1952", "ten years ago"], 1, "It began as a private garden in 1925 but was \"only\" opened to the public in \"nineteen fifty-two\"."),
                R("What is the main purpose of the lake now?", ["to attract birds", "to make the park look nicer", "to store rainwater"], 2, "At first it was for appearance, but \"now its main purpose is to hold rainwater\"."),
                R("What does the money from car parking pay for?", ["the gardeners", "the café", "the concerts"], 0, "\"that money pays for our gardeners\"."),
                R("What is changing about the Sunday market?", ["the day it is held", "where it is held", "how many stalls it has"], 1, "It is \"moving to the area beside the café\". The new space allows more stalls, but the stall number is not given."),
                R("What kind of volunteers does the park need most?", ["café helpers", "guides for school groups", "people to look after the flower beds"], 2, "\"We have enough people\" for the café and school groups. \"What we really need now\" is flower bed help.")
            ]
        }, {
            instruction: "Questions 16\u201320. Label the map below. Write the correct letter, A\u2013H, next to Questions 16\u201320.",
            visual: PARK,
            choices: ["A", "B", "C", "D", "E", "F", "G", "H"],
            qs: [
                S("Caf\u00e9", 2, "\"On the right is the caf\u00e9\", just before the crossing: building C."),
                S("Playground", 0, "\"Keep going west to the end of the path. On your left\": building A."),
                S("Bird hide", 6, "\"The first building you come to on your right, between the lake and the main path\": building G."),
                S("Toilets", 3, "\"the last building on that side, at the eastern end\": building D."),
                S("Information centre", 1, "\"On the left is the information centre\", facing the caf\u00e9: building B.")
            ]
        }],
        vocab: [["flood", "when water covers a place that is usually dry"], ["stall", "a table where things are sold outdoors"], ["flower bed", "a piece of ground where flowers are grown"], ["heron", "a tall bird with long legs that eats fish"]]
    });
})();
