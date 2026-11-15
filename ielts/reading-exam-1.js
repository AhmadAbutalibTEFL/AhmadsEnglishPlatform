/* =========================================================
   IELTS READING - exam-style practice, part 1
   Matching headings, matching information, matching features,
   matching sentence endings. One full passage + full question set
   per question type, for Academic and for General Training.
   ALL passages and questions are ORIGINAL to PassMyEnglish.
   Format only is modelled on the public exam layout.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var X = ns.rx = ns.rx || { tests: [], helpers: {} };
    var TFNG = ["True", "False", "Not given"], YNNG = ["Yes", "No", "Not given"];
    X.helpers = {
        R: function (p, o, a, e) { return { type: "radio", prompt: p, options: o, answer: a, explanation: e }; },
        S: function (p, a, e) { return { type: "select", prompt: p, answer: a, explanation: e }; },
        T: function (p, acc, e) { return { type: "text", prompt: p, accept: acc, explanation: e, answerLabel: acc[0] }; },
        TF: function (p, a, e) { return { type: "radio", prompt: p, options: TFNG, answer: a, explanation: e }; },
        YN: function (p, a, e) { return { type: "radio", prompt: p, options: YNNG, answer: a, explanation: e }; },
        M: function (p, o, a, e) { return { type: "multi", prompt: p, options: o, answer: a, explanation: e }; }
    };
    var H = X.helpers, S = H.S;
    function add(t) { X.tests.push(t); }

    /* ================= MATCHING HEADINGS ================= */
    add({
        id: "rx-headings-ac", type: "headings", track: "academic", minutes: 10,
        title: "Matching headings: The Return of the Night Sky",
        passageTitle: "The Return of the Night Sky",
        passage: [
            { l: "A", t: "Step outside in almost any city at night and the sky above you is a pale orange-grey. A large majority of people now live under skies brightened by streetlights, car parks, shop signs and floodlit buildings. Children raised in these places may never see the Milky Way, a sight that every earlier generation took for granted. Professional astronomers noticed the change first, but they are no longer the only people who miss the stars." },
            { l: "B", t: "Animals have far more to lose than we do. Young sea turtles that hatch on beaches normally crawl towards the bright horizon over the water; where hotels line the shore, many head inland towards the lights and never reach the sea. Migrating birds can become confused by lit towers and circle them until they are exhausted, and moths and other insects gather around lamps instead of feeding or breeding." },
            { l: "C", t: "People are affected too. The body runs on a daily rhythm that responds to light, and bright light late in the evening can delay the chemical signals that tell us it is time to sleep. Some studies suggest that people who sleep in rooms lit from outside report poorer rest, and doctors are now asking whether night-shift workers, who spend many hours under artificial light, face greater long-term health risks." },
            { l: "D", t: "Much of this light is simply wasted. A large share of outdoor lighting is aimed upwards or sideways, where it lights no road or pavement and merely scatters into the air. Cities therefore pay for electricity that produces no benefit. Several towns that have fitted lamps which direct the beam downwards report lower energy bills, with no rise in accidents on their streets." },
            { l: "E", t: "The answer does not mean switching everything off. Lamps with warm-coloured bulbs, shields that point the beam at the ground, sensors that brighten a path only when someone walks along it, and dimming after midnight all help. Some regions have gone further and created \u2018dark-sky reserves\u2019, where strict rules protect the night. These places have found an unexpected benefit: visitors travel long distances just to look up." }
        ],
        parts: [{
            instruction: "Questions 1\u20135. The passage has five paragraphs, A\u2013E. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use them all. Each heading can be used once only.",
            box: { title: "List of headings", items: ["i  Creatures confused by artificial brightness", "ii  A growing loss of the stars", "iii  The money lost in the sky", "iv  Why observatories moved to remote mountains", "v  Sleep and the body\u2019s clock", "vi  Practical ways to bring back darkness", "vii  The invention of the street lamp", "viii  Visitors who damage the countryside"] },
            choices: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
            qs: [
                S("Paragraph A", 1, "Paragraph A is about people losing the sight of stars. Heading iv is a trap: astronomers are mentioned, but nothing is said about observatories moving."),
                S("Paragraph B", 0, "Turtles, birds and moths all behave wrongly because of lights: \u2018creatures confused by artificial brightness\u2019."),
                S("Paragraph C", 4, "The paragraph is about light delaying sleep signals: the body\u2019s daily rhythm. It is about people, not animals."),
                S("Paragraph D", 2, "The key idea is wasted electricity, so the cost of lighting the sky. Heading ii is not right because it does not talk about missing stars."),
                S("Paragraph E", 5, "Warm bulbs, shields, sensors and dimming are practical ways to bring back darkness. Visitors are a small extra, not the main idea, so viii is wrong.")
            ]
        }],
        vocab: [["floodlit", "lit by very strong lamps"], ["hatch", "come out of an egg"], ["rhythm", "a regular pattern that repeats"], ["scatter", "spread in many directions"], ["shield", "a cover that stops light going where it is not needed"], ["reserve", "an area that is specially protected"]]
    });

    add({
        id: "rx-headings-gt", type: "headings", track: "general", minutes: 8,
        title: "Matching headings: Staff Guide, Harbour Print",
        passageTitle: "Staff Guide: Working at Harbour Print",
        passage: [
            { l: "A", t: "All staff work an eight-hour day, starting at 8.30 a.m. A one-hour break is taken between 12 noon and 2 p.m., and there are two shorter rest breaks of fifteen minutes, one in the morning and one in the afternoon. Staff on the machine floor should not leave their station until a colleague has taken over." },
            { l: "B", t: "You are entitled to twenty-five days of paid holiday a year. Requests should be given to your line manager at least three weeks in advance, using the form on the staff website. Holiday in December is very popular, so those requests are decided in September." },
            { l: "C", t: "Anyone entering the print hall must wear safety shoes and ear protection, which are provided on your first day. Long hair should be tied back, and loose jewellery removed. Visitors are given a bright jacket and must be accompanied at all times." },
            { l: "D", t: "If you cannot come to work because you are unwell, telephone your line manager before 8 a.m. on the first day. After three days of absence you must give the company a note from a doctor. Staff who are away for more than a week will be asked to meet the personnel officer when they return." },
            { l: "E", t: "The company will pay for approved courses that help you in your job, such as computer skills or first aid. Ask your manager about the evening classes held at the local college. Staff who finish a course receive a certificate and may be considered for promotion." }
        ],
        parts: [{
            instruction: "Questions 1\u20135. The text has five sections, A\u2013E. Choose the correct heading for each section from the list of headings below. There are more headings than sections.",
            box: { title: "List of headings", items: ["i  What to do when you are ill", "ii  Clothing and equipment for the print hall", "iii  Chances to learn something new", "iv  Booking your holiday", "v  Working hours and rest breaks", "vi  Using the staff car park", "vii  How and when wages are paid", "viii  Meeting visitors to the company"] },
            choices: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
            qs: [
                S("Section A", 4, "The section gives the start time, the main break and the short breaks: working hours and rest breaks."),
                S("Section B", 3, "Days of holiday, the form and the date for December requests: booking your holiday."),
                S("Section C", 1, "Safety shoes, ear protection, hair and jewellery: clothing and equipment. Visitors are mentioned only at the end, so viii is a trap."),
                S("Section D", 0, "Telephoning the manager, the doctor\u2019s note and the meeting after absence all deal with being unwell."),
                S("Section E", 2, "Courses, evening classes and certificates: chances to learn something new.")
            ]
        }],
        vocab: [["line manager", "the person you report to at work"], ["entitled to", "allowed to have by right"], ["in advance", "before the time"], ["absence", "not being at work"], ["approved", "officially accepted"]]
    });

    /* ================= MATCHING INFORMATION ================= */
    add({
        id: "rx-info-ac", type: "info", track: "academic", minutes: 10,
        title: "Matching information: The Lost Art of Handwriting",
        passageTitle: "The Lost Art of Handwriting",
        passage: [
            { l: "A", t: "Ask a group of adults when they last wrote a letter by hand, and many will struggle to remember. Keyboards and touchscreens have taken over so completely that some teachers report a decline in the legibility of writing, even among university students, who sometimes cannot read their own lecture notes a week later." },
            { l: "B", t: "Schools have not abandoned handwriting out of carelessness. The curriculum has grown crowded, and head teachers say that the time once given to copying letters has had to be shared with coding, languages and other subjects. Many children now begin typing before they have fully learned to form letters." },
            { l: "C", t: "Yet researchers have found reasons to regret the change. In one study, two groups of students listened to the same lecture; one group wrote notes by hand and the other typed. A week later the hand-writers answered more questions about the ideas in the talk. The typists had recorded more words, but, it seems, they had often copied without thinking." },
            { l: "D", t: "Some therapists also see value in the pen. Writing involves delicate movements of the fingers and wrist, and occupational therapists use it as an exercise for patients regaining control of a hand after a stroke or an injury. Practising letters gives them a clear goal and a way to measure progress." },
            { l: "E", t: "Meanwhile, certain professions have never let handwriting go. Pilots are taught to write down instructions from air traffic control, since a note on a knee board cannot lose power or freeze. Doctors, too, still scribble many urgent notes at the bedside, although the results are famously difficult to read." },
            { l: "F", t: "None of this means that keyboards should be banned. Most experts recommend a balance: typing for long essays and reports, and handwriting for quick notes, first drafts and learning new material. The aim is for everyone, young and old, to keep the skill alive rather than let it fade." }
        ],
        parts: [{
            instruction: "Questions 1\u20137. The passage has six paragraphs, A\u2013F. Which paragraph contains the following information? Write the correct letter, A\u2013F. You may use any letter more than once.",
            choices: ["A", "B", "C", "D", "E", "F"],
            qs: [
                S("a reason why teachers have less time for handwriting", 1, "Paragraph B: the curriculum is crowded with other subjects."),
                S("a reference to people who write by hand because it is safer", 4, "Paragraph E: pilots write notes because a paper note cannot lose power or freeze."),
                S("the result of a comparison between two groups of students", 2, "Paragraph C compares students who wrote by hand with students who typed."),
                S("a use of handwriting for people recovering from a medical problem", 3, "Paragraph D: therapists use writing for patients after a stroke or injury."),
                S("a comment on people who cannot read their own notes", 0, "Paragraph A: students sometimes cannot read their own lecture notes. Paragraph E mentions doctors\u2019 writing, but that is not about reading their own notes."),
                S("advice to use typing and handwriting for different jobs", 5, "Paragraph F recommends a balance: typing for long texts and handwriting for quick notes."),
                S("a suggestion that typing more words does not mean better learning", 2, "Paragraph C: the typists recorded more words but copied without thinking.")
            ]
        }],
        vocab: [["legibility", "how easy writing is to read"], ["curriculum", "all the subjects taught in a school"], ["occupational therapist", "a health worker who helps people do everyday tasks again"], ["scribble", "write quickly and untidily"], ["fade", "become weaker and disappear"]]
    });

    add({
        id: "rx-info-gt", type: "info", track: "general", minutes: 8,
        title: "Matching information: Millfield Leisure Centre",
        passageTitle: "Welcome to Millfield Leisure Centre",
        passage: [
            { l: "A", t: "The centre is open from 6.30 a.m. to 10 p.m. on weekdays and from 8 a.m. to 8 p.m. at weekends. It closes on 25 and 26 December and on 1 January. The swimming pool shuts for cleaning every day between 2 p.m. and 2.30 p.m." },
            { l: "B", t: "Adult membership costs \u00a332 a month, and students and over-sixties pay \u00a321. You can also pay for a single visit at the desk. Members receive a card, which must be shown on entry. If you lose it, a new card costs \u00a34." },
            { l: "C", t: "More than forty classes run each week, from yoga to spinning. Places in the most popular classes can be booked up to seven days ahead on our app. If you cannot attend, please cancel at least two hours before the start so that someone else can have your place." },
            { l: "D", t: "Children under eight must always be accompanied in the pool by an adult. Holiday clubs for children aged 8 to 12 run in school holidays from 9 a.m. to 3 p.m. Children should bring their own lunch." },
            { l: "E", t: "The centre is a five-minute walk from Millfield station, and buses 14 and 22 stop outside the main entrance. A small car park is available, but spaces fill quickly on Saturday mornings. There are racks for bicycles beside the caf\u00e9." },
            { l: "F", t: "We welcome your comments. Please fill in a card at reception or use the online form on our website. The manager reads every message and replies within five working days." }
        ],
        parts: [{
            instruction: "Questions 1\u20136. The text has six sections, A\u2013F. Which section contains the following information? Write the correct letter, A\u2013F. You may use any letter more than once.",
            choices: ["A", "B", "C", "D", "E", "F"],
            qs: [
                S("the cost of replacing something that has been lost", 1, "Section B: a new card costs \u00a34."),
                S("a way to let another person use your place in a class", 2, "Section C: cancel at least two hours before so someone else can have your place."),
                S("a time when finding a parking space may be difficult", 4, "Section E: spaces fill quickly on Saturday mornings."),
                S("a time of day when part of the centre cannot be used", 0, "Section A: the pool shuts for cleaning between 2 p.m. and 2.30 p.m."),
                S("how long staff take to answer a complaint", 5, "Section F: the manager replies within five working days."),
                S("something children need to bring with them", 3, "Section D: children should bring their own lunch.")
            ]
        }],
        vocab: [["membership", "belonging to a club or centre, usually for a fee"], ["accompanied", "with another person"], ["spinning", "exercise class on a fixed bicycle"], ["racks", "frames for holding things such as bicycles"]]
    });

    /* ================= MATCHING FEATURES ================= */
    add({
        id: "rx-features-ac", type: "features", track: "academic", minutes: 10,
        title: "Matching features: Should School Start Later?",
        passageTitle: "Should School Start Later?",
        passage: [
            "Across many countries, schools begin before eight in the morning, and the question of whether this suits teenagers has divided experts. Three specialists give their views.",
            { l: "A", t: "Dr Amara Osei, sleep scientist. \u201cDuring adolescence the body clock shifts: young people naturally feel sleepy later at night and wake later in the morning. An early start therefore cuts their sleep, and the lost hours are not simply repaid at the weekend. Tired teenagers do not only concentrate less; they are also more irritable and more anxious. A start nearer nine o\u2019clock would help biology rather than fight it.\u201d" },
            { l: "B", t: "Professor Lena Brandt, education researcher. \u201cMy own school moved its first lesson from 8.00 to 9.00 for one year. The number of students arriving late fell sharply and fewer were sent home ill. Teachers did, however, tell me that the last lesson of the day had become harder to teach, because students were tired by then and the day felt too long. Schools will need to adjust the timetable, not only the start time.\u201d" },
            { l: "C", t: "Dr Tomas Rivera, transport economist. \u201cThe problem with a later start is the journey. Many bus services are used first by secondary students and then by primary pupils, using the same vehicles. If every school began at nine, operators would need more buses and drivers. Working parents who drop children off on the way to work would also have to change their routines. These costs deserve as much attention as the benefits.\u201d" }
        ],
        parts: [{
            instruction: "Questions 1\u20137. Look at the following statements and the list of experts below. Match each statement with the correct expert, A, B or C. You may use any letter more than once.",
            box: { title: "List of experts", items: ["A  Dr Amara Osei", "B  Professor Lena Brandt", "C  Dr Tomas Rivera"] },
            choices: ["A", "B", "C"],
            qs: [
                S("Teenagers naturally become sleepy later in the evening.", 0, "Dr Osei: the body clock shifts and young people feel sleepy later at night."),
                S("A later start could force families to change their daily routine.", 2, "Dr Rivera: working parents would have to change their routines."),
                S("Fewer students arrived late after the change.", 1, "Professor Brandt: the number arriving late fell sharply."),
                S("Sleep that is lost during the week is not easily made up at weekends.", 0, "Dr Osei: lost hours are not simply repaid at the weekend."),
                S("A school day beginning at the same time everywhere would need extra vehicles.", 2, "Dr Rivera: if every school began at nine, operators would need more buses."),
                S("Some lessons became more difficult to teach after the change.", 1, "Professor Brandt: teachers found the last lesson harder to teach."),
                S("Tiredness affects feelings as well as concentration.", 0, "Dr Osei: tired teenagers are more irritable and more anxious.")
            ]
        }],
        vocab: [["adolescence", "the years between childhood and adulthood"], ["irritable", "easily annoyed"], ["operator", "a company that runs a service"], ["timetable", "a plan of lessons for the day"]]
    });

    add({
        id: "rx-features-gt", type: "features", track: "general", minutes: 8,
        title: "Matching features: Evening Courses at Westfield College",
        passageTitle: "Evening Courses at Westfield College",
        passage: [
            "Westfield College offers three popular courses this autumn. All of them begin in the first week of October.",
            { l: "A", t: "Spanish for Beginners. No earlier knowledge is needed. Classes run on Monday and Wednesday evenings from 6.30 to 8.00 p.m. for ten weeks. Students buy their own textbook from the college shop. At the end of the course every student receives a certificate." },
            { l: "B", t: "Digital Photography. This course is for people who already own a camera or a good phone. Please bring your own equipment to every class. The tutor, a professional photographer, teaches no more than ten students at a time, and there is a Saturday morning walk around the old town in week five." },
            { l: "C", t: "Home Cooking. Beginners and experienced cooks are equally welcome. All ingredients are provided and the cost is included in the course fee. The tutor trained as a chef in Italy and worked there for six years. The course finishes with a dinner, to which each student may invite two guests." }
        ],
        parts: [{
            instruction: "Questions 1\u20136. Look at the statements and the three courses below. Match each statement with the correct course, A, B or C. You may use any letter more than once.",
            box: { title: "Courses", items: ["A  Spanish for Beginners", "B  Digital Photography", "C  Home Cooking"] },
            choices: ["A", "B", "C"],
            qs: [
                S("Students need to bring their own equipment.", 1, "Course B: please bring your own camera or phone to every class."),
                S("The course ends with an event for friends or family.", 2, "Course C: a dinner to which each student may invite two guests."),
                S("Students must buy a book.", 0, "Course A: students buy their own textbook."),
                S("The number of students is limited.", 1, "Course B: no more than ten students at a time."),
                S("Classes take place twice a week.", 0, "Course A: Monday and Wednesday evenings."),
                S("The teacher has worked in another country.", 2, "Course C: the tutor worked in Italy for six years.")
            ]
        }],
        vocab: [["equipment", "the things you need for an activity"], ["tutor", "a teacher of a small group"], ["ingredients", "the foods you use to make a dish"], ["fee", "money you pay for a service"]]
    });

    /* ================= MATCHING SENTENCE ENDINGS ================= */
    add({
        id: "rx-endings-ac", type: "endings", track: "academic", minutes: 10,
        title: "Matching sentence endings: How Honeybees Share Directions",
        passageTitle: "How Honeybees Share Directions",
        passage: [
            "When a honeybee scout finds a rich patch of flowers, she faces a problem: the other bees in the hive need to know where it is. Her solution, first described by an Austrian scientist, is a dance performed on the vertical surface of the honeycomb.",
            "The dance has a simple shape. The bee runs forward in a straight line while shaking her body from side to side, then circles back to the start and repeats the run. The angle of the straight run, measured from the upward direction, matches the angle between the sun and the flowers. If the run points 40 degrees to the right of vertical, the food lies 40 degrees to the right of the sun.",
            "Distance is also coded. The longer the bee waggles during the straight run, the farther away the food. A short waggle of less than a second suggests flowers close to the hive; several seconds suggest a long journey.",
            "Because the hive is dark, the other bees cannot watch the dance. Instead they crowd around the dancer and follow her movements by touch, sensing the vibrations of her body. They then leave and search in the direction and at the distance she has shown.",
            "Cloud presents a challenge, because the dancers rely on the sun. Even so, bees seem able to find it by detecting patterns in the light of the sky, and they continue to dance accurately. The skill is not fully present at birth. Young bees that have never watched a dance make clumsy movements, and they become accurate only after watching experienced dancers several times."
        ],
        parts: [{
            instruction: "Questions 1\u20136. Complete each sentence with the correct ending, A\u2013H, from the list below. There are more endings than sentences.",
            box: { title: "Endings", items: ["A  shows the direction of the flowers compared with the sun.", "B  can still work out direction from patterns in the light of the sky.", "C  returns to the hive to tell others.", "D  tells the other bees how far away the food is.", "E  follow the dancer by touch and vibration.", "F  after watching experienced bees several times.", "G  stop all dancing until the weather improves.", "H  is exactly the same for every kind of flower."] },
            choices: ["A", "B", "C", "D", "E", "F", "G", "H"],
            qs: [
                S("When a scout bee finds a rich patch of flowers, she", 2, "The scout \u2018faces a problem\u2019: the others need to know. She dances in the hive, so she returns to tell others (C)."),
                S("The angle of the straight run", 0, "The angle matches the angle between the sun and the flowers (A)."),
                S("The length of time the bee waggles", 3, "The longer the waggle, the farther away the food (D)."),
                S("Bees in the dark hive", 4, "The hive is dark, so they follow by touch and vibration (E)."),
                S("When the sun is hidden by cloud, dancers", 1, "Bees detect patterns in the light of the sky and keep dancing accurately (B). G is the opposite of what the text says."),
                S("Young bees only dance accurately", 5, "They become accurate only after watching experienced dancers several times (F).")
            ]
        }],
        vocab: [["scout", "a bee that goes out to look for food"], ["honeycomb", "the wax structure in a hive"], ["vibration", "a very small, fast shaking movement"], ["clumsy", "not smooth or skilful"]]
    });

    add({
        id: "rx-endings-gt", type: "endings", track: "general", minutes: 8,
        title: "Matching sentence endings: Recycling at Home",
        passageTitle: "Recycling at Home: Greenvale Council",
        passage: [
            "All households in Greenvale can use the council\u2019s collection service. Please read the notes below.",
            "Boxes and bags for collection must be placed at the kerb before 7 a.m. on your collection day. Items put out after the lorry has passed will not be taken until the next collection.",
            "Food waste is collected every week in the small brown bin. Garden waste, such as grass and leaves, is collected once a fortnight between March and November only.",
            "Batteries cannot be put in any bin. Please take them to the collection point at the library, where there is a special container beside the main desk.",
            "If your bin is missed, please report it through the council website. The crew will make a second visit within two working days.",
            "Large items such as sofas and fridges are not taken with ordinary waste. They can be collected, but only by arrangement and for a small charge. Telephone the council to book."
        ],
        parts: [{
            instruction: "Questions 1\u20136. Complete each sentence with the correct ending, A\u2013G, from the list below.",
            box: { title: "Endings", items: ["A  should be taken to the collection point at the library.", "B  must be put out at the kerb before 7 a.m.", "C  is collected once every two weeks, but not all year.", "D  can be reported online, and a second visit will follow.", "E  are collected only if you arrange it and pay a small charge.", "F  should be put in the blue bin.", "G  is collected every week."] },
            choices: ["A", "B", "C", "D", "E", "F", "G"],
            qs: [
                S("Boxes and bags for collection", 1, "They must be at the kerb before 7 a.m. (B)."),
                S("Garden waste", 2, "Once a fortnight, March to November only (C)."),
                S("Batteries", 0, "They go to the collection point at the library (A)."),
                S("A bin that has been missed", 3, "Report it online; the crew makes a second visit (D)."),
                S("Large items such as sofas", 4, "Collected by arrangement for a small charge (E). The sentence has a plural subject, so \u2018are collected\u2019 fits."),
                S("Food waste", 6, "Collected every week in the small brown bin (G). Nothing in the text mentions a blue bin, so F is not correct.")
            ]
        }],
        vocab: [["kerb", "the edge of the pavement beside the road"], ["fortnight", "two weeks"], ["household", "all the people who live in one home"], ["by arrangement", "only if you agree it in advance"]]
    });
})();
