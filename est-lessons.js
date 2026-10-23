/* =========================================================
   EST LESSONS: prepared teaching content + a small lesson engine.

   Content comes from Ahmad's handouts (sequence and teaching points kept).
   Practice questions are his teacher-created questions. The handouts print no
   answer keys, so each key and explanation below was written for this site
   and must be confirmed by the teacher. Official EST items are NOT reproduced:
   "examLinks" only point to question numbers/skills in the May 2026 paper.
   Pages reproduced from Meltzer's books inside the handouts are NOT used.

   Practice uses a Check button: students pick, change and review answers
   first, then check them all at once.
   ========================================================= */
(function () {
    "use strict";

    var G = "Erica Meltzer, The Ultimate Guide to SAT Grammar";
    var R = "Erica Meltzer, The Complete Guide to SAT Reading";

    var L = {};

    L["relevance"] = {
        session: 3, kind: "Grammar", title: "Is it Relevant? Adding, Deleting, and Revising", source: G + ", p. 16",
        goal: "Decide whether information serves the paragraph\u2019s main topic and purpose, instead of choosing the sentence that sounds nicest.",
        sections: [
            { h: "1. The core skill", p: ["Add, delete and revise questions test relevance. A sentence can be true, interesting and well written and still be wrong if it does not support the paragraph\u2019s focus.", "**Key question:** Does this information help the paragraph do its job?"],
              steps: [["Reread the paragraph", "Get the immediate context before judging the sentence."], ["State the topic in your own words", "A short mental summary, not a detailed one."], ["Check every choice against that topic", "Keep only choices that directly serve the paragraph\u2019s focus."]] },
            { h: "2. Don\u2019t read more than you need", p: ["If the question asks you to consider the whole passage, you rarely need to reread every word. Focus on the beginning, where the main idea is often set, and the sentences around the one being tested.", "**Exam habit:** before looking at the choices, say the paragraph\u2019s topic in 5\u201310 words, then compare each option with it."] },
            { h: "3. Adding information", p: ["Ask what the paragraph needs here. A good addition develops the existing focus instead of starting a new topic.", "**Focus:** A school garden gives students practical opportunities to learn about plant growth.", "**Addition A:** Students record the height of seedlings each week and compare the results.", "**Addition B:** The school also renovated its football field last summer.", "**Decision:** A fits the topic; B introduces unrelated information."] },
            { h: "4. Deleting information", p: ["Do not ask only whether a sentence is true. Ask whether removing it makes the paragraph more focused. A sentence can be grammatically perfect and still be unnecessary.", "**Deletion test:** If the sentence disappeared, would the paragraph lose an important part of its main idea or support?"] },
            { h: "5. Revising information", p: ["Revision questions may ask you to make a sentence more concise, precise, relevant or consistent with the paragraph\u2019s purpose. Prefer the choice that does the job directly.", "**Watch out:** A longer answer is not automatically better. Extra detail can distract if it does not strengthen the focus."] },
            { h: "6. Worked example", ctx: "The town library recently expanded its science section. It added books on astronomy, biology, and environmental science. Students can now find more resources for science projects.", q: "Which sentence would best be added after the second sentence?",
              c: ["The library building was constructed in 1987.", "The new books give students access to information across several areas of science.", "Many students also enjoy playing basketball after school.", "The library closes at 6 p.m. on Fridays."], a: 1,
              why: "The paragraph is about the expanded science section and its benefit. B develops that idea; the others introduce unrelated information." }
        ],
        checklist: ["Identify the paragraph\u2019s main topic.", "Ask what the sentence contributes.", "For ADD: does it develop the topic?", "For DELETE: is the information unnecessary or off-topic?", "For REVISE: which choice is clearest, most precise and most relevant?", "Decide before the answer choices influence you."],
        examLinks: "Module 1: Q1, Q3, Q15, Q17, Q21, Q28, Q34. Module 3: Q16.",
        exit: "In one sentence: what is the difference between \u201cinteresting information\u201d and \u201crelevant information\u201d in an EST paragraph?",
        practice: [
            { g: "Add", ctx: "A paragraph explains how bees communicate the location of food to other bees.", q: "Which sentence would best be added?",
              c: ["Honey is used in many different foods.", "Researchers have observed that returning bees can guide other bees toward productive food sources.", "Some people are afraid of bees.", "Bees can be found in many parts of the world."], a: 1,
              why: "B develops the paragraph\u2019s focus: how bees communicate where food is. The others are true but about other topics." },
            { g: "Delete", ctx: "A paragraph explains how a museum restored a damaged painting using historical records and scientific analysis.", q: "Which sentence is most likely irrelevant?",
              c: ["Conservators examined the layers of paint.", "The museum consulted photographs of the painting from the 1920s.", "The museum caf\u00e9 serves coffee and sandwiches.", "Scientists analyzed the materials used by the original artist."], a: 2,
              why: "The caf\u00e9 has nothing to do with restoring the painting. The other three are parts of the restoration process." },
            { g: "Revise", ctx: "Original: The researcher made a discovery that was surprising and unexpected to everyone who was involved in the research project.", q: "Which version is most concise and precise?",
              c: ["The researcher made a discovery that was surprising and unexpected to everyone involved.", "The researcher made a very surprising discovery that was unexpected to everyone involved in the project.", "The researcher made a discovery that surprised everyone involved.", "The researcher made a discovery that was surprising in a way that was unexpected."], a: 2,
              why: "\u201cSurprising and unexpected\u201d repeats one idea. C says it once, with the fewest words, and keeps the full meaning." }
        ]
    };

    L["concrete-to-abstract"] = {
        session: 3, kind: "Reading", title: "Making the Leap: From Concrete to Abstract", source: R + ", Chapter 2, from p. 65",
        goal: "Move between specific wording and the larger idea it stands for. Pronouns and abstract (compression) nouns package information into shorter expressions.",
        sections: [
            { h: "1. What does \u201cconcrete \u2192 abstract\u201d mean?", p: ["A passage may give several concrete details and later refer to all of them with a shorter expression such as this, that, these developments, this notion or the phenomenon. Your job is to connect the short expression to the larger idea.", "This skill may not appear as a direct question, but it is crucial for following a difficult passage."] },
            { h: "2. Pronouns: follow the referent", p: ["A **pronoun** replaces or points back to a noun or idea. The **referent** (antecedent) is what it points to."],
              table: { head: ["Signal", "Ask yourself", "Example"], rows: [["it / they", "What noun or group does it replace?", "The researchers published the results. They were widely discussed."], ["this / that", "What idea, event or statement does it point to?", "The experiment failed twice. This surprised the team."], ["these / those", "Which previously mentioned ideas or things?", "The results and methods were questioned. These concerns continued."]] } },
            { h: "3. Why authors use pronouns", p: ["Repeating the same noun again and again makes prose heavy. Pronouns let a writer refer back without repeating a whole expression.", "**Reading move:** when you see this / that / these / those / it / they, pause and ask: \u201cWhat exactly is this pointing to?\u201d"] },
            { h: "4. Abstract (compression) nouns", p: ["Some nouns name ideas, not objects: idea, assertion, notion, phenomenon, development, argument, description. A compression noun is a label for a whole idea, so an author can discuss several details and then refer to them with one compact expression."] },
            { h: "5. The referent may not be nearby", p: ["The information referred to may appear earlier, sometimes in the previous paragraph. Do not assume it is the nearest noun.", "**When confused:** back up. Read the sentence before the reference and expand to the previous paragraph if necessary."] },
            { h: "6. The 4-step method", steps: [["Circle the pronoun or abstract noun", "Identify the word that needs a referent."], ["Look backward first", "Read the previous sentence or two; expand if needed."], ["Replace it with the specific idea", "Say the referent in your own simple words."], ["Reread the sentence", "Check that your interpretation makes it logical."]] },
            { h: "7. Worked example", ctx: "A city introduces a new public-transport system. The system lets residents reach the city center without using private cars and reduces traffic on major roads. This development has changed how many residents travel.", q: "What does \u201cThis development\u201d refer to?",
              c: ["the existence of major roads", "a crowded city center", "the introduction and effects of the new public-transport system", "residents\u2019 preference for private cars"], a: 2,
              why: "The phrase compresses the larger idea described in the preceding sentences." },
            { h: "8. The former and the latter", p: ["**The former** = the first of two previously mentioned items. **The latter** = the second. Memory trick: former = first; latter = later. They may appear in either order in a sentence, but they stay tied to the original order."] }
        ],
        checklist: ["When you see this / that / these / those / it / they, ask what it points to.", "When you see notion, assertion, phenomenon or development, ask what larger idea it compresses.", "Look backward before guessing.", "The referent may be in the previous sentence or paragraph.", "Replace the abstract expression with a simple, concrete description.", "Reread to confirm."],
        examLinks: "The May 2026 EST has no named \u201ccompression noun\u201d question. The same reference-tracking skill appears in pronoun items: Module 1 Q10, Q13, Q18, Q24, and Module 3 Q11.",
        exit: "In one sentence: why can understanding pronouns and abstract nouns help you follow an author\u2019s argument even when no question asks what the pronoun refers to?",
        practice: [
            { g: "Former / latter", ctx: "A researcher tested two methods: Method A used interviews, while Method B used written surveys. The former required more time, but the latter allowed data to be collected from more participants.", q: "What does \u201cthe latter\u201d refer to?", c: ["Method A", "interviews", "Method B", "participants"], a: 2, why: "\u201cThe latter\u201d is the second of the two methods mentioned: Method B (written surveys)." },
            { g: "Abstract noun", ctx: "A school introduced digital textbooks and interactive simulations. These tools reduced the amount of printed material students carried each day.", q: "What does \u201cThese tools\u201d refer to?", c: ["printed materials", "digital textbooks and interactive simulations", "students", "school days"], a: 1, why: "\u201cThese tools\u201d points back to the two things the school introduced." },
            { g: "Compression noun", ctx: "A paragraph explains that online platforms allow people to compare prices quickly and read reviews before buying. The author then says, \u201cThis convenience can also encourage consumers to spend more.\u201d", q: "What does \u201cThis convenience\u201d refer to?", c: ["spending more money", "reading reviews only", "comparing prices and accessing information easily", "buying physical products"], a: 2, why: "\u201cThis convenience\u201d compresses both benefits from the previous sentence: comparing prices and reading reviews." }
        ]
    };

    L["sentence-order"] = {
        session: 4, kind: "Grammar", title: "Sentence and Paragraph Order", source: G + ", p. 31",
        goal: "Decide where a sentence belongs in a paragraph by following the topic and the logical connections from one sentence to the next.",
        sections: [
            { h: "1. What these questions test", p: ["Sentence-order questions ask whether a sentence is in the right place inside a paragraph. Paragraph-order questions ask whether a whole paragraph is in the right place in a passage.", "**Exam clue:** bracketed numbers at the start of sentences signal a sentence-order question; bracketed numbers at the top of paragraphs signal a paragraph-order question."] },
            { h: "2. The core skill", p: ["Do not move sentences randomly. First ask what the sentence is about, then check what comes before and after it. The sentence usually belongs right before or right after the sentence that discusses its specific topic."],
              steps: [["What is the sentence in question about?", ""], ["Does it follow logically from the previous sentence?", ""], ["Does it connect to the following sentence?", ""], ["If it does not fit, reread and find where that topic appears.", ""]] },
            { h: "3. Follow the topic", p: ["Find the sentence\u2019s topic in the paragraph, then place it next to the sentence that introduces or develops that topic.", "**Example:** in a paragraph about bees and honey, a sentence about stomach chemistry should not follow a sentence about the water in nectar. It fits after the sentence about bee behavior and before the sentence introducing the related enzyme: bee behavior \u2192 stomach chemistry \u2192 enzyme."] },
            { h: "4. Look for connection words", table: { head: ["Clue", "What it tells you"], rows: [["this / these", "Look for the idea or noun mentioned just before."], ["also / in addition", "It usually adds to an idea already mentioned."], ["however / but", "Look for a contrast or change in direction."], ["then / later / finally", "Look for an earlier step or event."], ["a specific noun", "Look for where that person, thing or idea is introduced."]] } },
            { h: "5. The fast EST method", steps: [["Read the sentence", "Say its topic in a few words."], ["Look backward", "Does the previous sentence prepare for this idea?"], ["Look forward", "Does the next sentence continue it?"], ["Eliminate", "Remove positions where the topic does not fit."], ["Confirm", "Read the paragraph with your placement and check the flow."]],
              p: ["Do not ask \u201cWhich position sounds nice?\u201d Ask \u201cWhich position makes the ideas connect logically?\u201d"] }
        ],
        checklist: ["What is the sentence in question about?", "Does the previous sentence prepare for it?", "Does the next sentence continue it?", "Do words such as this, these, also, however give me a clue?", "Did I test the placement by rereading the paragraph?"],
        examLinks: "Module 1: Q28 (sentence placement).",
        exit: "In one sentence: what should you look for first when a question asks where a sentence belongs?",
        practice: [
            { g: "Topic connection", ctx: "1. The museum recently opened an exhibit about ancient Egyptian tools. 2. Visitors can see farming tools, building tools, and objects used in daily life. 3. These objects show how practical technology developed over time. 4. The exhibit also includes short videos about modern Egyptian museums.", q: "Where should sentence 3 be placed for the clearest flow?", c: ["Where it is now", "After sentence 1", "After sentence 4", "Before sentence 1"], a: 0, why: "\u201cThese objects\u201d refers to the tools and objects named in sentence 2, so sentence 3 belongs right after it, where it already is." },
            { g: "Previous sentence", ctx: "1. The scientist first collected water samples from the lake. 2. The samples were then tested in a laboratory. 3. This analysis revealed unusually high levels of salt. 4. The scientist later compared the results with samples from nearby lakes.", q: "Where should sentence 3 be placed?", c: ["Before sentence 1", "After sentence 1", "After sentence 2", "After sentence 4"], a: 2, why: "\u201cThis analysis\u201d refers to the laboratory testing in sentence 2, so sentence 3 follows it. Placing it later would separate it from what it refers to." },
            { g: "Following the topic", ctx: "1. Many cities are adding trees to streets and public spaces. 2. Trees can provide shade during hot weather. 3. They can also help reduce the amount of heat absorbed by roads and buildings. 4. Some cities have also built new sports facilities.", q: "Where should sentence 4 be placed if the writer wants to keep the paragraph focused on the benefits of urban trees?", c: ["Where it is now", "After sentence 1", "After sentence 2", "It should be deleted"], a: 3, why: "Sports facilities are a different topic from urban trees, so no position fits; the sentence should be deleted." }
        ]
    };

    L["big-picture"] = {
        session: 4, kind: "Reading", title: "The Big Picture", source: R + ", Chapter 3, p. 79",
        goal: "Move from small details to the larger idea. You do not need to remember every sentence; you need to understand what the passage is mainly doing.",
        sections: [
            { h: "1. What does \u201cbig picture\u201d mean?", table: { head: ["Small picture", "Big picture"], rows: [["one fact", "the main idea"], ["one example", "why the author uses the examples"], ["one detail", "the author\u2019s overall point"], ["one sentence", "the passage\u2019s general message"]] }, p: ["**Important:** a detail can be true and still be too narrow to answer a big-picture question."] },
            { h: "2. Do not get trapped by details", p: ["Understand the gist first. If one small part is unclear, use the general context instead of stopping too long.", "Ask \u201cWhat is this passage doing?\u201d before \u201cWhat does every sentence mean?\u201d"] },
            { h: "3. What to focus on while reading", table: { head: ["Pay attention to", "Why?"], rows: [["Introduction / beginning", "The author may establish the main idea here."], ["First and last sentences of paragraphs", "They often show the paragraph\u2019s direction."], ["Major transitions", "They can show a change or development in the argument."], ["Conclusion", "The main point may be repeated or clarified here."]] } },
            { h: "4. Big-picture questions", p: ["Common forms ask for the summary, main idea, central idea, author\u2019s point or overall purpose of a passage or paragraph. Before looking closely at the choices, say the idea in your own simple words."] },
            { h: "5. The 3-step method", steps: [["Get the gist", "What is the passage mainly about?"], ["Ask \u201cSo what?\u201d", "What does the author want the reader to understand about that topic?"], ["Choose the right size", "Broad enough to cover the passage, specific enough to say something meaningful."]] },
            { h: "6. Topic is not the main point", p: ["A topic tells you what the passage is about. A main point tells you what the author wants to say about it.", "**Topic:** urban trees. **Too broad:** Trees are important. **Better main point:** Cities are using urban trees to reduce heat and improve public spaces.", "**Topic + So what? = Main point**"] },
            { h: "7. Answer-choice traps", table: { head: ["Trap", "What is wrong?"], rows: [["Too specific", "Describes one example or detail, not the whole passage."], ["Too broad", "Could describe many passages; it says almost nothing."], ["True but minor", "The passage supports it, but it is not the main focus."], ["Only part of the passage", "Ignores an important section or the conclusion."]] } },
            { h: "8. Worked example", ctx: "A passage explains that scientists once studied separate pieces of environmental data. New technology now allows them to combine very large amounts of data and discover relationships that were difficult to see before.", q: "Which statement best summarizes the passage?",
              c: ["Scientists use computers to store large numbers of files.", "Environmental researchers collect data from many locations.", "New technology allows researchers to analyze large amounts of data and identify relationships that were previously difficult to see.", "Some scientific data are difficult for researchers to understand."], a: 2,
              why: "A and B are details, D is too vague. C explains the larger change described across the passage." }
        ],
        checklist: ["What is the passage mainly about?", "What does the author want me to understand about that topic?", "Can I summarize it in one simple sentence?", "Is my answer broad enough to cover the passage?", "Is it specific enough to say something meaningful?", "Is it only a detail, example or one small part?"],
        examLinks: "Module 2: Q4 (summary of paragraph 1), Q14 (central idea), Q21 (primary aim), Q24 (summary). Module 3: Q20 (central idea).",
        exit: "Complete the formula: Topic + ________ = Main point. Then write your own example.",
        practice: [
            { g: "Summary", ctx: "A passage explains how a city replaced old streetlights with energy-efficient LEDs. It discusses lower electricity use, longer-lasting bulbs, and reduced maintenance costs.", q: "Which statement best summarizes the passage?", c: ["LEDs are brighter than some older lights.", "The city has many streets.", "Replacing older streetlights with LEDs can reduce several long-term costs for a city.", "Some streetlights need regular maintenance."], a: 2, why: "C covers all three points (electricity, bulb life, maintenance). The others are minor or unrelated details." },
            { g: "Main idea", ctx: "A passage explains how a researcher studied bird migration by combining observations from different years. The researcher found that migration patterns changed as temperatures changed.", q: "Which is the best main idea?", c: ["Birds migrate every year.", "Researchers can use long-term data to identify relationships between temperature and bird migration.", "Temperature is the only factor that affects birds.", "The researcher observed birds in several locations."], a: 1, why: "B states the topic plus the point. A is too broad, C is too strong (\u201conly\u201d), D is a detail." },
            { g: "Paragraph summary", ctx: "A paragraph explains that a museum restored an old painting. It describes the scientific tests used to identify the original materials and the historical records used to guide the restoration.", q: "Which choice is the best summary?", c: ["The museum used scientific and historical evidence to restore the painting accurately.", "The painting was very old.", "Scientists can test paint.", "Historical records are useful."], a: 0, why: "A combines both kinds of evidence and the restoration. B, C and D each cover only a small part." }
        ]
    };

    L["supporting-evidence"] = {
        session: 5, kind: "Reading", title: "Supporting Evidence", source: "Teacher handout, Reading Chapter 4 (p. 117 reference); question styles from the May 2026 EST",
        goal: "Choose details that support an idea, explain a conclusion, or show how evidence works.",
        sections: [
            { h: "1. What is supporting evidence?", p: ["Supporting evidence is a detail, fact, example or explanation that helps prove an idea. In the EST you may need to identify a supporting detail, explain how evidence supports a conclusion, interpret a phrase, or connect a graphic to a passage.", "**Important difference:** some books teach paired questions (an answer, then which lines prove it). In the May 2026 EST the evidence task may appear as one multiple-choice question. Choose the detail or reasoning that best supports the idea."] },
            { h: "2. The four-step method", table: { head: ["Step", "Action", "Ask yourself"], rows: [["1. Find the idea", "Underline the claim, conclusion or idea in the question.", "What must be supported?"], ["2. Predict", "Decide what kind of detail would support it.", "What would count as proof?"], ["3. Check the passage", "Find the relevant sentence or paragraph; read nearby context.", "What does the text actually say?"], ["4. Test the choices", "Choose the option that directly supports the idea; eliminate related but irrelevant details.", "Which option makes the strongest logical connection?"]] } },
            { h: "3. Recognize the question type", list: ["\u201cWhich detail supports\u2026?\u201d Find a specific fact that backs up the idea.", "\u201cHow is the conclusion supported?\u201d Explain the logical link between evidence and conclusion.", "\u201cHow does this phrase influence the claim?\u201d Ask what the phrase adds or proves.", "\u201cHow does the graphic support the passage?\u201d Identify what the graphic shows and how it connects to the explanation."] },
            { h: "4. Worked example", ctx: "A town\u2019s old bridge was closed after engineers found deep cracks in its supports. A later inspection found that the metal inside the supports had weakened over many years. The town decided to replace the bridge rather than repair it.", q: "Which detail best supports the idea that the bridge had become unsafe?",
              c: ["The town decided to replace the bridge.", "Engineers found deep cracks in the supports.", "The bridge was old.", "The town had many roads."], a: 1, why: "The cracks are direct evidence of a safety problem. A describes the response, C is general, D is unrelated." }
        ],
        checklist: ["I found the claim or idea that must be supported.", "I predicted what kind of detail would prove it.", "I checked what the text actually says.", "I rejected options that only mention the same topic."],
        examLinks: "Module 2: Q8\u2013Q12 and Q23.",
        exit: "Write the claim in your own words, then explain how your chosen detail supports it.",
        practice: [
            { g: "A \u2013 Find the supporting detail", ctx: "Some desert plants have small leaves that reduce water loss. Other plants have deep roots that reach water far below the ground. These features help the plants survive when rain is rare.", q: "Which detail best supports the idea that desert plants can survive with little rain?", c: ["Some plants grow in deserts.", "Small leaves reduce water loss.", "Rain is sometimes rare.", "Plants are living things."], a: 1, why: "Reduced water loss is a feature that explains survival with little rain. The others do not show how plants cope." },
            { g: "B \u2013 Explain the conclusion", ctx: "Scientists studied several layers of rock. They found fossil shells in a layer far above the place where the same type of shells are found today. The scientists concluded that the area had once been under the sea.", q: "How does the fossil evidence support the conclusion?", c: ["It shows that all rocks form under the sea.", "It suggests that the area\u2019s environment was different in the past.", "It proves that the sea is rising today.", "It shows that fossils are always found high above sea level."], a: 1, why: "Sea shells found where there is no sea suggest the environment was once different. A, C and D overgeneralize or add claims." },
            { g: "C \u2013 Interpret a phrase", ctx: "The first tests showed that the new material could bend without breaking. Later tests showed that it returned to its original shape after the pressure was removed.", q: "How does the second test influence the claim that the material is flexible?", c: ["It provides further evidence that the material can bend and recover.", "It proves the material cannot bend.", "It changes the topic to the cost of the material.", "It shows that the first test was not completed."], a: 0, why: "Returning to its original shape adds to the evidence of flexibility. The other options contradict or ignore the passage." },
            { g: "D \u2013 Evidence or just a related detail?", ctx: "Claim: The school\u2019s new schedule gives students more time to read.", q: "Which detail would best support the claim?", c: ["The school painted the library walls blue.", "The school added a 20-minute reading period to each morning.", "Many students like stories.", "The school has three floors."], a: 1, why: "A reading period is direct evidence of more reading time. The others are related to reading or school but prove nothing about time." },
            { g: "E \u2013 Evidence from a graphic", ctx: "A passage says that the town\u2019s use of solar energy increased over four years.", table: { head: ["Year", "Solar energy used (units)"], rows: [["2022", "10"], ["2023", "15"], ["2024", "22"], ["2025", "30"]] }, q: "Which detail from the graphic best supports the passage\u2019s claim?", c: ["The value decreased from 2022 to 2025.", "The value rose from 10 units in 2022 to 30 units in 2025.", "The table includes four years.", "The value was 15 units in 2023."], a: 1, why: "The rise from 10 to 30 over the period directly shows an increase. A is false, C is a feature of the table, D is a single value." },
            { g: "F \u2013 Strongest support", ctx: "A researcher says that a valley changed over a long period. The passage explains that erosion happens very slowly, yet it has changed the shape of the valley greatly.", q: "Which detail most strongly supports the idea that the valley changed over a long period?", c: ["The valley has a name.", "Erosion is slow but has caused extensive changes.", "The researcher visited the valley.", "The valley is shown in a figure."], a: 1, why: "Slow erosion that still caused big changes implies a long time. The others say nothing about duration." }
        ]
    };

    L["shorter-is-better"] = {
        session: 6, kind: "Grammar", title: "Shorter is Better", source: G + ", p. 53",
        goal: "Choose the shortest answer that is still clear, correct, complete and precise. Shorter is better only when the meaning stays the same.",
        sections: [
            { h: "1. The key rule", p: ["When two choices are grammatically correct and express the same idea, the shorter choice is usually better. Do not choose an answer only because it sounds impressive or uses more words.", "**Important:** the shortest answer is not always correct. It must answer the question and keep all necessary information."] },
            { h: "2. Three problems to notice", table: { head: ["Problem", "What it means", "Example"], rows: [["Redundancy", "Two words or phrases repeat the same idea.", "return back \u2192 return"], ["Wordiness", "Extra words make a simple idea longer.", "due to the fact that \u2192 because"], ["Weak / unclear wording", "A short choice may be too vague or change the meaning.", "\u201cThis was done accordingly.\u201d is short but unclear."]] } },
            { h: "3. A five-step method", steps: [["Read the full sentence", "Do not judge a phrase without its context."], ["Keep the meaning", "Ask what information the sentence must express."], ["Find repeated ideas", "Look for words that say the same thing twice."], ["Compare length and clarity", "Prefer fewer words only when the answer stays complete and precise."], ["Read it again", "Check grammar, meaning and fit with the passage."]], p: ["Do not confuse **concise** (short and clear) with **incomplete** (missing information)."] },
            { h: "4. Worked example A \u2013 remove repetition", ctx: "The hikers returned back to the camp again after sunset.", q: "Which choice is best?", c: ["The hikers returned back to the camp again after sunset.", "The hikers returned to camp after sunset.", "The hikers went back again to the camp after sunset.", "After sunset, the hikers made their return back to the camp."], a: 1, why: "\u201cReturned back\u201d and \u201cagain\u201d repeat ideas. B removes them and keeps the meaning." },
            { h: "5. Worked example B \u2013 clear, precise wording", ctx: "The report was prepared by the students before the deadline.", q: "Which choice is best?", c: ["NO CHANGE", "The students prepared the report before the deadline.", "Before the deadline, the report was in the process of being prepared by the students.", "The students did preparation of the report before the deadline."], a: 1, why: "B is active, direct and shorter than the others, with the same meaning." }
        ],
        checklist: ["I removed words that repeat the same idea.", "I kept the full meaning.", "My choice is grammatical and clear.", "My choice is precise, not vague."],
        examLinks: "Module 1: Q1 (most concise and precise), Q17 (most concise), Q21 (redundancy and relevance).",
        exit: "Choose the shortest answer that fully says what the passage means, not simply the answer with the fewest words.",
        practice: [
            { g: "Redundancy", ctx: "The coach repeated the instructions again before the game.", q: "Which choice is best?", c: ["NO CHANGE", "The coach repeated the instructions before the game.", "The coach repeated again the instructions once more before the game.", "Before the game, the instructions were repeated again by the coach."], a: 1, why: "\u201cRepeated\u201d already means said again, so \u201cagain\u201d is redundant. B removes it." },
            { g: "Wordiness", ctx: "Due to the fact that the bus was late, the students missed the first part of the lesson.", q: "Which choice is best?", c: ["NO CHANGE", "Because the bus was late, the students missed the first part of the lesson.", "Due to the late arrival of the bus, the students were not able to attend the first part of the lesson that had started.", "The first part of the lesson was missed by the students due to the fact that the bus was late."], a: 1, why: "\u201cBecause\u201d replaces the wordy \u201cdue to the fact that\u201d with the same meaning." },
            { g: "Concise but complete", ctx: "Researchers tested three materials. Material C was lighter than the others and did not break during the tests.", q: "Which sentence is best?", c: ["Material C was best.", "Material C was lighter than the others and did not break during the tests.", "Researchers did tests on materials, and one material had some good features.", "Material C, which was tested by researchers, was of a lighter weight and was not broken during any of the tests that were done."], a: 1, why: "A is short but vague and loses information; C is vague; D is wordy. B is concise and complete." },
            { g: "Active and direct wording", ctx: "The final plan was approved by the committee on Monday.", q: "Which choice is best?", c: ["NO CHANGE", "The committee approved the final plan on Monday.", "The final plan had approval by the committee on Monday.", "On Monday, approval of the final plan was given by the committee."], a: 1, why: "B is direct and shorter, with the same meaning." },
            { g: "Redundant or irrelevant?", ctx: "\u201cThe school opened the library until 8 p.m. during exam week. The library stayed open until eight at night. Many students used the extra study time.\u201d", q: "What is the best reason to delete the second sentence?", c: ["It repeats information already stated.", "It introduces a new and important fact.", "It gives the only evidence for the main idea.", "It explains why students used the library."], a: 0, why: "\u201c8 p.m.\u201d and \u201ceight at night\u201d are the same fact, so the second sentence is redundant." },
            { g: "Choose precision", ctx: "A report says that the new filter removed 90% of the particles in the water during testing.", q: "Which sentence states the finding most precisely?", c: ["The filter worked very well.", "The filter removed 90% of the particles during testing.", "The filter was a very useful and highly successful device.", "The particles in the water were removed in a way that was mostly good."], a: 1, why: "B gives the actual finding. The others are vague or wordy." }
        ]
    };

    L["literal-comprehension"] = {
        session: 6, kind: "Reading", title: "Literal Comprehension: Same Idea, Different Words", source: R + ", Chapter 5 (p. 137 reference)",
        goal: "Find information that the passage states, even when the answer uses different words. Match the meaning, not just the vocabulary.",
        sections: [
            { h: "1. What is literal comprehension?", p: ["It means understanding what a text directly says or indicates. The answer may not repeat the passage\u2019s exact words; it may use synonyms or a shorter summary.", "**Remember:** the passage gives the idea. The answer choice may give that idea in new words."] },
            { h: "2. Common question wording", table: { head: ["Question stem", "What you need to do"], rows: [["According to the passage, \u2026?", "Find what the writer directly states."], ["The passage indicates that \u2026?", "Choose a statement that matches the information."], ["Which detail supports the idea that \u2026?", "Find the detail that gives evidence for the idea."], ["What is the central idea / best summary?", "Put the main point in your own words; do not choose one small detail."], ["How does this idea relate to \u2026?", "Explain the connection in the passage; do not simply repeat a phrase."]] } },
            { h: "3. The five-step method", steps: [["Read the question", "Identify exactly what information you need."], ["Find the relevant part", "Look for the sentence or paragraph that answers it."], ["Say it in simple words", "Make a quick paraphrase before looking at the options."], ["Match the meaning", "Look for a choice with the same idea, even in different words."], ["Check every part", "Reject choices that change the meaning, add unsupported information, or give only part of the answer."]], p: ["**Key warning:** a choice can repeat words from the passage and still be wrong."] },
            { h: "4. Worked example", ctx: "A small town added trees along its main streets. After two summers, measurements showed that shaded streets were cooler at midday than streets with few trees. The town later expanded the planting project.", q: "What does the passage indicate about the trees?", c: ["Trees made every street cool at all times.", "Streets with more shade had lower midday temperatures.", "The town planted trees because residents disliked summer.", "Trees stopped the town from needing other projects."], a: 1, why: "The passage says shaded streets were cooler at midday; B says the same in different words. A is too broad; C and D add information the passage does not give." },
            { h: "5. Traps to avoid", table: { head: ["Trap", "Why it is wrong", "Check"], rows: [["Same word, wrong meaning", "Uses a word from the passage but changes the point.", "Does the full idea match?"], ["Too broad", "Says \u201call\u201d, \u201calways\u201d or more than the passage proves.", "Is the claim too strong?"], ["Only half the answer", "Matches one detail but misses an important part.", "Does it answer the whole question?"], ["Unsupported reason", "Gives a cause the writer never states.", "Where is the evidence?"], ["Opposite idea", "Reverses the meaning or relationship.", "Is the direction correct?"]] },
              p: ["If an evidence question follows, use its line references to return to the relevant part of the passage. Do not assume every EST question belongs to a paired set."] }
        ],
        checklist: ["I found the part of the passage that answers the question.", "I matched the idea, not just the same words.", "I rejected answers that add unsupported details.", "My answer covers the whole question."],
        examLinks: "Module 3: Q8, Q20 (and Q3, related). Module 2: Q14, Q24.",
        exit: "The correct option may sound different from the passage, but it must mean the same thing.",
        practice: [
            { g: "Direct information", ctx: "A team studied 60 sea turtles. Most of the tagged turtles returned to the same beach to lay eggs the following year.", q: "What does the passage indicate about most of the tagged turtles?", c: ["They returned to their original nesting beach the next year.", "They laid eggs on a new beach every year.", "All 60 turtles returned to the same beach.", "The team proved that turtles never change their habits."], a: 0, why: "\u201cMost\u201d returned to the same beach the next year. C says \u201call\u201d and D says \u201cnever\u201d, which are too strong." },
            { g: "Synonyms in context", ctx: "The new water filter removed 90 percent of the particles in the test sample. The researchers said the result was promising, but more tests were needed.", q: "Which statement matches the passage?", c: ["The filter removed every particle from all water.", "The test showed that the filter removed most particles, but further study was needed.", "The researchers decided that no more testing was necessary.", "The filter was not useful because it failed to remove 10 percent of particles."], a: 1, why: "\u201c90 percent\u201d means most, and \u201cmore tests were needed\u201d means further study. The others contradict or exaggerate." },
            { g: "Central idea", ctx: "Many schools have started gardens. Students measure plant growth, learn what plants need, and use some vegetables in school meals.", q: "What is the main idea of the passage?", c: ["School gardens can support learning and provide food.", "Every student prefers vegetables to other food.", "Plants grow at the same speed in all schools.", "The main purpose of a garden is to measure plant height."], a: 0, why: "A covers learning and food. The others are unsupported or reduce the passage to one detail." },
            { g: "A detail reworded", ctx: "Some seeds can stay inactive for years. When enough water and warmth become available, they can begin to grow.", q: "What does the passage indicate about these seeds?", c: ["They die if they do not grow in the same year.", "They can wait a long time before growing, until conditions are suitable.", "They need no water or warmth to grow.", "They grow faster when the weather is cold and dry."], a: 1, why: "\u201cInactive for years\u201d and \u201cwhen water and warmth become available\u201d are restated in B. The others reverse or invent information." },
            { g: "Avoid an unsupported claim", ctx: "The town extended bus service into the evening. After the change, more people used buses to return home from work.", q: "Which statement is supported by the passage?", c: ["The new evening service was followed by an increase in bus use for trips home from work.", "The town extended bus service because every resident requested it.", "All residents stopped driving after the new service began.", "Evening bus service made every journey faster."], a: 0, why: "Only A restates what the passage says. The others add a reason, an absolute claim, or speed, none of which is stated." },
            { g: "Connect the ideas", ctx: "The writer says that the museum is \u201cmore than a place to store old objects.\u201d The next sentence explains that visitors can use the exhibits to understand how people lived in the past.", q: "What does the writer mean?", c: ["The museum\u2019s only purpose is to protect objects.", "The museum also helps visitors learn about history.", "The objects are too old for visitors to understand.", "Visitors should not look closely at old objects."], a: 1, why: "\u201cMore than storage\u201d plus learning about the past means the museum also teaches history." }
        ]
    };

    L["diction-idioms-register"] = {
        session: 7, kind: "Grammar", title: "Diction, Idioms, and Register", source: G + ", pp. 61\u201367",
        goal: "Choose words and phrases that express the correct meaning, follow standard English usage, and match the style of the passage. A word can be real English and still be wrong in this sentence.",
        sections: [
            { h: "1. Three ideas", table: { head: ["Term", "Simple meaning", "What to check"], rows: [["Diction", "The writer\u2019s choice of words.", "Does the word mean exactly what the sentence needs?"], ["Idioms", "Fixed phrases and usual word patterns.", "Does this word normally go with this preposition or verb form?"], ["Register", "How formal or informal the language is.", "Does the wording fit the passage\u2019s style and tone?"]] } },
            { h: "2. Diction: meaning first, then context", p: ["When choices are similar, check their exact meanings. Do not pick a word because it sounds impressive. Read the whole sentence and the sentence around it."], 
              steps: [["Read the whole sentence", "Do not judge a word by itself."], ["Say the intended meaning in simple words", ""], ["Check the exact meaning and the words that usually go with it", ""], ["Reread the sentence", "Does the choice fit the meaning and style?"]] },
            { h: "Example", ctx: "In less than a year, the settlers ______ their supplies and had to return home.", q: "Which word fits best?", c: ["exhausted", "diluted", "undermined", "anticipated"], a: 0, why: "\u201cExhausted\u201d means used up completely, and \u201cexhausted their supplies\u201d is a natural expression. The others do not fit the meaning." },
            { h: "3. Idioms and fixed word patterns", p: ["An idiom is a phrase used in a standard way. Learn common phrases in context rather than trying to memorize every idiom."],
              table: { head: ["Pattern", "Correct example", "Common error"], rows: [["familiarity with", "She has familiarity with the topic.", "familiarity to the topic"], ["depend on", "The result depends on the evidence.", "depend from the evidence"], ["different from", "The second method is different from the first.", "different than the first (prefer \u201cfrom\u201d in formal writing)"], ["capable of", "The device is capable of storing data.", "capable to store data"], ["insist on + -ing", "They insisted on checking the figures.", "insisted on check the figures"], ["plan / decide to + base verb", "They decided to leave early.", "decided leaving early"]] },
              p: ["**Quick rule for -ing:** when a preposition is followed by a verb, use the -ing form (interested in learning, effective in preventing). But some verbs take to + base verb (plan to study, decide to leave). Learn the pattern for each expression."] },
            { h: "4. Register: match the passage", p: ["In many EST passages the best choice is clear, neutral, moderately formal English. Avoid both casual slang and unnecessarily complicated wording."],
              table: { head: ["Too casual", "Neutral / suitable", "Too inflated"], rows: [["They saw some really cool stuff.", "They observed several remarkable sights.", "They perceived a myriad of captivating visual phenomena."]] } },
            { h: "5. Commonly confused words", table: { head: ["Pair", "Difference", "Example"], rows: [["affect / effect", "Affect is usually a verb (influence); effect is usually a noun (result).", "The change may affect attendance. It had an effect."], ["accept / except", "Accept = receive; except = not including.", "We accept all entries except late ones."], ["than / then", "Than = comparison; then = next / at that time.", "The new model is faster than the old one. We tested it then."], ["principal / principle", "Principal = main / school leader; principle = rule or belief.", "The principal explained the principle."]] } }
        ],
        checklist: ["I checked the meaning in context.", "I checked the phrase or preposition.", "The wording fits the passage\u2019s style.", "I did not choose a word just because it sounds fancy."],
        examLinks: "Module 1: Q12, Q32, Q34. Module 3: Q5, Q7, Q13, Q17 (word works best in context) and Q9 (\u201cpicturesque\u201d).",
        exit: "A more difficult or longer word is not automatically better. Accuracy and fit matter more than sounding impressive.",
        practice: [
            { g: "Diction", ctx: "After several weeks of testing, the team ______ enough data to support its conclusion.", q: "Which word fits best?", c: ["collected", "swallowed", "weakened", "objected"], a: 0, why: "Teams collect data. The other words do not make sense with \u201cdata\u201d." },
            { g: "Idiom / preposition", ctx: "The results were consistent ______ the findings of earlier studies.", q: "Which word completes the phrase?", c: ["to", "from", "with", "on"], a: 2, why: "The standard pattern is \u201cconsistent with\u201d." },
            { g: "Register", ctx: "The report uses a formal, neutral style.", q: "Which sentence best fits that style?", c: ["The researchers observed several notable results.", "The researchers saw some really cool stuff.", "The researchers checked out a bunch of things.", "The researchers saw, like, a lot of stuff."], a: 0, why: "A is clear, neutral and moderately formal. The others are casual." },
            { g: "Commonly confused words", ctx: "The new schedule may ______ how often students visit the library.", q: "Which word fits?", c: ["effect", "affect", "except", "accept"], a: 1, why: "Here a verb meaning \u201cinfluence\u201d is needed: affect." },
            { g: "Fixed pattern", ctx: "The students were interested ______ how the experiment worked.", q: "Which choice completes the sentence?", c: ["to learn", "in learning", "for learn", "on learning"], a: 1, why: "\u201cInterested in\u201d is followed by the -ing form: interested in learning." },
            { g: "Precision and tone", ctx: "Choose the best word for a formal science report: \u201cThe findings were ______ by later studies.\u201d", q: "Which choice is best?", c: ["confirmed", "super cool", "made sure about", "thingified"], a: 0, why: "\u201cConfirmed\u201d is precise and formal. The others are casual or not real words." }
        ]
    };

    window.estLessons = L;

    /* ---------------- engine ---------------- */

    var state = {};   // lesson id -> { answers: [], checked: false }

    function esc(s) {
        return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
    function table(t) {
        return '<div class="est-table-wrap"><table class="est-module-table"><thead><tr>' +
            t.head.map(function (h) { return '<th scope="col">' + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
            t.rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return (i === 0 ? '<th scope="row">' : "<td>") + esc(c) + (i === 0 ? "</th>" : "</td>"); }).join("") + "</tr>"; }).join("") +
            "</tbody></table></div>";
    }
    function letter(i) { return "ABCD".charAt(i); }

    function worked(s) {
        return '<div class="est-worked">' + (s.ctx ? "<p>" + fmt(s.ctx) + "</p>" : "") + "<p><strong>" + fmt(s.q) + "</strong></p><ol class=\"est-choices\" type=\"A\">" +
            s.c.map(function (c, i) { return "<li" + (i === s.a ? ' class="est-correct-choice"' : "") + ">" + esc(c) + "</li>"; }).join("") +
            "</ol><p class=\"est-why\"><strong>Answer: " + letter(s.a) + ".</strong> " + fmt(s.why) + "</p></div>";
    }

    function blocksHtml(bl) {
        return (bl || []).map(function (b) {
            if (b.t === "p") return "<p>" + fmt(b.x) + "</p>";
            if (b.t === "h") return "<h4>" + esc(b.x) + "</h4>";
            if (b.t === "note") return '<p class="est-source-note">' + esc(b.x) + "</p>";
            if (b.t === "ul" || b.t === "ol") return "<" + b.t + ">" + b.x.map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</" + b.t + ">";
            if (b.t === "table") return table(b.x);
            if (b.t === "img") return '<figure class="est-figure"><img src="' + esc(b.src) + '" alt="' + esc(b.alt) + '" loading="lazy"></figure>';
            return "";
        }).join("");
    }
    function ctxHtml(c) { return typeof c === "string" ? "<p>" + fmt(c) + "</p>" : blocksHtml(c); }

    function section(s) {
        var h = '<section class="est-lesson-section"><h3>' + esc((s.h || "").replace(/^\d+\.\s*/, "")) + "</h3>";
        (s.p || []).forEach(function (p) { h += "<p>" + fmt(p) + "</p>"; });
        if (s.table) h += table(s.table);
        if (s.steps) h += '<ol class="est-steps">' + s.steps.map(function (st) { return "<li><strong>" + esc(st[0]) + "</strong>" + (st[1] ? " \u2013 " + esc(st[1]) : "") + "</li>"; }).join("") + "</ol>";
        if (s.list) h += "<ul>" + s.list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
        if (s.blocks) h += blocksHtml(s.blocks);
        if (s.q) h += worked(s);
        return h + "</section>";
    }

    function body() { return document.getElementById("est-lesson-body"); }

    function screen() {
        if (typeof hideAllScreens === "function") hideAllScreens();
        document.getElementById("est-lesson-screen").style.display = "block";
        window.scrollTo(0, 0);
    }

    var THEME = { Grammar: "grammar", Reading: "reading", Practice: "practice", Revision: "revision" };
    var ICON = { Grammar: "\u270D\uFE0F", Reading: "\uD83D\uDCD6", Practice: "\uD83C\uDFCB\uFE0F", Revision: "\uD83C\uDFAF" };

    function wordCount(l) {
        var t = JSON.stringify(l.sections || []) + (l.goal || "");
        var en = (window.estEnrich || {})[l.__id] || {};
        t += JSON.stringify(en);
        return t.split(/\s+/).length;
    }

    function callout(kind, icon, title, html) {
        return '<aside class="lx-callout lx-' + kind + '"><div class="lx-callout-icon" aria-hidden="true">' + icon + '</div><div><p class="lx-callout-title">' + esc(title) + "</p>" + html + "</div></aside>";
    }

    function enrichTop(en) {
        var h = "";
        if (en.outcomes) h += '<section class="lx-card lx-outcomes"><h3>\uD83C\uDFAF By the end you will\u2026</h3><ul class="lx-checks">' + en.outcomes.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul>" + (en.why ? '<p class="lx-why"><strong>Why it matters.</strong> ' + esc(en.why) + "</p>" : "") + "</section>";
        if (en.model) h += callout("idea", "\uD83D\uDCA1", "The big idea: " + en.model[0], "<p>" + fmt(en.model[1]) + "</p>");
        return h;
    }

    function examplesHtml(en) {
        if (!en.examples) return "";
        return '<section class="lx-card"><h3>\u270D\uFE0F Worked examples, with the thinking shown</h3>' + en.examples.map(function (x, i) {
            return '<div class="lx-example"><p class="lx-example-q"><span class="lx-badge">' + (i + 1) + "</span>" + fmt(x.s) + '</p><button type="button" class="lx-reveal" data-reveal="' + i + '">Show the answer</button><div class="lx-reveal-box" hidden><p><strong>Answer:</strong> ' + fmt(x.ans) + "</p><p>" + fmt(x.why) + "</p></div></div>";
        }).join("") + "</section>";
    }

    function errorsHtml(en) {
        if (!en.errors) return "";
        return '<section class="lx-card"><h3>\uD83D\uDEAB Spot the error</h3><div class="lx-errors">' + en.errors.map(function (r) {
            return '<div class="lx-error"><p class="lx-wrong"><span>\u2717</span>' + fmt(r[0]) + '</p><p class="lx-right"><span>\u2713</span>' + fmt(r[1]) + '</p><p class="lx-error-why">' + fmt(r[2]) + "</p></div>";
        }).join("") + "</div></section>";
    }

    function quickHtml(en) {
        if (!en.quick) return "";
        return '<section class="lx-card"><h3>\u26A1 Try it (30 seconds)</h3>' + en.quick.map(function (q, qi) {
            return '<div class="lx-quick" data-qi="' + qi + '"><p><strong>' + fmt(q.q) + '</strong></p><div class="est-options">' + q.c.map(function (c, ci) {
                return '<button type="button" class="est-option" data-ci="' + ci + '" aria-pressed="false"><span class="est-option-letter">' + letter(ci) + "</span><span>" + esc(c) + "</span></button>";
            }).join("") + '</div><button type="button" class="lx-reveal lx-quick-check">Check</button><p class="est-feedback lx-quick-fb" hidden></p></div>';
        }).join("") + "</section>";
    }

    function cheatHtml(en) {
        if (!en.cheat) return "";
        return '<section class="lx-cheat"><h3>\uD83E\uDDE0 Cheat sheet</h3><ul>' + en.cheat.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul></section>";
    }

    function wireLearn(root, en) {
        root.querySelectorAll(".lx-reveal[data-reveal]").forEach(function (b) {
            b.onclick = function () { var box = b.nextElementSibling; box.hidden = !box.hidden; b.textContent = box.hidden ? "Show the answer" : "Hide the answer"; };
        });
        root.querySelectorAll(".lx-quick").forEach(function (qe) {
            var q = en.quick[+qe.dataset.qi], chosen = null;
            qe.querySelectorAll(".est-option").forEach(function (o) {
                o.onclick = function () {
                    chosen = +o.dataset.ci;
                    qe.querySelectorAll(".est-option").forEach(function (x) { x.classList.toggle("is-selected", x === o); x.setAttribute("aria-pressed", x === o); });
                };
            });
            qe.querySelector(".lx-quick-check").onclick = function () {
                var fb = qe.querySelector(".lx-quick-fb"); fb.hidden = false;
                if (chosen === null) { fb.className = "est-feedback lx-quick-fb"; fb.textContent = "Pick an option first."; return; }
                var ok = chosen === q.a;
                fb.className = "est-feedback lx-quick-fb " + (ok ? "is-ok" : "is-bad");
                fb.innerHTML = "<strong>" + (ok ? "Correct." : "Not quite. The answer is " + letter(q.a) + ".") + "</strong> " + fmt(q.why);
            };
        });
    }

    function renderLearn(id) {
        var l = L[id], en = (window.estEnrich || {})[id] || {}; l.__id = id;
        var theme = THEME[l.kind] || "grammar", icon = en.icon || ICON[l.kind] || "\uD83D\uDCDA";
        var mins = Math.max(3, Math.round(wordCount(l) / 190));
        var nq = l.practice ? l.practice.length : (L[l.practiceFrom] && L[l.practiceFrom].practice ? L[l.practiceFrom].practice.length : 0);
        var h = '<div class="lx lx-theme-' + theme + '"><div class="lx-progress" aria-hidden="true"><span id="lx-bar"></span></div>' +
            '<header class="lx-hero"><div class="lx-hero-icon" aria-hidden="true">' + icon + '</div><div><p class="lx-kicker">SESSION ' + l.session + " \u00b7 " + esc(l.kind.toUpperCase()) + "</p><h2>" + esc(l.title) + "</h2>" +
            (en.hook ? '<p class="lx-hook">' + esc(en.hook) + "</p>" : "") +
            '<div class="lx-chips"><span>\u23F1 about ' + mins + ' min</span>' + (nq ? "<span>\u2705 " + nq + " practice questions</span>" : "") + "<span>\uD83D\uDCDA " + esc(l.source) + "</span></div></div></header>" +
            (l.goal ? callout("goal", "\uD83C\uDFC1", "Lesson goal", "<p>" + esc(l.goal) + "</p>") : "") +
            enrichTop(en);
        var toc = l.sections.filter(function (s) { return s.h; });
        if (toc.length > 2) h += '<nav class="lx-toc" aria-label="In this lesson">' + toc.slice(0, 10).map(function (s, i) { return '<a href="#lx-s' + i + '" data-jump="lx-s' + i + '">' + esc(s.h.replace(/^\d+\.\s*/, "")) + "</a>"; }).join("") + "</nav>";
        var ti = -1;
        h += l.sections.map(function (s) {
            var out = section(s);
            if (s.h) { ti++; out = out.replace('<section class="est-lesson-section">', '<section class="est-lesson-section lx-card" id="lx-s' + ti + '"><span class="lx-num">' + (ti + 1) + "</span>"); }
            else out = out.replace('<section class="est-lesson-section">', '<section class="est-lesson-section lx-card">');
            return out;
        }).join("");
        h += examplesHtml(en) + errorsHtml(en);
        if (en.l1) h += callout("l1", "\uD83C\uDF0D", "For Arabic-speaking learners: watch for this", "<p>" + fmt(en.l1) + "</p>");
        if (en.tip) h += callout("tip", "\uD83C\uDFAF", "Your EST exam move", "<p>" + fmt(en.tip) + "</p>");
        h += quickHtml(en);
        if (l.checklist) h += '<section class="est-lesson-section lx-card"><h3>\u2705 Checklist</h3><ul class="est-checklist">' + l.checklist.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul></section>";
        h += cheatHtml(en);
        if (l.examLinks) h += '<section class="est-lesson-section lx-card"><h3>\uD83D\uDCCC Where this skill appears on the official May 2026 EST</h3><p>' + esc(l.examLinks) + '</p><p class="est-source-note">These are references to question numbers in the official paper, not copies of its questions.</p></section>';
        if (l.exit) h += callout("think", "\uD83E\uDD14", "Think about it", "<p>" + esc(l.exit) + "</p>");
        h += '<div class="est-lesson-actions">' + (l.testId ? '<button type="button" class="start-button" id="est-open-test">Take the Diagnostic Mock Test \u2192</button>' : "") + ((l.practice || l.practiceFrom) ? '<button type="button" class="start-button" id="est-start-practice">' + (l.practice ? "Start practice" : "Practice this session") + " \u2192</button>" : "") +
            '<button type="button" class="secondary-button" id="est-lesson-back">\u2190 Back to Session ' + l.session + "</button></div></div>";
        body().innerHTML = h;
        var ot = document.getElementById("est-open-test");
        if (ot) ot.onclick = function () { showESTTest(l.testId); };
        var sp = document.getElementById("est-start-practice");
        if (sp) sp.onclick = function () { showESTLessonPractice(l.practice ? id : l.practiceFrom); };
        document.getElementById("est-lesson-back").onclick = function () { showESTSession(l.session); };
        wireLearn(body(), en);
        body().querySelectorAll("[data-jump]").forEach(function (a) { a.onclick = function (e) { e.preventDefault(); var t = document.getElementById(a.dataset.jump); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); }; });
        var bar = document.getElementById("lx-bar");
        window.onscroll = function () {
            var el = document.getElementById("lx-bar"); if (!el) { window.onscroll = null; return; }
            var max = document.documentElement.scrollHeight - window.innerHeight; el.style.width = max > 0 ? Math.min(100, 100 * window.scrollY / max) + "%" : "0%";
        };
    }

    function verdict(p) {
        if (p >= 90) return ["\uD83C\uDF1F", "Outstanding. You have this skill."];
        if (p >= 70) return ["\uD83D\uDCAA", "Strong work. Review the questions you missed and you are there."];
        if (p >= 50) return ["\uD83C\uDF31", "Good start. Reread the lesson\u2019s big idea, then try again."];
        return ["\uD83E\uDDED", "This skill needs another pass, and that is completely normal. Reread the lesson, then try again slowly."];
    }

    function ring(p, right, total) {
        return '<div class="lx-score"><div class="lx-ring" style="--p:' + p + '"><span>' + right + "/" + total + "</span></div><div><p class=\"lx-score-title\">" + verdict(p)[0] + " " + verdict(p)[1] + "</p>";
    }

    function renderPractice(id) {
        var l = L[id], st = state[id] || (state[id] = { answers: [], checked: false });
        var theme = THEME[l.kind] || "grammar", N = l.practice.length;
        var answered = l.practice.filter(function (q, i) { return st.answers[i] !== undefined; }).length;
        var h = '<div class="lx lx-theme-' + theme + '"><header class="lx-hero lx-hero-small"><div class="lx-hero-icon" aria-hidden="true">\uD83C\uDFCB\uFE0F</div><div><p class="lx-kicker">PRACTICE \u00b7 SESSION ' + l.session + "</p><h2>" + esc(l.title) + "</h2>" +
            '<p class="lx-hook">' + (st.checked ? "Review each answer below. Every explanation shows the reasoning." : "Pick an answer for each question. You can change your mind, then press Check answers.") + "</p></div></header>";
        if (!st.checked) h += '<div class="lx-meter"><div class="lx-meter-bar"><span id="lx-meter-fill" style="width:' + (100 * answered / N) + '%"></span></div><p id="lx-meter-text">' + answered + " of " + N + " answered</p></div>";
        l.practice.forEach(function (q, qi) {
            var chosen = st.answers[qi];
            if (q.g && (qi === 0 || l.practice[qi - 1].g !== q.g)) h += '<h3 class="est-q-heading"><span>' + esc(q.g) + "</span></h3>";
            if (q.note) h += '<p class="est-source-note">' + esc(q.note) + "</p>";
            var ok = st.checked && chosen === q.a;
            h += '<div class="est-q' + (st.checked ? (ok ? " q-ok" : " q-bad") : "") + '" id="est-q-' + qi + '"><span class="lx-qnum">' + (qi + 1) + "</span>" +
                (q.ctx ? '<div class="est-q-ctx">' + ctxHtml(q.ctx) + "</div>" : "") + (q.table ? table(q.table) : "") +
                '<p class="lx-qtext"><strong>' + fmt(q.q) + '</strong></p><div class="est-options" role="group" aria-label="Question ' + (qi + 1) + '">';
            q.c.forEach(function (c, ci) {
                var cls = "est-option";
                if (chosen === ci) cls += " is-selected";
                if (st.checked && ci === q.a) cls += " is-correct";
                if (st.checked && chosen === ci && ci !== q.a) cls += " is-wrong";
                h += '<button type="button" class="' + cls + '" data-q="' + qi + '" data-c="' + ci + '" aria-pressed="' + (chosen === ci) + '"' + (st.checked ? " disabled" : "") + '><span class="est-option-letter">' + letter(ci) + "</span><span>" + esc(c) + "</span></button>";
            });
            h += "</div>";
            if (st.checked) h += '<p class="est-feedback ' + (ok ? "is-ok" : "is-bad") + '"><strong>' + (ok ? "Correct." : (chosen === undefined ? "Not answered. Correct answer: " + letter(q.a) + "." : "Not quite. Correct answer: " + letter(q.a) + ".")) + "</strong> " + fmt(q.why) + "</p>";
            h += "</div>";
        });
        if (st.checked) {
            var score = l.practice.filter(function (q, i) { return st.answers[i] === q.a; }).length, pct = Math.round(100 * score / N);
            h = h.replace('</header>', '</header><div class="lx-result">' + ring(pct, score, N) + '<p class="est-source-note">Lesson practice score only. It is not a full-test score and does not predict an official EST score.</p></div></div>');
            h += '<div class="est-lesson-actions"><button type="button" class="start-button" id="est-retry">Try again</button><button type="button" class="secondary-button" id="est-review">Review the lesson</button></div></div>';
        } else {
            h += '<div class="lx-stickybar"><span id="lx-bar-text">' + answered + " of " + N + ' answered</span><button type="button" class="start-button" id="est-check">Check answers</button></div><div class="est-lesson-actions"><button type="button" class="secondary-button" id="est-review">\u2190 Back to lesson</button></div></div>';
        }
        body().innerHTML = h;
        body().querySelectorAll(".est-option").forEach(function (b) {
            b.onclick = function () {
                st.answers[+b.dataset.q] = +b.dataset.c;
                b.parentNode.querySelectorAll(".est-option").forEach(function (o) { o.classList.toggle("is-selected", o === b); o.setAttribute("aria-pressed", o === b); });
                var n = l.practice.filter(function (q, i) { return st.answers[i] !== undefined; }).length;
                var f = document.getElementById("lx-meter-fill"), t = document.getElementById("lx-meter-text"), bt = document.getElementById("lx-bar-text");
                if (f) f.style.width = (100 * n / N) + "%"; if (t) t.textContent = n + " of " + N + " answered"; if (bt) bt.textContent = n + " of " + N + " answered";
            };
        });
        var check = document.getElementById("est-check");
        if (check) check.onclick = function () { st.checked = true; renderPractice(id); window.scrollTo(0, 0); };
        var retry = document.getElementById("est-retry");
        if (retry) retry.onclick = function () { state[id] = { answers: [], checked: false }; renderPractice(id); window.scrollTo(0, 0); };
        document.getElementById("est-review").onclick = function () { showESTLesson(id); };
    }

    window.showESTLesson = function (id) {
        if (!L[id]) { showESTCourse(); return; }
        screen(); renderLearn(id);
    };
    window.showESTLessonPractice = function (id) {
        if (!L[id]) { showESTCourse(); return; }
        screen(); renderPractice(id);
    };

    /* ---------------- practice-test player ---------------- */

    var tstate = {};
    var clock = null;

    function stopClock() { if (clock) { clearInterval(clock); clock = null; } }

    function loadTests(done, fail) {
        if (window.estTests) { done(); return; }
        var sc = document.createElement("script");
        sc.src = "est-tests.js?v=2";
        sc.onload = done;
        sc.onerror = fail;
        document.head.appendChild(sc);
    }

    function modQuestions(m) {
        var r = [];
        m.blocks.forEach(function (b) { b.questions.forEach(function (q) { r.push(q); }); });
        return r;
    }

    function modScore(m, st) {
        var qs = modQuestions(m);
        return { right: qs.filter(function (q) { return st.a[q.n] === q.a; }).length, total: qs.length, answered: qs.filter(function (q) { return st.a[q.n] !== undefined; }).length };
    }


    var SKILLS = [
        ["Parallel structure", "parallel-structure", /parallel/i],
        ["Modifiers", "dangling-modifiers", /modifier|dangling|misplaced/i],
        ["Relative pronouns", "relative-pronouns", /relative pronoun|\bwhom\b|\bwhose\b/i],
        ["Transitions", "transitions", /transition|logical connector/i],
        ["Vocabulary in context", "vocabulary-in-context", /most nearly means|as used in|meaning of the word|word best/i],
        ["Tone and attitude", "tone-attitude", /\btone\b|attitude/i],
        ["Graphs and data", "graphics-data", /graph|table|chart|\bdata\b|percent|figure/i],
        ["Function and purpose", "function-questions", /function of|why does the author|purpose of the|role does|rhetorical/i],
        ["Main idea and summary", "big-picture", /central idea|main idea|summar|primary (aim|purpose)|overall/i],
        ["Evidence and reasoning", "supporting-evidence", /evidence|supports? the|best supports|most relevant/i],
        ["Inference", "extended-reasoning", /infer|conclu|suggests|implied|most likely/i],
        ["Concision and style", "shorter-is-better", /concise|wordy|redundan|precise|style|register/i],
        ["Sentence boundaries", "sentences-fragments", /run-on|comma splice|fragment|complete sentence|independent clause|dependent clause|joins?\b/i],
        ["Punctuation", "punct-transitions-review", /comma|semicolon|colon|dash|apostrophe|punctuat|quotation|question mark/i],
        ["Agreement, tense and pronouns", "verbs-agreement-tense", /agree|tense|\bverb\b|pronoun|antecedent|subject/i],
        ["Relevance and organization", "relevance", /relevant|delete|should be added|best placed|order|paragraph/i]
    ];


    function classifyChoices(q) {
        var opts = q.c.map(function (c) { return c.replace(/^NO CHANGE$/i, "").trim(); }).filter(Boolean);
        var SK = function (name) { return SKILLS.filter(function (x) { return x[0] === name; })[0]; };
        if (opts.length < 2) return null;
        var bare = opts.map(function (o) { return o.replace(/[^a-z0-9\s]/gi, "").replace(/\s+/g, " ").trim().toLowerCase(); });
        if (bare.every(function (b) { return b === bare[0]; })) return SK("Punctuation");
        if (opts.every(function (o) { return /^(,|;|:|\u2014|\u2013|\.|\?|!|\u2026)$/.test(o); })) return SK("Punctuation");
        if (bare.every(function (b) { return /^(who|whom|whose|which|that|where|when)$/.test(b); })) return SK("Relative pronouns");
        if (bare.every(function (b) { return /^(it|its|its|they|their|them|he|him|his|she|her|we|us|our|i|me|my|you|your|theirs|there|theyre|itss)$/.test(b); })) return SK("Agreement, tense and pronouns");
        if (opts.every(function (o) { return /^(however|therefore|moreover|nevertheless|instead|also|besides|similarly|for example|for instance|in fact|in contrast|in addition|as a result|first|then|finally|thus|meanwhile|still|furthermore|consequently|otherwise|but|or|nor|yet|so|and)\b/i.test(o.replace(/^[,;\s]+/, "")); })) return SK("Transitions");
        if (opts.every(function (o) { return o.split(" ").length <= 4 && /(ed|ing|s|been|have|has|had|is|are|was|were|be|will|would|to)\b/i.test(o); })) return SK("Agreement, tense and pronouns");
        if (opts.some(function (o) { return o.split(" ").length >= 9; })) return SK("Concision and style");
        return null;
    }

    function skillMap(t, st) {
        var map = {};
        t.modules.forEach(function (m) {
            m.blocks.forEach(function (b) {
                b.questions.forEach(function (q) {
                    var text = q.q + " " + q.c.join(" "), sk = null;
                    for (var i = 0; i < SKILLS.length; i++) if (SKILLS[i][2].test(text)) { sk = SKILLS[i]; break; }
                    if (!sk) sk = classifyChoices(q);
                    var key = sk ? sk[0] : "Mixed editing";
                    var e = map[key] || (map[key] = { name: key, lesson: sk ? sk[1] : null, right: 0, total: 0 });
                    e.total++; if (st.a[q.n] === q.a) e.right++;
                });
            });
        });
        var rows = Object.keys(map).map(function (k) { return map[k]; }).filter(function (e) { return e.total >= 2; })
            .sort(function (a, b) { return a.right / a.total - b.right / b.total; });
        var weak = rows.filter(function (e) { return e.lesson; }).slice(0, 2);
        return '<div class="lx-skillmap"><h3>\uD83E\uDDED Your estimated skill map</h3><p class="est-source-note">Skills are estimated from question wording, so treat this as a guide, not a verdict.</p>' +
            rows.map(function (e) {
                var p = Math.round(100 * e.right / e.total);
                return '<div class="lx-skill"><span>' + esc(e.name) + '</span><div class="lx-skill-bar"><i style="width:' + p + '%" class="' + (p < 50 ? "low" : p < 75 ? "mid" : "high") + '"></i></div><b>' + e.right + "/" + e.total + "</b></div>";
            }).join("") +
            (weak.length ? '<p class="lx-skill-next"><strong>Revise these first:</strong> ' + weak.map(function (e) { return '<button type="button" class="lx-link" data-lesson="' + e.lesson + '">' + esc(e.name) + " \u2192</button>"; }).join(" ") + '</p><p class="est-source-note">Then use the Targeted Revision lesson to plan the next 48 hours.</p>' : "") + "</div>";
    }

    window.showESTTest = function (id) {
        if (!(window.estTestIndex || {})[id]) { showESTCourse(); return; }
        screen();
        body().innerHTML = '<p class="est-loading">Loading the test\u2026</p>';
        loadTests(function () {
            if (!window.estTests[id]) { showESTCourse(); return; }
            renderTest(id);
        }, function () {
            body().innerHTML = '<p>The test could not be loaded. Check your connection and try again.</p><button type="button" class="secondary-button" onclick="showESTCourse()">\u2190 Back to EST</button>';
        });
    };

    function renderTest(id) {
        stopClock();
        var t = window.estTests[id];
        var st = tstate[id] || (tstate[id] = { a: {}, checked: false, m: 0, onlyWrong: false });
        var mod = t.modules[st.m];
        var h = '<div class="lx lx-theme-revision"><header class="lx-hero lx-hero-small"><div class="lx-hero-icon" aria-hidden="true">\uD83D\uDCDD</div><div><p class="lx-kicker">PRACTICE TEST \u00b7 SESSION ' + t.session + "</p><h2>" + esc(t.title) + "</h2></div></header>" +
            '<div class="est-test-note"><p>' + esc(t.intro) + '</p><p class="est-source-note"><strong>Original practice.</strong> Every passage and question was written for this course. This is not an official EST test, and a score here does not predict an official score.</p></div>';

        if (st.checked) {
            var scoredRight = 0, scoredTotal = 0, rows = "";
            t.modules.forEach(function (m) {
                var sc = modScore(m, st);
                if (m.scored) { scoredRight += sc.right; scoredTotal += sc.total; }
                rows += "<tr><th scope=\"row\">" + esc(m.name) + (m.scored ? "" : " (not scored)") + "</th><td>" + sc.right + " of " + sc.total + "</td></tr>";
            });
            var unanswered = 0;
            t.modules.forEach(function (m) { var sc = modScore(m, st); unanswered += sc.total - sc.answered; });
            h += '<div class="est-result"><p><strong>Practice test score: ' + scoredRight + " of " + scoredTotal + " (" + Math.round(100 * scoredRight / scoredTotal) + '%).</strong></p>' +
                '<div class="est-table-wrap"><table class="est-module-table"><tbody>' + rows + "</tbody></table></div>" +
                (unanswered ? '<p class="est-source-note">' + unanswered + " unanswered question" + (unanswered === 1 ? " is" : "s are") + " counted as incorrect.</p>" : "") +
                '<p class="est-source-note">This is a full-test style score for this practice form only. It is separate from your single-lesson practice scores.</p>' +
                (id === "s19-diagnostic-mock" ? skillMap(t, st) : "") +
                '<label class="est-toggle"><input type="checkbox" id="est-only-wrong"' + (st.onlyWrong ? " checked" : "") + '> Show only questions I missed</label></div>';
        }

        h += '<div class="est-tabs" role="group" aria-label="Test modules">' + t.modules.map(function (m, i) {
            var sc = modScore(m, st);
            return '<button type="button" class="est-tab' + (i === st.m ? " is-active" : "") + '" data-m="' + i + '" aria-pressed="' + (i === st.m) + '">' + esc(m.name) +
                '<span>' + (st.checked ? sc.right + "/" + sc.total : sc.answered + "/" + sc.total) + "</span></button>";
        }).join("") + "</div>";

        if (t.perModule && mod.scored && !st.checked) {
            h += '<p class="est-timer-row"><button type="button" class="secondary-button" id="est-timer-btn">Start ' + t.perModule + '-minute timer</button> <span id="est-timer" aria-live="off"></span></p>';
        }

        mod.blocks.forEach(function (b) {
            var shown = b.questions.filter(function (q) { return !(st.checked && st.onlyWrong && st.a[q.n] === q.a); });
            if (!shown.length) return;
            h += '<div class="est-block' + (b.passage ? " has-passage" : "") + '">';
            if (b.passage) h += '<div class="est-passage"><h3>' + esc(b.passage.title) + "</h3>" + blocksHtml(b.passage.blocks) + "</div>";
            h += '<div class="est-block-qs">';
            shown.forEach(function (q) {
                var chosen = st.a[q.n];
                h += '<div class="est-q"><p><strong>' + q.n + ". " + fmt(q.q) + '</strong></p><div class="est-options" role="group" aria-label="Question ' + q.n + '">';
                q.c.forEach(function (c, ci) {
                    var cls = "est-option" + (chosen === ci ? " is-selected" : "") + (st.checked && ci === q.a ? " is-correct" : "") + (st.checked && chosen === ci && ci !== q.a ? " is-wrong" : "");
                    h += '<button type="button" class="' + cls + '" data-n="' + q.n + '" data-c="' + ci + '" aria-pressed="' + (chosen === ci) + '"' + (st.checked ? " disabled" : "") + '><span class="est-option-letter">' + letter(ci) + "</span><span>" + esc(c) + "</span></button>";
                });
                h += "</div>";
                if (st.checked) {
                    var ok = chosen === q.a;
                    h += '<p class="est-feedback ' + (ok ? "is-ok" : "is-bad") + '"><strong>' + (ok ? "Correct." : (chosen === undefined ? "Not answered. Correct answer: " + letter(q.a) + "." : "Not quite. Correct answer: " + letter(q.a) + ".")) + "</strong> " + fmt(q.why) + "</p>";
                }
                h += "</div>";
            });
            h += "</div></div>";
        });

        h += '<div class="est-lesson-actions">';
        if (st.m > 0) h += '<button type="button" class="secondary-button" id="est-prev-mod">\u2190 ' + esc(t.modules[st.m - 1].name) + "</button>";
        if (st.m < t.modules.length - 1) h += '<button type="button" class="secondary-button" id="est-next-mod">' + esc(t.modules[st.m + 1].name) + " \u2192</button>";
        h += st.checked ? '<button type="button" class="start-button" id="est-t-retry">Try the test again</button>' : '<button type="button" class="start-button" id="est-t-check">Check all answers</button>';
        h += '<button type="button" class="secondary-button" id="est-t-back">\u2190 Back to Session ' + t.session + "</button></div>";
        body().innerHTML = h + "</div>";

        var go = function (m) { st.m = m; renderTest(id); window.scrollTo(0, 0); };
        body().querySelectorAll(".est-tab").forEach(function (b) { b.onclick = function () { go(+b.dataset.m); }; });
        var pv = document.getElementById("est-prev-mod"), nx = document.getElementById("est-next-mod");
        if (pv) pv.onclick = function () { go(st.m - 1); };
        if (nx) nx.onclick = function () { go(st.m + 1); };
        body().querySelectorAll(".est-option").forEach(function (b) {
            b.onclick = function () {
                st.a[+b.dataset.n] = +b.dataset.c;
                b.parentNode.querySelectorAll(".est-option").forEach(function (o) { o.classList.toggle("is-selected", o === b); o.setAttribute("aria-pressed", o === b); });
                var tab = body().querySelector(".est-tab.is-active span");
                if (tab) tab.textContent = modScore(mod, st).answered + "/" + modScore(mod, st).total;
            };
        });
        var chk = document.getElementById("est-t-check");
        if (chk) chk.onclick = function () { st.checked = true; st.m = 0; renderTest(id); window.scrollTo(0, 0); };
        var rt = document.getElementById("est-t-retry");
        if (rt) rt.onclick = function () { tstate[id] = { a: {}, checked: false, m: 0, onlyWrong: false }; renderTest(id); window.scrollTo(0, 0); };
        body().querySelectorAll(".lx-link[data-lesson]").forEach(function (b) { b.onclick = function () { showESTLesson(b.dataset.lesson); }; });
        var ow = document.getElementById("est-only-wrong");
        if (ow) ow.onchange = function () { st.onlyWrong = ow.checked; renderTest(id); };
        document.getElementById("est-t-back").onclick = function () { stopClock(); showESTSession(t.session); };
        var tb = document.getElementById("est-timer-btn");
        if (tb) tb.onclick = function () {
            stopClock();
            var end = Date.now() + t.perModule * 60000, out = document.getElementById("est-timer");
            var tick = function () {
                var left = Math.max(0, Math.round((end - Date.now()) / 1000));
                out.textContent = Math.floor(left / 60) + ":" + ("0" + (left % 60)).slice(-2) + (left === 0 ? " \u2013 time is up. Finish your answers, then check." : " left");
                if (left === 0) stopClock();
            };
            tick(); clock = setInterval(tick, 1000);
        };
    }
})();
