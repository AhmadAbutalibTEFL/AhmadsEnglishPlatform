/* =========================================================
   IELTS WRITING - exam additions (original content)
   - full 60-minute tests (Task 1 + Task 2, same order as the exam)
   - band descriptions for self-rating (plain wording)
   - extra practice tasks with model answers
   Load AFTER writing-data.js and writing-data-2.js, BEFORE ielts.js.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var D = ns.writingData;
    if (!D) return;

    var LV = {
        "Task achievement / response": ["I answer only part of the task, or my ideas are unclear or very general.", "I cover the whole task, but some points are thin. My position or overview is not always clear.", "I cover every part of the task with a clear position or overview. Main ideas are supported.", "I answer every part fully. Ideas are well developed and relevant. The overview or position is sharp."],
        "Coherence and cohesion": ["Ideas are hard to follow. Paragraphs are missing or linking is very limited.", "I use paragraphs and some linking words, but sometimes they are mechanical or repeated.", "Ideas are in a logical order. Each paragraph has a clear focus. I use a range of linking devices.", "The whole answer flows without effort. Paragraphs are well planned and links are natural."],
        "Lexical resource": ["Simple words, often repeated. Spelling mistakes make some parts hard to read.", "Enough words for the task. Some less common words, with mistakes in word choice or spelling.", "A good range of words, including some less common ones. A few small mistakes.", "A wide range, used precisely and naturally. Rare mistakes."],
        "Grammatical range and accuracy": ["Mostly simple sentences. Mistakes are frequent and sometimes block meaning.", "A mix of simple and complex sentences. Many mistakes, but the meaning is usually clear.", "A variety of complex sentences. Most sentences are correct. A few small mistakes.", "A wide range of structures. Most sentences are completely correct."]
    };
    D.criteria.forEach(function (c) { c.levels = LV[c.name]; });

    D.fullTests = [
        { id: "wf-ac-1", track: "academic", title: "Academic full test 1", blurb: "Line graph report, then an opinion essay on working from home.", t1: "wt-ac-2", t2: "wt-2" },
        { id: "wf-ac-2", track: "academic", title: "Academic full test 2", blurb: "Bar chart report, then a discussion essay on paying for university.", t1: "wt-ac-3", t2: "wt-2-discuss" },
        { id: "wf-gt-1", track: "general", title: "General Training full test 1", blurb: "Formal letter to a landlord, then an essay on children and screens.", t1: "wt-gt-1", t2: "wt-2-advdis" },
        { id: "wf-gt-2", track: "general", title: "General Training full test 2", blurb: "Semi-formal letter, then an essay on traffic congestion.", t1: "wt-gt-2", t2: "wt-2-probsol" }
    ];

    D.tasks = D.tasks.concat([
        {
            id: "wt-ac-7", track: "academic", kind: "Table", minutes: 20, minWords: 150,
            title: "Task 1 (Academic): Table - How workers travel to work",
            instructions: "The table shows the percentage of workers in four cities who used different ways to travel to work in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
            dataTable: { caption: "Percentage of workers using each way to travel to work", headers: ["Way to travel", "Northfield 2010", "Northfield 2020", "Eastbay 2010", "Eastbay 2020"], rows: [["Car", "68", "55", "40", "36"], ["Public transport", "22", "26", "45", "47"], ["Bicycle", "4", "10", "9", "12"], ["Walking", "6", "9", "6", "5"]] },
            modelAnswer: ["The table compares how workers in two cities, Northfield and Eastbay, travelled to work in 2010 and in 2020.", "Overall, the car was the most common choice in Northfield in both years, while public transport led in Eastbay. In both cities, car use fell and cycling grew.", "In Northfield, the share of car users dropped from 68% to 55%, but it remained far higher than any other method. Over the same period, public transport rose slightly from 22% to 26%, and cycling more than doubled, from 4% to 10%. Walking also increased, from 6% to 9%.", "Eastbay showed smaller changes. Public transport was already the main method in 2010 at 45% and reached 47% in 2020. Car use fell by only four points to 36%, and cycling went up from 9% to 12%. Walking was the only method to decline there, edging down from 6% to 5%."],
            checklistHint: "Check that you gave an overview with no numbers, compared the two cities, and did not copy every figure."
        },
        {
            id: "wt-gt-4", track: "general", kind: "Formal letter", minutes: 20, minWords: 150,
            title: "Task 1 (General Training): Formal letter - A faulty product",
            instructions: "You bought a laptop online two weeks ago and it has stopped working. Write a letter to the company. In your letter: describe the problem, say what has happened since you bought it, and explain what you want the company to do.",
            modelAnswer: ["Dear Sir or Madam,", "I am writing to complain about a laptop that I bought from your website on 3 March. The order number is 48213.", "Two weeks after delivery, the laptop suddenly stopped turning on. I have charged it for a full day and tried a different socket, but the screen stays black. I contacted your helpline twice. The first time I was told someone would call me back, but nobody did, and the second time I waited for forty minutes before the call ended.", "As I rely on this computer for my studies, the situation is causing me real difficulty. I would like you either to replace the laptop or to give me a full refund. I can return it at your cost if you send me a prepaid label.", "I look forward to hearing from you within seven days. I have attached a copy of my receipt.", "Yours faithfully,", "Maya Rahman"],
            checklistHint: "Check that you covered all three bullet points, used a formal tone, and ended with 'Yours faithfully'."
        },
        {
            id: "wt-2-opinion2", track: "both", kind: "Opinion essay", minutes: 40, minWords: 250,
            title: "Task 2: Opinion essay - Cars in city centres",
            instructions: "Some people think that cars should be banned from city centres. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
            modelAnswer: ["Traffic in the middle of big cities is a growing concern, and some people argue that private cars should be banned there altogether. I largely agree with this view, although a few exceptions would be necessary.", "The strongest argument for a ban is health. Cars produce fumes that make the air in busy streets unhealthy, which is especially harmful for children and elderly residents. Cities that have limited traffic in their centres have reported cleaner air. A ban would also make streets quieter and safer for pedestrians and cyclists.", "A second benefit is the better use of space. Roads and car parks take up land that could become squares, markets or green areas. Shops often worry that fewer cars means fewer customers, but evidence from pedestrian zones in many cities shows that people who walk tend to stop and spend more.", "However, a complete ban would not suit everyone. Disabled people, delivery drivers and emergency services still need access, so these groups should be allowed to enter. A more practical approach would be to ban ordinary private cars while providing good public transport, so that people do not feel they have lost their freedom to travel.", "In conclusion, I agree that cars should be kept out of city centres because of the benefits for health and public space, provided that essential vehicles are exempt and alternatives are reliable."],
            checklistHint: "Check that you stated your opinion in the introduction, gave one main idea per paragraph with an example, and mentioned the other side briefly."
        },
        {
            id: "wt-2-plastic", track: "both", kind: "Problem and solution", minutes: 40, minWords: 250,
            title: "Task 2: Problem and solution - Plastic waste",
            instructions: "Plastic waste is a serious problem for the environment. What are the causes of this problem, and what can be done to reduce it?",
            modelAnswer: ["Plastic bottles, bags and packaging can now be found in oceans, rivers and even in the food chain. This essay will look at why the problem has become so large and suggest some practical solutions.", "The main cause is convenience. Plastic is cheap, light and strong, so manufacturers use it for almost everything, and consumers have grown used to throwing items away after one use. A second cause is weak recycling. In many countries, the systems for collecting and sorting plastic are limited, so much of it ends up in landfill or in the sea.", "There are several ways to reduce the damage. Governments could introduce charges for plastic bags and ban the most wasteful single-use items, as several countries have already done. These measures have reduced the use of bags by large amounts, because people respond quickly to a small cost.", "Companies also have a role. They could redesign packaging so that it uses less plastic or is made from recycled material, and they could be required to pay for the collection of what they sell. Finally, individuals can help by carrying reusable bottles and bags and by sorting their rubbish carefully.", "In conclusion, plastic pollution results from cheap, disposable products and poor recycling, but stronger laws, better packaging and more careful habits could reduce it significantly."],
            checklistHint: "Check that you gave causes and solutions in separate paragraphs, with a reason or example for each."
        }
    ]);
})();
