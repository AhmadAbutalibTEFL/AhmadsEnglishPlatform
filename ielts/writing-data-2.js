/* =========================================================
   IELTS WRITING: round 2 content (all task types)

   Adds to ns.writingData (loaded from writing-data.js, so this file must load
   AFTER it and BEFORE ielts.js):
   - Academic Task 1: line graph, bar chart, pie chart, table, process diagram, map
   - General Training Task 1: formal, semi-formal and informal letters
   - Task 2: opinion, discussion, advantages / disadvantages, problem / solution,
     direct (two-part) questions
   Each type has a strategy lesson and a practice task with an original model answer.
   Lessons and tasks carry a `track` ("academic", "general" or "both") so the
   Writing hub shows only what belongs to the chosen test.

   All charts, data, prompts and model answers are ORIGINAL and invented for
   PassMyEnglish (the countries, towns and people are fictional).
   Task format facts are paraphrased from the IELTS partners' public pages.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};
    var D = ns.writingData;
    if (!D) return;
    D.version = 2;

    D.taskTypes = [
        { group: "Task 1 - Academic: describe visual information", track: "academic", note: "150+ words, about 20 minutes. Report what a graph, chart, table, process or map shows.", types: [
            { name: "Line graph", lesson: "w-ac-line" }, { name: "Bar chart", lesson: "w-ac-bar" }, { name: "Pie chart", lesson: "w-ac-pie" },
            { name: "Table", lesson: "w-ac-table" }, { name: "Process diagram", lesson: "w-ac-process" }, { name: "Map", lesson: "w-ac-map" } ] },
        { group: "Task 1 - General Training: write a letter", track: "general", note: "150+ words, about 20 minutes. Cover every bullet point in the right tone.", types: [
            { name: "Formal letter", lesson: "w-gt-formal" }, { name: "Semi-formal letter", lesson: "w-gt-semi" }, { name: "Informal letter", lesson: "w-gt-informal" } ] },
        { group: "Task 2 - essays (same for both tests)", track: "both", note: "250+ words, about 40 minutes. Counts for two-thirds of the Writing score.", types: [
            { name: "Opinion (agree or disagree)", lesson: "w-opinion" }, { name: "Discussion (both views)", lesson: "w-discuss" },
            { name: "Advantages and disadvantages", lesson: "w-advdis" }, { name: "Problem and solution", lesson: "w-probsol" },
            { name: "Direct questions", lesson: "w-direct" } ] }
    ];

    /* ---------- tidy the lessons that already existed ---------- */
    var byId = {};
    D.lessons.forEach(function (L) { byId[L.id] = L; });
    byId["w-task1"].family = "Task 1 basics"; byId["w-task1"].track = "both";
    byId["w-task2"].family = "Task 2 essays"; byId["w-task2"].track = "both"; byId["w-task2"].title = "Task 2: Essay Structure (all types)";
    byId["w-cohesion"].family = "Skills for both tasks"; byId["w-cohesion"].track = "both";

    D.tasks.forEach(function (t) {
        if (t.id === "wt-ac-1") { t.kind = "Table"; }
        if (t.id === "wt-gt-1") { t.kind = "Formal letter"; t.title = "Task 1 (General Training): Formal letter to a landlord"; }
        if (t.id === "wt-2") { t.kind = "Opinion essay"; t.title = "Task 2: Opinion essay - Working from home"; }
    });

    function L(o) { o.type = "Task type"; return o; }

    var NEW_L = [];

    /* ----- Academic Task 1 lessons ----- */
    NEW_L.push(L({
        id: "w-ac-line", session: 5, family: "Task 1 - Academic", track: "academic", title: "Line Graphs",
        purpose: "Describe how something changes over time: the trends, the highs and lows, and how lines compare.",
        before: ["Read the title and both axes: what is measured, in what unit, and over which years?", "Decide the overall trend of each line: up, down, steady, or up and down.", "Spot the highest point, the lowest point and any place where lines cross."],
        during: ["Paragraph 1: say what the graph shows, in your own words.", "Paragraph 2 (overview): the two or three biggest trends, with no numbers.", "Paragraphs 3-4 (detail): group lines that behave alike and add the key figures.", "Use trend verbs (rose, climbed, fell, dropped, stayed stable, peaked at) and adverbs (sharply, steadily, slightly)."],
        after: ["Check every figure against the graph and every year against the axis.", "Check the tense: past tense for past years, future forms for predictions."],
        dos: ["Compare the lines: 'while', 'whereas', 'by contrast'.", "Mention where each line starts and ends, and any peak."],
        donts: ["Don't explain WHY things changed. The graph does not say.", "Don't describe every point on every line."],
        example: "Weak: 'In 2010 it was 48, in 2015 it was 40, in 2020 it was 31.' Strong: 'Bus use fell steadily over the decade, from 48,000 trips in 2010 to 31,000 in 2020.'",
        visual: { kind: "line", title: "Daily trips in one city (thousands)", alt: "Line graph, 2010 to 2020. Bus trips fall from 48 to 40 to 31 thousand. Cycling trips rise from 2 to 5 to 9 thousand.", xLabels: ["2010", "2015", "2020"], yMax: 60, yStep: 20, yLabel: "Trips (thousands)", series: [{ name: "Bus", values: [48, 40, 31] }, { name: "Cycling", values: [2, 5, 9] }] },
        practice: "Look at the graph above.",
        question: "Your turn - apply the skill: which sentence reports the cycling line best?",
        options: ["Cycling went up.", "Cycling trips rose steadily from 2,000 in 2010 to 9,000 in 2020.", "Cycling is healthier than the bus, so more people chose it."], answer: 1,
        feedback: "The best sentence names the trend, how it moved (steadily) and the start and end figures. The first is too vague, and the third gives a reason the graph cannot show."
    }));

    NEW_L.push(L({
        id: "w-ac-bar", session: 5, family: "Task 1 - Academic", track: "academic", title: "Bar Charts",
        purpose: "Compare quantities between groups, places or years, and pick out the biggest differences.",
        before: ["Read the title, the axis labels and the key. What do the bars measure, and what do the colours mean?", "Find the highest and lowest bars and the biggest gap between two bars.", "Decide whether the overview is about a ranking, a difference between groups or a change between years."],
        during: ["Paragraph 1: say what the chart shows, in your own words.", "Paragraph 2 (overview): the main pattern, for example 'Women exercised more than men in most groups'.", "Details: compare bars with comparison language (higher than, twice as much as, the same as, the largest).", "Group bars that tell one story rather than going left to right."],
        after: ["Check each figure and each label against the chart.", "Check that your comparisons use the right word: 'more' and 'fewer' are not the same."],
        dos: ["Use approximation words for uneven values: about, just over, nearly.", "Use both highest and lowest figures to make the overview concrete."],
        donts: ["Don't list the bars in order without comparing them.", "Don't give your own opinion about the results."],
        example: "Weak: 'Walk was 10, bus was 25, car was 65.' Strong: 'In 2005, two-thirds of students came to college by car, far more than took the bus or walked.'",
        visual: { kind: "bar", title: "How students travel to college (%)", alt: "Bar chart: in 2005, 10 percent walk, 25 percent take the bus and 65 percent drive. In 2025, 20 percent walk, 30 percent take the bus and 50 percent drive.", categories: ["Walk", "Bus", "Car"], yMax: 80, yStep: 20, yLabel: "% of students", showValues: true, series: [{ name: "2005", values: [10, 25, 65] }, { name: "2025", values: [20, 30, 50] }] },
        practice: "Look at the chart above.",
        question: "Your turn - apply the skill: which sentence is the best overview?",
        options: ["The car was used by 65% in 2005 and 50% in 2025.", "Although the car stayed the most popular choice, its share fell while walking and the bus both grew.", "More students should walk to college."], answer: 1,
        feedback: "An overview states the main pattern without a list of figures. The first sentence is detail, and the third is an opinion."
    }));

    NEW_L.push(L({
        id: "w-ac-pie", session: 5, family: "Task 1 - Academic", track: "academic", title: "Pie Charts",
        purpose: "Report how a whole is divided into parts, and how the parts change when there are two charts.",
        before: ["Check what the whole stands for (100% of what?) and what each slice is.", "Rank the slices from largest to smallest. For two charts, mark which slices grew and which shrank.", "Notice fractions that are easy to say: a half, a quarter, a third, double."],
        during: ["Paragraph 1: say what the charts show, in your own words.", "Paragraph 2 (overview): the largest part, the smallest part, and the biggest change if there are two charts.", "Details: report the key percentages. Use 'accounted for', 'made up', 'took', 'the largest share'.", "Mention fractions: 'a quarter', 'nearly half', 'more than doubled'."],
        after: ["Check that the slices you describe add up logically and none is missing.", "Check that you used 'percentage' or 'share' correctly: you cannot say 'the percentage of housing was high'. Say 'housing took a high percentage'."],
        dos: ["Use fractions as well as percentages to vary your language.", "With two pies, compare the same slice across both."],
        donts: ["Don't copy every percentage. Choose the main ones.", "Don't say a slice 'increased' if there is only one chart."],
        example: "Weak: 'Gas is 40% and coal is 25% and wind is 20%.' Strong: 'Gas supplied the largest share of the town's energy at 40%, while coal provided a quarter and wind a fifth.'",
        visual: { kind: "pie", title: "Where a town's energy comes from", alt: "Pie chart: gas 40 percent, coal 25 percent, wind 20 percent, solar 15 percent.", pies: [{ label: "Energy sources", slices: [{ name: "Gas", value: 40 }, { name: "Coal", value: 25 }, { name: "Wind", value: 20 }, { name: "Solar", value: 15 }] }] },
        practice: "Look at the pie chart above.",
        question: "Your turn - apply the skill: which sentence reports the chart accurately?",
        options: ["Wind supplied the largest share of energy.", "Solar was the smallest source, at 15%, and coal provided a quarter.", "Coal and gas together supplied 55% of the energy."], answer: 1,
        feedback: "Solar is the smallest slice (15%) and coal is exactly 25%, a quarter. Gas is the largest, not wind, and coal plus gas is 65%, not 55%."
    }));

    NEW_L.push(L({
        id: "w-ac-table", session: 5, family: "Task 1 - Academic", track: "academic", title: "Tables",
        purpose: "Select the most important numbers from a grid of data and compare them clearly.",
        before: ["Read the title, the row labels and the column headings. What is compared, and in what unit?", "Look for the biggest numbers, the smallest, and the biggest changes between columns.", "Choose three or four features that tell the main story. A table has too many numbers to report all of them."],
        during: ["Paragraph 1: say what the table shows, in your own words.", "Paragraph 2 (overview): the main pattern, with no figures.", "Details: report the selected numbers, grouped by pattern, not row by row.", "Use change words for two years or more, and comparison words for one year."],
        after: ["Check every number against the table.", "Check that you have not just copied the table in sentences."],
        dos: ["Group rows that behave the same way.", "Use proportions: 'nearly three times as much'."],
        donts: ["Don't report every cell. Selection is part of the marks.", "Don't leave out the overview."],
        example: "Weak: 'Heating was 180 then 210. Lighting was 90 then 55.' Strong: 'Most categories rose, but lighting fell from 90 to 55 kWh.'",
        practice: "A table shows monthly use of a gym by four age groups. Under-20s: 12 visits. 20-39: 9 visits. 40-59: 7 visits. Over 60: 8 visits.",
        question: "Your turn - apply the skill: which is the best overview?",
        options: ["Under-20s visited 12 times, 20-39s visited 9 times, 40-59s visited 7 times and over-60s visited 8 times.", "Younger people used the gym most, and the 40-59 group used it least.", "The gym should be cheaper for older people."], answer: 1,
        feedback: "The overview names the pattern (the young highest, 40-59 lowest) without listing every number. The first option copies the table and the third is an opinion."
    }));

    NEW_L.push(L({
        id: "w-ac-process", session: 5, family: "Task 1 - Academic", track: "academic", title: "Process Diagrams",
        purpose: "Describe the stages of a process in order, using the passive voice and linking words.",
        before: ["Find the first stage and the last stage. Is the process a line or a cycle?", "Count the stages and decide how to group them into two paragraphs.", "Note which stages happen at the same time, if any."],
        during: ["Paragraph 1: say what the diagram shows and how many stages it has.", "Paragraph 2 (overview): the start, the end and the main idea of the process.", "Details: use sequencing words: first, next, then, after that, once this is done, finally.", "Use the passive: 'the paper is sorted', not 'workers sort the paper', because the process matters more than who does it."],
        after: ["Check you have not missed a stage or put two stages in the wrong order.", "Check that every verb is in the present tense (a process is usually described in the present)."],
        dos: ["Group two short stages into one sentence.", "Vary your linking words."],
        donts: ["Don't write 'Step 1, Step 2' as a list. Use full sentences.", "Don't add stages that are not in the diagram."],
        example: "Weak: 'They boil water. They pour it on the tea bag.' Strong: 'First, water is boiled. It is then poured onto a tea bag.'",
        visual: { kind: "process", title: "Making a cup of tea", alt: "Process with four steps: water is boiled; water is poured onto a tea bag; tea is left for three minutes; tea bag is removed and milk is added.", steps: ["Water is boiled", "Water is poured onto a tea bag", "Tea is left for three minutes", "Tea bag is removed and milk is added"] },
        practice: "Look at the process above.",
        question: "Your turn - apply the skill: which sentence describes steps 1 and 2 best?",
        options: ["First, water is boiled and then poured onto a tea bag.", "Step 1 boil. Step 2 pour.", "People boil water and I pour it onto a tea bag."], answer: 0,
        feedback: "The first sentence uses the passive voice, a sequencing word and a clear link between the two stages. The second is a list, and the third mixes active voice and 'I'."
    }));

    NEW_L.push(L({
        id: "w-ac-map", session: 5, family: "Task 1 - Academic", track: "academic", title: "Maps",
        purpose: "Describe how a place changed, or how two places compare, using position language.",
        before: ["Check the dates or the two places. Is the map showing change over time, or a comparison?", "Mark what was removed, what was added, what was replaced and what stayed the same.", "Use the compass: north, south, east, west."],
        during: ["Paragraph 1: say what the maps show, in your own words.", "Paragraph 2 (overview): the main change, for example 'The area became more built-up'.", "Details: describe changes with position language: in the north-east, to the south of, next to, opposite, between.", "Use change verbs: was replaced by, was demolished, was built, was extended, was converted into."],
        after: ["Check that every change you mention is on the maps.", "Check that your directions are right: east is to the right if north is at the top."],
        dos: ["Start with the biggest change.", "Mention features that stayed the same in one short sentence."],
        donts: ["Don't write about the future unless the maps do.", "Don't invent a reason for a change."],
        example: "Weak: 'There was a field. Now there is a car park.' Strong: 'The field in the north-east was replaced by a car park.'",
        visual: { kind: "scene", title: "A village green: then and now", alt: "Two small maps. Then: a pond in the middle of the green and a school in the north-west. Now: the pond is gone, a play area is in the middle, and the school has been extended.",
            panels: [
                { label: "Then", h: 130, items: [
                    { t: "rect", x: 20, y: 38, w: 80, h: 38, fill: "#e0e7ff", stroke: "#818cf8", label: "School", size: 11 },
                    { t: "rect", x: 130, y: 44, w: 120, h: 70, fill: "#dcfce7", stroke: "#86efac", label: "Green", size: 11 },
                    { t: "water", x: 170, y: 62, w: 40, h: 24 },
                    { t: "text", x: 190, y: 98, s: "pond", size: 10, anchor: "middle" }
                ] },
                { label: "Now", h: 130, items: [
                    { t: "rect", x: 20, y: 38, w: 80, h: 38, fill: "#e0e7ff", stroke: "#818cf8", label: "School", size: 11 },
                    { t: "rect", x: 20, y: 80, w: 80, h: 28, fill: "#e0e7ff", stroke: "#818cf8", label: "New wing", size: 10 },
                    { t: "rect", x: 130, y: 44, w: 120, h: 70, fill: "#dcfce7", stroke: "#86efac", label: "Green", size: 11 },
                    { t: "rect", x: 164, y: 58, w: 52, h: 30, fill: "#fde68a", stroke: "#f59e0b", label: "Play area", size: 10 }
                ] }
            ] },
        practice: "Look at the two maps above.",
        question: "Your turn - apply the skill: which sentence describes the change correctly?",
        options: ["The pond was replaced by a play area in the middle of the green.", "The school was demolished and the pond was extended.", "A play area was built to the north of the school."], answer: 0,
        feedback: "The pond in the middle of the green is gone and a play area stands there. The school was not demolished (it gained a new wing), and the play area is east of the school, not north."
    }));

    /* ----- General Training letters ----- */
    NEW_L.push(L({
        id: "w-gt-formal", session: 5, family: "Task 1 - General Training", track: "general", title: "Formal Letters",
        purpose: "Write to someone you do not know, or to an organisation, in a polite and respectful tone.",
        before: ["Read the situation: who is the reader, and what do they need to do?", "Underline each bullet point. Each one needs its own paragraph or clear part.", "Choose the greeting: 'Dear Sir or Madam' if you do not know the name, 'Dear Mr / Ms Smith' if you do."],
        during: ["Opening: say why you are writing in one clear sentence.", "Body: cover every bullet point, in the order given, with enough detail to be useful.", "Use full forms ('I would be grateful if...', not 'Can you...'). No contractions, no slang.", "Close with an action or thanks, then 'Yours faithfully' (Dear Sir or Madam) or 'Yours sincerely' (Dear Mr Smith)."],
        after: ["Check that every bullet point is covered.", "Check that the ending matches the greeting."],
        dos: ["Keep the tone polite even if you are complaining.", "State the request or action clearly."],
        donts: ["Don't use contractions or slang.", "Don't write a long story. Be clear and direct."],
        example: "Dear Sir or Madam, I am writing to complain about the damaged laptop that I received on 3 May. ... Yours faithfully, A. Hassan",
        practice: "You are writing to a hotel manager whose name you do not know.",
        question: "Your turn - apply the skill: which closing is correct for a letter that begins 'Dear Sir or Madam'?",
        options: ["Best wishes", "Yours faithfully", "Yours sincerely"], answer: 1,
        feedback: "'Dear Sir or Madam' (you do not know the name) pairs with 'Yours faithfully'. 'Yours sincerely' goes with a named person, and 'Best wishes' is informal."
    }));

    NEW_L.push(L({
        id: "w-gt-semi", session: 5, family: "Task 1 - General Training", track: "general", title: "Semi-formal Letters",
        purpose: "Write to someone you know a little, such as a neighbour, colleague or teacher, in a polite but friendly tone.",
        before: ["Decide how well the reader knows you: not a stranger, not a close friend.", "Underline each bullet point.", "Choose the greeting: 'Dear' plus the title and surname (Dear Mrs Okafor) is safest, or 'Dear' plus first name if the task suggests you are on first-name terms."],
        during: ["Open with a friendly line and the reason for writing.", "Cover every bullet point. A polite request works better than a demand: 'Would it be possible to...?'", "Contractions are acceptable in small amounts ('I'd', 'I'm'), but keep sentences complete and tidy.", "Close warmly: 'Kind regards' or 'Best wishes', then your first name."],
        after: ["Read it as the neighbour or colleague would: does it sound polite, not angry?", "Check that every bullet point is covered."],
        dos: ["Soften requests: 'I wonder if you could...'.", "Say something positive before or after the problem."],
        donts: ["Don't sound like a legal letter or like a text to a friend.", "Don't skip the reason for the letter."],
        example: "Dear Mr Okafor, I hope you don't mind me writing. We have only met on the stairs, but I wanted to mention the music in the evenings... Kind regards, Layla",
        practice: "You are writing to a neighbour whose name you know but whom you have met only twice.",
        question: "Your turn - apply the skill: which opening line suits this letter best?",
        options: ["Dear Sir or Madam, I wish to lodge a formal complaint.", "Dear Mr Okafor, I hope you're well. I'm writing about something I'd like to ask your help with.", "Hey Sami! You will not believe what has happened."], answer: 1,
        feedback: "The second opening is polite and warm without being stiff. The first is too formal for a neighbour you know by name, and the third is too casual."
    }));

    NEW_L.push(L({
        id: "w-gt-informal", session: 5, family: "Task 1 - General Training", track: "general", title: "Informal Letters",
        purpose: "Write to a friend or family member in a natural, friendly voice while still covering every point.",
        before: ["Picture the friend. What would you really say to them?", "Underline each bullet point. Informal does not mean you can skip any.", "Choose a first-name greeting: 'Dear Sam,' or 'Hi Sam,'."],
        during: ["Open with a personal line: thanks for a message, or news about you.", "Cover every bullet point with details, ideas and feelings.", "Use contractions, everyday phrases and exclamation marks (a few). Keep it correct.", "Close warmly: 'Take care,' 'See you soon,' or 'Love,' then your first name."],
        after: ["Check that you covered every bullet point.", "Check that you did not use language that is too formal ('I would be grateful') or too careless (texting spelling)."],
        dos: ["Add a personal detail so it sounds real.", "Ask a question to keep the friendship going."],
        donts: ["Don't use text-message spelling ('u', 'gr8').", "Don't turn it into an essay."],
        example: "Hi Sam, It was great to hear from you! I'm so excited that you're coming next month. I've already planned a few things we could do together...",
        practice: "You are writing to a close friend.",
        question: "Your turn - apply the skill: which sentence suits an informal letter best?",
        options: ["I would be most grateful if you could confirm your arrival.", "I can't wait to see you - you have to tell me the exact day you arrive!", "Please find enclosed the programme of events."], answer: 1,
        feedback: "Contractions, a friendly tone and a personal request fit an informal letter. The other two are formal."
    }));

    /* ----- Task 2 essay types ----- */
    NEW_L.push(L({
        id: "w-opinion", session: 6, family: "Task 2 essays", track: "both", title: "Opinion Essays (Agree or Disagree)",
        purpose: "Give a clear personal position and support it with reasons and examples. Questions use 'To what extent do you agree?' or 'Is this a positive or negative development?'.",
        before: ["Decide your position BEFORE you write: fully agree, fully disagree, or partly agree.", "Choose two strong reasons. Each reason needs its own example.", "Underline the exact question, because it tells you what to argue."],
        during: ["Introduction: rewrite the topic in your own words, then state your opinion in one clear sentence.", "Body paragraph 1: your strongest reason with an explanation and an example.", "Body paragraph 2: your second reason, built in the same way.", "Conclusion: repeat your opinion in fresh words. Do not add new ideas."],
        after: ["Check that your opinion is the same in the introduction, the body and the conclusion.", "Check every paragraph for one main idea."],
        dos: ["Say 'In my opinion' or 'I firmly believe' once, clearly.", "Admit a small opposite point if you partly agree, then explain why your view is still stronger."],
        donts: ["Don't change your mind halfway.", "Don't write 'I think' in every sentence."],
        example: "Question: 'Some people think parents should choose their children's careers. To what extent do you agree?' Position: strongly disagree. Reason 1: children know their own talents. Reason 2: unhappy workers perform badly.",
        practice: "Question: 'Schools should teach children how to manage money. To what extent do you agree or disagree?' A student writes: 'There are advantages and disadvantages to teaching money skills.'",
        question: "Your turn - apply the skill: what is wrong with this introduction?",
        options: ["It is too long.", "It does not give an opinion, so the examiner cannot tell where the writer stands.", "It repeats the question word for word."], answer: 1,
        feedback: "An opinion essay must state the writer's position in the introduction. This sentence only says there are two sides. A clear version: 'I strongly agree that schools should teach money management.'"
    }));

    NEW_L.push(L({
        id: "w-discuss", session: 6, family: "Task 2 essays", track: "both", title: "Discussion Essays (Both Views)",
        purpose: "Present two different views fairly and, when the question asks, give your own opinion. The question says 'Discuss both views and give your own opinion'.",
        before: ["Identify the two views in the question. Write one or two ideas for each.", "Decide your own opinion. It does not have to be the same as either view.", "Plan five paragraphs: introduction, view 1, view 2, your opinion, conclusion."],
        during: ["Introduction: say there are two views and say you will discuss both, then give a hint of your own opinion.", "Paragraph on view 1: explain why some people think this, with an example.", "Paragraph on view 2: do the same, and use a contrast word to start it (On the other hand, However).", "Give your opinion clearly in the last body paragraph or in the conclusion."],
        after: ["Check that both views get about the same space.", "Check that you gave an opinion. If the question asks for it, an essay without one loses marks."],
        dos: ["Use balanced phrases: 'Supporters argue that...', 'Critics claim that...'.", "Keep your own voice for the opinion paragraph."],
        donts: ["Don't write only one view in detail.", "Don't forget to answer 'give your opinion'."],
        example: "Question: 'Some say zoos should be closed; others say they protect species. Discuss both views and give your opinion.' Plan: View 1 - animals suffer in captivity. View 2 - zoos breed endangered species. Opinion - well-run zoos help, poor ones should close.",
        practice: "Question: 'Some people prefer to live in the city; others prefer the countryside. Discuss both views and give your opinion.'",
        question: "Your turn - apply the skill: which plan fits this question best?",
        options: ["Introduction, advantages of the city, disadvantages of the city, conclusion.", "Introduction, why some prefer the city, why some prefer the countryside, my opinion, conclusion.", "Introduction, my opinion only, conclusion."], answer: 1,
        feedback: "A discussion essay needs both views and your opinion. The first plan treats the question as advantages/disadvantages of one place, and the third ignores one or both views."
    }));

    NEW_L.push(L({
        id: "w-advdis", session: 6, family: "Task 2 essays", track: "both", title: "Advantages and Disadvantages Essays",
        purpose: "Weigh the good points and the bad points of a development or idea. The question says 'What are the advantages and disadvantages?'.",
        before: ["List two advantages and two disadvantages. Pick the strongest of each.", "Check the exact words: if the question says 'Do the advantages outweigh the disadvantages?', you must give a judgement.", "Plan four paragraphs: introduction, advantages, disadvantages, conclusion."],
        during: ["Introduction: say what the topic is and that you will look at both sides.", "Paragraph 2: advantages, each with an explanation and example.", "Paragraph 3: disadvantages, built in the same way, starting with a contrast phrase.", "Conclusion: a balanced summary. Add a judgement if the question asks 'outweigh'."],
        after: ["Check that both sides are balanced.", "Check that each point has an explanation, not just a label."],
        dos: ["Use 'One benefit is...', 'A further drawback is...'.", "Give a short example for each point."],
        donts: ["Don't write only advantages.", "Don't list points without explaining them."],
        example: "Question: 'Many people now work remotely. What are the advantages and disadvantages?' Advantages: no commute, flexible hours. Disadvantages: loneliness, harder teamwork.",
        practice: "Question: 'More people are studying online instead of in a classroom. What are the advantages and disadvantages of this?'",
        question: "Your turn - apply the skill: which sentence is the best topic sentence for the disadvantages paragraph?",
        options: ["Online study is good.", "However, studying online also has drawbacks, the most serious being the lack of face-to-face contact.", "For example, my cousin studied online."], answer: 1,
        feedback: "A topic sentence states the paragraph's main idea and starts with a contrast word. The first has no disadvantage, and the third is an example, not a topic sentence."
    }));

    NEW_L.push(L({
        id: "w-probsol", session: 6, family: "Task 2 essays", track: "both", title: "Problem and Solution Essays",
        purpose: "Explain what the problems are and suggest realistic ways to deal with them. The question says 'What problems does this cause, and what could be done?'.",
        before: ["List two problems and one solution for each.", "Make your solutions specific. Say WHO should do WHAT.", "Plan four paragraphs: introduction, problems, solutions, conclusion."],
        during: ["Introduction: describe the issue and say that you will cover problems and solutions.", "Paragraph 2: the problems, with explanation and a short example for each.", "Paragraph 3: the solutions, each one clearly linked to a problem.", "Conclusion: summarise the main problem and the most useful solution."],
        after: ["Check that every problem has a matching solution.", "Check that solutions are realistic: could a government or a person actually do this?"],
        dos: ["Name who acts: 'Governments could...', 'Schools should...'.", "Use 'could' and 'should' for suggestions."],
        donts: ["Don't write only problems or only solutions.", "Don't suggest something impossible, such as 'ban all cars tomorrow'."],
        example: "Question: 'Plastic waste is damaging oceans. What problems does it cause, and what can be done?' Problem: harm to sea animals. Solution: governments could ban single-use plastic bags.",
        practice: "Problem described in a paragraph: 'Many young people spend too much time on their phones.'",
        question: "Your turn - apply the skill: which sentence offers the best, most specific solution?",
        options: ["People should do something about it.", "Schools could introduce phone-free lessons so that students learn to focus without their devices.", "Phones are bad."], answer: 1,
        feedback: "A good solution says who does what. The first is too vague and the third is only an opinion."
    }));

    NEW_L.push(L({
        id: "w-direct", session: 6, family: "Task 2 essays", track: "both", title: "Direct Questions (Two-part Questions)",
        purpose: "Answer two separate questions in the same essay. Every question must get its own clear answer.",
        before: ["Underline each question in the prompt and number them 1 and 2.", "Write a short answer to each before planning the paragraphs.", "Plan four paragraphs: introduction, answer to question 1, answer to question 2, conclusion."],
        during: ["Introduction: say what the topic is and give a short answer to both questions.", "Body paragraph 1 answers the first question with reasons and examples.", "Body paragraph 2 answers the second question in the same way.", "Conclusion: repeat both answers briefly."],
        after: ["Check that you answered both questions, in the order they were asked.", "Check that each paragraph is about one question only."],
        dos: ["Use the question's own words in your topic sentences to show you answered it.", "Keep both answers about equal in length."],
        donts: ["Don't answer only the first question.", "Don't mix both answers into one paragraph."],
        example: "Question: 'Why do people travel abroad? Is it a good thing?' Plan: Paragraph 2 - reasons (relaxation, culture, work). Paragraph 3 - judgement (good, because it builds understanding, but only if it respects local people).",
        practice: "Question: 'Why do many people stop learning after school? How can adults be encouraged to keep learning?'",
        question: "Your turn - apply the skill: which plan answers both questions?",
        options: ["Introduction, reasons why adults stop learning, ways to encourage adults, conclusion.", "Introduction, reasons why adults stop learning, conclusion.", "Introduction, ways to encourage adults, conclusion."], answer: 0,
        feedback: "The first plan gives each question its own paragraph. The others answer only one."
    }));

    // Order: Task 1 basics, Academic Task 1, GT Task 1, Task 2 (structure + types), skills.
    var ORDER = ["w-task1", "w-ac-line", "w-ac-bar", "w-ac-pie", "w-ac-table", "w-ac-process", "w-ac-map", "w-gt-formal", "w-gt-semi", "w-gt-informal",
        "w-task2", "w-opinion", "w-discuss", "w-advdis", "w-probsol", "w-direct", "w-cohesion"];
    NEW_L.forEach(function (x) { byId[x.id] = x; });
    D.lessons = ORDER.map(function (id) { return byId[id]; });

    /* ---------- practice tasks ---------- */
    var NEW_T = [];

    NEW_T.push({
        id: "wt-ac-2", track: "academic", kind: "Line graph", minutes: 20, minWords: 150,
        title: "Task 1 (Academic): Line graph - Internet access",
        instructions: "The graph below shows the percentage of households with internet access in three countries between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        visual: { kind: "line", title: "Households with internet access (%)", alt: "Line graph, 2000 to 2020. Northland: 20, 45, 70, 85, 93 percent. Eastmark: 10, 22, 40, 62, 80 percent. Southvale: 5, 10, 18, 30, 45 percent.", xLabels: ["2000", "2005", "2010", "2015", "2020"], yMax: 100, yStep: 20, yLabel: "% of households", series: [{ name: "Northland", values: [20, 45, 70, 85, 93] }, { name: "Eastmark", values: [10, 22, 40, 62, 80] }, { name: "Southvale", values: [5, 10, 18, 30, 45] }] },
        dataTable: null,
        modelAnswer: [
            "The line graph compares the proportion of households with internet access in Northland, Eastmark and Southvale at five-year intervals from 2000 to 2020.",
            "Overall, internet access rose in all three countries. Northland stayed ahead throughout, while Southvale remained the lowest at every point.",
            "In 2000, Northland already had access in 20% of homes, compared with 10% in Eastmark and only 5% in Southvale. Northland then rose steadily, reaching 70% in 2010 and 93% by 2020.",
            "Eastmark grew more slowly at first, climbing from 10% to 40% over the first decade, but it accelerated afterwards and ended at 80%. Southvale's growth was the weakest. It reached just 18% in 2010 and 45% in 2020, which is less than half the Northland figure."
        ],
        checklistHint: "Check that you wrote an overview with no numbers, grouped the lines, and used trend verbs with the right tense."
    });

    NEW_T.push({
        id: "wt-ac-3", track: "academic", kind: "Bar chart", minutes: 20, minWords: 150,
        title: "Task 1 (Academic): Bar chart - Weekly exercise",
        instructions: "The chart below shows the average number of hours men and women in four age groups spend exercising each week. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        visual: { kind: "bar", title: "Hours of exercise per week", alt: "Bar chart. Age 18-29: men 5.5, women 4.5. Age 30-44: men 4, women 3.5. Age 45-59: men 3, women 3.5. Age 60 plus: men 2.5, women 3.", categories: ["18-29", "30-44", "45-59", "60+"], yMax: 6, yStep: 1, yLabel: "Hours per week", showValues: true, series: [{ name: "Men", values: [5.5, 4, 3, 2.5] }, { name: "Women", values: [4.5, 3.5, 3.5, 3] }] },
        dataTable: null,
        modelAnswer: [
            "The bar chart shows how many hours a week men and women in four age groups spend exercising.",
            "Overall, exercise time falls with age for both sexes. Men exercise more than women in the two youngest groups, but women overtake men in the two oldest.",
            "Among 18 to 29 year olds, men spend 5.5 hours a week exercising, a full hour more than women, who spend 4.5. Both figures then drop, to 4 hours for men and 3.5 for women in the 30 to 44 group.",
            "The pattern reverses after 45. Women average 3.5 hours against 3 for men in the 45 to 59 group, and 3 hours against 2.5 in the over-60s. The largest decline is among men, whose weekly exercise time more than halves, from 5.5 to 2.5 hours, whereas women's falls by only a third, from 4.5 to 3."
        ],
        checklistHint: "Check that your overview states the main pattern, that you compared men and women in each group, and that every figure matches the chart."
    });

    NEW_T.push({
        id: "wt-ac-4", track: "academic", kind: "Pie charts", minutes: 20, minWords: 150,
        title: "Task 1 (Academic): Pie charts - Household spending",
        instructions: "The pie charts below show how an average household divided its spending in 1995 and in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        visual: { kind: "pie", title: "Household spending", alt: "Two pie charts. 1995: housing 25 percent, food 30, transport 12, leisure 8, other 25. 2025: housing 35, food 18, transport 15, leisure 17, other 15.", pies: [
            { label: "1995", slices: [{ name: "Housing", value: 25 }, { name: "Food", value: 30 }, { name: "Transport", value: 12 }, { name: "Leisure", value: 8 }, { name: "Other", value: 25 }] },
            { label: "2025", slices: [{ name: "Housing", value: 35 }, { name: "Food", value: 18 }, { name: "Transport", value: 15 }, { name: "Leisure", value: 17 }, { name: "Other", value: 15 }] }] },
        dataTable: null,
        modelAnswer: [
            "The two pie charts compare how an average household divided its spending between five categories in 1995 and 2025.",
            "Overall, housing replaced food as the biggest expense, and leisure spending more than doubled, while the share spent on food fell sharply.",
            "In 1995, food took the largest share at 30%, followed by housing and 'other' items at 25% each. By 2025, housing had risen to 35% of the budget, while food had dropped to 18%.",
            "Transport changed least, edging up from 12% to 15%. Leisure was the fastest-growing category, climbing from 8% to 17%, and 'other' spending fell from a quarter of the budget to 15%."
        ],
        checklistHint: "Check that your overview names the biggest category in each year and the biggest change, and that your figures match both charts."
    });

    NEW_T.push({
        id: "wt-ac-5", track: "academic", kind: "Process diagram", minutes: 20, minWords: 150,
        title: "Task 1 (Academic): Process diagram - Recycled paper",
        instructions: "The diagram below shows how waste paper is turned into new paper. Summarise the information by selecting and reporting the main features.",
        visual: { kind: "process", title: "Making recycled paper", alt: "Process with seven steps: waste paper is collected; sorted with plastic and staples removed; mixed with water in a tank to make pulp; pulp is cleaned and filtered; spread on a moving belt and pressed; dried on hot rollers; cut into sheets and packed.", steps: ["Waste paper is collected", "Paper is sorted\nplastic and staples are removed", "Paper is mixed with water\nin a large tank to make pulp", "Pulp is cleaned and filtered", "Pulp is spread on a belt and pressed", "Paper is dried on hot rollers", "Paper is cut into sheets and packed"] },
        dataTable: null,
        modelAnswer: [
            "The diagram illustrates how waste paper is turned into new paper in seven stages.",
            "Overall, the process is linear, starting with collection and ending with cutting and packing. Water is used in the middle of the process to turn the paper into pulp.",
            "First, waste paper is collected and then sorted, and at this point any plastic and staples are removed. Next, the sorted paper is mixed with water in a large tank, which produces a soft pulp. After that, the pulp is cleaned and filtered.",
            "In the later stages, the pulp is spread onto a moving belt and pressed so that most of the water is squeezed out. The resulting paper is then dried on hot rollers. Finally, it is cut into sheets and packed, ready to be sold."
        ],
        checklistHint: "Check that you used the passive voice, sequencing words and no missing stages."
    });

    var MAP_THEN = [
        { t: "road", x1: 12, y1: 110, x2: 348, y2: 110, w: 16 },
        { t: "text", x: 30, y: 126, s: "Main Street", size: 10 },
        { t: "rect", x: 24, y: 40, w: 80, h: 50, fill: "#e0e7ff", stroke: "#818cf8", label: "School", size: 11 },
        { t: "rect", x: 150, y: 34, w: 140, h: 62, fill: "#dcfce7", stroke: "#86efac", label: "Farm field", size: 11 },
        { t: "rect", x: 120, y: 130, w: 56, h: 36, fill: "#fef3c7", stroke: "#f59e0b", label: "Shop", size: 11 },
        { t: "rect", x: 196, y: 130, w: 124, h: 36, fill: "#fde2e2", stroke: "#fca5a5", label: "Houses", size: 11 },
        { t: "water", x: 12, y: 180, w: 336, h: 14 }, { t: "text", x: 180, y: 191, s: "River", size: 10, anchor: "middle" }
    ];
    var MAP_NOW = [
        { t: "road", x1: 12, y1: 110, x2: 348, y2: 110, w: 16 },
        { t: "text", x: 30, y: 126, s: "Main Street", size: 10 },
        { t: "rect", x: 24, y: 40, w: 80, h: 50, fill: "#e0e7ff", stroke: "#818cf8", label: "School", size: 11 },
        { t: "rect", x: 110, y: 40, w: 36, h: 50, fill: "#e0f2fe", stroke: "#38bdf8", label: "Lib.", size: 10 },
        { t: "rect", x: 158, y: 34, w: 132, h: 62, fill: "#fde2e2", stroke: "#fca5a5", label: "Housing estate", size: 11 },
        { t: "rect", x: 108, y: 130, w: 92, h: 36, fill: "#fef3c7", stroke: "#f59e0b", label: "Supermarket", size: 11 },
        { t: "rect", x: 208, y: 130, w: 56, h: 36, fill: "#e5e7eb", stroke: "#9ca3af", label: "Car park", size: 10 },
        { t: "rect", x: 272, y: 130, w: 56, h: 36, fill: "#fde2e2", stroke: "#fca5a5", label: "Houses", size: 11 },
        { t: "water", x: 12, y: 180, w: 336, h: 14 }, { t: "text", x: 180, y: 191, s: "River", size: 10, anchor: "middle" },
        { t: "road", x1: 66, y1: 166, x2: 66, y2: 200, w: 6, color: "#f59e0b" }, { t: "text", x: 74, y: 164, s: "Bridge", size: 10 }
    ];
    NEW_T.push({
        id: "wt-ac-6", track: "academic", kind: "Map", minutes: 20, minWords: 150,
        title: "Task 1 (Academic): Maps - Millbrook then and now",
        instructions: "The maps below show the centre of the town of Millbrook in 2000 and today. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        visual: { kind: "scene", title: "Millbrook town centre", alt: "Two maps of Millbrook. In 2000: a school, a farm field, a small shop, a row of houses and a river. Today: the school has a library beside it, the field is a housing estate, the shop is a supermarket with a car park, there are fewer houses and a bridge crosses the river.",
            panels: [{ label: "2000", h: 205, items: MAP_THEN }, { label: "Today", h: 205, items: MAP_NOW }] },
        dataTable: null,
        modelAnswer: [
            "The two maps show how the centre of Millbrook changed between 2000 and today.",
            "Overall, the town became much more built-up, with new housing, shopping and parking facilities replacing farmland and some existing homes.",
            "The most significant change took place in the north-east, where the farm field was replaced by a large housing estate. A new library was also built next to the school, which is in the north-west and has not moved.",
            "South of Main Street, the small shop was replaced by a much bigger supermarket, and a car park was built beside it, on part of the land where houses used to stand. As a result, only a few houses remain in the south-east. Finally, a bridge was added across the river, to the south of the school."
        ],
        checklistHint: "Check that you used position words (north-east, beside, south of), change verbs (was replaced by, was built) and mentioned what stayed the same."
    });

    NEW_T.push({
        id: "wt-gt-2", track: "general", kind: "Semi-formal letter", minutes: 20, minWords: 150,
        title: "Task 1 (General Training): Semi-formal letter to a neighbour",
        instructions: "You live in a block of flats. A neighbour you have met only twice often plays loud music late at night. Write a letter to your neighbour. In your letter: introduce yourself and explain the problem; say how it is affecting you; suggest what could be done.",
        dataTable: null,
        modelAnswer: [
            "Dear Mr Okafor,",
            "I hope you don't mind me writing. We have only met twice on the stairs, but I'm Layla Hassan and I live in the flat directly below yours.",
            "I'm writing because the music from your flat has been quite loud late in the evening, usually after eleven o'clock, over the last two weeks. I'm sure you don't realise how clearly it carries through the floor.",
            "It's becoming hard for me to sleep, and I have to get up at six for work. Last Thursday I was awake until nearly one in the morning, and I was very tired the next day.",
            "Would it be possible to turn the volume down after ten o'clock, or to use headphones later in the evening? I'd really appreciate it, and I'm happy to talk about it in person if that's easier.",
            "Thank you for understanding.",
            "Kind regards,",
            "Layla"
        ],
        checklistHint: "Check that the tone is polite but friendly, that all three bullet points are covered, and that the closing is warm."
    });

    NEW_T.push({
        id: "wt-gt-3", track: "general", kind: "Informal letter", minutes: 20, minWords: 150,
        title: "Task 1 (General Training): Informal letter to a friend",
        instructions: "A friend from another country is coming to visit your city next month. Write a letter to your friend. In your letter: say how pleased you are about the visit; suggest what you could do together; tell your friend what to bring.",
        dataTable: null,
        modelAnswer: [
            "Hi Sam,",
            "It was so good to get your message! I'm really excited that you're coming next month. It feels like ages since we last met, and I can't wait to show you around.",
            "I've already made a few plans. If the weather is nice, we could spend a day by the sea and have a picnic. There's also a great food market near my flat on Saturdays, and I think you'd love it. If you're up for it, we could even go on a day trip to the mountains. It's about two hours by train, and the views are amazing.",
            "As for what to bring, a warm jacket is a good idea because the evenings can be cold, even in summer. Comfortable shoes are a must for all the walking, and don't forget your camera. You'll want lots of photos!",
            "Let me know your flight details and I'll pick you up from the airport.",
            "See you soon,",
            "Amira"
        ],
        checklistHint: "Check that you covered all three bullet points in a friendly tone, with contractions and a personal feel."
    });

    NEW_T.push({
        id: "wt-2-discuss", track: "both", kind: "Discussion essay", minutes: 40, minWords: 250,
        title: "Task 2: Discussion essay - Paying for university",
        instructions: "Some people believe that university education should be free for everyone. Others think that students should pay for their own studies. Discuss both views and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
        dataTable: null,
        modelAnswer: [
            "Whether university education should be paid for by the state or by students is a question that divides many societies. This essay will discuss both views before explaining why I believe a shared system is the fairest.",
            "Those who support free university education argue that it opens opportunities to everyone. When tuition is paid through taxes, talented students from poor families can study without taking on heavy debt, and the country gains more doctors, engineers and teachers as a result. Free tuition also sends a message that education is a public good, not a private purchase.",
            "On the other hand, supporters of student payment point out that graduates usually earn more over their lifetimes, so it seems reasonable that they should contribute to the cost. Moreover, universities that depend only on public money can struggle when budgets are cut, whereas fee income can protect the quality of teaching and facilities. Taxpayers who never attended university may also feel it is unfair to fund other people's degrees.",
            "In my opinion, the best solution lies between the two views. Fees should be set at a moderate level, and students from low-income families should receive grants, while graduates repay part of their costs once they are earning a good salary. This protects access to education without placing the whole burden on the public purse.",
            "In conclusion, both views contain valid points, but a shared system balances fairness to students with fairness to taxpayers."
        ],
        checklistHint: "Check that both views get about equal space and that you gave a clear opinion of your own."
    });

    NEW_T.push({
        id: "wt-2-advdis", track: "both", kind: "Advantages and disadvantages essay", minutes: 40, minWords: 250,
        title: "Task 2: Advantages and disadvantages - Children and screens",
        instructions: "Nowadays many children use tablets and smartphones from a very young age. What are the advantages and disadvantages of this? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
        dataTable: null,
        modelAnswer: [
            "It is now common to see toddlers swiping across tablets and school-age children carrying their own phones. This essay will look at both the benefits and the drawbacks of this trend.",
            "The main advantage is that digital devices can support learning. Educational apps teach young children letters, numbers and languages through games, which can make study feel like play. In addition, children who grow up with technology develop digital skills that will be useful in almost every future career. Creative tools, such as drawing and music apps, also let them make things for themselves.",
            "However, there are serious disadvantages. The first is that long hours in front of a screen reduce time for physical activity, and this can affect children's health and sleep, especially when they use devices in bed. A second drawback is that children who spend too much time online may have fewer face-to-face conversations, so they can find it harder to build friendships and communicate in person. Parents also find it difficult to control the content their children see.",
            "In conclusion, tablets and phones offer real educational and creative benefits, but they bring risks to health and social development. In my view, the benefits can be enjoyed if adults set clear limits on screen time and choose suitable content."
        ],
        checklistHint: "Check that you wrote about advantages and disadvantages with explanations, and used a balanced conclusion."
    });

    NEW_T.push({
        id: "wt-2-probsol", track: "both", kind: "Problem and solution essay", minutes: 40, minWords: 250,
        title: "Task 2: Problem and solution - Traffic congestion",
        instructions: "Traffic congestion is a serious problem in many large cities. What problems does it cause, and what measures could be taken to reduce it? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
        dataTable: null,
        modelAnswer: [
            "Heavy traffic is a daily reality in many large cities around the world. It affects the lives of millions of people, and it deserves serious action. This essay will discuss the main problems it causes and suggest some practical solutions.",
            "The most obvious problem is the time that drivers and passengers lose. Workers who spend two hours a day in queues have less time for family and rest, and businesses lose money when deliveries arrive late. A second problem is pollution. Cars that move slowly or stand still produce a large amount of exhaust, which harms air quality and can cause breathing problems, especially for children and older people.",
            "There are several measures that could reduce congestion. Firstly, governments could invest in public transport, such as buses, metro lines and trams, so that people have a fast and affordable alternative to driving. Secondly, cities could charge drivers a fee to enter the busiest central areas at peak times. This would encourage people to share cars or travel at quieter hours. Finally, employers could allow staff to work from home on some days, which would take cars off the road without any cost to the city.",
            "In conclusion, congestion wastes time and damages health, but better public transport, charges for central driving and flexible working could together make a noticeable difference."
        ],
        checklistHint: "Check that each problem has a matching solution, and that your solutions say who should act."
    });

    NEW_T.push({
        id: "wt-2-direct", track: "both", kind: "Direct questions essay", minutes: 40, minWords: 250,
        title: "Task 2: Direct questions - Working beyond retirement age",
        instructions: "More and more people are choosing to work beyond the traditional retirement age. Why is this happening? Is it a positive or a negative development? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
        dataTable: null,
        modelAnswer: [
            "In many countries, it is no longer unusual to meet a 70-year-old who still goes to work. This essay will explain why this trend is growing and argue that it is, on balance, a positive development.",
            "There are two main reasons why people are working longer. The first is financial. As people live longer, their savings and pensions often have to last for 25 or 30 years, and many find that they simply cannot afford to stop. The second reason is that people are healthier than in the past. Someone who is 65 today is often fit and active, so they feel able to continue, and many do not want to lose the purpose and routine that a job provides.",
            "I believe this is mostly a positive development. For individuals, work keeps the mind active and provides social contact, which can protect against loneliness in later life. For society, older employees bring experience that younger colleagues can learn from, and their taxes help to pay for public services. However, the trend becomes negative if people are forced to work because their pensions are too small. Governments should therefore make sure that continuing to work is a choice, not a necessity.",
            "In conclusion, people work longer mainly because of money and better health, and this is positive as long as it is a free choice."
        ],
        checklistHint: "Check that you answered both questions (why, and positive or negative) in separate paragraphs."
    });

    D.tasks = D.tasks.concat(NEW_T);

    // Show the original task order: table, line, bar, pie, process, map | landlord, neighbour, friend | essays.
    var TORDER = ["wt-ac-1", "wt-ac-2", "wt-ac-3", "wt-ac-4", "wt-ac-5", "wt-ac-6", "wt-gt-1", "wt-gt-2", "wt-gt-3", "wt-2", "wt-2-discuss", "wt-2-advdis", "wt-2-probsol", "wt-2-direct"];
    var tById = {};
    D.tasks.forEach(function (t) { tById[t.id] = t; });
    D.tasks = TORDER.map(function (id) { return tById[id]; });

    /* ---------- lengthen model answers so each one meets its own word minimum ---------- */
    var EXT = {
        "wt-ac-1": [[1, " In total, average monthly use rose from 380 kWh in 2010 to 470 kWh in 2025."], [2, " Together these two used 250 kWh in 2010 and 305 kWh in 2025, but their share of the total stayed close to two thirds."], [3, " As a result, entertainment devices, which made up only about a tenth of household use in 2010, accounted for nearly a quarter of it by 2025."]],
        "wt-ac-2": [[1, " The gap between the highest and lowest country was 15 percentage points in 2000 and 48 points in 2020."], [2, " That is an increase of 73 percentage points in twenty years."], [3, " Eastmark's rise was the steepest of the three after 2010, at 40 percentage points in ten years."]],
        "wt-ac-3": [[1, " Even the most active group, young men, exercises for under six hours a week."], [3, " The gap between the sexes is widest among the youngest group, at one hour, and it reverses in later life."]],
        "wt-ac-4": [[1, " Transport stayed a small and stable part of the budget, at around an eighth of spending."], [2, " Housing and food together took 55% of the household budget in 1995, which shows how much spending priorities have shifted since then."], [3, " By 2025, housing and leisure combined had reached 52%, compared with only 33% thirty years earlier."]],
        "wt-ac-5": [[3, " Every stage depends on the one before it, so a problem early on, such as plastic left in the paper, would spoil the final product."], [1, " The process therefore begins with dry, mixed waste and finishes with a clean, uniform product."], [2, " The early stages remove unwanted material, while the later stages remove water."]],
        "wt-ac-6": [[1, " The school, the river and Main Street all stayed in the same place."], [2, " The library stands to the east of the school, between it and the new housing."], [3, " The bridge is the only new link across the river."]],
        "wt-gt-1": [[2, " I have always paid my rent on time and looked after the flat."], [3, " I realise that repairs take time, but this is becoming urgent."]],
        "wt-gt-2": [[2, " I realise it is probably unintentional."], [4, " It would make a real difference to me."], [5, " I'm sorry to bother you with this."]],
        "wt-gt-3": [[2, " Tell me if there is anything special you would like to see."]],
        "wt-2": [[0, " Many people already work from home for at least part of the week."], [1, " For example, a nurse who commutes ninety minutes each way could use that time to cook a proper meal or take a walk, and the whole household would benefit. Companies also save on heating, lighting and equipment, which lowers their costs."], [2, " A second concern is that workers who live alone may feel isolated, but video calls and regular team events can reduce this problem."]],
        "wt-2-discuss": [[1, " Education that is open to all can also reduce inequality over time."], [3, " In this way, no capable student is turned away because of money. For example, a student whose family earns little could receive full support, while a wealthier student would pay more."]],
        "wt-2-advdis": [[0, " Parents and teachers often disagree about how much use is too much."], [1, " For example, a five-year-old can learn to recognise letters through a simple game in a few minutes a day."], [2, " Some games and videos are also designed to keep children watching for as long as possible, which makes it hard for them to stop."], [3, " Parents and teachers therefore have an important role in guiding how young children use technology."]],
        "wt-2-probsol": [[0, " It is felt by commuters, shop owners and delivery drivers alike."], [1, " Delays also put pressure on emergency services, because ambulances and fire engines can be held up in the same queues."], [2, " Cities could also encourage short trips by bicycle by building safe cycling lanes, which are healthy as well as cheap."]],
        "wt-2-direct": [[0, " It helps to look at the causes first and then weigh the consequences."], [1, " In addition, some people simply enjoy their work and would prefer to carry on, not retire at a fixed age."], [2, " For instance, a retired engineer who returns part-time can train young staff, which benefits the whole company. Governments should also protect older workers from unfair treatment."]]
    };
    D.tasks.forEach(function (t) {
        (EXT[t.id] || []).forEach(function (e) { t.modelAnswer[e[0]] += e[1]; });
    });
})();
