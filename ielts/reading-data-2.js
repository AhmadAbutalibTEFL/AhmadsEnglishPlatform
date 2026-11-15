/* =========================================================
   IELTS READING: round 2 content (all question types)

   Adds to ns.readingData (loaded from reading-data.js, so this file must load
   AFTER it and BEFORE ielts.js):
   - strategy lessons for every Reading question type (11 question types, both tests)
   - a track-specific "Your turn" for every lesson: Academic texts for the Academic
     test, everyday and workplace texts for General Training (lesson.gt overrides)
   - more practice sets, tagged Academic or General Training, covering every type

   Every text, question and answer key is ORIGINAL, written for PassMyEnglish.
   Question format facts are paraphrased from the IELTS partners' public pages.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};
    var D = ns.readingData;
    if (!D) return;
    D.version = 2;

    var TFNG = ["True", "False", "Not given"];
    var YNNG = ["Yes", "No", "Not given"];
    var LETTERS = ["A", "B", "C", "D"];

    D.questionTypes = [
        "Matching headings", "Matching information", "Matching features", "Matching sentence endings",
        "Sentence completion", "Summary, note, table and flow-chart completion", "Diagram label completion",
        "True / False / Not given", "Yes / No / Not given", "Multiple choice", "Short-answer questions"
    ];

    D.questionFamilies = [
        { name: "Matching", blurb: "Link parts of the text to a list.", types: [
            { name: "Matching headings", lesson: "r-headings", note: "Choose the heading that gives the main idea of a paragraph." },
            { name: "Matching information", lesson: "r-info", note: "Find the paragraph that contains a fact, example or reason." },
            { name: "Matching features", lesson: "r-features", note: "Match statements to people, places or dates." },
            { name: "Matching sentence endings", lesson: "r-endings", note: "Finish a sentence by choosing the right ending from a list." }
        ] },
        { name: "Completion", blurb: "Fill gaps using the exact words of the text.", types: [
            { name: "Sentence completion", lesson: "r-gapfill", note: "Complete sentences with words from the text." },
            { name: "Summary, note, table and flow-chart completion", lesson: "r-summary", note: "Fill gaps in a summary, notes, a table or a flow chart." },
            { name: "Diagram label completion", lesson: "r-diagram", note: "Label the parts of a drawing using words from the text." }
        ] },
        { name: "True / False / Not given", blurb: "Judge a statement against the text.", types: [
            { name: "True / False / Not given", lesson: "r-tfng", note: "Does the text agree with a FACT, contradict it, or not say?" },
            { name: "Yes / No / Not given", lesson: "r-ynng", note: "Does the writer's OPINION agree, disagree, or is it not stated?" }
        ] },
        { name: "Multiple choice and short answer", blurb: "Pick the best answer or write a few words.", types: [
            { name: "Multiple choice", lesson: "r-mcq", note: "Choose the best answer from A-D, or several from a longer list." },
            { name: "Short-answer questions", lesson: "r-short", note: "Answer a direct question with a few words from the text." }
        ] }
    ];

    /* ---------- tidy the four lessons that already existed ---------- */
    var byId = {};
    D.lessons.forEach(function (L) { byId[L.id] = L; });

    byId["r-skimming"].family = "Core skills";
    byId["r-skimming"].gt = {
        practice: "The Maple Court flats offer one- and two-bedroom homes close to the bus station. Rent includes water and heating. Parking is available for an extra \u00a330 a month. Viewings are by appointment only, on weekdays.",
        question: "Scan the text: how much extra do residents pay for parking?",
        options: ["\u00a330 a month", "Nothing", "\u00a330 a year"],
        answer: 0,
        feedback: "Your eyes should jump to the number '\u00a330' beside the word 'parking'. Numbers and prices stand out, so scanning finds them without reading every word."
    };

    byId["r-tfng"].family = "True / False / Not given";
    byId["r-tfng"].gt = {
        practice: "Text: 'The staff canteen is open from 8 a.m. to 3 p.m. on weekdays and is closed on public holidays. Prices were reduced in January.'",
        question: "Statement: 'The canteen raised its prices in January.' Judged against the text only, this statement is:",
        options: TFNG, answer: 1,
        feedback: "The text says prices were REDUCED in January - the opposite of the statement - so the answer is False. Not given would be right only if the text said nothing about prices."
    };

    byId["r-headings"].family = "Matching";
    byId["r-headings"].gt = {
        practice: "Notice: Visitors to the Harbour Museum can join a free guided tour at 11 a.m. and 2 p.m. Each tour lasts forty minutes and explains the history of the port and its ships. Groups of more than ten people should book in advance by telephone.",
        question: "Match the heading. Which one captures this notice's main idea?",
        options: ["Rules for group bookings", "Guided tours at the museum", "The history of ships"],
        answer: 1,
        feedback: "The whole notice is about the guided tours: when they run, how long they last and what they cover. Group booking is one detail and ship history is only what the tour explains."
    };

    var gap = byId["r-gapfill"];
    gap.title = "Sentence Completion";
    gap.family = "Completion";
    gap.purpose = "Complete sentences with words from the text - exactly - and within the word limit.";
    gap.gt = {
        practice: "Text: 'Applications must be returned to the Human Resources office, which is on the second floor, by 5 p.m. on Friday.' Gap (NO MORE THAN TWO WORDS): 'The Human Resources office is on the ______ floor.'",
        question: "Complete the gap using words from the text.",
        options: ["second", "the second", "second floor"],
        answer: 0,
        feedback: "'second' is copied exactly and fits the grammar: 'on the second floor'. 'the second' would read 'the the second floor', and 'second floor' repeats the word 'floor' that is already in the sentence."
    };

    /* ---------- new lessons ---------- */
    function lesson(o) {
        o.session = o.session || 4;
        o.type = "Question type";
        return o;
    }

    var NEW = [];

    NEW.push(lesson({
        id: "r-info", title: "Matching Information", family: "Matching",
        purpose: "Find which paragraph contains a given fact, example, reason or comparison.",
        before: [
            "Read the statements first and underline the key idea in each: a fact, a reason, a comparison, an example.",
            "Check whether a paragraph letter can be used more than once. The instructions say.",
            "Skim the paragraphs and jot a two-word label beside each so you can find them again."
        ],
        during: [
            "Take one statement at a time. Do not try to carry them all in your head.",
            "The statements are NOT in the order of the text, so be ready to scan the whole text for each.",
            "Look for paraphrase. The text will rarely use the same words as the statement.",
            "The idea may be one sentence inside a long paragraph. Read around your key words."
        ],
        after: [
            "For each answer, point to the exact sentence that proves it.",
            "If two paragraphs seem to fit, choose the one that states the information directly, not the one that only hints at it."
        ],
        dos: ["Use your paragraph labels to jump to likely paragraphs.", "Skip a slow statement and come back to it."],
        donts: ["Don't match on a single shared word. Match the meaning of the whole statement.", "Don't expect the answers to come in order."],
        example: "Statement: 'a reason why people stopped using an old method'. In paragraph C the writer says the method 'was abandoned once cheaper machines appeared'. 'Abandoned' means stopped using, and 'cheaper machines' is the reason. Paragraph C is the match.",
        practice: "A  Coral reefs cover less than one per cent of the ocean floor, yet they shelter about a quarter of all marine species.\nB  Rising sea temperatures cause corals to lose the algae that give them colour and food, a process called bleaching.\nC  Some reef managers now grow fragments of coral in underwater nurseries and attach them to damaged areas.\nD  Tourism brings income to many reef communities, but careless divers and boat anchors can break fragile coral.",
        question: "Which paragraph mentions a way of repairing damaged reefs?",
        options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D"], answer: 2,
        feedback: "Paragraph C: growing coral fragments in nurseries and attaching them to damaged areas is repair. A is a fact about size, B is a threat, and D is about tourism.",
        gt: {
            practice: "A  Library: members may borrow up to ten books for three weeks. Books can be renewed online or by phone.\nB  Swimming pool: lane swimming is available before 9 a.m. on weekdays. Children under eight must be with an adult.\nC  Sports hall: the hall can be booked for private events at weekends. A deposit is required when you make the booking.\nD  Caf\u00e9: hot meals are served from noon until two o'clock. Vegetarian dishes are available every day.",
            question: "Which section says you must pay some money when you reserve something?",
            options: ["Section A", "Section B", "Section C", "Section D"], answer: 2,
            feedback: "Section C: 'A deposit is required when you make the booking.' A deposit is money paid in advance. The other sections mention borrowing, swimming and food, not paying to reserve."
        }
    }));

    NEW.push(lesson({
        id: "r-features", title: "Matching Features", family: "Matching",
        purpose: "Match statements to a list of people, places, dates or categories, such as who said what.",
        before: [
            "Read the list of features (names, dates, countries) and circle each one in the text.",
            "Check whether a feature can be used more than once.",
            "Underline the key idea in each statement."
        ],
        during: [
            "Find each name in the text. Names are easy to spot. Then read the sentences around them.",
            "The statements often follow the order of the text, so your answers move forward through it.",
            "Match what the person SAYS or DOES to the statement, which will use different words.",
            "Beware of a name that sits next to an idea belonging to someone else."
        ],
        after: [
            "Ask of each match: did THIS person say this, or did their name just appear close to it?",
            "Check that you followed the instruction about using a feature once or more than once."
        ],
        dos: ["Mark every name or date in the text before you answer.", "Use the order of the text to save time."],
        donts: ["Don't match on a name you merely recognise. Match what is said about it.", "Don't leave an answer blank. A guess costs nothing."],
        example: "Text: 'Dr Lin argued that the dam would protect farmland, while Professor Okoye warned that it would harm fish stocks.' Statement: 'It could damage wildlife.' Names: A Dr Lin, B Professor Okoye. 'Harm fish stocks' paraphrases 'damage wildlife', so the answer is B.",
        practice: "Three experts gave views on a four-day working week. Dr Amara Cole said shorter weeks raise productivity because staff come back rested. Professor Ben Ruiz warned that some services, such as hospitals, cannot close for an extra day. Ms Hana Sato argued that the change would work best if it were introduced gradually, starting with a trial in one department.",
        question: "Who thinks the change should be introduced step by step?",
        options: ["Dr Amara Cole", "Professor Ben Ruiz", "Ms Hana Sato"], answer: 2,
        feedback: "'Gradually, starting with a trial' means step by step, and that is Ms Hana Sato. Dr Cole talks about productivity and Professor Ruiz about services that cannot close.",
        gt: {
            practice: "Three staff were asked about the new office hours. Priya: 'Starting at eight lets me collect my children from school, so I am pleased.' Tom: 'I think the new hours are too early because the buses are unreliable at that time.' Lena: 'I do not mind, but I would like free parking to be part of the change.'",
            question: "Who is worried about transport?",
            options: ["Priya", "Tom", "Lena"], answer: 1,
            feedback: "Tom says the buses are unreliable early in the morning - that is a worry about transport. Priya is pleased about school pick-up and Lena asks for parking, which is a request, not a worry about getting there."
        }
    }));

    NEW.push(lesson({
        id: "r-endings", title: "Matching Sentence Endings", family: "Matching",
        purpose: "Finish a sentence by choosing the correct ending from a list.",
        before: [
            "Read the sentence beginnings and the list of endings. Underline the key word in each.",
            "Notice that there are more endings than beginnings. Some are distractors.",
            "Think about the grammar each beginning needs: a reason, a result, a noun?"
        ],
        during: [
            "Find the part of the text each beginning is about. The beginnings follow the order of the text.",
            "Read around it to see how the text finishes that idea.",
            "Test each ending twice: is it grammatically possible, and does it match the meaning in the text?"
        ],
        after: [
            "Read each finished sentence from start to end. It must make sense and agree with the text.",
            "Check that you used each ending only once."
        ],
        dos: ["Use grammar to cross out endings that cannot follow the beginning.", "Match meaning, not matching words."],
        donts: ["Don't choose an ending because it repeats a word from the text.", "Don't use an ending that is true in real life but not stated in the text."],
        example: "Beginning: 'The market was moved because...'. Endings: A the old site was too small; B traders wanted lower rents. The text says 'the old site could no longer hold all the stalls'. That matches A in meaning.",
        practice: "Text: Early photographs needed long exposure times, so people had to sit perfectly still. This is why portraits from the 1840s rarely show smiles. By the 1880s, faster film meant that a photograph could be taken in a fraction of a second.",
        question: "Complete the sentence: 'Portraits from the 1840s rarely show smiles because...'",
        options: ["people found photography embarrassing", "sitters had to stay still for a long time", "film had become faster", "photographers disliked smiling"], answer: 1,
        feedback: "The text says early photographs needed long exposures 'so people had to sit perfectly still'. Faster film belongs to the 1880s, and the other two endings are never mentioned.",
        gt: {
            practice: "Text: The leisure centre will close its car park on Saturday for repairs. Visitors should use the street parking on Bell Road or take the number 14 bus, which stops outside the main entrance every ten minutes.",
            question: "Complete the sentence: 'Visitors will not be able to park at the centre on Saturday because...'",
            options: ["the car park will be closed for repairs", "the number 14 bus does not stop there", "Bell Road is full", "the main entrance will be shut"], answer: 0,
            feedback: "The text says the car park 'will close ... for repairs'. The bus does stop at the entrance, and nothing is said about Bell Road being full or the entrance being shut."
        }
    }));

    NEW.push(lesson({
        id: "r-summary", title: "Summary, Note, Table and Flow-chart Completion", family: "Completion",
        purpose: "Fill gaps in a summary, set of notes, table or flow chart, using words from the text or from a word list.",
        before: [
            "Read the title and the whole summary, table or chart first. It tells you the topic and the order of ideas.",
            "Check the instructions: words from the text, or a letter from a box of words?",
            "Predict what each gap needs: a noun, a verb, a number or an adjective."
        ],
        during: [
            "The gaps follow the order of the text. Find where the summary starts in the passage and move forward.",
            "Look for the same idea in different words, then copy the exact word(s) from the text.",
            "In a flow chart, follow the arrows: each gap is one stage of a process the text describes.",
            "If there is a word box, remember it has extra words. Check each word fits the grammar."
        ],
        after: [
            "Read the finished summary. It should make sense and be grammatical.",
            "Check your spelling and the word limit."
        ],
        dos: ["Use the headings of a table to know which part of the text to read.", "Check that your word fits grammatically on both sides of the gap."],
        donts: ["Don't change the form of a word that must come from the text.", "Don't leave a gap empty. A wrong answer loses nothing."],
        example: "Flow chart step 2: 'Dough is left to ______.' The text says 'After mixing, the dough is left to rise for an hour before it goes into the oven.' The missing word is 'rise'. After 'to' the grammar needs a verb, and 'rise' is copied exactly.",
        visual: { kind: "process", title: "Making bread (flow chart)", alt: "Flow chart of three steps: mix flour, water and yeast; leave the dough to blank; bake in a hot oven.",
            steps: ["Flour, water and yeast are mixed", "Dough is left to ______ for one hour", "Dough is baked in a hot oven"] },
        practice: "Text: 'Making paper from recycled card starts with soaking the card in water until it breaks into a soft pulp. The pulp is then spread thinly over a fine mesh, pressed to remove water, and finally dried in warm air.'",
        practiceVisual: { kind: "process", title: "Recycling card into paper", alt: "Flow chart of four steps with a gap in step two: card is soaked in water; soft blank is spread over a mesh; pressed to remove water; dried in warm air.",
            steps: ["Card is soaked in water", "Soft ______ is spread over a mesh", "Sheet is pressed to remove water", "Sheet is dried in warm air"] },
        question: "Which word completes step 2 of the flow chart?",
        options: ["pulp", "mesh", "card"], answer: 0,
        feedback: "The text says the card 'breaks into a soft pulp', and then 'the pulp is spread thinly over a fine mesh'. 'Soft pulp' fits step 2. 'Mesh' is what the pulp is spread over, and the card has already become pulp.",
        gt: {
            practice: "Text: 'To join the library, bring one form of photo identification and proof of your address, such as a recent bill. Membership is processed in about ten minutes, and your card is posted to you within a week.' Notes on joining: 'Documents needed: photo ______ and proof of address.'",
            question: "Which word completes the notes?",
            options: ["identification", "bill", "card"], answer: 0,
            feedback: "The text says 'photo identification'. A bill is only an example of proof of address, and the card is what you receive afterwards.",
            practiceVisual: null
        }
    }));

    NEW.push(lesson({
        id: "r-diagram", title: "Diagram Label Completion", family: "Completion",
        purpose: "Label the parts of a drawing - a machine, a process or something in nature - using words from the text.",
        before: [
            "Look at the whole diagram: its title, the labels already given, and the arrows or numbers that point to the gaps.",
            "Predict the kind of word needed. Usually it is a noun naming a part.",
            "Read the word limit."
        ],
        during: [
            "Labels usually follow the order of the description. Find where the text starts describing the parts.",
            "Position words in the text (above, beside, at the base, inside) tell you where each part sits on the drawing.",
            "Copy the exact word from the text."
        ],
        after: [
            "Check each label against the drawing: does that part sit where the text says it does?",
            "Check spelling and the word limit."
        ],
        dos: ["Use the labels already given as fixed points.", "Watch for direction words: above, below, left, inside."],
        donts: ["Don't label from the picture alone. The answer must come from the text.", "Don't write more words than allowed."],
        example: "Text: 'Water is pumped up a pipe into the tank at the top of the tower.' On the drawing, gap 1 points to the box at the top. The text says the tank is at the top of the tower, so the label is 'tank'.",
        visual: { kind: "scene", title: "A water tower", alt: "Drawing of a water tower: a box at the top marked 1, a long pipe down the middle, and a pump at the base marked pump.",
            panels: [{ h: 250, compass: false, items: [
                { t: "rect", x: 120, y: 40, w: 120, h: 62, fill: "#bfdbfe", stroke: "#60a5fa", label: "", rx: 8 },
                { t: "circle", x: 180, y: 71, r: 14, fill: "#ffffff", stroke: "#2563eb", label: "1" },
                { t: "rect", x: 172, y: 102, w: 16, h: 100, fill: "#d1d5db", stroke: "#9ca3af", rx: 2 },
                { t: "text", x: 198, y: 160, s: "pipe", size: 12, fill: "#374151" },
                { t: "rect", x: 128, y: 202, w: 104, h: 22, fill: "#f3f4f6", stroke: "#9ca3af", label: "pump", size: 12 },
                { t: "road", x1: 30, y1: 236, x2: 330, y2: 236, color: "#86efac", w: 8 }
            ] }] },
        practice: "Text: 'A simple wind turbine has three main parts. The blades at the front catch the wind and turn a shaft. The shaft passes into a housing at the top of the tower, where a generator changes the movement into electricity. The tower itself stands on a concrete base.'",
        practiceVisual: { kind: "scene", title: "A wind turbine", alt: "Drawing of a wind turbine with three numbered gaps: 1 at the front spinning part, 2 at the box on top of the tower, 3 at the bottom of the tower.",
            panels: [{ h: 260, compass: false, items: [
                { t: "road", x1: 30, y1: 244, x2: 330, y2: 244, color: "#86efac", w: 8 },
                { t: "rect", x: 160, y: 96, w: 20, h: 140, fill: "#e5e7eb", stroke: "#9ca3af", rx: 2 },
                { t: "rect", x: 144, y: 74, w: 66, h: 26, fill: "#fde68a", stroke: "#f59e0b", rx: 6 },
                { t: "circle", x: 177, y: 87, r: 11, fill: "#ffffff", stroke: "#2563eb", label: "2" },
                { t: "road", x1: 144, y1: 87, x2: 100, y2: 87, color: "#9ca3af", w: 5 },
                { t: "road", x1: 100, y1: 87, x2: 80, y2: 30, color: "#60a5fa", w: 7 },
                { t: "road", x1: 100, y1: 87, x2: 60, y2: 126, color: "#60a5fa", w: 7 },
                { t: "circle", x: 62, y: 60, r: 11, fill: "#ffffff", stroke: "#2563eb", label: "1" },
                { t: "rect", x: 140, y: 236, w: 60, h: 12, fill: "#9ca3af", stroke: "#6b7280", rx: 2 },
                { t: "circle", x: 270, y: 224, r: 11, fill: "#ffffff", stroke: "#2563eb", label: "3" },
                { t: "arrow", x1: 258, y1: 228, x2: 204, y2: 240 }
            ] }] },
        question: "Which word labels gap 2, the box on top of the tower?",
        options: ["housing", "blades", "base"], answer: 0,
        feedback: "The text says the shaft 'passes into a housing at the top of the tower'. The blades are at the front (gap 1) and the concrete base is at the bottom (gap 3).",
        gt: {
            practice: "Text: 'Your washing machine has a door at the front. At the top left is the detergent drawer, and the control dial is at the top right. The water filter is behind a small panel at the bottom.'",
            practiceVisual: { kind: "scene", title: "A washing machine (front view)", alt: "Front of a washing machine with three numbered gaps: 1 top left, 2 top right, 3 small panel at the bottom.",
                panels: [{ h: 250, compass: false, items: [
                    { t: "rect", x: 110, y: 28, w: 140, h: 200, fill: "#f3f4f6", stroke: "#9ca3af", rx: 8 },
                    { t: "rect", x: 120, y: 38, w: 50, h: 22, fill: "#ffffff", stroke: "#9ca3af", rx: 4 },
                    { t: "circle", x: 145, y: 49, r: 10, fill: "#ffffff", stroke: "#2563eb", label: "1" },
                    { t: "circle", x: 220, y: 49, r: 14, fill: "#ffffff", stroke: "#9ca3af" },
                    { t: "circle", x: 220, y: 49, r: 8, fill: "#2563eb", stroke: "#2563eb", label: "2", size: 9 },
                    { t: "circle", x: 180, y: 120, r: 46, fill: "#dbeafe", stroke: "#60a5fa" },
                    { t: "rect", x: 150, y: 200, w: 60, h: 18, fill: "#ffffff", stroke: "#9ca3af", rx: 3 },
                    { t: "circle", x: 180, y: 209, r: 8, fill: "#ffffff", stroke: "#2563eb", label: "3", size: 9 },
                    { t: "text", x: 180, y: 124, s: "door", anchor: "middle", size: 12, fill: "#1e3a8a" }
                ] }] },
            question: "Which label belongs in gap 2, at the top right?",
            options: ["control dial", "detergent drawer", "water filter"], answer: 0,
            feedback: "The text puts the control dial at the top right. The detergent drawer is top LEFT (gap 1) and the water filter is behind the bottom panel (gap 3)."
        }
    }));

    NEW.push(lesson({
        id: "r-ynng", title: "Yes / No / Not Given", family: "True / False / Not given",
        purpose: "Decide whether statements agree with the WRITER'S views or claims.",
        before: [
            "Remember the difference: Yes / No / Not given tests OPINIONS and claims. True / False / Not given tests FACTS.",
            "Underline the claim in each statement."
        ],
        during: [
            "Find the part of the text about the statement, then work out what the writer actually thinks.",
            "YES: the writer says it or clearly implies it. NO: the writer says or implies the opposite. NOT GIVEN: the writer shows no view on it.",
            "Watch for hedging such as 'may', 'some researchers' or 'it is claimed'. A claim made by others is not necessarily the writer's view.",
            "Words such as 'always', 'only' and 'all' can turn a Yes into a No."
        ],
        after: [
            "For every answer, point to the writer's own words.",
            "For every Not given, check that you are not using your own opinion to fill the gap."
        ],
        dos: ["Listen for the writer's own voice: 'I believe', 'in my view', 'clearly', 'unfortunately'.", "Separate what OTHER people think from what the WRITER thinks."],
        donts: ["Don't answer from your own opinion.", "Don't treat a quoted expert's view as the writer's unless the writer agrees."],
        example: "Text: 'Some critics say museums should be free. I disagree: a small fee protects the collections.' Statement: 'The writer thinks museum entry should be free.' The writer says 'I disagree', so the answer is NO.",
        practice: "Text: 'Many commentators claim that electric cars will solve urban pollution. They help, but the claim ignores the tyre dust and road wear that every car produces, and that problem will not disappear.'",
        question: "Statement: 'The writer believes electric cars alone will solve urban pollution.' This statement is:",
        options: YNNG, answer: 1,
        feedback: "The writer says the claim 'ignores' tyre dust and road wear that will not disappear. That disagrees with the statement, so the answer is No.",
        gt: {
            practice: "Text: 'Our new staff caf\u00e9 opened this week. In my opinion, the sandwiches are the best value in the building, although I have not yet tried the soup.'",
            question: "Statement: 'The writer thinks the caf\u00e9's soup is excellent.' This statement is:",
            options: YNNG, answer: 2,
            feedback: "The writer has not tried the soup, so gives no view on it. That is Not given. Yes would need the writer to praise the soup."
        }
    }));

    NEW.push(lesson({
        id: "r-mcq", title: "Multiple Choice", family: "Multiple choice and short answer",
        purpose: "Choose the best answer from A-D, or choose several answers from a longer list.",
        before: [
            "Read the question (the stem) and underline its key words. Don't read the options yet.",
            "Check how many answers are needed: one, or two or three from a longer list."
        ],
        during: [
            "The questions follow the order of the text. Find the right place, then read it carefully.",
            "Compare MEANING, not words. Wrong options often repeat words from the text.",
            "Cross out options that are clearly wrong, then compare the rest with the text.",
            "More than one option may be true. Only one answers THIS question."
        ],
        after: [
            "Check your choice against the exact words of the text.",
            "In a multiple-answer question, check that you chose the right number."
        ],
        dos: ["Read the stem first and predict an answer before looking at the options.", "Watch for options that are true but do not answer the question."],
        donts: ["Don't pick an option because it repeats words from the text. That is usually the trap.", "Don't use outside knowledge."],
        example: "Text: 'Although the bridge is old, engineers say its main weakness is not age but years of heavy traffic.' Question: 'What do engineers believe damaged the bridge most?' A its age; B heavy traffic. The text says 'not age but years of heavy traffic', so the answer is B. Option A repeats a word from the text, but the text rejects it.",
        practice: "Text: 'City planners assumed that wider roads would reduce congestion. In practice, the new capacity attracted more drivers, and within a few years traffic was as slow as before.'",
        question: "What happened after the roads were widened?",
        options: ["Traffic stayed faster for good", "More drivers arrived and congestion returned", "Fewer people drove", "Planners stopped building roads"], answer: 1,
        feedback: "'The new capacity attracted more drivers' and traffic was 'as slow as before'. The first option says the opposite, and the last two are not in the text.",
        gt: {
            practice: "Text: 'The training day begins with a safety talk at 9.00, followed by a tour of the warehouse. Lunch will be provided, and the afternoon will be spent on practical exercises. Please wear closed shoes.'",
            question: "What happens straight after the safety talk?",
            options: ["Lunch is served", "Staff tour the warehouse", "Practical exercises begin", "Closed shoes are handed out"], answer: 1,
            feedback: "The safety talk is 'followed by a tour of the warehouse'. Lunch and the exercises come later, and shoes are something staff must bring."
        }
    }));

    NEW.push(lesson({
        id: "r-short", title: "Short-answer Questions", family: "Multiple choice and short answer",
        purpose: "Answer a direct question with a few words copied from the text.",
        before: [
            "Read each question and the word limit. Underline the question word: who, when, where, how many.",
            "Predict the kind of answer: a name, a number, a place, a reason."
        ],
        during: [
            "Answers usually follow the order of the text.",
            "Find the part of the text that matches the key words of the question (in other words), then copy the answer exactly.",
            "Stay inside the word limit. A number counts as one word."
        ],
        after: [
            "Check your spelling and your word count.",
            "Check that your answer fits the question word: a 'when' question needs a time, not a reason."
        ],
        dos: ["Copy words exactly from the text.", "Use who, when, where and how many to predict the type of answer."],
        donts: ["Don't write full sentences.", "Don't reword the answer. Copy it."],
        example: "Text: 'The festival, first held in 1998, attracts about 40,000 visitors each year.' Question (ONE NUMBER): 'How many people visit the festival each year?' Answer: 40,000, copied from the text.",
        practice: "Text: 'The research station was built in 1987 on the northern coast. Its first director, Dr Maya Evans, started a programme to count seabirds using night-vision cameras.' Question (NO MORE THAN THREE WORDS): 'What does the programme use to count seabirds?'",
        question: "Which answer is correct and within the limit?",
        options: ["night-vision cameras", "the northern coast", "a programme to count seabirds"], answer: 0,
        feedback: "'night-vision cameras' is copied exactly and is two words. 'The northern coast' answers a different question, and the third option is too long and repeats the question.",
        gt: {
            practice: "Text: 'The museum is open from 10 a.m. to 5 p.m., Tuesday to Sunday. Entry is free for children under twelve, and adults pay six pounds.' Question (ONE WORD OR A NUMBER): 'How much do adults pay?'",
            question: "Which answer is correct and within the limit?",
            options: ["six pounds", "six", "free"], answer: 1,
            feedback: "'six' is one word, copied from the text. 'Six pounds' is two words and breaks the limit, and 'free' is what children pay."
        }
    }));

    // Keep the existing core lesson first, then the question types by family.
    var ORDER = ["r-skimming", "r-headings", "r-info", "r-features", "r-endings", "r-gapfill", "r-summary", "r-diagram", "r-tfng", "r-ynng", "r-mcq", "r-short"];
    NEW.forEach(function (L) { byId[L.id] = L; });
    D.lessons = ORDER.map(function (id) { return byId[id]; });
    D.lessons.forEach(function (L) { if (L.id === "r-skimming") L.family = "Core skills"; });

    /* ---------- practice sets ---------- */
    function q(qtype, prompt, options, answer, explanation) {
        return { qtype: qtype, prompt: prompt, options: options, answer: answer, explanation: explanation };
    }
    function qt(qtype, prompt, accept, label, explanation) {
        return { qtype: qtype, type: "text", prompt: prompt, accept: accept, answerLabel: label, explanation: explanation };
    }

    var H1 = ["i  Glass for everyone: a faster way to make vessels", "ii  Colour and stories in medieval windows", "iii  Early beginnings: rare beads and clay-core vessels", "iv  Machines take over from craftsmen", "v  A reusable material with a waste problem", "vi  Why glass is dangerous to handle"];
    var PARA = ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D", "Paragraph E"];
    var HEAD_INS = "Questions 1-5: choose the correct heading for each paragraph from the list. There is one heading you will not need.";
    function hq(n, para, ans, why) {
        var o = q("Matching headings", "Choose the heading for " + para + ".", H1, ans, why);
        if (n === 1) o.instruction = HEAD_INS;
        return o;
    }

    var SETS = [];

    SETS.push({
        id: "rs-ac-3", track: "academic", title: "Practice 4: The Story of Glass",
        intro: "Academic style \u00b7 8 questions \u00b7 about 10 minutes \u00b7 matching headings and matching information. Original text.",
        types: ["Matching headings", "Matching information"],
        passageTitle: "The Story of Glass",
        passage: [
            "A  Glass is among the oldest manufactured materials. Archaeologists have found glass beads in Mesopotamia dating from around 2500 BC, although they were rare and valued like jewels. Hollow vessels followed centuries later, made by shaping molten glass around a core of clay.",
            "B  A decisive change came in the first century BC, when craftsmen in the Roman Empire discovered glassblowing. By blowing air through a tube into a lump of molten glass, a worker could form a vessel in seconds rather than hours. Glass jars and bottles, once luxuries, became cheap enough for ordinary households.",
            "C  In medieval Europe, glassmaking moved into monasteries and cathedral towns, where the demand was for coloured windows. Makers added metal salts to the molten glass: copper produced reds and greens, while cobalt gave a deep blue. The finest windows told Bible stories to a population that mostly could not read.",
            "D  The industrial era brought machines. In 1903 an American engineer patented a bottle-making machine that could produce thousands of bottles an hour, ending the need for skilled blowers in factories. A later method, in which molten glass floats on a bath of liquid tin, allowed large, perfectly flat sheets to be made for windows and cars.",
            "E  Today glass is at the centre of recycling efforts, since it can be melted down and reused many times without losing quality. Yet in many countries only a fraction of glass is collected, and much of the rest ends up in landfill, where it will not break down for thousands of years."
        ],
        questions: [
            hq(1, "Paragraph A", 2, "Paragraph A is about the first glass objects: rare beads, then clay-core vessels."),
            hq(2, "Paragraph B", 0, "Glassblowing made vessels quickly and cheaply, so ordinary households could own them."),
            hq(3, "Paragraph C", 1, "The paragraph covers coloured windows and the Bible stories they told."),
            hq(4, "Paragraph D", 3, "The paragraph describes bottle machines replacing skilled blowers."),
            hq(5, "Paragraph E", 4, "Glass can be reused many times, but much of it is still thrown away."),
            q("Matching information", "Which paragraph describes how colour was added to glass?", PARA, 2, "Paragraph C: makers added metal salts - copper for reds and greens, cobalt for blue."),
            q("Matching information", "Which paragraph says that something once expensive became affordable?", PARA, 1, "Paragraph B: jars and bottles, 'once luxuries, became cheap enough for ordinary households'."),
            q("Matching information", "Which paragraph mentions a problem with what happens to glass after it is used?", PARA, 4, "Paragraph E: much glass ends up in landfill and does not break down.")
        ]
    });
    SETS[0].questions[5].instruction = "Questions 6-8: which paragraph contains the following information?";

    SETS.push({
        id: "rs-ac-4", track: "academic", title: "Practice 5: Honeybees and the Farm",
        intro: "Academic style \u00b7 8 questions \u00b7 about 10 minutes \u00b7 sentence completion, summary completion and short answers. You type the answers. Original text.",
        types: ["Sentence completion", "Summary completion", "Short-answer questions"],
        passageTitle: "Honeybees and the Farm",
        passage: [
            "A  Honeybees live in colonies of up to sixty thousand insects, yet only one of them, the queen, lays eggs. The workers, all of them female, collect nectar and pollen, build the wax comb and defend the hive. The drones, which are male, exist mainly to mate with young queens and are driven out of the hive in autumn.",
            "B  When a worker finds a good source of nectar, she returns to the hive and performs a 'waggle dance'. The angle of the dance shows the direction of the food in relation to the sun, and the length of the waggle tells the others how far to fly. It is one of the few known examples of symbolic communication in insects.",
            "C  Farmers depend on bees more than most people realise. Almonds, apples and blueberries all need insect pollination to produce a full crop, and in some regions farmers rent hives and move them from orchard to orchard during flowering.",
            "D  In recent decades, many countries have reported sharp winter losses of colonies. Researchers have linked the losses to a combination of mites, disease, pesticides and a shortage of wild flowers. No single cause explains all the deaths, which is why there is no simple remedy."
        ],
        questions: [
            Object.assign(qt("Sentence completion", "Only the ______ in a colony lays eggs.", ["queen", "the queen"], "queen", "Paragraph A: 'only one of them, the queen, lays eggs'."), { instruction: "Questions 1-3: complete the sentences. Write ONE WORD ONLY from the text." }),
            qt("Sentence completion", "Drones are driven out of the hive in ______.", ["autumn"], "autumn", "Paragraph A: drones 'are driven out of the hive in autumn'."),
            qt("Sentence completion", "The ______ of the waggle shows the other bees how far to fly.", ["length"], "length", "Paragraph B: 'the length of the waggle tells the others how far to fly'."),
            Object.assign(qt("Summary completion", "Farmers rely on bees: almonds, apples and ______ all need insect pollination.", ["blueberries"], "blueberries", "Paragraph C names almonds, apples and blueberries."), { instruction: "Questions 4-6: complete the summary of paragraphs C and D. Write ONE WORD ONLY from the text." }),
            qt("Summary completion", "Some farmers ______ hives and move them between orchards during flowering.", ["rent"], "rent", "Paragraph C: 'farmers rent hives and move them from orchard to orchard'."),
            qt("Summary completion", "Winter losses have been linked to mites, disease, pesticides and a shortage of wild ______.", ["flowers"], "flowers", "Paragraph D: 'a shortage of wild flowers'."),
            Object.assign(qt("Short-answer questions", "What material do workers use to build the comb?", ["wax", "the wax"], "wax", "Paragraph A: workers 'build the wax comb'."), { instruction: "Questions 7-8: answer with NO MORE THAN THREE WORDS from the text." }),
            qt("Short-answer questions", "What does the angle of the waggle dance show?", ["direction", "the direction", "direction of the food", "the direction of the food"], "direction of the food", "Paragraph B: the angle 'shows the direction of the food in relation to the sun'.")
        ]
    });

    var PEOPLE = ["Dr Elena Marsh", "Councillor Paul Njoroge", "Sofia Lindqvist"];
    var ENDS = ["traffic may be pushed onto surrounding roads", "shops lose every customer", "residents are charged a fee", "pedestrian numbers fall"];
    SETS.push({
        id: "rs-ac-5", track: "academic", title: "Practice 6: Cars in City Centres",
        intro: "Academic style \u00b7 8 questions \u00b7 about 10 minutes \u00b7 Yes / No / Not given, matching features, multiple choice and sentence endings. Original text.",
        types: ["Yes / No / Not given", "Matching features", "Multiple choice", "Matching sentence endings"],
        passageTitle: "Should Cars Be Banned From City Centres?",
        passage: [
            "A  Few urban questions divide opinion as sharply as whether private cars should be banned from city centres. Supporters point to cleaner air and quieter streets; opponents warn of damage to shops and difficulty for people with limited mobility.",
            "B  Three people recently shared their views. Dr Elena Marsh, a transport economist, argues that charging drivers to enter the centre is more effective than a ban: 'A fee changes behaviour without closing the door on those who truly need to drive.' Councillor Paul Njoroge supports a full ban on the busiest streets, pointing to a trial in which the number of people walking there rose by a fifth. Shop owner Sofia Lindqvist fears that fewer customers will arrive, although she admits that her takings rose during a week when her street was closed to cars.",
            "C  The evidence so far is mixed. Studies of pedestrianised streets in several countries generally report higher footfall, but most were carried out in cities that already had good public transport, so results elsewhere may differ. Air quality in the centre tends to improve, although some traffic is pushed onto the surrounding roads.",
            "D  In my view, a complete ban is rarely the best first step. Cities should improve buses and cycle routes before restricting cars, so that residents have a real alternative. Once that is in place, the case for closing the busiest streets becomes much stronger, and public support is likely to follow."
        ],
        questions: [
            Object.assign(q("Yes / No / Not given", "The writer believes a complete ban is usually the best first step.", YNNG, 1, "Paragraph D: 'a complete ban is rarely the best first step'. The writer disagrees."), { instruction: "Questions 1-3: do these statements agree with the views of the writer?" }),
            q("Yes / No / Not given", "The writer thinks public transport should be improved before cars are restricted.", YNNG, 0, "Paragraph D: 'Cities should improve buses and cycle routes before restricting cars'."),
            q("Yes / No / Not given", "The writer thinks most shop owners oppose pedestrianised streets.", YNNG, 2, "The text gives one shop owner's view but the writer says nothing about most shop owners."),
            Object.assign(q("Matching features", "Believes a charge works better than a ban.", PEOPLE, 0, "Dr Marsh: 'charging drivers ... is more effective than a ban'."), { instruction: "Questions 4-6: which person made each statement?" }),
            q("Matching features", "Mentions a trial in which more people walked along a street.", PEOPLE, 1, "Councillor Njoroge points to a trial where walking numbers 'rose by a fifth'."),
            q("Matching features", "Is worried about customers but saw sales rise during a test week.", PEOPLE, 2, "Sofia Lindqvist fears fewer customers yet admits her takings rose."),
            Object.assign(q("Multiple choice", "According to paragraph C, studies of pedestrianised streets:", ["prove that bans work in every city", "mostly found more people walking, but in cities with good public transport", "show that air quality always gets worse", "were all carried out in small towns"], 1, "Paragraph C: higher footfall, but 'most were carried out in cities that already had good public transport'."), { instruction: "Question 7: choose the correct letter." }),
            Object.assign(q("Matching sentence endings", "Air quality in the centre tends to improve, although...", ENDS, 0, "Paragraph C: 'some traffic is pushed onto the surrounding roads'."), { instruction: "Question 8: choose the correct ending for the sentence." })
        ]
    });

    SETS.push({
        id: "rs-ac-6", track: "academic", title: "Practice 7: A Solar Water Heater",
        intro: "Academic style \u00b7 6 questions \u00b7 about 8 minutes \u00b7 diagram label completion, short answer and True / False / Not given. Original text and drawing.",
        types: ["Diagram label completion", "Short-answer questions", "True / False / Not given"],
        passageTitle: "How a Solar Water Heater Works",
        passage: [
            "A rooftop solar water heater has three main parts. On the roof, a flat collector with a dark surface absorbs sunlight and heats a liquid that flows through narrow pipes inside it.",
            "The hot liquid travels down a pipe to a storage tank in the loft, where a coil passes its heat to the household water. Once it has cooled, the liquid is returned to the collector by a small pump that stands beside the tank."
        ],
        visual: { kind: "scene", title: "A rooftop solar water heater", alt: "Drawing of a house with a flat panel on the roof marked 1, a tank in the loft marked 2 and a small unit beside the tank marked 3.",
            panels: [{ h: 250, compass: false, items: [
                { t: "rect", x: 60, y: 110, w: 240, h: 110, fill: "#fef3c7", stroke: "#f59e0b", rx: 2 },
                { t: "road", x1: 50, y1: 112, x2: 180, y2: 52, color: "#9ca3af", w: 8 },
                { t: "road", x1: 180, y1: 52, x2: 310, y2: 112, color: "#9ca3af", w: 8 },
                { t: "rect", x: 196, y: 58, w: 70, h: 26, fill: "#1e3a8a", stroke: "#1e3a8a", rx: 3 },
                { t: "circle", x: 231, y: 71, r: 11, fill: "#ffffff", stroke: "#2563eb", label: "1" },
                { t: "rect", x: 92, y: 126, w: 60, h: 70, fill: "#bfdbfe", stroke: "#60a5fa", rx: 8 },
                { t: "circle", x: 122, y: 161, r: 11, fill: "#ffffff", stroke: "#2563eb", label: "2" },
                { t: "rect", x: 166, y: 166, w: 30, h: 30, fill: "#d1d5db", stroke: "#6b7280", rx: 4 },
                { t: "circle", x: 181, y: 181, r: 10, fill: "#ffffff", stroke: "#2563eb", label: "3" },
                { t: "road", x1: 231, y1: 84, x2: 231, y2: 150, color: "#f87171", w: 3 },
                { t: "road", x1: 231, y1: 150, x2: 152, y2: 150, color: "#f87171", w: 3 },
                { t: "road", x1: 92, y1: 220, x2: 270, y2: 220, color: "#d1d5db", w: 2 }
            ] }] },
        questions: [
            Object.assign(q("Diagram label completion", "Which label belongs in gap 1 (on the roof)?", ["collector", "storage tank", "pump", "coil"], 0, "The text says a flat 'collector' sits on the roof."), { instruction: "Questions 1-3: label the diagram. Choose the correct word for each gap." }),
            q("Diagram label completion", "Which label belongs in gap 2 (in the loft)?", ["collector", "storage tank", "pump", "coil"], 1, "The liquid travels 'to a storage tank in the loft'."),
            q("Diagram label completion", "Which label belongs in gap 3 (beside the tank)?", ["collector", "storage tank", "pump", "coil"], 2, "The liquid is returned 'by a small pump that stands beside the tank'."),
            Object.assign(qt("Short-answer questions", "What colour is the surface of the collector?", ["dark", "a dark surface", "dark surface"], "dark", "The collector has 'a dark surface'."), { instruction: "Question 4: answer with ONE WORD from the text." }),
            Object.assign(q("True / False / Not given", "The pump is on the roof.", TFNG, 1, "The pump 'stands beside the tank', and the tank is in the loft - so the statement is False."), { instruction: "Questions 5-6: do these statements agree with the text?" }),
            q("True / False / Not given", "The system still heats water at night.", TFNG, 2, "The text never says what happens at night - Not given.")
        ]
    });

    var MH = ["i  Opening times", "ii  Joining a sports club", "iii  What to do about a lost item", "iv  Courses for learning new skills", "v  Helping to keep a park tidy", "vi  Booking a meeting room"];
    var TEXTS = ["Text A", "Text B", "Text C", "Text D", "Text E"];
    SETS.push({
        id: "rs-gt-2", track: "general", title: "Practice 8: Community Notices",
        intro: "General Training style \u00b7 8 questions \u00b7 about 8 minutes \u00b7 matching information and matching headings. Five short everyday texts. Original texts.",
        types: ["Matching information", "Matching headings"],
        passageTitle: "Five community notices",
        passage: [
            "A  Greenfield Library - summer opening hours: Monday to Friday 9 a.m. to 7 p.m.; Saturday 10 a.m. to 4 p.m.; closed on Sunday. Members have free computer access. Please bring your card.",
            "B  Riverside Swimming Club - new members welcome. Beginners' lessons run on Tuesday evenings. Annual membership costs \u00a3120, or you can pay \u00a312 a month by direct debit. Children under five swim free with an adult.",
            "C  Lost property - items found on the buses are kept at the Central Bus Station office for thirty days. After this they are given to charity. To collect an item, bring photo identification.",
            "D  Evening courses at Hill College - choose from photography, Spanish and bookkeeping. Courses begin in the week of 9 September and last eight weeks. Fees must be paid before the first class.",
            "E  Neighbourhood clean-up day - volunteers are meeting at the park gates on Saturday at 9 a.m. Gloves and bags will be provided. Refreshments are offered afterwards."
        ],
        questions: [
            Object.assign(q("Matching information", "Which text says something is given away after a period of time?", TEXTS, 2, "Text C: after thirty days, unclaimed items 'are given to charity'."), { instruction: "Questions 1-4: which text contains the following information?" }),
            q("Matching information", "Which text says the fee must be paid in advance?", TEXTS, 3, "Text D: 'Fees must be paid before the first class.'"),
            q("Matching information", "Which text offers a way to pay in monthly amounts?", TEXTS, 1, "Text B: '\u00a312 a month by direct debit'."),
            q("Matching information", "Which text says equipment will be supplied?", TEXTS, 4, "Text E: 'Gloves and bags will be provided.'"),
            Object.assign(q("Matching headings", "Choose the heading for Text A.", MH, 0, "Text A is about when the library is open."), { instruction: "Questions 5-8: choose the best heading for each text. There are two headings you will not need." }),
            q("Matching headings", "Choose the heading for Text B.", MH, 1, "Text B is about joining the swimming club."),
            q("Matching headings", "Choose the heading for Text C.", MH, 2, "Text C explains what to do about lost items."),
            q("Matching headings", "Choose the heading for Text D.", MH, 3, "Text D describes evening courses.")
        ]
    });

    SETS.push({
        id: "rs-gt-3", track: "general", title: "Practice 9: Staff Handbook",
        intro: "General Training style \u00b7 7 questions \u00b7 about 8 minutes \u00b7 sentence completion and short answers. You type the answers. Original text.",
        types: ["Sentence completion", "Short-answer questions"],
        passageTitle: "Extract from a staff handbook",
        passage: [
            "A  Working hours: full-time staff work 37.5 hours a week. Core hours, when everyone must be available, are from 10 a.m. to 3 p.m. Outside core hours, employees may start and finish at times that suit them, provided their manager agrees.",
            "B  Sick leave: if you cannot work because of illness, please telephone your manager before 9.30 a.m. on the first day. After three days of absence, a doctor's note is required. Staff are entitled to ten paid sick days a year.",
            "C  Expenses: travel on company business is repaid when you show your receipts. Claims should be sent through the online system within thirty days. Meals are repaid up to a limit of \u00a320 a day."
        ],
        questions: [
            Object.assign(qt("Sentence completion", "Core hours are from 10 a.m. to ______ p.m.", ["3", "three"], "3", "Paragraph A: 'from 10 a.m. to 3 p.m.'"), { instruction: "Questions 1-4: complete the sentences. Write NO MORE THAN TWO WORDS AND/OR A NUMBER from the text." }),
            qt("Sentence completion", "Employees may choose their start and finish times if their ______ agrees.", ["manager", "their manager"], "manager", "Paragraph A: 'provided their manager agrees'."),
            qt("Sentence completion", "You should telephone your manager before ______ a.m. on the first day of illness.", ["9.30", "9:30", "930"], "9.30", "Paragraph B: 'before 9.30 a.m. on the first day'."),
            qt("Sentence completion", "After three days of absence a ______ is needed.", ["doctor's note", "doctors note", "a doctor's note"], "doctor's note", "Paragraph B: 'a doctor's note is required'."),
            Object.assign(qt("Short-answer questions", "How many paid sick days are staff entitled to each year?", ["ten", "10"], "ten", "Paragraph B: 'ten paid sick days a year'."), { instruction: "Questions 5-7: answer with ONE WORD OR A NUMBER." }),
            qt("Short-answer questions", "Within how many days should an expenses claim be sent?", ["thirty", "30"], "thirty", "Paragraph C: 'within thirty days'."),
            qt("Short-answer questions", "What is the daily limit for meals?", ["\u00a320", "20", "20 pounds", "twenty pounds"], "\u00a320", "Paragraph C: 'up to a limit of \u00a320 a day'.")
        ]
    });

    SETS.push({
        id: "rs-gt-4", track: "general", title: "Practice 10: The Mill Street Garden",
        intro: "General Training style \u00b7 8 questions \u00b7 about 10 minutes \u00b7 Yes / No / Not given, matching features, multiple choice and sentence endings. One longer text. Original text.",
        types: ["Yes / No / Not given", "Matching features", "Multiple choice", "Matching sentence endings"],
        passageTitle: "Our Street Garden",
        passage: [
            "A  When the council offered local residents the chance to turn an empty lot on Mill Street into a garden, I expected a handful of volunteers. Instead, more than sixty people came to the first meeting, and within a month we had marked out thirty small plots.",
            "B  Three people have shaped the project more than anyone. Mrs Ashworth, a retired teacher, runs the weekly workshops for children, where they plant seeds and learn how vegetables grow. Mr Daniels, who used to work for a building firm, built the raised beds and the shed. Jamila, a nurse who lives opposite, organises the rota that makes sure the plants are watered at weekends.",
            "C  Not everything has gone smoothly. In the first summer a long dry spell killed many of the young plants, and we learned that the soil needed far more compost than we had supplied. Some neighbours also complained about the noise from the Saturday work sessions, although the sessions finish by noon.",
            "D  Despite the setbacks, I believe the garden has made the street friendlier. People who had never spoken now stop to chat over the fence, and the children are proud to bring home vegetables they have grown. I would encourage any neighbourhood with unused land to try something similar."
        ],
        questions: [
            Object.assign(q("Yes / No / Not given", "The writer was surprised by how many people came to the first meeting.", YNNG, 0, "Paragraph A: the writer 'expected a handful' but more than sixty came."), { instruction: "Questions 1-3: do these statements agree with the views of the writer?" }),
            q("Yes / No / Not given", "The writer thinks the neighbours' complaints about noise were unfair.", YNNG, 2, "The writer reports the complaints and says when sessions end, but gives no opinion on whether they were fair."),
            q("Yes / No / Not given", "The writer would recommend similar projects to other neighbourhoods.", YNNG, 0, "Paragraph D: 'I would encourage any neighbourhood with unused land to try something similar.'"),
            Object.assign(q("Matching features", "Built the garden's raised beds and shed.", ["Mrs Ashworth", "Mr Daniels", "Jamila"], 1, "Paragraph B: Mr Daniels 'built the raised beds and the shed'."), { instruction: "Questions 4-6: which person did each of these things?" }),
            q("Matching features", "Organises the watering at weekends.", ["Mrs Ashworth", "Mr Daniels", "Jamila"], 2, "Paragraph B: Jamila 'organises the rota' for weekend watering."),
            q("Matching features", "Teaches children how vegetables grow.", ["Mrs Ashworth", "Mr Daniels", "Jamila"], 0, "Paragraph B: Mrs Ashworth runs the children's workshops."),
            Object.assign(q("Multiple choice", "Why did many young plants die in the first summer?", ["Neighbours picked them", "A long dry spell and too little compost", "Children walked on them", "The shed flooded"], 1, "Paragraph C: 'a long dry spell killed many of the young plants' and the soil needed more compost."), { instruction: "Question 7: choose the correct letter." }),
            Object.assign(q("Matching sentence endings", "Some neighbours complained about the noise, although...", ["the work sessions end by midday", "the council had banned the sessions", "the plants needed more water", "no children took part"], 0, "Paragraph C: 'although the sessions finish by noon'."), { instruction: "Question 8: choose the correct ending for the sentence." })
        ]
    });

    var PARTS = ["card slot", "coin slot", "help button", "tray", "touch screen", "receipt printer"];
    SETS.push({
        id: "rs-gt-5", track: "general", title: "Practice 11: The Ticket Machine",
        intro: "General Training style \u00b7 7 questions \u00b7 about 8 minutes \u00b7 diagram label completion and True / False / Not given. Original text and drawing.",
        types: ["Diagram label completion", "True / False / Not given"],
        passageTitle: "Using the ticket machine",
        passage: [
            "The ticket machine has a touch screen in the centre. Cards are inserted in the slot below the screen, while coins go into the slot on the right. Your ticket and any change are delivered from the tray at the bottom. A help button at the top left connects you to a member of staff."
        ],
        visual: { kind: "scene", title: "The ticket machine (front view)", alt: "Front of a ticket machine: a screen in the middle, with numbered gaps 1 below the screen, 2 on the right, 3 at the top left and 4 at the bottom.",
            panels: [{ h: 260, compass: false, items: [
                { t: "rect", x: 100, y: 24, w: 160, h: 220, fill: "#f3f4f6", stroke: "#6b7280", rx: 10 },
                { t: "rect", x: 126, y: 70, w: 108, h: 72, fill: "#dbeafe", stroke: "#60a5fa", rx: 6, label: "screen", size: 12 },
                { t: "circle", x: 118, y: 46, r: 11, fill: "#ffffff", stroke: "#2563eb", label: "3" },
                { t: "rect", x: 140, y: 154, w: 80, h: 12, fill: "#374151", stroke: "#374151", rx: 3 },
                { t: "circle", x: 180, y: 182, r: 11, fill: "#ffffff", stroke: "#2563eb", label: "1" },
                { t: "rect", x: 244, y: 100, w: 10, h: 26, fill: "#374151", stroke: "#374151", rx: 3 },
                { t: "circle", x: 288, y: 113, r: 11, fill: "#ffffff", stroke: "#2563eb", label: "2" },
                { t: "arrow", x1: 276, y1: 113, x2: 258, y2: 113 },
                { t: "rect", x: 130, y: 208, w: 100, h: 24, fill: "#e5e7eb", stroke: "#6b7280", rx: 4 },
                { t: "circle", x: 180, y: 220, r: 10, fill: "#ffffff", stroke: "#2563eb", label: "4", size: 10 }
            ] }] },
        questions: [
            Object.assign(q("Diagram label completion", "Label gap 1 (below the screen).", PARTS, 0, "'Cards are inserted in the slot below the screen' - the card slot."), { instruction: "Questions 1-4: label the drawing. Choose the correct word from the list for each gap." }),
            q("Diagram label completion", "Label gap 2 (on the right).", PARTS, 1, "'Coins go into the slot on the right' - the coin slot."),
            q("Diagram label completion", "Label gap 3 (top left).", PARTS, 2, "'A help button at the top left'."),
            q("Diagram label completion", "Label gap 4 (at the bottom).", PARTS, 3, "'Your ticket and any change are delivered from the tray at the bottom'."),
            Object.assign(q("True / False / Not given", "The machine accepts both cards and coins.", TFNG, 0, "It has a slot for cards and a slot for coins - True."), { instruction: "Questions 5-7: do these statements agree with the text?" }),
            q("True / False / Not given", "Change is returned through the slot on the right.", TFNG, 1, "Change comes out of the tray at the bottom, not the right-hand slot - False."),
            q("True / False / Not given", "The machine prints receipts.", TFNG, 2, "The text never mentions receipts - Not given.")
        ]
    });

    // The original General Training set gets its question-type labels too.
    D.practiceSets.forEach(function (s) {
        if (s.id === "rs-ac-1" || s.id === "rs-ac-2") s.types = ["True / False / Not given", "Multiple choice"];
        if (s.id === "rs-gt-1") s.types = ["Multiple choice"];
    });
    D.practiceSets = D.practiceSets.concat(SETS);
})();
