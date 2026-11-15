/* =========================================================
   IELTS LISTENING - exam-style practice, Test A (Parts 3 and 4)
   ALL scripts and questions are ORIGINAL to PassMyEnglish.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var X = ns.lx = ns.lx || { tests: [], helpers: {} };
    var H = X.helpers, R = H.R, S = H.S, T = H.T;
    function add(t) { X.tests.push(t); }

    /* ================= TEST A, PART 3 ================= */
    add({
        id: "lx-a3", test: "A", part: 3, minutes: 10, kind: "Discussion", qOffset: 20,
        title: "Test A, Part 3: Students and a tutor discuss a project",
        typeName: "Part 3: Multiple choice and matching",
        context: "Two students, Maya and Ben, meet their tutor, Dr Okafor, to discuss a project about food waste.",
        lessons: ["mcq", "matching", "paraphrasing"],
        voices: { Tutor: "en-GB-ThomasNeural", Maya: "en-US-AriaNeural", Ben: "en-AU-WilliamMultilingualNeural" },
        script: [
            ["Tutor", "Come in, both of you. So, I've read the draft of your food waste presentation. Before I give you my comments, remind me how you chose the topic."],
            ["Maya", "Well, I thought of it first. We all have lunch in the university canteen, and every day the bins were overflowing by one o'clock. I mentioned it to Ben, and it just seemed an obvious thing to study."],
            ["Ben", "I wanted to do something on transport, to be honest, but I'm glad we changed. The news report on food waste came after we'd already started."],
            ["Tutor", "Good. Now, the method. You began with an online questionnaire, I think?"],
            ["Ben", "Yes, but only about twenty people answered, which is far too few. So we stood at the canteen exit with a clipboard and interviewed people as they left. That gave us a hundred and twenty responses in three days."],
            ["Tutor", "That was a sensible change. And your results?"],
            ["Maya", "The most surprising thing for me was that the most wasted food was bread, not vegetables. We had expected salad to be at the top."],
            ["Ben", "Actually I wasn't surprised by that. People take a roll with soup automatically, and then they don't eat it."],
            ["Tutor", "Interesting. Now let me go through the parts of the presentation. The introduction is very good. It's clear, well organised, and it makes me want to listen. Don't change anything there."],
            ["Maya", "Thank you. We spent a long time on that."],
            ["Tutor", "The part describing your survey method is where I'd like more. You say you interviewed a hundred and twenty people, but not who they were: students, staff, visitors? You need to give a lot more detail, because the examiners will ask."],
            ["Ben", "Right. We do have those figures, so that's easy."],
            ["Tutor", "Now the graphs. They look professional, but there is a mistake on the second one. The labels on the vertical axis are the wrong way round, so it looks as if bread is the smallest category when it is the biggest."],
            ["Maya", "Oh no. We must have swapped them when we changed the colours. I'll fix that today."],
            ["Tutor", "The case study of the other university is interesting, but it is far too long. Cut it by half. It shouldn't take over your own findings."],
            ["Ben", "Okay. I did get a bit carried away with that."],
            ["Tutor", "The conclusion has good points, but the order is wrong. Your main recommendation, the one about smaller portions, comes after the thank-you slide. Put it before. And the list of references: the format is fine, but you need dates and page numbers for each source. At the moment they're missing."],
            ["Maya", "We'll add them."],
            ["Tutor", "One more thing. Your claim that the canteen throws away a third of its food has no evidence behind it. Can you find a source?"],
            ["Ben", "We could ask the canteen manager for the weighing records. I think they weigh the waste every week."],
            ["Maya", "That's a good idea. Rather than change the survey, which we don't have time to do again, we'll contact her before our next meeting."],
            ["Tutor", "Excellent. Then you'll be in a strong position. Send me the new draft by Friday."]
        ],
        parts: [{
            instruction: "Questions 21\u201324. Choose the correct letter, A, B or C.",
            qs: [
                R("Why did Maya and Ben choose food waste as their topic?", ["They saw a news report about it.", "The canteen bins were always full.", "Their tutor suggested it."], 1, "Maya: \"every day the bins were overflowing by one o'clock\". The news report \"came after we'd already started\"."),
                R("How did they collect their survey results in the end?", ["by online questionnaire", "by interviewing people at the canteen exit", "by asking the canteen staff"], 1, "Only about twenty answered online, so they \"stood at the canteen exit with a clipboard\"."),
                R("What surprised Maya about the results?", ["Salad was the most wasted food.", "Students wasted more than staff.", "Bread was the most wasted food."], 2, "\"the most wasted food was bread, not vegetables\". She had expected salad."),
                R("What will they do before the next meeting?", ["rewrite the survey", "contact the canteen manager", "change their topic"], 1, "They will \"contact her before our next meeting\" rather than change the survey.")
            ]
        }, {
            instruction: "Questions 25\u201330. What does Dr Okafor say about each part of the presentation? Choose SIX answers from the box and write the correct letter, A\u2013E, next to Questions 25\u201330. You may use any letter more than once.",
            box: { title: "Comments", items: ["A  It is too long.", "B  It needs more detail.", "C  It is clear and well organised.", "D  The order is wrong.", "E  It contains a mistake."] },
            choices: ["A", "B", "C", "D", "E"],
            qs: [
                S("The introduction", 2, "\"It's clear, well organised\"."),
                S("The survey method", 1, "\"You need to give a lot more detail\"."),
                S("The graphs", 4, "\"there is a mistake on the second one\": the labels are the wrong way round."),
                S("The case study", 0, "\"it is far too long. Cut it by half\"."),
                S("The conclusion", 3, "\"the order is wrong\": the main recommendation comes after the thank-you slide."),
                S("The references", 1, "\"you need dates and page numbers\", so they need more detail.")
            ]
        }],
        vocab: [["overflowing", "so full that things fall out"], ["interview", "ask someone questions and note the answers"], ["sample", "the group of people you collect answers from"], ["axis", "the line along the side or bottom of a graph"]]
    });

    /* ================= TEST A, PART 4 ================= */
    add({
        id: "lx-a4", test: "A", part: 4, minutes: 10, kind: "Lecture", qOffset: 30,
        title: "Test A, Part 4: Beekeeping in the city",
        typeName: "Part 4: Note completion",
        context: "A lecturer talks to biology students about keeping bees in cities. Complete the notes.",
        lessons: ["completion", "paraphrasing"],
        voices: { Lecturer: "en-NZ-MollyNeural" },
        script: [
            ["Lecturer", "Today I'd like to talk about something you might not expect to find in a lecture on urban ecology: bees. Over the last two decades beekeeping has become surprisingly popular in cities, on rooftops, in back gardens and even on top of office towers. I want to explain why cities can be good places for bees, what the difficulties are, and what advice experienced keepers give to newcomers."],
            ["Lecturer", "Let's start with the advantages. The first is variety. A farm in the countryside may grow a single crop over hundreds of hectares, so for a few weeks the bees have plenty to eat, and then almost nothing. A city, by contrast, has parks, window boxes, street trees and private gardens, so there is a wide range of flowers, blooming at different times of year."],
            ["Lecturer", "The second advantage is temperature. Cities are usually warmer than the surrounding countryside, because buildings and roads store heat. For bees this means an earlier start in spring and a later finish in autumn, so the working season is longer."],
            ["Lecturer", "Third, cities generally use far fewer pesticides than farms do. Some city councils have even banned certain chemicals from public parks. For the bees, that makes a real difference to their health."],
            ["Lecturer", "A recent university study analysed honey from city hives and found pollen from more than forty different kinds of plant in a single jar. Honey from rural hives in the same study contained pollen from only about a dozen. So the city honey was, in a sense, a record of the variety available to the bees."],
            ["Lecturer", "Of course, there are problems. The biggest one in hot summers is water. Bees need it, both to drink and to cool the hive, and in a city there may be no ponds or streams nearby. If bees can't find water, they will visit swimming pools or dripping taps, which annoys the neighbours. The solution is simple: keepers put out shallow dishes filled with stones, so that the bees can land and drink without drowning."],
            ["Lecturer", "That brings me to neighbours. Most people are comfortable with bees once they understand them, but many worry about swarms, when a large group of bees leaves the hive together. This is a natural way for a colony to reproduce, and it looks alarming, although the bees are usually quite gentle at that time. Good keepers inspect their hives every week in spring to reduce the risk."],
            ["Lecturer", "Now, some practical points about placing hives. On a rooftop, the main danger is wind. Strong gusts can knock a hive over and make it hard for the bees to fly in. So keepers often build a low wall or fence, and tie the hive down. The entrance should face south, not east or west, so that the first sun of the day warms the bees early and encourages them to start work."],
            ["Lecturer", "And finally, advice for beginners. Many people buy bees on an impulse and then realise they have no idea how to look after them. Experienced keepers say you should complete a course before you buy anything. Most local associations run one over the winter. After that, start with two hives rather than one. It might seem like more work, but it lets you compare them, and if one colony is struggling, you can borrow resources from the other."],
            ["Lecturer", "That's all I have time for today. Next week we'll look at what happens to hive health in different seasons."]
        ],
        parts: [{
            instruction: "Questions 31\u201340. Complete the notes below. Write ONE WORD ONLY for each answer.",
            kind: "notes",
            template: ["# Urban beekeeping", "# Why cities suit bees", "Parks and gardens provide a wide variety of [[1]].", "Cities are warmer than the countryside, so the season is longer.", "Fewer [[2]] are used than on farms.", "# What the research found", "City honey contained pollen from over [[3]] kinds of plant.", "# Problems", "In hot summers, bees need [[4]] and may annoy neighbours if they cannot find it.", "Keepers put shallow dishes with stones in them to stop bees [[5]].", "Neighbours often worry about [[6]].", "# Placing a hive", "On a roof, the main danger is [[7]].", "The hive entrance should face [[8]].", "# Advice for beginners", "Complete a [[9]] before buying bees.", "Start with [[10]] hives."],
            qs: [
                T("Cities provide a variety of ...", ["flowers"], "\"there is a wide range of flowers, blooming at different times of year\"."),
                T("Fewer ... are used than on farms.", ["pesticides"], "\"cities generally use far fewer pesticides than farms do\"."),
                T("Pollen from over ... kinds of plant", ["forty", "40"], "\"pollen from more than forty different kinds of plant\". The dozen figure was for rural honey."),
                T("Bees need ...", ["water"], "\"The biggest one in hot summers is water.\""),
                T("Dishes stop bees from ...", ["drowning"], "\"so that the bees can land and drink without drowning\"."),
                T("Neighbours worry about ...", ["swarms"], "\"many worry about swarms\"."),
                T("On a roof the main danger is ...", ["wind"], "\"the main danger is wind\"."),
                T("The entrance should face ...", ["south"], "\"The entrance should face south, not east or west\"."),
                T("Complete a ... before buying bees", ["course"], "\"you should complete a course before you buy anything\"."),
                T("Start with ... hives", ["two", "2"], "\"start with two hives rather than one\".")
            ]
        }],
        vocab: [["pesticide", "a chemical that kills insects"], ["colony", "a group of bees that live together"], ["swarm", "a large group of bees that leaves the hive together"], ["on an impulse", "suddenly, without planning"]]
    });
})();
