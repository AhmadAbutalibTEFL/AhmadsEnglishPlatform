/* =========================================================
   IELTS READING - exam-style practice, part 3
   Yes / No / Not given, multiple choice, short-answer questions.
   ALL passages and questions are ORIGINAL to PassMyEnglish.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var X = ns.rx = ns.rx || { tests: [], helpers: {} };
    var H = X.helpers, R = H.R, T = H.T, YN = H.YN, M = H.M;
    function add(t) { X.tests.push(t); }

    /* ================= YES / NO / NOT GIVEN ================= */
    add({
        id: "rx-ynng-ac", type: "ynng", track: "academic", minutes: 10,
        title: "Yes / No / Not Given: The Case for Slow Travel",
        passageTitle: "The Case for Slow Travel",
        passage: [
            "Air travel has made the world smaller, but I am not convinced that it has made travellers wiser. A weekend in a distant capital, squeezed between two flights, gives you a list of sights ticked off rather than a place understood. In my view, how we travel matters more than how far.",
            "Travelling slowly, by train, bicycle or on foot, changes the experience. Landscapes alter gradually, languages blend at borders, and you meet fellow passengers who would never appear in an airport lounge. Some critics say that slow travel is a luxury for the retired and the rich. I disagree. A long-distance train ticket is often cheaper than a flight booked at short notice, and a walking holiday needs little more than a pair of boots.",
            "There is also the question of the planet. Flights produce far more carbon for each passenger than trains do. Yet I do not believe that governments should ban short flights; people respond better to attractive alternatives than to bans. Better night trains and simpler ticketing would do more good than any law.",
            "It is true that slow travel takes time, and not everyone has holidays long enough for it. Even so, a short journey taken slowly can be rewarding. Next time, choose somewhere nearer, and let the journey itself be part of the holiday."
        ],
        parts: [{
            instruction: "Questions 1\u20138. Do the following statements agree with the views of the writer? Choose YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.",
            qs: [
                YN("Air travel has made people wiser.", 1, "NO: the writer is \u2018not convinced\u2019 that it has made travellers wiser."),
                YN("The way people travel is more important than the distance.", 0, "YES: \u2018how we travel matters more than how far\u2019."),
                YN("Slow travel is only possible for wealthy people.", 1, "NO: \u2018I disagree\u2019 with the critics who say this."),
                YN("A long train journey can cost less than a last-minute flight.", 0, "YES: \u2018often cheaper than a flight booked at short notice\u2019."),
                YN("Governments should ban short flights.", 1, "NO: \u2018I do not believe that governments should ban short flights\u2019."),
                YN("People make better choices when given attractive alternatives.", 0, "YES: \u2018people respond better to attractive alternatives than to bans\u2019."),
                YN("The writer has crossed a continent by train.", 2, "NOT GIVEN: the writer does not talk about any personal journey."),
                YN("Night trains are too expensive at the moment.", 2, "NOT GIVEN: the writer wants better night trains but says nothing about their price.")
            ]
        }],
        vocab: [["squeezed", "fitted into a small space or time"], ["blend", "mix gradually"], ["lounge", "a waiting area"], ["alternative", "another choice"]]
    });

    add({
        id: "rx-ynng-gt", type: "ynng", track: "general", minutes: 8,
        title: "Yes / No / Not Given: A Four-Day Week for Calder & Sons",
        passageTitle: "Letter to the Staff Newsletter: A Four-Day Week?",
        passage: [
            "Last month our manager asked for ideas to improve life at Calder & Sons. I would like to suggest something bold: a four-day working week, with the same pay. I realise that many colleagues think this is impossible, but several companies that tried it found that work was finished on time and that staff were happier.",
            "The usual objection is that customers expect us to be open five days. I do not think this is a serious problem. We could split the team so that half work Monday to Thursday and half work Tuesday to Friday. Telephones would still be answered every day.",
            "Some people worry that staff would simply work longer hours on four days and feel just as tired. That is possible, so I suggest a trial of three months, with a review at the end. If it does not work, we can go back. I would be surprised, though, if anyone wanted to.",
            "I know that Mr Calder has doubts. I hope he will at least agree to talk. Our sales figures are good this year, which gives us a safe moment to experiment."
        ],
        parts: [{
            instruction: "Questions 1\u20137. Do the following statements agree with the views of the writer? Choose YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.",
            qs: [
                YN("A four-day week would be impossible at Calder & Sons.", 1, "NO: the writer says colleagues think so, but suggests it can work."),
                YN("Staff should keep the same pay.", 0, "YES: \u2018a four-day working week, with the same pay\u2019."),
                YN("Customers would be unhappy with the change.", 1, "NO: the writer does not think the customer objection is serious."),
                YN("All staff should have the same day off.", 1, "NO: the team would be split, with different days off."),
                YN("Tiredness could remain a problem.", 0, "YES: \u2018That is possible\u2019 shows the writer accepts this."),
                YN("Mr Calder will accept the idea.", 2, "NOT GIVEN: the writer only hopes he will agree to talk."),
                YN("The writer has already discussed the idea with Mr Calder.", 2, "NOT GIVEN: the text does not say whether they have spoken.")
            ]
        }],
        vocab: [["bold", "brave and different"], ["objection", "a reason against something"], ["trial", "a test period"], ["experiment", "try something new to see the result"]]
    });

    /* ================= MULTIPLE CHOICE ================= */
    add({
        id: "rx-mcq-ac", type: "mcq", track: "academic", minutes: 10,
        title: "Multiple choice: The Hidden Value of Boredom",
        passageTitle: "The Hidden Value of Boredom",
        passage: [
            "Most of us treat boredom as a problem to be fixed. At the first quiet moment, a hand reaches for a phone. Yet psychologists who study the feeling suggest that this reflex may be costing us something.",
            "In one experiment, volunteers were asked to copy numbers from a telephone directory for fifteen minutes, then to think of as many uses as they could for a pair of plastic cups. They produced more unusual ideas than a group who went straight to the cups. The researchers argued that the dull task let the mind wander, and wandering minds make unexpected links.",
            "Not all boredom is helpful. Researchers distinguish between the restless boredom of having nothing to do, which can lead to poor choices, and the calm boredom of a familiar routine, such as a long walk. It is the second kind, they believe, that leaves room for creative thought.",
            "Parents often worry that children who are never bored are denied this space. Teacher Rosa Almeida says she has seen pupils return from a school trip without phones full of plans for stories and games. But she does not suggest cutting off technology. \u201cIt is about leaving gaps, not building walls,\u201d she says."
        ],
        parts: [{
            instruction: "Questions 1\u20134 and 6. Choose the correct letter, A, B, C or D.",
            qs: [
                R("What do psychologists suggest about reaching for a phone in quiet moments?", ["It is a harmless habit.", "It may have a hidden cost.", "It always stops creative ideas.", "It is a very recent habit."], 1, "Paragraph 1: this reflex \u2018may be costing us something\u2019. \u2018Always\u2019 in C is too strong."),
                R("The volunteers who copied numbers first", ["found the cups task harder.", "produced more unusual ideas.", "wrote down more numbers than expected.", "asked to stop the experiment."], 1, "Paragraph 2: they \u2018produced more unusual ideas\u2019."),
                R("The researchers argued that the dull task", ["tired the mind.", "made volunteers anxious.", "allowed the mind to wander.", "improved memory."], 2, "Paragraph 2: \u2018the dull task let the mind wander\u2019."),
                R("What distinction do researchers make?", ["between children\u2019s and adults\u2019 boredom", "between restless and calm boredom", "between long and short tasks", "between school and home"], 1, "Paragraph 3: restless boredom and calm boredom."),
                M("Which TWO statements does the writer agree with? Choose two letters.", ["Calm boredom can be useful.", "Boredom should be avoided at all costs.", "Gaps in a busy day can help children\u2019s imagination.", "Children should not be allowed to use technology.", "Boredom is the same as laziness."], [0, 2], "A: calm boredom leaves room for creative thought (paragraph 3). C: pupils came back with plans for stories and games after time without phones (paragraph 4). B, D and E are never said; paragraph 4 even says she does not suggest cutting off technology."),
                R("What is Rosa Almeida\u2019s attitude to technology?", ["She wants it removed from schools.", "She accepts it but wants quiet gaps.", "She believes it improves creativity.", "She has no opinion about it."], 1, "She \u2018does not suggest cutting off technology\u2019 but speaks of \u2018leaving gaps\u2019.")
            ]
        }],
        vocab: [["reflex", "an automatic reaction"], ["directory", "a book of names and telephone numbers"], ["restless", "unable to stay calm or still"], ["wander", "move without a fixed direction"]]
    });

    add({
        id: "rx-mcq-gt", type: "mcq", track: "general", minutes: 8,
        title: "Multiple choice: Running a Good Meeting",
        passageTitle: "Running a Good Meeting",
        passage: [
            "Most employees spend several hours a week in meetings, and many say that much of this time is wasted. A good meeting needs a clear purpose, the right people and a firm end time.",
            "Start by writing an agenda and sending it out at least a day beforehand, so that people can prepare. Invite only those who need to take part; others can be sent the notes afterwards.",
            "On the day, begin on time even if someone is missing. Someone should take notes, and the person chairing the meeting should make sure that quieter members get a chance to speak, not only the loudest.",
            "Finish by agreeing who will do what, and by when. Send a short summary the same day. A meeting without actions, experts say, is only a conversation."
        ],
        parts: [{
            instruction: "Questions 1\u20134 and 6. Choose the correct letter, A, B, C or D.",
            qs: [
                R("What do many employees feel about meetings?", ["They are held too early.", "They waste time.", "There are too few of them.", "They are unimportant."], 1, "Paragraph 1: \u2018much of this time is wasted\u2019."),
                R("When should the agenda be sent out?", ["at the start of the meeting", "at least a day before", "after the meeting", "only if someone asks"], 1, "Paragraph 2: \u2018at least a day beforehand\u2019."),
                R("What should happen to people who do not need to take part?", ["They attend and stay silent.", "They are sent the notes later.", "They must say sorry.", "They are asked to leave."], 1, "Paragraph 2: \u2018others can be sent the notes afterwards\u2019."),
                R("The person chairing the meeting should make sure that", ["everyone arrives on time.", "the meeting finishes early.", "quieter members can speak.", "no notes are taken."], 2, "Paragraph 3: quieter members get a chance to speak."),
                M("Which TWO things should be done at the end of a meeting? Choose two letters.", ["Agree who will do what.", "Wait for people who are late.", "Book a room for the next meeting.", "Send a short summary.", "Change the agenda."], [0, 3], "Paragraph 4: \u2018agreeing who will do what\u2019 (A) and \u2018send a short summary the same day\u2019 (D). Waiting for latecomers is the opposite of paragraph 3."),
                R("What is said about a meeting without actions?", ["It is the most efficient kind.", "It is only a conversation.", "It should be made longer.", "It is common in small firms."], 1, "Paragraph 4: \u2018is only a conversation\u2019.")
            ]
        }],
        vocab: [["agenda", "a list of things to talk about"], ["chair", "lead a meeting"], ["beforehand", "before the time"], ["summary", "a short account of the main points"]]
    });

    /* ================= SHORT-ANSWER QUESTIONS ================= */
    add({
        id: "rx-short-ac", type: "short", track: "academic", minutes: 10,
        title: "Short answers: How Bridges Are Tested",
        passageTitle: "How Bridges Are Tested",
        passage: [
            "Before a new bridge opens to traffic, engineers carry out a load test. Heavy lorries, often filled with sand, are driven onto the bridge and parked in carefully chosen positions, while sensors measure how far the structure bends. The bending, known as deflection, must stay within limits calculated in advance.",
            "On some bridges the test lasts only a day, but for large structures it may continue for a week, because the effects of temperature must be recorded as well. Steel expands in the sun, and a bridge may move several centimetres between morning and night.",
            "Testing does not end when the bridge opens. Inspectors cross older bridges every two years, looking for cracks and rust, and increasingly they use drones to reach places that are dangerous for people. Some bridges now carry permanent sensors that send readings to a computer, which warns engineers if the movement is unusual.",
            "The oldest bridges pose special problems because records of their construction are often missing. In such cases, engineers drill small samples from the stone or iron to find out how strong the material still is."
        ],
        parts: [{
            instruction: "Questions 1\u20138. Answer the questions below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
            qs: [
                T("What are the lorries often filled with during a load test?", ["sand"], "Paragraph 1: \u2018often filled with sand\u2019."),
                T("What is the word for the bending of a bridge under load?", ["deflection"], "Paragraph 1: \u2018The bending, known as deflection\u2019."),
                T("How long may the test last on a large bridge?", ["a week", "one week", "1 week"], "Paragraph 2: \u2018it may continue for a week\u2019."),
                T("What makes a bridge move several centimetres between morning and night?", ["temperature", "the sun", "sun"], "Paragraph 2: temperature effects; steel expands in the sun."),
                T("How often do inspectors cross older bridges?", ["every two years", "two years"], "Paragraph 3: \u2018every two years\u2019."),
                T("What do inspectors increasingly use to reach dangerous places?", ["drones", "drone"], "Paragraph 3: \u2018they use drones\u2019."),
                T("Where do permanent sensors send their readings?", ["a computer", "computer", "to a computer"], "Paragraph 3: \u2018send readings to a computer\u2019."),
                T("What do engineers drill from very old bridges?", ["small samples", "samples"], "Paragraph 4: \u2018drill small samples from the stone or iron\u2019.")
            ]
        }],
        vocab: [["load", "weight carried by a structure"], ["deflection", "the amount something bends"], ["rust", "red-brown damage on iron"], ["drone", "a small aircraft with no pilot"]]
    });

    add({
        id: "rx-short-gt", type: "short", track: "general", minutes: 8,
        title: "Short answers: Harbourside Museum Visitor Information",
        passageTitle: "Harbourside Museum: Visitor Information",
        passage: [
            "The Harbourside Museum is housed in a former customs building and tells the story of the port from 1800 to the present day. Opening hours are 10 a.m. to 5 p.m., Tuesday to Sunday. The museum is closed on Mondays.",
            "Tickets cost \u00a38 for adults and \u00a34 for children aged 5 to 15. Children under 5 enter at no cost. A family ticket for two adults and up to three children costs \u00a320. Tickets can be bought at the entrance or on the museum\u2019s website.",
            "Guided tours in English start at 11 a.m. and 2 p.m. and last 45 minutes. Tours in Spanish and Arabic can be arranged if you telephone a week in advance. An audio guide in six languages is available at the desk for \u00a32.",
            "The Ship Hall, on the ground floor, holds our largest exhibit, a fishing boat from 1926. The caf\u00e9 on the top floor has a view across the harbour. Photographs are welcome, but please do not use a flash."
        ],
        parts: [{
            instruction: "Questions 1\u20138. Answer the questions below. Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the text for each answer.",
            qs: [
                T("In what kind of building is the museum?", ["a former customs building", "former customs building", "customs building"], "Paragraph 1: \u2018housed in a former customs building\u2019."),
                T("On which day is the museum closed?", ["monday", "mondays"], "Paragraph 1: \u2018closed on Mondays\u2019."),
                T("How much is a ticket for a ten-year-old child?", ["\u00a34", "4", "4 pounds", "four pounds"], "Paragraph 2: \u00a34 for children aged 5 to 15."),
                T("How many children can be included on a family ticket?", ["three", "3", "up to three"], "Paragraph 2: \u2018two adults and up to three children\u2019."),
                T("How long does a guided tour last?", ["45 minutes", "forty-five minutes", "forty five minutes"], "Paragraph 3: tours \u2018last 45 minutes\u2019."),
                T("How far ahead must you telephone to arrange a tour in Spanish?", ["a week", "one week", "1 week"], "Paragraph 3: \u2018telephone a week in advance\u2019."),
                T("Where is the largest exhibit?", ["the ship hall", "ship hall"], "Paragraph 4: \u2018The Ship Hall ... holds our largest exhibit\u2019."),
                T("What should visitors not use when taking photographs?", ["flash", "a flash"], "Paragraph 4: \u2018please do not use a flash\u2019.")
            ]
        }],
        vocab: [["customs", "the place where goods entering a country are checked"], ["exhibit", "an object shown in a museum"], ["in advance", "before the time"], ["audio guide", "a recorded commentary you listen to"]]
    });
})();
