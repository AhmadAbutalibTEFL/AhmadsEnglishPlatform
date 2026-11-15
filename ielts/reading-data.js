/* =========================================================
   IELTS READING: content data

   Pure data, no behaviour; ielts.js renders it. Load BEFORE ielts.js.

   FORMAT FACTS: paraphrased from the IELTS partners' public test-format pages
   (see `source`). PASSAGES, QUESTIONS and ANSWER KEYS are ORIGINAL, written
   for PassMyEnglish to IELTS standards - no third-party test content.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    ns.readingData = {
        version: 1,

        source: {
            label: "IELTS official: Reading test format",
            url: "https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading",
            checked: "14 November 2026"
        },

        facts: [
            { label: "Time", value: "60 minutes, no extra transfer time" },
            { label: "Sections", value: "3" },
            { label: "Questions", value: "40 (1 mark each)" },
            { label: "Score", value: "Band 1-9, in whole or half bands" }
        ],

        trackDifferences: {
            academic: "Academic Reading: three long texts from books, journals, magazines and newspapers, written for a non-specialist audience. At least one text contains a detailed logical argument.",
            general: "General Training Reading: Section 1 contains short everyday texts (notices, advertisements, timetables), Section 2 focuses on workplace texts, and Section 3 is one longer general-interest text."
        },

        questionTypes: [
            "Multiple choice", "True / False / Not given", "Yes / No / Not given",
            "Matching headings", "Matching information", "Matching features",
            "Sentence completion", "Summary, note, table and flow-chart completion",
            "Diagram label completion", "Short-answer questions"
        ],

        lessons: [
            {
                id: "r-skimming", session: 3, title: "Skimming and Scanning", type: "Core strategy",
                purpose: "Read for general meaning first, then locate answers fast without reading every word.",
                before: [
                    "Read the title and any sub-headings; predict what the text will say.",
                    "Skim the first sentence of each paragraph to map the text's structure.",
                    "Look at the questions before reading in detail so you know what to hunt for."
                ],
                during: [
                    "Scan for names, numbers, dates and capitalised words - they are easy to spot and often near answers.",
                    "Underline the key words in each question, then find their synonyms in the text.",
                    "Remember that answers usually follow the order of the text for most question types."
                ],
                after: [
                    "Check every answer against the text, not against what you already know.",
                    "If you are stuck, mark your best guess and move on - one mark is never worth five minutes."
                ],
                dos: [
                    "Give yourself a strict time budget per section (about 20 minutes).",
                    "Use the questions as a map of where to read closely."
                ],
                donts: [
                    "Don't read the whole text word by word before looking at the questions.",
                    "Don't panic over unknown vocabulary - IELTS tests location and understanding, not dictionary knowledge."
                ],
                example: "A question asks: 'When did the library first open to the public?' You scan the text for numbers and spot '1889' beside the word 'opened' - you have found your answer area in seconds.",
                practice: "The Riverton Market opened in 1952 as a row of six food stalls beside the railway station. It moved to its current halls in 1978, and today more than forty traders sell fruit, bread and spices there six days a week. On Sundays the halls host a craft fair instead.",
                question: "Scan the text: in which year did the market move to its current halls?",
                options: ["1952", "1978", "2018"],
                answer: 1,
                feedback: "Numbers and capitalised names jump off the page first. Your eyes should land on '1978' beside the word 'moved' in seconds - without reading every word. That is scanning."
            },
            {
                id: "r-tfng", session: 3, title: "True / False / Not Given", type: "Question type",
                purpose: "Judge statements against the text only - never against your own knowledge.",
                before: [
                    "Read each statement carefully and underline the exact claim it makes.",
                    "Watch for absolute words (all, never, always) - they are often what makes a statement False."
                ],
                during: [
                    "Find the part of the text the statement is about, then compare meaning, not just words.",
                    "TRUE: the text agrees. FALSE: the text says the opposite. NOT GIVEN: the text simply does not say.",
                    "If you cannot find the information after a careful search, the answer is Not given - don't invent a match."
                ],
                after: [
                    "For every FALSE answer, point to the exact words in the text that contradict the statement.",
                    "For every NOT GIVEN, ask: could this be true without the text saying so? If yes, it is Not given."
                ],
                dos: [
                    "Base answers on the text alone, even when you know the topic well.",
                    "Distinguish 'the text disagrees' (False) from 'the text is silent' (Not given)."
                ],
                donts: [
                    "Don't answer from general knowledge.",
                    "Don't choose False just because the information is missing - that is Not given."
                ],
                example: "Text: 'The museum is closed on Mondays.' Statement: 'The museum opens every day of the week.' The text directly contradicts the statement, so the answer is FALSE.",
                practice: "Text: 'The swimming pool is open from 6 a.m. to 9 p.m. on weekdays, with reduced hours at weekends. Membership fees were lowered in 2019.'",
                question: "Statement: 'The pool was renovated in 2019.' Judged against the text only, this statement is:",
                options: ["True", "False", "Not given"],
                answer: 2,
                feedback: "The text says fees were lowered in 2019, but it never mentions renovation - it neither confirms nor contradicts the statement, so the answer is Not given. False would need the text to say the opposite."
            },
            {
                id: "r-headings", session: 4, title: "Matching Headings", type: "Question type",
                purpose: "Match each paragraph to the heading that captures its main idea.",
                before: [
                    "Read the list of headings first and underline the key idea in each.",
                    "Cross out the example heading and paragraph if one is given."
                ],
                during: [
                    "Read each paragraph's first and last sentences carefully - the main idea usually lives there.",
                    "Ask: 'What is this paragraph mostly ABOUT?' not 'What does this word mean?'",
                    "Eliminate headings as you use them - each heading is used once at most."
                ],
                after: [
                    "Re-check any paragraph where you hesitated between two headings; find the one idea the paragraph develops most.",
                    "Make sure every unused heading is genuinely weaker than the one you chose."
                ],
                dos: [
                    "Match meaning, not matching words - a heading that repeats a paragraph's vocabulary is often a trap.",
                    "Do the easiest paragraphs first."
                ],
                donts: [
                    "Don't match on a single shared word.",
                    "Don't spend too long on one paragraph - mark two candidates and return."
                ],
                example: "A paragraph describes several problems with early city transport and ends by introducing one solution that changed everything. Heading (a) 'Difficulties of early transport' lists only problems; heading (b) 'The invention that transformed travel' fits the paragraph's real destination.",
                practice: "Early bicycles were heavy, expensive and uncomfortable, with an enormous front wheel that made simply getting on dangerous. When the 'safety bicycle' arrived in the 1880s with two equal wheels and a chain drive, everything changed: prices fell, and within a decade cycling had become transport for ordinary people rather than a hobby for daring young men.",
                question: "Match the heading. Which one captures this paragraph's main idea?",
                options: ["The dangers of early bicycles", "How one design brought cycling to everyone", "The invention of the chain drive"],
                answer: 1,
                feedback: "The paragraph starts with early problems but pivots to the safety bicycle and what it changed - that transformation is the main idea. The dangers are only the setup, and the chain drive is one detail. Shared words are bait; the main idea is the catch."
            },
            {
                id: "r-gapfill", session: 4, title: "Completion Questions", type: "Question type",
                purpose: "Complete sentences, summaries or notes with words from the text - exactly.",
                before: [
                    "Read the instruction's word limit first: 'NO MORE THAN TWO WORDS' is a rule, not advice.",
                    "Predict the grammar of each gap: noun, verb, adjective, number?"
                ],
                during: [
                    "Locate the part of the text the question paraphrases, then copy the exact word(s).",
                    "Never change the form of the word - if the text says 'industrial', don't write 'industry'.",
                    "Keep answers in text order; completion questions usually follow the passage."
                ],
                after: [
                    "Re-read each completed sentence: does it make grammatical sense with your word in place?",
                    "Count your words - an answer over the limit scores zero even if correct."
                ],
                dos: [
                    "Copy spelling exactly from the text.",
                    "Use your grammar prediction to confirm you found the right word."
                ],
                donts: [
                    "Don't write more words than the limit.",
                    "Don't paraphrase - completion answers must come from the text."
                ],
                example: "Text: 'The factory, which employed over two hundred local residents, closed in 1974.' Gap: 'The factory shut down in ______.' Answer: 1974 - one word, copied exactly.",
                practice: "Text: 'The old railway bridge, built from local sandstone, carried trains for ninety years before it finally closed in 1962.' Gap (NO MORE THAN TWO WORDS): 'Trains stopped crossing the bridge in ______.'",
                question: "Complete the gap using words from the text.",
                options: ["the year 1962", "1962", "after ninety years"],
                answer: 1,
                feedback: "'1962' is one word and copied exactly from the text - perfect. 'The year 1962' breaks the two-word limit and scores zero; 'after ninety years' does not answer when it closed."
            }
        ],

        practiceSets: [
            {
                id: "rs-ac-1", track: "academic", title: "Practice 1: The Rise of Urban Farming",
                intro: "Academic style · 6 questions · about 8 minutes. Read the passage, then answer. Original text.",
                passageTitle: "The Rise of Urban Farming",
                passage: [
                    "Over the past two decades, growing food inside cities has moved from a fringe hobby to a serious part of urban planning. Urban farming now takes many forms: rooftop gardens, community plots on disused land, and high-tech vertical farms where salad leaves grow under LED lights in stacked layers. Supporters argue that producing food where it is eaten cuts transport costs, reduces packaging, and reconnects city dwellers with the natural cycle of the seasons.",
                    "The economic case, however, is more complicated than the enthusiasm suggests. A 2021 analysis of community gardens in three European capitals found that the value of vegetables grown rarely covered the full cost of water, soil testing and tools once volunteer labour was counted at even a modest wage. Vertical farms face their own challenge: lighting and climate control consume large amounts of electricity, which can make a head of lettuce grown indoors several times more expensive than its field-grown equivalent.",
                    "Yet the movement's strongest benefits may be social rather than financial. Neighbourhood plots frequently become meeting places where elderly residents teach younger ones how to grow food, and several studies have linked participation in community gardening with reduced reported stress. City governments increasingly treat such projects as public-health infrastructure rather than agriculture.",
                    "Whether urban farming can ever supply a meaningful share of a city's calories remains doubtful - staple crops such as wheat and rice demand far more space than rooftops provide. Most researchers agree, though, that feeding cities was never the whole point. As one planner put it, the tomato grown on a balcony is worth less for what it feeds the body than for what it teaches the grower."
                ],
                questions: [
                    { prompt: "Urban farming reduces the need to transport food.", options: ["True", "False", "Not given"], answer: 0,
                      explanation: "Paragraph 1 says producing food where it is eaten 'cuts transport costs' - the text agrees." },
                    { prompt: "Community gardens always make a financial profit.", options: ["True", "False", "Not given"], answer: 1,
                      explanation: "Paragraph 2: the value of vegetables 'rarely covered the full cost' - the text contradicts 'always'." },
                    { prompt: "Vertical farms use less electricity than traditional farms.", options: ["True", "False", "Not given"], answer: 2,
                      explanation: "The text says indoor farms consume large amounts of electricity, but never compares their total use with traditional farms - Not given." },
                    { prompt: "According to paragraph 3, city governments increasingly see community gardens as:", options: ["Agricultural businesses", "Public-health infrastructure", "Tourist attractions"], answer: 1,
                      explanation: "The paragraph ends: governments 'treat such projects as public-health infrastructure rather than agriculture'." },
                    { prompt: "Staple crops are difficult to grow in cities because they:", options: ["Need more space than rooftops offer", "Are unpopular with city residents", "Require volunteer labour"], answer: 0,
                      explanation: "Paragraph 4: wheat and rice 'demand far more space than rooftops provide'." },
                    { prompt: "The planner quoted believes the main value of balcony-grown food is:", options: ["Its nutritional content", "Its low price", "What growing it teaches people"], answer: 2,
                      explanation: "The final sentence: it is worth more 'for what it teaches the grower'." }
                ]
            },
            {
                id: "rs-ac-2", track: "academic", title: "Practice 2: How Sleep Shapes Memory",
                intro: "Academic style · 6 questions · about 8 minutes. Original text.",
                passageTitle: "How Sleep Shapes Memory",
                passage: [
                    "For most of human history, sleep was considered a passive state - the mind simply switched off. Research over the last fifty years has overturned that view. Far from being idle, the sleeping brain replays the day's experiences, strengthens some connections and prunes others. Memory researchers now describe sleep not as rest from learning but as a essential stage of it.",
                    "One influential line of evidence comes from studies of procedural skills - abilities such as playing a musical scale or typing a sequence. Volunteers who learned such a skill in the evening and were tested after a night's sleep consistently outperformed those who learned in the morning and were tested after an equal span of waking hours. Crucially, the improvement appeared even when both groups spent the same total time practising, suggesting that sleep itself adds something practice alone cannot.",
                    "Declarative memories - facts and events - seem to depend on different sleep stages than skills do. Deep slow-wave sleep, concentrated in the first half of the night, appears central to anchoring new facts, while the dream-rich REM stage that dominates early morning is thought to help integrate those facts with older knowledge. This division of labour explains why students who cut a night's sleep short lose a disproportionate share of the benefit.",
                    "These findings have practical implications that schools have been slow to adopt. Later secondary-school start times, which allow adolescents - whose body clocks naturally shift later - to sleep longer, have been associated with measurably better attendance and grades in several districts. Critics note, however, that most such studies are observational: districts that change start times may differ from those that do not in ways that also affect results.",
                    "What no serious researcher now disputes is the direction of the relationship. The question is no longer whether sleep matters for memory, but how to build timetables, and lives, that respect it."
                ],
                questions: [
                    { prompt: "Sleep was once believed to be a passive state.", options: ["True", "False", "Not given"], answer: 0,
                      explanation: "Paragraph 1: 'sleep was considered a passive state'." },
                    { prompt: "In skill studies, the sleep group practised for longer than the waking group.", options: ["True", "False", "Not given"], answer: 1,
                      explanation: "Paragraph 2 states both groups 'spent the same total time practising' - the statement contradicts this." },
                    { prompt: "REM sleep is more common in the second half of the night.", options: ["True", "False", "Not given"], answer: 0,
                      explanation: "Paragraph 3: REM 'dominates early morning', i.e. the second half of the night." },
                    { prompt: "According to paragraph 2, the skill studies suggest that sleep:", options: ["Replaces the need for practice", "Adds a benefit practice alone does not give", "Only helps musical skills"], answer: 1,
                      explanation: "'sleep itself adds something practice alone cannot'." },
                    { prompt: "The critics' objection to the school-start-time studies is that they:", options: ["Are too expensive to repeat", "May confuse cause with other differences between districts", "Ignore adolescents' body clocks"], answer: 1,
                      explanation: "Paragraph 4: districts that change start times 'may differ... in ways that also affect results'." },
                    { prompt: "The writer concludes that researchers now agree on:", options: ["How schools should set timetables", "That sleep matters for memory", "Which sleep stage is most important"], answer: 1,
                      explanation: "Final paragraph: 'no longer whether sleep matters for memory, but how to build... lives that respect it'." }
                ]
            },
            {
                id: "rs-gt-1", track: "general", title: "Practice 3: Workplace Notices (General Training)",
                intro: "General Training style · 5 questions · about 6 minutes. Two short workplace texts. Original texts.",
                passageTitle: "Two workplace texts",
                passage: [
                    "TEXT A - Notice to all staff: From Monday 14 March, the staff car park on Weston Road will close for resurfacing, expected to take three weeks. During this period, staff may use the visitors' car park on Mill Lane, but must display their staff permit at all times. The company has also arranged a temporary shuttle bus between the Mill Lane car park and the main entrance, running every ten minutes from 7:30 to 9:30 each morning. Cycle storage remains open as normal.",
                    "TEXT B - Email from the HR office: Dear all, a reminder that annual leave requests for July and August must be submitted through the new online portal by Friday 29 April. Requests made after this date can still be submitted, but they will be considered only after all on-time requests have been approved, and we cannot guarantee that late requests for the school-holiday period will be granted. Paper forms are no longer accepted for any leave requests. If you have not yet received your portal login, contact IT support before the deadline."
                ],
                questions: [
                    { prompt: "The Weston Road car park will be unavailable because of:", options: ["Building work on its surface", "A new permit system", "Staff parking problems"], answer: 0,
                      explanation: "It 'will close for resurfacing'." },
                    { prompt: "During the closure, staff using the Mill Lane car park must:", options: ["Book a space in advance", "Show a staff permit", "Arrive before 7:30"], answer: 1,
                      explanation: "They 'must display their staff permit at all times'." },
                    { prompt: "The shuttle bus service:", options: ["Runs all day", "Only serves the morning arrival period", "Replaces the cycle storage"], answer: 1,
                      explanation: "It runs 'every ten minutes from 7:30 to 9:30 each morning'." },
                    { prompt: "Leave requests submitted after 29 April:", options: ["Will not be considered at all", "Will be handled after on-time requests", "Must be made on paper"], answer: 1,
                      explanation: "Late requests 'will be considered only after all on-time requests have been approved'." },
                    { prompt: "Paper leave forms are:", options: ["Accepted until the deadline", "No longer accepted for any requests", "Required for school-holiday leave"], answer: 1,
                      explanation: "'Paper forms are no longer accepted for any leave requests.'" }
                ]
            }
        ]
    };
})();
