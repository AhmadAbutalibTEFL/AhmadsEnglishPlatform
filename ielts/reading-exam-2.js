/* =========================================================
   IELTS READING - exam-style practice, part 2
   Sentence completion, summary / note / table / flow-chart
   completion, diagram label completion, True / False / Not given.
   ALL passages and questions are ORIGINAL to PassMyEnglish.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var X = ns.rx = ns.rx || { tests: [], helpers: {} };
    var H = X.helpers, S = H.S, T = H.T, TF = H.TF;
    function add(t) { X.tests.push(t); }

    /* ================= SENTENCE COMPLETION ================= */
    add({
        id: "rx-sentence-ac", type: "sentence", track: "academic", minutes: 10,
        title: "Sentence completion: Salt, the Great Preserver",
        passageTitle: "Salt, the Great Preserver",
        passage: [
            "Long before refrigerators existed, people needed ways to stop food from rotting, and one of the oldest was salt. Salt draws water out of meat and fish. Because bacteria need water to grow, salted food can stay safe to eat for many months.",
            "Ancient Egyptians packed fish in salt, and Roman soldiers were sometimes given part of their pay in salt, a custom that many historians believe gave us the word \u2018salary\u2019. In the Middle Ages, towns beside salt marshes grew wealthy, because everyone needed what they produced.",
            "Salt was heavy and valuable, so it was carried long distances by boat and on the backs of mules along routes known as \u2018salt roads\u2019. In cold northern countries, fishermen stored herring in barrels, with a layer of salt between every layer of fish. The method worked so well that the fish could still be eaten a year later.",
            "The importance of salt began to fall in the nineteenth century, when canning arrived and, later, home freezers. Today, most salt is no longer used in kitchens at all. The largest share goes to industry, where it is used to make chemicals and to melt ice on roads in winter."
        ],
        parts: [{
            instruction: "Questions 1\u20137. Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            qs: [
                T("Salt keeps food safe because bacteria need ______ to grow.", ["water"], "Paragraph 1: \u2018bacteria need water to grow\u2019."),
                T("Roman soldiers sometimes received salt as part of their ______.", ["pay"], "Paragraph 2: \u2018part of their pay in salt\u2019."),
                T("In the Middle Ages, towns beside ______ became wealthy.", ["salt marshes", "salt marsh"], "Paragraph 2: \u2018towns beside salt marshes grew wealthy\u2019."),
                T("Salt was carried along \u2018salt roads\u2019 on boats and on ______.", ["mules"], "Paragraph 3: \u2018on the backs of mules\u2019. The answer is one word, so \u2018the backs of mules\u2019 is too long."),
                T("Fishermen stored herring in ______, with salt between the layers.", ["barrels"], "Paragraph 3: \u2018stored herring in barrels\u2019."),
                T("The importance of salt fell when canning and ______ arrived.", ["home freezers", "freezers", "home freezer", "freezer"], "Paragraph 4: \u2018canning arrived and, later, home freezers\u2019."),
                T("Most salt is now used in ______.", ["industry"], "Paragraph 4: \u2018the largest share goes to industry\u2019.")
            ]
        }],
        vocab: [["preserve", "keep food from going bad"], ["bacteria", "tiny living things that can cause food to rot"], ["marsh", "wet, soft land"], ["barrel", "a round wooden container"], ["share", "a part of a total"]]
    });

    add({
        id: "rx-sentence-gt", type: "sentence", track: "general", minutes: 8,
        title: "Sentence completion: Starting Work at the Riverside Hotel",
        passageTitle: "Starting Work at the Riverside Hotel",
        passage: [
            "New staff at the Riverside Hotel attend an induction on their first morning. It begins at 9 a.m. in the staff room on the second floor. Please bring your passport and bank details so that your wages can be paid.",
            "You will be given two uniforms, and the hotel washes them for you. Uniforms must be worn whenever you are on duty. Staff keep their belongings in the lockers in the basement; a padlock can be borrowed from reception for a deposit of \u00a35.",
            "During your first two weeks you will work beside an experienced colleague, who will show you how things are done. You will also complete a short fire safety course on the computer in the first week.",
            "Staff can buy a hot meal at a reduced price in the canteen. Wages are paid monthly, on the 28th. Everyone starts with a probation period of three months. At the end of it, your manager holds a review to discuss how you are getting on."
        ],
        parts: [{
            instruction: "Questions 1\u20137. Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.",
            qs: [
                T("The induction takes place in the ______ on the second floor.", ["staff room"], "Paragraph 1: \u2018in the staff room on the second floor\u2019."),
                T("New employees should bring their passport and ______.", ["bank details"], "Paragraph 1: \u2018passport and bank details\u2019."),
                T("Each member of staff is given ______ uniforms.", ["two", "2"], "Paragraph 2: \u2018two uniforms\u2019."),
                T("For the first two weeks, new staff work beside ______.", ["experienced colleague", "an experienced colleague", "a colleague"], "Paragraph 3: \u2018beside an experienced colleague\u2019."),
                T("Staff keep their things in lockers in the ______.", ["basement"], "Paragraph 2: \u2018the lockers in the basement\u2019."),
                T("Wages are paid on the ______ of each month.", ["28th", "28", "twenty-eighth"], "Paragraph 4: \u2018paid monthly, on the 28th\u2019."),
                T("After three months, the manager holds a ______.", ["review"], "Paragraph 4: \u2018your manager holds a review\u2019.")
            ]
        }],
        vocab: [["induction", "the first training for new staff"], ["on duty", "working"], ["deposit", "money paid and returned later"], ["probation", "a trial period at the start of a job"]]
    });

    /* ================= SUMMARY / NOTE / TABLE / FLOW-CHART ================= */
    add({
        id: "rx-summary-ac", type: "summary", track: "academic", minutes: 12,
        title: "Summary and flow-chart completion: The Journey of Cocoa",
        passageTitle: "The Journey of Cocoa",
        passage: [
            { l: "A", t: "Cocoa grows on trees that need warm, wet conditions, so almost all of it is produced within a narrow band of land near the equator. The first people to use it were the ancient peoples of Central America, who drank it bitter and mixed with chilli, not sweet. Europeans added sugar in the sixteenth century, and the drink became fashionable at royal courts, where it was so expensive that only the rich could afford it. Solid chocolate did not appear until the nineteenth century, when new machines made it possible to press the fat out of the beans." },
            { l: "B", t: "The journey from tree to bar is long. Farmers cut open the large pods and scoop out the beans, which are covered in a white pulp. The beans and pulp are piled in heaps or boxes and covered with leaves for several days. During this fermentation, the pulp turns to liquid and drains away, and the beans lose their bitterness and develop their flavour. Next, the beans are spread out in the sun to dry. After drying, they are packed into sacks and shipped to factories. At the factory the beans are roasted, then cracked open to release the inner pieces, called nibs. The nibs are ground into a thick paste, which is mixed with sugar and milk before being rolled until smooth." }
        ],
        parts: [
            {
                instruction: "Questions 1\u20135. Complete the summary using the list of words, A\u2013I, below. Write the correct letter, A\u2013I.",
                box: { title: "List of words", items: ["A  warm", "B  sweet", "C  bitter", "D  rich people", "E  sugar", "F  fat", "G  farmers", "H  cold", "I  cheap"] },
                choices: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
                kind: "summary",
                template: ["Cocoa trees grow only in [[1]] and wet places near the equator. The first people to drink cocoa made it [[2]] and added chilli. In the sixteenth century Europeans added [[3]], and the drink was enjoyed by [[4]] at royal courts because of its high price. Solid chocolate became possible in the nineteenth century when machines removed the [[5]] from the beans."],
                qs: [
                    S("", 0, "Paragraph A: \u2018warm, wet conditions\u2019. Cold (H) is the opposite."),
                    S("", 2, "Paragraph A: \u2018drank it bitter\u2019. The word sweet (B) is a trap, because sugar came later."),
                    S("", 4, "Paragraph A: \u2018Europeans added sugar\u2019. Sweet (B) is an adjective and cannot follow \u2018added\u2019."),
                    S("", 3, "Paragraph A: \u2018only the rich could afford it\u2019."),
                    S("", 5, "Paragraph A: \u2018press the fat out of the beans\u2019.")
                ]
            },
            {
                instruction: "Questions 6\u20139. Complete the flow-chart below. Choose ONE WORD ONLY from the passage for each answer.",
                kind: "flow",
                template: ["Pods are cut open and the beans are taken out", "Beans are covered with [[1]] for several days", "Beans are spread out in the [[2]] to dry", "Beans are packed in sacks and sent to [[3]]", "Beans are roasted and cracked open to release [[4]]", "Nibs are ground into a paste and mixed with sugar and milk"],
                qs: [
                    T("", ["leaves"], "Paragraph B: \u2018covered with leaves for several days\u2019."),
                    T("", ["sun"], "Paragraph B: \u2018spread out in the sun to dry\u2019."),
                    T("", ["factories", "factory"], "Paragraph B: \u2018shipped to factories\u2019."),
                    T("", ["nibs"], "Paragraph B: \u2018cracked open to release the inner pieces, called nibs\u2019.")
                ]
            }
        ],
        vocab: [["equator", "the imaginary line around the middle of the Earth"], ["pod", "the hard case that holds the beans"], ["pulp", "soft, wet material"], ["fermentation", "a change caused by tiny living things, often giving flavour"], ["roast", "cook with dry heat"]]
    });

    add({
        id: "rx-summary-gt", type: "summary", track: "general", minutes: 10,
        title: "Notes and table completion: Joining Riverside Library",
        passageTitle: "Joining Riverside Library",
        passage: [
            "Anyone who lives, works or studies in the borough can join Riverside Library. To join, bring a document that shows your address, such as a bank statement or a utility bill, and a form of photo identification. Membership lasts for three years.",
            "Adults may borrow up to ten books at a time for three weeks. Children may borrow up to six books. Books can be renewed twice online unless another reader has reserved them. A charge of 20p a day is made for late items, up to a maximum of \u00a35.",
            "DVDs can be borrowed for one week, at a cost of \u00a31 each. The library has twelve computers, which can be used for one hour at a time. There is a quiet study room on the first floor. To use the wireless internet, enter your library card number."
        ],
        parts: [
            {
                instruction: "Questions 1\u20133. Complete the notes below. Choose NO MORE THAN TWO WORDS from the text for each answer.",
                kind: "notes",
                template: ["# Joining the library", "Must live, work or study in the [[1]]", "Bring a bank statement or a utility [[2]]", "Also bring photo [[3]]"],
                qs: [
                    T("", ["borough"], "Paragraph 1: \u2018lives, works or studies in the borough\u2019."),
                    T("", ["bill"], "Paragraph 1: \u2018a bank statement or a utility bill\u2019."),
                    T("", ["identification", "id"], "Paragraph 1: \u2018photo identification\u2019.")
                ]
            },
            {
                instruction: "Questions 4\u20136. Complete the table below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.",
                kind: "table",
                template: ["Item|How long|Other details", "Adult books|3 weeks|Up to [[1]] at a time", "DVDs|[[2]]|Cost \u00a31 each", "Late items|\u2014|20p a day, maximum [[3]]"],
                qs: [
                    T("", ["ten", "10"], "Paragraph 2: \u2018up to ten books at a time\u2019."),
                    T("", ["one week", "1 week", "a week"], "Paragraph 3: \u2018DVDs can be borrowed for one week\u2019."),
                    T("", ["\u00a35", "5", "5 pounds", "five pounds", "\u00a35.00"], "Paragraph 2: \u2018up to a maximum of \u00a35\u2019.")
                ]
            }
        ],
        vocab: [["utility bill", "a bill for gas, water or electricity"], ["renew", "extend the time you can keep something"], ["reserved", "kept for one person"], ["wireless", "without cables, such as Wi-Fi"]]
    });

    /* ================= DIAGRAM LABEL COMPLETION ================= */
    var SOLAR = {
        kind: "scene", title: "Solar water heating system", alt: "Diagram of a solar water heating system with six numbered parts, 1 to 6. Use the passage to name each one.",
        panels: [{ h: 250, compass: false, items: [
            { t: "circle", x: 40, y: 48, r: 15, fill: "#fde047", stroke: "#eab308" },
            { t: "line", x1: 40, y1: 22, x2: 40, y2: 14, color: "#eab308" }, { t: "line", x1: 66, y1: 48, x2: 74, y2: 48, color: "#eab308" }, { t: "line", x1: 58, y1: 30, x2: 64, y2: 24, color: "#eab308" },
            { t: "rect", x: 40, y: 122, w: 190, h: 112, fill: "#f1f5f9", stroke: "#94a3b8", rx: 2 },
            { t: "poly", points: "30,124 135,64 240,124", fill: "#fee2e2", stroke: "#f87171" },
            { t: "poly", points: "158,78 232,121 224,133 150,90", fill: "#1e293b", stroke: "#0f172a" },
            { t: "rect", x: 90, y: 146, w: 110, h: 84, rx: 14, fill: "#fef3c7", stroke: "#f59e0b", dash: true },
            { t: "rect", x: 100, y: 154, w: 90, h: 68, rx: 10, fill: "#bae6fd", stroke: "#0369a1" },
            { t: "path", d: "M110,166 H180 L110,182 H180 L110,198 H180", stroke: "#dc2626", w: 2.5 },
            { t: "path", d: "M154,90 V154", stroke: "#dc2626", w: 3.5 },
            { t: "circle", x: 154, y: 120, r: 9, fill: "#ffffff", stroke: "#475569" },
            { t: "path", d: "M182,154 V104 L204,117", stroke: "#2563eb", w: 3.5 },
            { t: "marker", x: 288, y: 72, n: 1 }, { t: "line", x1: 279, y1: 76, x2: 202, y2: 110, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 112, y: 92, n: 2 }, { t: "line", x1: 122, y1: 94, x2: 152, y2: 100, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 112, y: 130, n: 3 }, { t: "line", x1: 122, y1: 128, x2: 145, y2: 122, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 292, y: 168, n: 4 }, { t: "line", x1: 282, y1: 168, x2: 186, y2: 172, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 292, y: 136, n: 5 }, { t: "line", x1: 282, y1: 138, x2: 168, y2: 186, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 292, y: 218, n: 6 }, { t: "line", x1: 282, y1: 218, x2: 197, y2: 222, color: "#1e40af", w: 1.5 }
        ] }]
    };
    add({
        id: "rx-diagram-ac", type: "diagram", track: "academic", minutes: 8,
        title: "Diagram labels: How a Solar Water Heater Works",
        passageTitle: "How a Solar Water Heater Works",
        passage: [
            "A solar water heater uses the sun\u2019s energy to warm the water used in a home. It has only a few main parts, all linked by pipes.",
            "On the roof is a flat panel known as the collector. It is painted black so that it soaks up as much heat as possible. Inside it, thin tubes carry a special liquid, which grows hot as the sun shines on it.",
            "A small pump pushes the hot liquid through a pipe that runs down into the house. The pipe ends in a storage tank, where the liquid flows through a metal coil. The coil passes its heat to the water in the tank, without the two liquids ever mixing.",
            "The tank is wrapped in a thick layer of insulation, which stops the heat escaping, so that the water stays hot for a day or more. The liquid, now cooler, returns to the roof along a second pipe to be heated again."
        ],
        visual: SOLAR,
        parts: [{
            instruction: "Questions 1\u20136. Label the diagram. Choose ONE WORD ONLY from the passage for each answer.",
            qs: [
                T("Label 1", ["collector"], "Paragraph 2: the black panel on the roof is the collector."),
                T("Label 2", ["pipe"], "Paragraph 3: the hot liquid runs down a pipe into the house."),
                T("Label 3", ["pump"], "Paragraph 3: a small pump pushes the liquid through the pipe."),
                T("Label 4", ["tank"], "Paragraph 3: the pipe ends in a storage tank."),
                T("Label 5", ["coil"], "Paragraph 3: the liquid flows through a metal coil inside the tank."),
                T("Label 6", ["insulation"], "Paragraph 4: the tank is wrapped in a thick layer of insulation.")
            ]
        }],
        vocab: [["collector", "a part that gathers heat"], ["coil", "a long pipe bent into loops"], ["insulation", "material that stops heat escaping"], ["storage", "keeping something for later"]]
    });

    var BIKE = {
        kind: "scene", title: "A bicycle", alt: "Side view of a bicycle with six numbered parts, 1 to 6. Use the text to name each one.",
        panels: [{ h: 230, compass: false, items: [
            { t: "circle", x: 85, y: 150, r: 45, fill: "#ffffff", stroke: "#334155" },
            { t: "circle", x: 265, y: 150, r: 45, fill: "#ffffff", stroke: "#334155" },
            { t: "line", x1: 85, y1: 150, x2: 160, y2: 150, color: "#1d4ed8", w: 4 },
            { t: "line", x1: 160, y1: 150, x2: 145, y2: 85, color: "#1d4ed8", w: 4 },
            { t: "line", x1: 145, y1: 85, x2: 230, y2: 85, color: "#1d4ed8", w: 4 },
            { t: "line", x1: 160, y1: 150, x2: 230, y2: 85, color: "#1d4ed8", w: 4 },
            { t: "line", x1: 230, y1: 85, x2: 265, y2: 150, color: "#1d4ed8", w: 4 },
            { t: "line", x1: 85, y1: 150, x2: 145, y2: 85, color: "#1d4ed8", w: 4 },
            { t: "line", x1: 145, y1: 85, x2: 145, y2: 76, color: "#334155", w: 3 },
            { t: "rect", x: 127, y: 68, w: 38, h: 9, rx: 4, fill: "#1f2937", stroke: "#111827" },
            { t: "line", x1: 230, y1: 85, x2: 228, y2: 62, color: "#334155", w: 3 },
            { t: "line", x1: 228, y1: 62, x2: 252, y2: 56, color: "#111827", w: 4 },
            { t: "path", d: "M85,142 L160,144 M85,158 L160,156", stroke: "#78716c", w: 2, dash: true },
            { t: "line", x1: 160, y1: 150, x2: 172, y2: 172, color: "#334155", w: 3 },
            { t: "rect", x: 164, y: 171, w: 22, h: 7, rx: 2, fill: "#1f2937", stroke: "#111827" },
            { t: "rect", x: 70, y: 99, w: 14, h: 8, rx: 2, fill: "#ef4444", stroke: "#b91c1c" },
            { t: "marker", x: 146, y: 30, n: 1 }, { t: "line", x1: 146, y1: 40, x2: 146, y2: 66, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 290, y: 34, n: 2 }, { t: "line", x1: 282, y1: 40, x2: 253, y2: 55, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 196, y: 30, n: 3 }, { t: "line", x1: 196, y1: 40, x2: 196, y2: 84, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 110, y: 206, n: 4 }, { t: "line", x1: 112, y1: 196, x2: 116, y2: 158, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 205, y: 206, n: 5 }, { t: "line", x1: 198, y1: 198, x2: 180, y2: 178, color: "#1e40af", w: 1.5 },
            { t: "marker", x: 40, y: 60, n: 6 }, { t: "line", x1: 49, y1: 65, x2: 70, y2: 98, color: "#1e40af", w: 1.5 }
        ] }]
    };
    add({
        id: "rx-diagram-gt", type: "diagram", track: "general", minutes: 8,
        title: "Diagram labels: Know Your Bicycle",
        passageTitle: "Know Your Bicycle: Leaflet from the Cycle Safety Club",
        passage: [
            "Before every ride, check the main parts of your bicycle.",
            "The saddle is the seat. Its height should let your toes touch the ground when you sit on it. At the front, the handlebars steer the bicycle, and the brake levers are fixed to them.",
            "The frame is the strong metal structure that holds everything together. If you see cracks or bent tubes in the frame, do not ride the bicycle.",
            "When you push the pedals, they turn the chain, and the chain carries that movement back to the rear wheel. Keep the chain clean and lightly oiled. Your feet rest on the pedals, which should turn easily.",
            "Finally, a red reflector at the back, above the rear wheel, helps drivers see you in the dark."
        ],
        visual: BIKE,
        parts: [{
            instruction: "Questions 1\u20136. Label the diagram. Choose ONE WORD ONLY from the text for each answer.",
            qs: [
                T("Label 1", ["saddle"], "The saddle is the seat."),
                T("Label 2", ["handlebars", "handlebar"], "The handlebars steer the bicycle at the front."),
                T("Label 3", ["frame"], "The frame is the strong metal structure that holds everything together."),
                T("Label 4", ["chain"], "The chain carries the movement back to the rear wheel."),
                T("Label 5", ["pedal", "pedals"], "Your feet rest on the pedals."),
                T("Label 6", ["reflector"], "A red reflector at the back, above the rear wheel.")
            ]
        }],
        vocab: [["steer", "make a vehicle go in a chosen direction"], ["crack", "a thin line where something has broken"], ["reflector", "a small shiny part that shows up in car lights"], ["lightly", "a little, not too much"]]
    });

    /* ================= TRUE / FALSE / NOT GIVEN ================= */
    add({
        id: "rx-tfng-ac", type: "tfng", track: "academic", minutes: 10,
        title: "True / False / Not Given: How Clever Are Octopuses?",
        passageTitle: "How Clever Are Octopuses?",
        passage: [
            "The common octopus has no shell, no bones and a lifespan of only a year or two, yet it solves problems that baffle many animals with backbones. In laboratory tests, octopuses have learned to unscrew the lids of jars to reach crabs inside. Some have escaped from tanks by squeezing through gaps scarcely larger than their eyes. Keepers at one aquarium reported that an octopus was leaving its tank each night to visit nearby tanks and eat the fish, returning before morning.",
            "Unlike most invertebrates, the octopus has a large brain, but about two-thirds of its nerve cells are in its eight arms. Each arm can taste and touch, and can make simple decisions without waiting for orders from the central brain. Scientists are still unsure how the arms and the brain share the work.",
            "Octopuses also seem able to learn by watching. In one early study, octopuses that watched another octopus choose a particular coloured ball later made the same choice themselves. Their short lives, however, limit what they can learn from one another. Mothers die soon after their eggs hatch, so young octopuses never meet their parents and must discover almost everything alone."
        ],
        parts: [{
            instruction: "Questions 1\u20138. Do the following statements agree with the information in the passage? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
            qs: [
                TF("Octopuses normally live for more than five years.", 1, "FALSE: the text says a lifespan of \u2018only a year or two\u2019."),
                TF("Octopuses in tests have learned to open jars.", 0, "TRUE: they \u2018unscrew the lids of jars\u2019 to reach crabs."),
                TF("An aquarium octopus left its tank at night.", 0, "TRUE: keepers reported an octopus leaving its tank each night."),
                TF("Most of an octopus\u2019s nerve cells are in its arms.", 0, "TRUE: \u2018about two-thirds of its nerve cells are in its eight arms\u2019, which is most of them."),
                TF("An octopus\u2019s arms cannot make any decision without the central brain.", 1, "FALSE: each arm can make simple decisions without orders from the brain."),
                TF("Octopuses are the only animals that learn by watching.", 2, "NOT GIVEN: the text says octopuses learn by watching, but it does not say whether other animals do."),
                TF("Young octopuses learn from their parents.", 1, "FALSE: they never meet their parents and must learn alone."),
                TF("Octopuses live longer in aquariums than in the sea.", 2, "NOT GIVEN: the text does not compare captive and wild octopuses.")
            ]
        }],
        vocab: [["baffle", "confuse completely"], ["invertebrate", "an animal without a backbone"], ["nerve cell", "a cell that carries messages in the body"], ["hatch", "come out of an egg"]]
    });

    add({
        id: "rx-tfng-gt", type: "tfng", track: "general", minutes: 8,
        title: "True / False / Not Given: Lakeside Swimming Pool",
        passageTitle: "Lakeside Swimming Pool: Opening Times and Rules",
        passage: [
            "Lakeside Pool is open Monday to Friday from 7 a.m. to 9 p.m. and on Saturdays and Sundays from 9 a.m. to 6 p.m. The last entry is 45 minutes before closing. On weekdays before 9 a.m. the pool is for lane swimming only; after that it is open to all swimmers.",
            "All swimmers must shower before entering the water. Anyone with long hair must wear a swimming cap. Children under twelve must be accompanied in the water by an adult aged sixteen or over.",
            "Lockers need a \u00a31 coin, which is returned when you open the locker again. The caf\u00e9 sells hot drinks and snacks but does not serve hot meals. The changing rooms can be used by wheelchair users. Photography is not allowed anywhere in the building. The pool will be closed for the whole of August for repairs."
        ],
        parts: [{
            instruction: "Questions 1\u20139. Do the following statements agree with the information in the text? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
            qs: [
                TF("The pool opens earlier on weekdays than at weekends.", 0, "TRUE: 7 a.m. on weekdays and 9 a.m. at weekends."),
                TF("Customers can enter the pool at any time up to closing time.", 1, "FALSE: the last entry is 45 minutes before closing."),
                TF("Before 9 a.m. on weekdays the pool is only for lane swimming.", 0, "TRUE: \u2018lane swimming only\u2019 before 9 a.m. on weekdays."),
                TF("Every swimmer has to wear a cap.", 1, "FALSE: only people with long hair must wear a cap."),
                TF("A ten-year-old child may swim with a fourteen-year-old instead of an adult.", 1, "FALSE: the adult must be aged sixteen or over."),
                TF("Customers get their locker money back.", 0, "TRUE: the \u00a31 coin is returned."),
                TF("The caf\u00e9 serves hot meals.", 1, "FALSE: hot drinks and snacks only, \u2018does not serve hot meals\u2019."),
                TF("Parking is available beside the pool.", 2, "NOT GIVEN: parking is not mentioned."),
                TF("Swimming lessons for children take place at weekends.", 2, "NOT GIVEN: lessons are not mentioned.")
            ]
        }],
        vocab: [["lane", "a marked strip of the pool for one swimmer"], ["accompanied", "with another person"], ["wheelchair", "a chair with wheels for people who cannot walk easily"], ["repairs", "work to fix something"]]
    });
})();
