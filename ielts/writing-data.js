/* =========================================================
   IELTS WRITING: content data

   Pure data, no behaviour; ielts.js renders it. Load BEFORE ielts.js.

   FORMAT FACTS: paraphrased from the IELTS partners' public test-format pages.
   TASKS, PROMPTS, DATA TABLES and MODEL ANSWERS are ORIGINAL, written for
   PassMyEnglish to IELTS standards - no third-party test content.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    ns.writingData = {
        version: 1,

        source: {
            label: "IELTS official: Writing test format",
            url: "https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-writing",
            checked: "14 November 2026"
        },

        facts: [
            { label: "Time", value: "60 minutes for both tasks" },
            { label: "Task 1", value: "150+ words, about 20 minutes" },
            { label: "Task 2", value: "250+ words, about 40 minutes" },
            { label: "Weighting", value: "Task 2 counts twice as much as Task 1" }
        ],

        trackDifferences: {
            academic: "Academic Writing Task 1: describe visual information - a graph, table, chart or diagram - in your own words.",
            general: "General Training Writing Task 1: write a letter requesting information or explaining a situation."
        },

        criteria: [
            { name: "Task achievement / response", plain: "Did you fully answer the question and cover everything it asked for?" },
            { name: "Coherence and cohesion", plain: "Are your ideas organised in clear paragraphs, linked naturally?" },
            { name: "Lexical resource", plain: "Is your vocabulary varied and accurate, with natural word choices?" },
            { name: "Grammatical range and accuracy", plain: "Do you use a mix of sentence structures, mostly error-free?" }
        ],

        lessons: [
            {
                id: "w-task2", session: 5, title: "Task 2: Essay Structure", type: "Core strategy",
                purpose: "Write a clear four-paragraph essay that answers the exact question asked.",
                before: [
                    "Spend 4-5 minutes planning: decide your position and two supporting ideas before you write a word.",
                    "Underline the exact task in the question (opinion? discussion? problem/solution?) - the structure follows from it.",
                    "Note one example or reason for each supporting idea."
                ],
                during: [
                    "Introduction: paraphrase the question, then state your position clearly - two sentences are enough.",
                    "Body paragraphs: one idea each - state it, explain it, give an example.",
                    "Conclusion: restate your position in fresh words. Never introduce a new idea here."
                ],
                after: [
                    "Check you answered the actual question, not a similar one you preferred.",
                    "Leave 3 minutes to fix grammar slips and missing articles."
                ],
                dos: [
                    "Keep every body sentence connected to the paragraph's one idea.",
                    "Write over 250 words - under the limit loses marks whatever the quality."
                ],
                donts: [
                    "Don't memorise whole essays - examiners spot and penalise them.",
                    "Don't list ideas without explaining them."
                ],
                example: "Question: 'Is working from home a positive development?' Plan: Position - positive. Idea 1: saves commuting time (example: two hours daily becomes exercise or family time). Idea 2: companies save office costs (example: smaller premises). Now each paragraph writes itself.",
                question: "In a Task 2 essay, each body paragraph should contain:",
                options: ["As many ideas as possible", "One idea, explained with an example", "A summary of the introduction"],
                answer: 1,
                feedback: "One idea per paragraph, explained and supported. Depth scores higher than lists."
            },
            {
                id: "w-task1", session: 5, title: "Task 1: Reports and Letters", type: "Question type",
                purpose: "Academic: report what a chart shows. General Training: write an appropriate letter.",
                before: [
                    "Academic: find the chart's main trend first - your overview sentence is the most important in the report.",
                    "General Training: decide the tone from the situation - formal for strangers and officials, informal for friends.",
                    "Note which figures or bullet points you must include."
                ],
                during: [
                    "Academic: overview first, then details grouped logically. Report numbers; never give opinions or reasons.",
                    "General Training: cover every bullet point in the task, in a sensible order.",
                    "Keep to about 170-190 words; Task 2 needs the time."
                ],
                after: [
                    "Academic: check every number you quoted against the chart.",
                    "General Training: check the letter opens and closes appropriately (Dear Sir or Madam / Yours faithfully; Dear Sam / Best wishes)."
                ],
                dos: [
                    "Use comparison language for charts: 'twice as high as', 'fell sharply'.",
                    "Vary your sentence openings."
                ],
                donts: [
                    "Don't describe every single figure - select the important ones.",
                    "Don't explain WHY the chart changed; report WHAT it shows."
                ],
                example: "Chart shows electricity use rose from 320 to 410 kWh. Weak: 'It went up.' Strong: 'Household electricity use rose sharply, from 320 kWh in January to 410 kWh in March.'",
                question: "In Academic Task 1, your first paragraph after the introduction should usually be:",
                options: ["Your opinion of the data", "An overview of the main trend", "A list of every figure"],
                answer: 1,
                feedback: "The overview of the main trend is the heart of the report; opinions are not part of Task 1."
            },
            {
                id: "w-cohesion", session: 6, title: "Coherence and Cohesion", type: "Sub-skill",
                purpose: "Make the reader's job easy: clear paragraphing and natural linking.",
                before: [
                    "Plan paragraph breaks before writing - one per idea.",
                    "Collect 5-6 linking phrases you can use naturally; twenty memorised connectors sound robotic."
                ],
                during: [
                    "Use referencing (this, these, it, such) to connect sentences without repeating nouns.",
                    "Place linking words where the logic actually changes: contrast needs 'however', addition needs 'also'.",
                    "Start each paragraph with a sentence that says what it is about."
                ],
                after: [
                    "Read each paragraph's first sentence only - do they alone outline your whole answer?",
                    "Replace any connector that appears twice in a paragraph."
                ],
                dos: [
                    "Prefer fewer, well-placed connectors over many.",
                    "Use pronouns to avoid repeating key nouns."
                ],
                donts: [
                    "Don't start every sentence with a connector.",
                    "Don't use 'moreover' and 'furthermore' where 'also' sounds natural."
                ],
                example: "Weak: 'Moreover, cycling is cheap. Furthermore, it is healthy.' Natural: 'Cycling costs almost nothing, and it keeps riders fit at the same time.'",
                question: "The best sign of a cohesive essay is:",
                options: ["A connector in every sentence", "Paragraph first sentences that outline the whole answer", "Long, impressive words"],
                answer: 1,
                feedback: "If the first sentences alone trace your argument, the essay is genuinely cohesive - connectors are the polish, not the structure."
            }
        ],

        tasks: [
            {
                id: "wt-ac-1", track: "academic",
                title: "Task 1 (Academic): Electricity use by purpose",
                minutes: 20, minWords: 150,
                instructions: "The table below shows average monthly household electricity use (in kWh) by purpose in one country, in 2010 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                dataTable: {
                    caption: "Average monthly household electricity use (kWh)",
                    headers: ["Purpose", "2010", "2025"],
                    rows: [
                        ["Heating and cooling", "180", "210"],
                        ["Lighting", "90", "55"],
                        ["Kitchen appliances", "70", "95"],
                        ["Entertainment devices", "40", "110"]
                    ]
                },
                modelAnswer: [
                    "The table compares how much electricity the average household used each month for four purposes in 2010 and 2025.",
                    "Overall, total consumption rose, but the pattern of use changed considerably: entertainment devices and kitchen appliances took a much larger share in 2025, while lighting fell sharply.",
                    "Heating and cooling remained the biggest use, edging up from 180 to 210 kWh. Kitchen appliances also rose moderately, from 70 to 95 kWh.",
                    "The most dramatic change was in entertainment devices, which almost trebled from 40 to 110 kWh - the largest rise of any category. In contrast, lighting was the only purpose to fall, dropping by more than a third, from 90 to just 55 kWh."
                ],
                checklistHint: "Compare your answer with the model, then judge it honestly against the four official criteria."
            },
            {
                id: "wt-gt-1", track: "general",
                title: "Task 1 (General Training): Letter to a landlord",
                minutes: 20, minWords: 150,
                instructions: "You rent a flat and the heating has stopped working. Write a letter to your landlord. In your letter: describe the problem and when it started; explain how it is affecting you; say what you would like the landlord to do.",
                dataTable: null,
                modelAnswer: [
                    "Dear Mr Haddad,",
                    "I am writing about the heating in the flat I rent from you at 14 Garden Street, which stopped working last Tuesday evening.",
                    "Since then the flat has been extremely cold, particularly at night. I have been using a small electric fan heater, but it only warms one room, and my electricity bill has already risen noticeably. I am also concerned because my young daughter has developed a persistent cough this week.",
                    "I would be grateful if you could arrange for a heating engineer to visit as soon as possible, ideally within the next two days. If a repair cannot be made quickly, I would appreciate a temporary reduction in this month's rent to cover the extra electricity costs.",
                    "Thank you for your attention to this matter. I look forward to hearing from you.",
                    "Yours sincerely,",
                    "Karim Mansour"
                ],
                checklistHint: "Check you covered all three bullet points and kept a consistently formal tone."
            },
            {
                id: "wt-2", track: "both",
                title: "Task 2: Essay - Working from home",
                minutes: 40, minWords: 250,
                instructions: "In the future, more people will work from home instead of travelling to an office every day. Do you think this is a positive or a negative development? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
                dataTable: null,
                modelAnswer: [
                    "It is widely expected that remote work will become the norm for millions of employees in the coming decades. In my view, this is largely a positive development, although it does carry one significant risk.",
                    "The strongest argument in favour of home working is the time it returns to people's lives. The average office commuter spends well over an hour a day travelling; working from home converts that time into sleep, exercise or family life, all of which improve both health and productivity. Employers benefit too, since they can reduce expensive office space and recruit talented staff who live far from city centres.",
                    "Admittedly, remote work can weaken the social fabric of a workplace. Colleagues who never meet in person may collaborate less creatively, and junior staff lose the informal learning that comes from sitting near experienced ones. However, this risk can be managed: many companies now bring teams together for a fixed day or two each week, which preserves most of the savings while restoring face-to-face contact.",
                    "In conclusion, despite the genuine social cost, the gains in time, health and flexibility make the shift towards working from home a positive development overall, provided that employers protect regular in-person contact."
                ],
                checklistHint: "Check your essay answers the exact question (positive or negative development?) and that each body paragraph develops one idea."
            }
        ]
    };
})();
