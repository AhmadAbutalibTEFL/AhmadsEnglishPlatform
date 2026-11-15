/* =========================================================
   IELTS LISTENING - exam-style practice, Test B (Parts 3 and 4)
   ALL scripts and questions are ORIGINAL to PassMyEnglish.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var X = ns.lx = ns.lx || { tests: [], helpers: {} };
    var H = X.helpers, R = H.R, T = H.T;
    function add(t) { X.tests.push(t); }

    /* ================= TEST B, PART 3 ================= */
    add({
        id: "lx-b3", test: "B", part: 3, minutes: 10, kind: "Discussion", qOffset: 20,
        title: "Test B, Part 3: A student and her tutor discuss a dissertation",
        typeName: "Part 3: Multiple choice and sentence completion",
        context: "A student, Isla, talks to her tutor, Dr Reyes, about her research on sleep and exam results.",
        lessons: ["mcq", "sentence"],
        voices: { Reyes: "en-IE-ConnorNeural", Isla: "en-GB-MaisieNeural" },
        script: [
            ["Reyes", "Hello, Isla. Sit down. You wanted to talk about your dissertation on sleep and exam results."],
            ["Isla", "Yes. First, I'd like to change the title. At the moment it says 'Sleep and Academic Success', but that is misleading, because I didn't measure success in general, only exam marks in one subject."],
            ["Reyes", "I agree. Something more precise would be better. Now, tell me about your participants."],
            ["Isla", "I had sixty teenagers, and they all came from the same school, because that is where I had permission to work."],
            ["Reyes", "That's your main weakness, I'm afraid. Sixty is acceptable for a dissertation, but if they are all from one school, you can't say much about teenagers in general. You'll need to be honest about that."],
            ["Isla", "I will. I did consider wristbands to measure sleep, but they were far too expensive, so I asked each student to keep a sleep diary for a month."],
            ["Reyes", "A diary is fine, as long as you explain its limits. People don't always remember exactly. And what did you find?"],
            ["Isla", "I expected the students who slept longer to get the best marks, but that wasn't the whole story. There was no difference between students sleeping seven hours and those sleeping nine. The only clear link was for those sleeping under six hours, who did noticeably worse."],
            ["Reyes", "That's a nice, specific result. For your discussion section, my advice is to spend some time on the limitations: the single school, the diaries, the single subject. Examiners like to see that you understand what your study can't show."],
            ["Isla", "Should I make it shorter, then?"],
            ["Reyes", "No, the length is fine. Don't add more charts either. Just discuss the limitations. Now, what's your plan for the next stage?"],
            ["Isla", "I'd like to carry out some follow-up interviews, to find out why the short sleepers sleep so little. I'm going to begin with twelve students."],
            ["Reyes", "Good. How will you record them?"],
            ["Isla", "On my phone. I've tested it, and the quality is surprisingly good."],
            ["Reyes", "Fine, but ask permission first. Also, when you write about reasons for poor sleep, read some recent work on caffeine. A lot of teenagers drink energy drinks, and the research on that is interesting. You mentioned exercise too, but there's much less on that."],
            ["Isla", "Great, I'll look for some. When do you need the full draft?"],
            ["Reyes", "By the end of April. That gives you six weeks after the interviews. And let's meet again in two weeks to check progress."],
            ["Isla", "Perfect. Thank you very much."]
        ],
        parts: [{
            instruction: "Questions 21\u201325. Choose the correct letter, A, B or C.",
            qs: [
                R("Why does Isla want to change the title of her dissertation?", ["It is too long.", "It is misleading.", "Her tutor dislikes it."], 1, "\"that is misleading, because I didn't measure success in general\"."),
                R("What does Dr Reyes think is the main weakness of the study?", ["The sample was too small.", "All the students came from one school.", "There were too many boys."], 1, "\"if they are all from one school, you can't say much about teenagers in general\". Sixty is \"acceptable\"."),
                R("How did the participants record their sleep?", ["with a wristband", "in a diary", "on a phone app"], 1, "Wristbands were \"far too expensive\", so each student \"keep a sleep diary\"."),
                R("What was the clearest result of the study?", ["More sleep always meant better marks.", "There was no link between sleep and marks.", "Students sleeping under six hours did worse."], 2, "\"The only clear link was for those sleeping under six hours, who did noticeably worse.\""),
                R("What does Dr Reyes advise about the discussion section?", ["make it shorter", "discuss the limitations", "add more charts"], 1, "\"spend some time on the limitations\". Shorter and more charts are both rejected.")
            ]
        }, {
            instruction: "Questions 26\u201330. Complete the sentences below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
            kind: "notes",
            template: ["# Isla's plan", "She will begin with [[1]] follow-up interviews.", "She will record the interviews on her [[2]].", "Dr Reyes suggests she reads recent work on [[3]].", "The full draft is due at the end of [[4]].", "They will meet again in [[5]]."],
            qs: [
                T("Number of interviews", ["12", "twelve"], "\"I'm going to begin with twelve students.\""),
                T("Recording device", ["phone", "her phone", "mobile"], "\"On my phone.\""),
                T("Topic to read about", ["caffeine"], "\"read some recent work on caffeine\". Exercise has \"much less\" research."),
                T("Month of the deadline", ["April"], "\"By the end of April.\""),
                T("When they meet again", ["two weeks", "2 weeks", "a fortnight"], "\"let's meet again in two weeks\". Six weeks is the time between the interviews and the draft.")
            ]
        }],
        vocab: [["dissertation", "a long piece of research writing for a degree"], ["participant", "a person who takes part in a study"], ["limitation", "a weakness that limits what a study can show"], ["noticeably", "in a way that is easy to see"]]
    });

    /* ================= TEST B, PART 4 ================= */
    add({
        id: "lx-b4", test: "B", part: 4, minutes: 10, kind: "Lecture", qOffset: 30,
        title: "Test B, Part 4: Rainwater in the city",
        typeName: "Part 4: Flow-chart and sentence completion",
        context: "A lecturer describes how cities collect rainwater from roofs. Listen and complete the flow-chart and the sentences.",
        lessons: ["completion", "sentence"],
        voices: { Lecturer: "en-AU-WilliamMultilingualNeural" },
        script: [
            ["Lecturer", "Good afternoon. In this lecture I want to look at rainwater harvesting, which simply means collecting the rain that falls on a building and using it, instead of letting it run into the drain. It is an old idea, but it is becoming popular again in cities that face water shortages."],
            ["Lecturer", "First, let me describe how a typical household system works. It starts with the rain falling on the roof, which is the collecting surface. The water runs down the slope into the gutters, which carry it to a downpipe. Before it goes any further, it passes through a filter, which removes leaves, dust and bird droppings. After that, the clean water flows into a large storage tank, which is often buried underground to keep the water cool and dark, because light makes algae grow. Finally, a small pump sends the water back into the house, where it is used mainly for flushing toilets, and also for washing machines and watering the garden."],
            ["Lecturer", "Why would anyone bother? The first reason is the saving. In a typical household, collected rainwater can reduce the use of mains water by up to thirty per cent. That is good for the environment and for the household bill."],
            ["Lecturer", "The second benefit concerns the city as a whole. In heavy storms, drains can fill up very quickly, and the overflow causes flooding. When thousands of buildings hold some of the rain in their tanks, the pressure on the drains is much lower."],
            ["Lecturer", "There are, however, obstacles. For most householders, the biggest problem is the cost of installation, which can be several thousand pounds. Governments in some countries offer a grant, but not all do."],
            ["Lecturer", "There is also an issue of safety. Rainwater picks up dirt from the roof and the gutters, so unless it is treated, it is not safe to drink. That is why these systems are connected to toilets and washing machines, and never to the kitchen tap."],
            ["Lecturer", "Finally, maintenance. The filter should be cleaned regularly, but the tank itself needs to be inspected and cleaned every six months, to check for sediment and algae. People who forget this can end up with unpleasant smells."],
            ["Lecturer", "In the next lecture we'll look at the results of a pilot scheme in a large apartment block, so please read the handout beforehand."]
        ],
        parts: [{
            instruction: "Questions 31\u201335. Complete the flow-chart below. Write ONE WORD ONLY for each answer.",
            kind: "flow",
            template: ["Rain falls on the [[1]]", "Water runs into the [[2]]", "Water passes through a [[3]] to remove leaves and dust", "Clean water is stored in an underground [[4]]", "A pump sends water to the house, mainly for flushing [[5]]"],
            qs: [
                T("Rain falls on the ...", ["roof"], "\"the rain falling on the roof, which is the collecting surface\"."),
                T("Water runs into the ...", ["gutters", "gutter"], "\"runs down the slope into the gutters\"."),
                T("Water passes through a ...", ["filter"], "\"it passes through a filter, which removes leaves, dust\"."),
                T("Water is stored in a ...", ["tank"], "\"a large storage tank, which is often buried underground\"."),
                T("Used mainly for flushing ...", ["toilets", "toilet"], "\"used mainly for flushing toilets\". Washing machines and the garden are extra uses.")
            ]
        }, {
            instruction: "Questions 36\u201340. Complete the sentences below. Write ONE WORD AND/OR A NUMBER for each answer.",
            kind: "notes",
            template: ["A household can cut its use of mains water by up to [[1]] per cent.", "Storing rain also helps to prevent [[2]] in heavy storms.", "For householders, the main obstacle is the [[3]] of installation.", "Without treatment, collected rainwater is not safe to [[4]].", "The storage tank should be cleaned every [[5]] months."],
            qs: [
                T("Percentage", ["30", "thirty"], "\"up to thirty per cent\"."),
                T("Prevents ...", ["flooding", "floods"], "\"the overflow causes flooding\", and tanks lower the pressure on the drains."),
                T("Main obstacle: the ... of installation", ["cost"], "\"the biggest problem is the cost of installation\"."),
                T("Not safe to ...", ["drink"], "\"unless it is treated, it is not safe to drink\"."),
                T("Cleaned every ... months", ["6", "six"], "\"inspected and cleaned every six months\".")
            ]
        }],
        vocab: [["harvest (water)", "collect and store for use"], ["gutter", "a channel at the edge of a roof that carries rain away"], ["sediment", "small pieces of dirt that sink to the bottom"], ["pilot scheme", "a small test of a new idea"]]
    });
})();
