/* =========================================================
   TOEFL iBT WRITING — PRACTICE BANK
   All prompts, sentences, model responses, and explanations are original.
   Loaded before toefl-writing.js. Exposes window.toeflWritingBank.
   ========================================================= */

(function () {
    // S(context, "chunk|chunk|…" in correct order, endPunctuation, skill, explanation, optional alternative order)
    const S = (ctx, chunks, end, skill, explanation, alt) => ({
        ctx, chunks: chunks.split("|"), end, skill, explanation,
        alts: alt ? [alt.split("|")] : []
    });

    const bank = { sentence: [], email: [], discussion: [] };

    /* ------------------------------------------------------
       BUILD A SENTENCE — 8 sets of 10 items
       skills: stmt, ques, emb, cls, vb, cond
       ------------------------------------------------------ */

    bank.sentence.push({
        id: "s1", level: 1, title: "Everyday Statements",
        instruction: "Use every word and phrase once to build a correct sentence that answers the situation.",
        items: [
            S("A friend asks what you usually do at weekends.", "I|usually|visit|my grandparents|on Saturdays", ".", "stmt", "Adverbs of frequency such as ‘usually’ come before the main verb; the time phrase goes at the end or the start.", "on Saturdays|I|usually|visit|my grandparents"),
            S("Your teacher asks why the class was cancelled.", "the class|was cancelled|because|the teacher|was sick", ".", "stmt", "‘Because’ introduces the reason and follows the main clause."),
            S("A neighbour asks when the shop opens.", "the shop|opens|at eight|every morning", ".", "stmt", "Subject, verb, then time phrases: the specific time comes before the repeated one."),
            S("Your sister asks where you left your keys.", "I|left|them|on|the kitchen table", ".", "stmt", "The pronoun object ‘them’ comes right after the verb; the place phrase follows."),
            S("A colleague asks how you get to work.", "I|usually|take|the train|to work", ".", "stmt", "Frequency adverb before the verb, then the object, then the destination."),
            S("The coach asks who forgot the equipment.", "Omar|forgot|to bring|the equipment", ".", "stmt", "Subject + verb + infinitive + object."),
            S("A friend asks what the weather was like.", "it|was|cold|and|windy|all day", ".", "stmt", "A linking verb is followed by adjectives joined with ‘and’; the time phrase comes last."),
            S("Your cousin asks what you bought.", "I|bought|a small gift|for|our mother", ".", "stmt", "The direct object comes before the ‘for’ phrase that names the receiver."),
            S("A classmate asks what the assignment is.", "we|have to|write|a short report|by Friday", ".", "stmt", "‘Have to’ is followed by a base verb, then the object, then the deadline."),
            S("Your host asks if you like the food.", "the soup|tastes|much better|than|I expected", ".", "stmt", "A comparative (‘better’) is followed by ‘than’ and the standard of comparison.")
        ]
    });

    bank.sentence.push({
        id: "s2", level: 1, title: "Simple Questions",
        instruction: "Build the question. Remember that questions use a different word order from statements.",
        items: [
            S("You want to know the time of the next bus.", "when|does|the next bus|leave", "?", "ques", "Question word + auxiliary ‘does’ + subject + base verb."),
            S("You ask a stranger where the post office is.", "where|is|the nearest|post office", "?", "ques", "With ‘be’ the verb comes before the subject in a question."),
            S("You ask a friend about last night.", "did|you|enjoy|the film", "?", "ques", "‘Did’ comes first in a yes/no question, followed by the subject and a base verb."),
            S("You want to know a price.", "how much|does|this jacket|cost", "?", "ques", "Question phrase, then ‘does’, the subject, and the base verb."),
            S("You ask a classmate about homework.", "have|you|finished|the homework|yet", "?", "ques", "Present perfect questions begin with ‘have’ + subject + past participle."),
            S("You ask who is running the meeting.", "who|is|leading|today’s meeting", "?", "ques", "‘Who’ + ‘is’ + -ing verb + object."),
            S("You ask your teacher about the exam.", "what time|will|the exam|start", "?", "ques", "Question phrase + modal + subject + base verb."),
            S("You ask a friend about her trip.", "how long|did|you|stay|in Cairo", "?", "ques", "Question phrase + ‘did’ + subject + base verb + place."),
            S("You ask your manager for permission.", "can|I|submit|the report|on Monday", "?", "ques", "The modal ‘can’ comes before the subject in a question."),
            S("You ask a neighbour about the noise.", "why|was|the music|so loud|last night", "?", "ques", "‘Why’ + ‘was’ + subject + adjective phrase + time.")
        ]
    });

    bank.sentence.push({
        id: "s3", level: 1, title: "Tenses in Context",
        instruction: "Choose the tense that fits the situation, then arrange the words.",
        items: [
            S("A friend asks why you are tired.", "I|have been|studying|since|this morning", ".", "vb", "Present perfect continuous: have been + -ing; ‘since’ gives the starting point."),
            S("A coworker asks when you will send the report.", "I|will|send|it|before lunch", ".", "vb", "Modal ‘will’ + base verb + object + time."),
            S("Your mother asks where your brother is.", "he|is|playing|football|in the park", ".", "vb", "Present continuous: is + -ing, then the object and the place."),
            S("Your teacher asks what you did yesterday.", "we|visited|a science museum|with|our class", ".", "vb", "Simple past verb, object, then the ‘with’ phrase."),
            S("A friend asks what you have learned.", "I|have learned|a lot|about|healthy food", ".", "vb", "Present perfect: have + past participle; ‘about’ introduces the topic."),
            S("A colleague asks if you can attend tomorrow.", "I|cannot|attend|the meeting|tomorrow", ".", "vb", "‘Cannot’ + base verb; the time word comes last."),
            S("A friend asks what the shop sells.", "it|sells|fresh bread|and|local cheese", ".", "vb", "Subject–verb–object, with ‘and’ joining two objects."),
            S("Your teacher asks who wrote the letter.", "the letter|was written|by|a young student", ".", "vb", "Passive: was + past participle, then ‘by’ + the agent."),
            S("A friend asks when you learned to swim.", "I|learned|to swim|when|I was six", ".", "vb", "Main clause first, then ‘when’ + a time clause."),
            S("Your cousin asks about your plans.", "we|are going|to visit|our grandmother|next week", ".", "vb", "‘Be going to’ + base verb for plans; the time phrase comes last.")
        ]
    });

    bank.sentence.push({
        id: "s4", level: 2, title: "Embedded Questions and Reported Speech",
        instruction: "After a question word inside a sentence, use statement order, not question order.",
        items: [
            S("Someone asks if you know where the exit is.", "I|don’t know|where|the exit|is", ".", "emb", "In an embedded question the subject comes before the verb: ‘where the exit is’."),
            S("A colleague asks what the manager said.", "she|asked|whether|we|had finished", ".", "emb", "Reported yes/no questions use ‘whether’ or ‘if’ with statement order."),
            S("Explain what you want to find out about the library.", "I|wonder|what time|the library|closes", ".", "emb", "No inversion after ‘wonder’: what time + subject + verb."),
            S("Politely ask a tourist officer where tickets are sold.", "could you|tell me|where|I can buy|tickets", "?", "emb", "A polite question frame is followed by an embedded question with normal word order."),
            S("Report what the doctor said.", "the doctor|told|me|that|I should|rest more", ".", "emb", "‘Told’ takes an object (me) before the ‘that’ clause."),
            S("Say what you would like to know about the trip.", "I|would like|to know|how long|the trip|takes", ".", "emb", "After ‘how long’ use statement order: subject + verb."),
            S("Report your boss’s question.", "he|wanted|to know|if|the schedule|had changed", ".", "emb", "A reported question with ‘if’ and past perfect (backshift)."),
            S("Politely ask about the application deadline.", "do you|know|when|the application|is due", "?", "emb", "‘Do you know’ is the question; the embedded part keeps statement order."),
            S("Report what your friend asked.", "she|asked|me|why|I had left|early", ".", "emb", "‘Asked me’ + question word + statement order."),
            S("Report an instruction from the teacher.", "the teacher|said|that|we|must hand in|our essays|tomorrow", ".", "emb", "A reported statement: said + that + subject + verb phrase.")
        ]
    });

    bank.sentence.push({
        id: "s5", level: 2, title: "Relative and Noun Clauses",
        instruction: "Attach the extra information to the right noun, then complete the main clause.",
        items: [
            S("Say who the woman at the desk is.", "the woman|who|is sitting|at the desk|is my aunt", ".", "cls", "A relative clause with ‘who’ follows the noun it describes."),
            S("Say what the book you borrowed is about.", "the book|that|I borrowed|is|about astronomy", ".", "cls", "‘That I borrowed’ describes ‘the book’; the main verb comes after it."),
            S("Say what surprised you.", "what|surprised me|was|the speed|of the service", ".", "cls", "A noun clause beginning with ‘what’ can be the subject."),
            S("Describe the café where you met.", "the café|where|we met|is|closing soon", ".", "cls", "‘Where’ introduces a clause about a place."),
            S("Say who is from Jordan.", "the student|whose|essay|won|is from Jordan", ".", "cls", "‘Whose’ shows possession and is followed by a noun."),
            S("Say which phone is yours.", "the phone|that|is|on the table|belongs to me", ".", "cls", "‘That’ is the subject of the relative clause."),
            S("Say that your project is finished.", "the project|we started|last month|is|finally finished", ".", "cls", "A relative clause without a pronoun (‘we started’) can follow the noun."),
            S("Describe your teacher.", "my teacher|who|speaks|four languages|is very patient", ".", "cls", "‘Who’ + verb gives extra information about a person."),
            S("Explain the reason for your call.", "the reason|why|I called|is|to confirm|our meeting", ".", "cls", "‘The reason why’ introduces a clause; ‘to confirm’ completes the main clause."),
            S("Describe the museum.", "the museum|which|opened|last year|attracts|many visitors", ".", "cls", "‘Which’ introduces a clause about a thing.")
        ]
    });

    bank.sentence.push({
        id: "s6", level: 2, title: "Passives and Modals",
        instruction: "Decide who or what is the subject, then choose the correct verb form.",
        items: [
            S("Say when the bridge was built.", "the bridge|was built|in|the nineteenth century", ".", "vb", "Passive voice: was + past participle; the time phrase follows."),
            S("Say what must be done before the deadline.", "all forms|must be|submitted|before|the deadline", ".", "vb", "Modal passive: must be + past participle."),
            S("Say what can be seen from your window.", "the mountains|can be seen|from|our window", ".", "vb", "Modal passive for possibility."),
            S("Say who has cleaned the room.", "the room|has been|cleaned|by|the staff", ".", "vb", "Present perfect passive: has been + past participle."),
            S("Report a requirement.", "students|are required|to bring|their ID cards", ".", "vb", "‘Are required to’ + base verb."),
            S("Say what might happen to the match.", "the match|might be|postponed|because of|the rain", ".", "vb", "‘Might be’ + past participle expresses a possible event."),
            S("Say what advice you should have followed.", "you|should have|called|me|earlier", ".", "vb", "‘Should have’ + past participle for past advice."),
            S("Say what was announced.", "it was announced|that|the library|will close|early", ".", "vb", "‘It was announced’ is followed by a ‘that’ clause."),
            S("Explain what the machine is used for.", "this machine|is used|to make|fresh juice", ".", "vb", "‘Is used to’ + base verb states a purpose."),
            S("Say what would help visitors.", "a map|would|help|visitors|find|their way", ".", "vb", "‘Would’ + base verb; ‘help’ can take an object and a base verb.")
        ]
    });

    bank.sentence.push({
        id: "s7", level: 3, title: "Conditionals and Comparisons",
        instruction: "Some items tell you how to begin. Use every word and phrase once.",
        items: [
            S("Say what you will do if you finish early. (Begin with ‘If’.)", "if I finish early,|I will|help|my classmates", ".", "cond", "First conditional: if + present, will + base verb."),
            S("Say what would happen if it rained. (Begin with ‘If’.)", "if it rained,|we would|move|the event|indoors", ".", "cond", "Second conditional: if + past, would + base verb."),
            S("Compare two phones.", "this phone|is|much|cheaper|than|the other one", ".", "cond", "A comparative adjective is followed by ‘than’."),
            S("Describe how practice helps. (Begin with ‘The more’.)", "the more|you practise,|the better|you will|become", ".", "cond", "‘The more … the better …’ is a fixed correlative pattern."),
            S("Say what you wish for.", "I wish|I had|more time|to study|for the exam", ".", "cond", "‘Wish’ + past tense expresses an unreal present wish."),
            S("Say what would have happened. (Begin with ‘If’.)", "if we had left|earlier,|we would have|caught|the train", ".", "cond", "Third conditional: if + past perfect, would have + past participle."),
            S("Describe a lecture.", "this|was|the most|interesting|lecture|I have ever|attended", ".", "cond", "Superlative + present perfect with ‘ever’."),
            S("Say what you would do with more money. (Begin with ‘If’.)", "if I had|more money,|I would|travel|around Europe", ".", "cond", "Second conditional: the if-clause comes first and takes a comma."),
            S("Warn about the deadline. (Begin with ‘Unless’.)", "unless you|register today,|you will|miss|the deadline", ".", "cond", "‘Unless’ means ‘if not’ and is followed by a positive verb."),
            S("Compare how fast two people run.", "she|runs|as fast|as|her older brother", ".", "cond", "As + adverb + as expresses equal comparison.")
        ]
    });

    bank.sentence.push({
        id: "s8", level: 3, title: "Complex Sentences",
        instruction: "Look for the main clause first, then attach the extra clauses.",
        items: [
            S("Explain why you were late. (Begin with ‘Although’.)", "although|I left home|early,|I|still missed|the bus", ".", "cls", "‘Although’ + clause + comma, then the main clause."),
            S("Explain a benefit of language learning.", "learning|a second language|helps|people|understand|other cultures", ".", "cls", "A gerund phrase (‘learning a second language’) can be the subject."),
            S("Give your opinion about schools.", "I|strongly believe|that|schools|should teach|financial skills", ".", "cls", "‘Believe that’ introduces a noun clause with normal word order."),
            S("Describe how difficult the experiment was.", "the experiment|was so|difficult|that|few students|finished it", ".", "cls", "‘So + adjective + that’ shows result."),
            S("Contrast people’s preferences. (Begin with ‘While’.)", "while|some people|prefer|cities,|others|enjoy|village life", ".", "cls", "‘While’ introduces a contrast; the comma separates the two clauses."),
            S("Say what she did after the report. (Begin with ‘Having’.)", "having|finished|the report,|she|left|the office", ".", "cls", "A perfect participle clause shows an earlier action."),
            S("Report what the research suggests.", "the results|suggest|that|regular exercise|improves|memory", ".", "cls", "‘Suggest that’ is followed by a clause."),
            S("Describe what she did.", "she|not only|wrote|the report|but also|presented|it", ".", "cls", "‘Not only … but also …’ joins two parallel verbs."),
            S("Say what you expect.", "I|expect|the manager|to approve|the plan|by Friday", ".", "cls", "‘Expect’ + object + to + base verb."),
            S("Explain the reason for the delay.", "the main reason|for the delay|was|that|the supplier|sent|the wrong parts", ".", "cls", "‘The reason … was that …’ is followed by a full clause.")
        ]
    });

    /* ------------------------------------------------------
       WRITE AN EMAIL — 8 prompts
       Practice target: about 80–140 words (not an ETS figure)
       ------------------------------------------------------ */

    const E = (id, level, title, audience, scenario, goals, keywords, model) =>
        ({ id, level, title, audience, scenario, goals, keywords, model, targetMin: 80, targetMax: 140 });

    bank.email.push(E("e1", 1, "Extension Request", "Professor · formal",
        "You are a university student. Your laptop stopped working three days before your research paper is due. You have already written about half of the paper. Write an email to your professor.",
        ["Explain why you need more time", "Say how much of the work you have already finished", "Ask for a specific new deadline"],
        [["laptop", "stopped working", "broke", "computer", "unable", "because", "problem"], ["half", "finished", "completed", "written", "draft", "sections", "pages", "already"], ["by next", "until", "new deadline", "extension", "extend", "friday", "monday", "days"]],
        "Dear Professor Allen,\n\nI am writing to ask for a short extension on my research paper. Unfortunately, my laptop stopped working on Monday, and I have been unable to use it since then. Before this happened, I had finished the introduction and about half of the main sections.\n\nI am now using a library computer, but the time available there is limited. Would it be possible to submit the paper by next Friday instead of this Wednesday? I will send you the completed sections tomorrow so that you can see my progress.\n\nThank you very much for considering my request.\n\nSincerely,\nMaya Lin"));

    bank.email.push(E("e2", 1, "Booking a Study Room", "Library office · semi-formal",
        "Your study group needs a quiet room in the library next Thursday afternoon to prepare for a class presentation. Write an email to the library office.",
        ["Say when you need the room and for how long", "Explain what the group will do there", "Ask whether a projector or whiteboard is available"],
        [["thursday", "afternoon", "hours", "from", "until", "p.m.", "pm", "o’clock"], ["presentation", "practise", "practice", "prepare", "group", "project"], ["projector", "whiteboard", "screen", "equipment", "available"]],
        "Hello,\n\nI would like to reserve a study room next Thursday from 2:00 to 5:00 p.m. There will be five students in our group.\n\nWe are preparing a presentation for our economics class, so we need a space where we can practise speaking aloud without disturbing other readers. Could you please tell me whether a projector or a whiteboard is available in the room? If not, we will bring our own laptop and cables.\n\nPlease let me know if the booking is possible and whether I need to bring a student card.\n\nBest regards,\nOmar Hassan"));

    bank.email.push(E("e3", 1, "Broken Heater", "Building manager · formal",
        "The heater in your apartment has not worked for four days. Write an email to the building manager.",
        ["Describe the problem and say when it started", "Explain how the problem affects you", "Ask for a repair this week"],
        [["heater", "heating", "broken", "stopped", "days ago", "since", "started"], ["cold", "sleep", "study", "temperature", "difficult", "affect", "uncomfortable"], ["repair", "fix", "technician", "this week", "visit", "soon", "arrange"]],
        "Dear Ms Torres,\n\nI am writing about the heater in apartment 4B. It stopped working four days ago, and I have not been able to turn it on since then.\n\nThe apartment is now very cold in the evenings, which makes it difficult to study and sleep. I have tried resetting the thermostat, but nothing has changed.\n\nCould you please arrange for a technician to visit this week? I am usually home after 5:00 p.m., and I can also leave a key with the front desk. I would really appreciate a quick solution.\n\nThank you for your help.\n\nKind regards,\nDaniel Cho"));

    bank.email.push(E("e4", 2, "Volunteer Reply", "Club coordinator · semi-formal",
        "A campus environmental club has invited you to help at a beach clean-up on Saturday morning. Write a reply.",
        ["Accept the invitation and thank them", "Say what time you can arrive and what you will bring", "Ask one question about the event"],
        [["accept", "glad", "happy", "thank", "join", "pleased", "delighted"], ["arrive", "a.m.", "bring", "gloves", "water", "bags", "time"], ["?", "could", "should", "what", "where", "will there"]],
        "Hello Priya,\n\nThank you for inviting me to the beach clean-up on Saturday. I would be glad to join the team.\n\nI can arrive at 8:30 a.m., and I will bring gloves and a reusable water bottle. I also have a small car, so I could carry some of the equipment if that would be useful.\n\nOne quick question: should we wear any particular clothing, or will the club provide shirts and bags? I would like to be well prepared.\n\nLooking forward to meeting everyone.\n\nBest,\nKarim"));

    bank.email.push(E("e5", 2, "Wrong Textbook", "Online bookstore · formal",
        "You ordered a chemistry textbook online, but you received a different book. Your course starts in five days. Write an email to customer service.",
        ["Explain what you ordered and what arrived", "Say what solution you would like", "Explain why the matter is urgent"],
        [["ordered", "order", "textbook", "received", "arrived", "instead", "wrong"], ["refund", "replacement", "send", "correct", "exchange", "would like", "prefer"], ["urgent", "begins", "starts", "five days", "course", "deadline", "need it"]],
        "Dear Customer Service Team,\n\nI am writing about order number 58214. I ordered the ninth edition of General Chemistry, but the package I received contains a physics workbook instead.\n\nI would like you to send the correct textbook as soon as possible. If it cannot arrive by Friday, I would prefer a full refund so that I can buy a copy from a local shop.\n\nThis is quite urgent because my chemistry course begins in five days and the first assignment depends on chapters one to three. I have attached a photo of the book I received.\n\nThank you for your prompt attention to this matter.\n\nSincerely,\nLina Haddad"));

    bank.email.push(E("e6", 2, "Recommendation Letter", "Professor · formal",
        "You are applying for a scholarship and need a recommendation letter from a professor who taught you last year. Write an email to the professor.",
        ["Remind the professor who you are and which course you took", "Explain what you need and the deadline", "Offer to provide additional information"],
        [["student", "course", "class", "taught", "last", "spring", "semester", "your"], ["recommendation", "letter", "scholarship", "deadline", "by", "submit", "need"], ["happy to", "glad to", "send", "provide", "résumé", "resume", "information", "if you need"]],
        "Dear Professor Nguyen,\n\nI hope you are well. I was a student in your Introduction to Statistics course last spring, and I enjoyed your class very much.\n\nI am applying for the Global Futures Scholarship, and I was wondering whether you would be willing to write a letter of recommendation for me. The deadline for submission is March 15, so the letter would need to be ready by March 8.\n\nI would be happy to send my résumé, my final project, and a short summary of my goals to help you write the letter. Please let me know if you need anything else.\n\nThank you for considering my request.\n\nRespectfully,\nOmar Said"));

    bank.email.push(E("e7", 3, "Timetable Conflict", "Department head · formal",
        "Two required courses in your program are scheduled at the same time next semester, so students cannot take both. Write an email to the department head suggesting a solution.",
        ["Describe the scheduling problem clearly", "Suggest a practical solution", "Explain how the change would help students"],
        [["conflict", "same time", "both", "scheduled", "overlap", "required", "problem"], ["could", "perhaps", "suggest", "move", "second section", "afternoon", "propose"], ["students", "graduate", "graduation", "delay", "complete", "on time", "benefit", "help"]],
        "Dear Dr. Whitfield,\n\nI am a second-year student in the Biology program, and I am writing about a scheduling conflict for next semester. Biochemistry (BIO 301) and Genetics (BIO 312), which are both required, are currently offered on Tuesdays and Thursdays from 10:00 to 11:30 a.m.\n\nPerhaps one of the courses could be moved to the afternoon, or a second section could be added. Either option would solve the problem without changing the course content.\n\nThis adjustment would allow students to complete their required courses on time and would prevent graduation delays. Several classmates share my concern, and we would be grateful for your help.\n\nThank you for your time.\n\nSincerely,\nSara Rahman"));

    bank.email.push(E("e8", 3, "Changing the Meeting Day", "Teammate · semi-formal",
        "A teammate has proposed holding your group project meeting on Sunday evening. Sunday does not work for you. Write a polite reply.",
        ["Thank your teammate and acknowledge the suggestion", "Explain why Sunday does not work for you", "Suggest another time and a way to share the work in the meantime"],
        [["thanks", "thank", "suggest", "understand", "appreciate"], ["unfortunately", "work", "busy", "cannot", "can’t", "not able", "because"], ["instead", "saturday", "monday", "would", "alternatively", "draft", "folder", "upload", "send"]],
        "Hi Jordan,\n\nThanks for suggesting Sunday evening; I understand that it is the easiest time for most people.\n\nUnfortunately, I work at the campus café on Sundays until 8:00 p.m., so I would not be able to give the project my full attention. Would Saturday afternoon be possible instead? If not, I could meet on Monday after class.\n\nIn the meantime, I can start on the literature review and upload my draft to our shared folder by Saturday morning, so that we can discuss it together.\n\nPlease let me know which option works best.\n\nBest wishes,\nAisha"));

    /* ------------------------------------------------------
       WRITE FOR AN ACADEMIC DISCUSSION — 8 prompts
       Practice target: about 100–180 words (not an ETS figure)
       ------------------------------------------------------ */

    const D = (id, level, title, professor, students, goals, model) =>
        ({ id, level, title, professor, students, goals, model, targetMin: 100, targetMax: 180 });

    const discussionGoals = ["State your own position clearly", "Support it with at least one developed reason or example", "Respond to at least one classmate’s idea by name"];

    bank.discussion.push(D("d1", 1, "Studying Alone or in Groups",
        { name: "Dr. Rivera", text: "This week we are discussing how people learn most effectively. Some students prefer studying in groups, while others prefer studying alone. Which approach do you think is better for learning new material, and why?" },
        [{ name: "Ana", text: "I think studying alone is better because I can focus without distractions and work at my own speed." }, { name: "Ben", text: "I prefer groups. When friends explain things differently, I understand difficult ideas more quickly." }],
        discussionGoals,
        "I agree with Ben that group study can make difficult ideas clearer, but I think the best approach combines both methods. When I study alone first, I can read the material carefully and identify exactly what I do not understand. Then, in a group, I can ask targeted questions instead of feeling lost. For example, in my chemistry class I wrote a list of problems I could not solve and discussed them with classmates, which saved us a lot of time. Ana is right that groups can become distracting, so setting a clear agenda and a time limit is important. Overall, working alone builds focus, and working together fills the gaps."));

    bank.discussion.push(D("d2", 1, "Free Museums",
        { name: "Professor Chen", text: "Many cities are debating whether public museums should be free for everyone. Supporters say free access increases learning, while others say entrance fees are necessary to pay for the museum’s work. What is your view?" },
        [{ name: "Lara", text: "Museums should be free because everyone should have a chance to see art and history, not only people who can afford tickets." }, { name: "Sam", text: "Fees are fair. Museums need money to protect their collections, and visitors who care will pay." }],
        discussionGoals,
        "I believe museums should be free on certain days rather than every day. Lara makes an important point that cost can prevent families and students from visiting, and early experiences in museums can spark lifelong curiosity. However, Sam is also right that collections need money for care and repair. A balanced policy would let the museum charge regular fees while offering free admission one day a week or to children and students. For instance, a museum in my hometown does this, and its free days are always crowded with first-time visitors. Free days also build habits, because people who visit once without cost often return as paying visitors. This approach protects both access and funding."));

    bank.discussion.push(D("d3", 1, "Limiting Homework",
        { name: "Dr. Okafor", text: "Education researchers are discussing homework. Some schools limit the amount of homework students receive each night, believing that students need time to rest. Others believe more homework improves results. Should schools limit homework?" },
        [{ name: "Noor", text: "Yes. Students need time to sleep, exercise, and spend time with family." }, { name: "Ravi", text: "No. Homework teaches responsibility and helps students practise what they learned." }],
        discussionGoals,
        "I think schools should set a reasonable limit, because quality matters more than quantity. Noor is right that students who do not sleep enough have difficulty concentrating the next day. However, Ravi’s point about responsibility is also important, so I would not remove homework completely. A better policy might be about an hour in total each night, with tasks that are short and clear, such as reviewing notes or solving five problems. For example, when my teacher assigned short daily practice, I remembered grammar rules much better than when I completed long worksheets at weekends. Teachers can also coordinate so that several big assignments do not fall on the same night."));

    bank.discussion.push(D("d4", 2, "Working from Home",
        { name: "Professor Hale", text: "In our business course this week, we are considering whether companies should allow employees to work from home. Some argue that it improves productivity and satisfaction; others claim that it weakens teamwork. What do you think companies should do?" },
        [{ name: "Mia", text: "Companies should allow remote work because employees save commuting time and can concentrate better." }, { name: "Jack", text: "Working together in an office builds trust and makes it easier to share ideas quickly." }],
        discussionGoals,
        "I believe companies should allow remote work, but only as part of a flexible arrangement. Mia is right that employees save commuting time and often concentrate better at home. For example, a friend of mine who works in software development finishes complex tasks faster in a quiet apartment than in a busy office. However, Jack raises a valid concern about trust and quick communication, which are harder to build through a screen. For that reason, I think the best policy is a hybrid model in which employees work from home on focused tasks and meet in person for planning sessions. This keeps the benefits of independence while protecting teamwork, and it lets workers choose what suits their roles."));

    bank.discussion.push(D("d5", 2, "Public Transport or Roads",
        { name: "Dr. Alvarez", text: "Cities have limited budgets. Should a city invest more in public transportation, or in building and improving roads? Explain your reasoning." },
        [{ name: "Elena", text: "Public transport reduces pollution and helps people who cannot afford cars." }, { name: "Tom", text: "Roads are essential for deliveries and emergency services, and many people live where buses do not go." }],
        discussionGoals,
        "I think a city should invest more in public transportation while still maintaining its main roads. Elena points out that buses and trains reduce pollution, and I would add that they also reduce traffic congestion, since one full bus can replace dozens of cars. Tom is correct that deliveries and ambulances need roads, but better public transport actually helps them by leaving the roads less crowded. For example, after my city opened a new tram line, travel times for drivers on the same routes became noticeably shorter. Therefore, directing most new funding toward public transport, with enough left for road repairs, would serve both groups."));

    bank.discussion.push(D("d6", 2, "Required Community Service",
        { name: "Professor Lindqvist", text: "Some high schools require students to complete community service before graduation. Do you think this requirement is a good idea? Why or why not?" },
        [{ name: "Hana", text: "Required service teaches students to care about others and gives them valuable experience." }, { name: "David", text: "Service should be voluntary. Forcing students may make them resent helping." }],
        discussionGoals,
        "I agree with Hana that community service can teach valuable lessons, so I support the requirement, provided that students have real choices. David worries that forced service may create resentment, and that can happen when tasks are boring or meaningless. However, if students choose projects that match their interests, such as tutoring younger children or helping at a food bank, they are more likely to take them seriously. In my own school, a required service project led me to volunteer at an animal shelter, and I continued long after the hours ended. A requirement can therefore be the push that introduces students to something they would not have tried alone."));

    bank.discussion.push(D("d7", 3, "AI Tools in Coursework",
        { name: "Dr. Mbeki", text: "Many universities are deciding how students may use AI tools when completing coursework. Should students be allowed to use AI tools for assignments? Explain your reasoning." },
        [{ name: "Priya", text: "Yes, with clear rules. Students will use these tools at work, so they should learn to use them responsibly." }, { name: "Marcus", text: "Not for assignments. If a tool writes the answer, the student does not learn, and grades stop reflecting ability." }],
        discussionGoals,
        "I believe students should be allowed to use AI tools, but only for specific purposes defined by the instructor. Priya is correct that these tools will be part of future workplaces, so learning to use them responsibly is a useful skill. Marcus, however, raises a serious concern: if a tool produces the final answer, the student may not learn the material. For that reason, I would permit AI for tasks such as checking grammar or generating practice questions, but not for writing the core analysis. Teachers could also ask students to explain their reasoning in class, which would show whether they truly understand the work. Clear rules therefore protect both learning and fairness."));

    bank.discussion.push(D("d8", 3, "Funding Space Exploration",
        { name: "Professor Yilmaz", text: "Governments spend large amounts on space exploration. Some people believe this money should be used for urgent problems on Earth. Do you agree that space funding should be reduced? Support your answer." },
        [{ name: "Chloe", text: "Yes. Problems like hunger and disease are more urgent than exploring space." }, { name: "Omar", text: "No. Space programs create technology and knowledge that improve life on Earth." }],
        discussionGoals,
        "I do not think space funding should be reduced, although I understand why Chloe feels that hunger and disease are urgent. Space programs usually receive a small share of national budgets, so cutting them would not solve those problems on its own. Omar is right that space research has produced useful technology. For example, satellites now support weather forecasting, navigation, and disaster warnings that save lives every year. Instead of choosing between the two, governments should treat space investment as one part of a broader plan that also funds health and food security. This approach recognizes that long-term knowledge and immediate needs can both matter."));



    window.toeflWritingBank = bank;
})();
