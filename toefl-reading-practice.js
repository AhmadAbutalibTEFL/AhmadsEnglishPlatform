/* =========================================================
   TOEFL iBT READING — PRACTICE BANK
   All paragraphs, texts, questions, and explanations are original.
   Loaded before toefl-reading.js. Exposes window.toeflReadingBank.
   ========================================================= */

(function () {
    // G(prefix, endingSlots, explanation, kind): one partly shown word.
    const G = (prefix, suffix, explanation, kind) => ({ prefix, suffix, word: prefix + suffix, explanation, kind });
    // Q(skill, question, choices, answerIndex, explanation): one multiple-choice question.
    const Q = (skill, question, choices, answer, explanation) => ({ skill, question, choices, answer, explanation });

    const bank = { complete: [], daily: [], academic: [] };

    /* ------------------------------------------------------
       COMPLETE THE WORDS — 10 paragraphs, 10 gaps each
       kinds: link, form, verb, phrase, vocab
       ------------------------------------------------------ */

    bank.complete.push({
        id: "c1", level: 1, title: "Public Libraries",
        instruction: "Read the whole paragraph, then complete each word. Type only the missing letters.",
        parts: [
            "Public libraries ", G("of", "fer", "The subject ‘libraries’ is plural, so the present-tense verb has no -s. ‘Offer’ means provide.", "verb"),
            " far more than books. Many now ", G("le", "nd", "After the plural subject ‘Many’, the base verb ‘lend’ fits: libraries give items for a short time.", "verb"),
            " tools, musical instruments, and even seeds. Visitors can also ", G("att", "end", "‘Attend’ pairs with ‘classes’: you attend a class, a meeting, or an event.", "phrase"),
            " free classes on computers, languages, and ", G("care", "ers", "The list needs a plural noun parallel to ‘computers’ and ‘languages’. ‘Careers’ fits classes for adults.", "form"),
            ". Because libraries are open to ", G("every", "one", "After ‘open to’ a pronoun is needed. ‘Everyone’ means all people.", "form"),
            ", they bring together people from different ", G("backgr", "ounds", "‘Different’ is followed by a plural noun here. ‘Backgrounds’ means people’s experiences and origins.", "phrase"),
            ". Some visitors come to study ", G("quie", "tly", "The word modifies the verb ‘study’, so an adverb is required: ‘quietly’.", "form"),
            ", while others meet friends or use the internet. As a ", G("re", "sult", "‘As a result’ is a fixed phrase that introduces a consequence of the previous sentences.", "link"),
            ", a library can act as the centre of a neighbourhood. Its staff ", G("oft", "en", "An adverb of frequency usually comes before the main verb: ‘staff often know’.", "form"),
            " know the community well, so they can ", G("sug", "gest", "After the modal ‘can’, use a base verb. Note the double g in ‘suggest’.", "verb"),
            " useful services."
        ]
    });

    bank.complete.push({
        id: "c2", level: 1, title: "Morning Routines",
        instruction: "Decide what job each missing word does before you type.",
        parts: [
            "Many people believe that a good morning routine ", G("impr", "oves", "The singular subject ‘routine’ takes a verb ending in -s: ‘improves’.", "verb"),
            " the whole day. ", G("Exp", "erts", "The sentence needs a plural noun subject. ‘Experts’ matches the plural verb ‘recommend’.", "form"),
            " often recommend waking up at the same time every day, even on weekends. A ", G("regu", "lar", "The adjective ‘regular’ describes the noun ‘schedule’.", "form"),
            " schedule helps the body ", G("prep", "are", "After ‘helps the body’ a base verb is needed. ‘Prepare for sleep’ is a natural phrase.", "verb"),
            " for sleep at night. ", G("Ano", "ther", "‘Another useful habit’ adds one more item and goes with the singular noun ‘habit’.", "link"),
            " useful habit is eating breakfast, ", G("bec", "ause", "The clause that follows explains the reason for eating breakfast, so ‘because’ is needed.", "link"),
            " food gives the brain energy. Some people also like to ", G("str", "etch", "‘To’ is followed by a base verb. ‘Stretch’ matches the idea of light movement.", "verb"),
            " or take a short walk ", G("bef", "ore", "‘Before checking’ shows that the walk happens earlier than the phone use.", "link"),
            " checking their phones. Small habits such as these may seem ", G("unimp", "ortant", "The adjective ‘unimportant’ contrasts with ‘together they can reduce stress’.", "vocab"),
            ", but together they can ", G("red", "uce", "After ‘can’ use a base verb. ‘Reduce stress’ is a common collocation.", "phrase"),
            " stress."
        ]
    });

    bank.complete.push({
        id: "c3", level: 1, title: "Weather and Mood",
        instruction: "Look for linking words that show contrast and conclusion.",
        parts: [
            "Weather can ", G("infl", "uence", "After ‘can’ a base verb is needed. ‘Influence’ means have an effect on.", "verb"),
            " how people feel. On ", G("sun", "ny", "The adjective ‘sunny’ describes ‘days’ and contrasts with ‘grey, rainy’ later.", "form"),
            " days, many people report higher energy and a more positive mood. In ", G("con", "trast", "‘In contrast’ is a fixed phrase that introduces an opposite situation.", "link"),
            ", long periods of grey, rainy weather may make some people feel ", G("tir", "ed", "After ‘feel’ an adjective is used. ‘Tired’ fits with ‘or sad’.", "form"),
            " or sad. Scientists think that sunlight ", G("aff", "ects", "The subject ‘sunlight’ is singular, so the verb ends in -s.", "verb"),
            " the chemicals in the brain. ", G("How", "ever", "The next sentence limits the previous idea, so a contrast connector is required.", "link"),
            ", not everyone reacts in the same way. A person who ", G("enj", "oys", "The singular subject ‘a person’ requires a verb with -s: ‘enjoys’.", "verb"),
            " cold weather may feel ", G("perf", "ectly", "An adverb modifies the adjective ‘happy’: ‘perfectly happy’ means completely happy.", "form"),
            " happy in winter. ", G("There", "fore", "The final sentence draws a conclusion from the examples, so a result connector fits.", "link"),
            ", it is difficult to make ", G("gen", "eral", "‘General’ statements are broad claims. The adjective comes before the noun.", "form"),
            " statements about weather and mood."
        ]
    });

    bank.complete.push({
        id: "c4", level: 2, title: "Recycling Programs",
        instruction: "Several gaps are linking words. Decide the relationship between the ideas first.",
        parts: [
            "Recycling programs succeed when they are easy to ", G("fol", "low", "‘Easy to follow’ describes simple instructions. ‘To’ is followed by a base verb.", "phrase"),
            ". Cities that provide separate bins, clear labels, and regular collection usually ", G("ach", "ieve", "After the plural subject ‘Cities’ use a base verb. ‘Achieve higher participation’ is a common phrase.", "verb"),
            " higher participation. ", G("With", "out", "The sentence describes what happens if the features are missing, so ‘without’ is needed.", "link"),
            " these features, residents may place the wrong materials in the wrong bins, ", G("wh", "ich", "A relative pronoun introduces the clause referring to the whole situation: ‘which can contaminate’.", "link"),
            " can contaminate an entire load. Public ", G("educ", "ation", "After the adjective ‘Public’ a noun is needed. ‘Education’ is a noun ending in -ation.", "form"),
            " also matters, ", G("sin", "ce", "The clause that follows gives a reason, so ‘since’ is used.", "link"),
            " many people are unsure which items are ", G("accep", "ted", "After ‘are’ a past participle makes a passive: ‘items are accepted’.", "verb"),
            ". ", G("Alth", "ough", "The sentence contrasts a benefit with a limit, so ‘Although’ introduces the first clause.", "link"),
            " recycling reduces waste, it is not a complete ", G("solu", "tion", "After the adjective ‘complete’ a noun is needed. ‘Solution’ ends in -tion.", "form"),
            ". Reducing consumption and reusing products ", G("rem", "ain", "The plural subject needs a plural verb: ‘remain’ means continue to be.", "verb"),
            " equally important."
        ]
    });

    bank.complete.push({
        id: "c5", level: 2, title: "Ancient Trade Routes",
        instruction: "Check tense and word class before you check meaning.",
        parts: [
            "Long before modern ships and aircraft, merchants moved goods across continents along ancient trade routes. These journeys were slow and ", G("dang", "erous", "‘Slow and dangerous’ are two adjectives joined by ‘and’; ‘yet’ then introduces a contrast.", "form"),
            ", yet they ", G("conn", "ected", "The past tense matches the earlier verbs ‘were’ and ‘moved’.", "verb"),
            " distant regions. Traders carried silk, spices, and metals, and they also ", G("exch", "anged", "The verb takes the objects ‘ideas, languages, and religious beliefs’ and stays in the past tense.", "verb"),
            " ideas, languages, and religious beliefs. ", G("Even", "tually", "The sentence describes a later result over a long time: towns became wealthy after many years.", "link"),
            ", towns along the routes often ", G("gr", "ew", "The past tense of ‘grow’ is irregular: ‘grew’.", "verb"),
            " into wealthy centres. ", G("Histor", "ians", "The sentence needs a plural noun for people who study history.", "form"),
            " study these networks to ", G("under", "stand", "After ‘to’ use a base verb. ‘Understand how cultures influenced one another’ fits.", "verb"),
            " how cultures ", G("influ", "enced", "The past tense matches the earlier period being studied.", "verb"),
            " one another. Evidence such as coins and written records ", G("sugg", "ests", "The subject ‘evidence’ is singular, so the verb takes -s.", "verb"),
            " that contact was far more ", G("freq", "uent", "The comparison ‘more … than once believed’ needs an adjective meaning happening often.", "form"),
            " than once believed."
        ]
    });

    bank.complete.push({
        id: "c6", level: 2, title: "Digital Maps",
        instruction: "Pay attention to -ing forms, plural verbs, and fixed phrases.",
        parts: [
            "Digital maps have changed the way people travel. Instead of ", G("unfol", "ding", "After the preposition ‘of’ use an -ing form: ‘instead of unfolding’.", "verb"),
            " a paper map, drivers now follow spoken directions that ", G("upd", "ate", "The plural subject ‘directions’ needs a verb without -s: ‘update’ means change to newer information.", "verb"),
            " automatically when traffic changes. This technology ", G("dep", "ends", "The singular subject ‘technology’ takes -s. ‘Depends on’ is a fixed verb–preposition pair.", "verb"),
            " on signals from satellites, ", G("toge", "ther", "‘Together with’ introduces an additional source of information.", "link"),
            " with data from millions of phones. ", G("Desp", "ite", "‘Despite its convenience’ gives a contrast with the limits that follow.", "link"),
            " its convenience, there are ", G("limit", "ations", "After ‘are’ a plural noun is needed. ‘Limitations’ means weaknesses or restrictions.", "form"),
            ". A map may not show a recently closed road, and users who follow instructions ", G("blind", "ly", "An adverb modifies the verb ‘follow’: ‘blindly’ means without thinking.", "form"),
            " can end up in the wrong place. ", G("Exper", "ienced", "The adjective ‘experienced’ describes ‘travellers’ and means skilled through practice.", "form"),
            " travellers therefore treat digital directions as ", G("help", "ful", "After ‘as’ an adjective describes ‘advice’: ‘helpful advice’.", "form"),
            " advice rather than an ", G("abs", "olute", "The contrast is with ‘advice’; an ‘absolute rule’ is one with no exceptions.", "vocab"),
            " rule."
        ]
    });

    bank.complete.push({
        id: "c7", level: 2, title: "Volunteering",
        instruction: "This paragraph argues a balanced position. Watch for connectors that limit an idea.",
        parts: [
            "Volunteering ", G("bene", "fits", "The singular subject ‘volunteering’ takes a verb with -s. ‘Benefits’ means helps.", "verb"),
            " both communities and the people who give their time. Organizations rely on volunteers to ", G("deli", "ver", "After ‘to’ use a base verb. ‘Deliver services’ is a common collocation.", "phrase"),
            " services that would otherwise be too expensive. At the same time, volunteers ", G("ga", "in", "The plural subject needs a base verb. ‘Gain experience’ is a standard phrase.", "phrase"),
            " practical experience and new friendships. Studies ", G("indic", "ate", "The plural subject ‘studies’ needs a base verb. ‘Indicate’ means show.", "verb"),
            " that people who help others regularly often report greater life ", G("satisf", "action", "After ‘life’ a noun is needed. ‘Life satisfaction’ is a common noun phrase.", "phrase"),
            ". ", G("Never", "theless", "The next sentence limits the positive picture, so a contrast connector fits.", "link"),
            ", volunteering should not replace paid work. ", G("Unl", "ess", "‘Unless’ means ‘if not’ and introduces the condition for the risk that follows.", "link"),
            " organizations pay staff fairly, they risk ", G("depen", "ding", "After ‘risk’ use an -ing form. ‘Depending too heavily on’ is a fixed phrase.", "verb"),
            " too heavily on unpaid labour. A ", G("bala", "nced", "The adjective ‘balanced’ describes the noun ‘approach’.", "form"),
            " approach ", G("prot", "ects", "The singular subject ‘approach’ requires a verb with -s.", "verb"),
            " workers and volunteers alike."
        ]
    });

    bank.complete.push({
        id: "c8", level: 3, title: "Bilingual Brains",
        instruction: "Abstract paragraph: rely on grammar and on the logic between sentences.",
        parts: [
            "Researchers have long debated whether speaking two languages changes the brain. Some studies ", G("rep", "ort", "The plural subject ‘studies’ needs a base verb. ‘Report that’ introduces findings.", "verb"),
            " that bilingual people switch between tasks more ", G("effic", "iently", "An adverb modifies the verb ‘switch’: ‘more efficiently’ compares performance.", "form"),
            ", while others find no such ", G("advan", "tage", "After ‘no such’ a singular noun is needed. ‘Advantage’ means a benefit.", "form"),
            ". One possible explanation is that the results ", G("dep", "end", "The plural noun ‘results’ takes a base verb. ‘Depend on’ states the explanation.", "verb"),
            " on the age at which a second language is learned. ", G("Mor", "eover", "The next sentence adds another reason for the differences, so an additive connector is needed.", "link"),
            ", differences in testing methods can produce ", G("inconsis", "tent", "The adjective before ‘findings’ needs a meaning of ‘not matching’.", "vocab"),
            " findings. For this ", G("rea", "son", "‘For this reason’ is a fixed phrase introducing a consequence.", "link"),
            ", scientists are cautious about ", G("dra", "wing", "‘Draw conclusions’ is a collocation, and ‘about’ is followed by an -ing form.", "phrase"),
            " firm conclusions. Even so, ", G("evid", "ence", "The uncountable noun ‘evidence’ takes the singular verb ‘shows’.", "form"),
            " consistently shows that regular language use ", G("stren", "gthens", "The singular subject ‘use’ takes a verb with -s: ‘strengthens’.", "verb"),
            " communication skills."
        ]
    });

    bank.complete.push({
        id: "c9", level: 3, title: "How Archaeologists Work",
        instruction: "Check for two connectors that add a point or show a result.",
        parts: [
            "Modern archaeology ", G("rel", "ies", "The singular subject takes -s. ‘Relies on’ is a fixed verb–preposition pair.", "verb"),
            " on careful recording as much as on ", G("disc", "overy", "After the preposition ‘on’ use a noun. ‘Discovery’ contrasts with ‘recording’.", "form"),
            ". Before removing an object, researchers photograph it, measure its position, and describe the ", G("surro", "unding", "The word ‘surrounding’ is an adjective describing the soil around the object.", "form"),
            " soil. This process may seem slow, yet it ", G("pres", "erves", "The singular subject ‘it’ takes -s. ‘Preserves’ means keeps safe.", "verb"),
            " information that would otherwise be lost. An object found out of ", G("cont", "ext", "‘Out of context’ is a fixed phrase meaning without surrounding information.", "phrase"),
            " tells a scientist very little, whereas the same object ", G("rec", "orded", "A past participle after ‘object’ means ‘when it is recorded’.", "verb"),
            " accurately can reveal dates, trade links, and daily habits. ", G("Furth", "ermore", "The next sentence adds another point, so an additive connector fits.", "link"),
            ", new tools such as laser scanning allow teams to ", G("recon", "struct", "After ‘to’ use a base verb. ‘Reconstruct’ means rebuild.", "verb"),
            " sites digitally. ", G("Conse", "quently", "The final sentence gives a result of the new tools.", "link"),
            ", future researchers can re-examine evidence ", G("with", "out", "The preposition ‘without’ means not causing any disturbance.", "link"),
            " disturbing the ground."
        ]
    });

    bank.complete.push({
        id: "c10", level: 3, title: "Noise in Cities",
        instruction: "Use contrast and word-class clues; two connectors show opposition.",
        parts: [
            "Noise is one of the most common but least discussed ", G("feat", "ures", "After ‘least discussed’ a plural noun is needed. ‘Features’ means characteristics.", "form"),
            " of city life. Traffic, construction, and crowds ", G("prod", "uce", "The plural subject needs a base verb. ‘Produce sound’ is natural.", "verb"),
            " constant sound that people gradually learn to ignore. ", G("Non", "etheless", "The next sentence contrasts with ‘learn to ignore’, so a contrast connector is needed.", "link"),
            ", research suggests that long-term exposure may ", G("aff", "ect", "After ‘may’ use a base verb. ‘Affect health’ means influence health.", "verb"),
            " health. Residents of noisy areas often report ", G("distu", "rbed", "The past participle ‘disturbed’ describes ‘sleep’.", "form"),
            " sleep, and some studies link noise to higher blood pressure. ", G("Where", "as", "‘Whereas’ contrasts quiet parks, which give relief, with their uneven distribution.", "link"),
            " quiet parks provide relief, they are ", G("unev", "enly", "The adverb modifies ‘distributed’: ‘unevenly’ means not equally.", "form"),
            " distributed across many cities. Planners therefore ", G("cons", "ider", "The plural subject needs a base verb. ‘Consider’ means think about.", "verb"),
            " noise barriers, quieter road surfaces, and ", G("lim", "its", "After ‘and’ a plural noun is needed to continue the list: ‘limits on deliveries’.", "form"),
            " on night-time deliveries as practical ", G("resp", "onses", "After the adjective ‘practical’ a plural noun is needed. ‘Responses’ means actions in reply.", "form"),
            "."
        ]
    });

    /* ------------------------------------------------------
       READ IN DAILY LIFE — 14 sets of 2 or 3 questions
       skills: purpose, detail, condition, inference
       ------------------------------------------------------ */

    bank.daily.push({
        id: "d1", level: 1, title: "Fitness Centre Sign",
        materialTitle: "SIGN · RIVERSIDE FITNESS CENTRE",
        material: "RIVERSIDE FITNESS CENTRE\nMembers: 6:00 a.m.–10:00 p.m.\nGuests welcome with a member, $5 per visit\nPlease wipe equipment after use\nPool closed every Monday for cleaning",
        instruction: "Short texts are read quickly but completely. Answer both questions.",
        questions: [
            Q("condition", "What must a guest do to use the centre?", ["Visit with a member and pay $5", "Become a member first", "Arrive before 6:00 a.m.", "Book a pool session"], 0, "The sign says guests are welcome with a member at $5 per visit."),
            Q("detail", "When is the pool closed?", ["Every Sunday", "After 10:00 p.m.", "Every Monday", "Whenever staff clean the equipment"], 2, "The last line says the pool is closed every Monday for cleaning.")
        ]
    });

    bank.daily.push({
        id: "d2", level: 1, title: "Dentist’s Message",
        materialTitle: "MESSAGE · FROM THE DENTAL OFFICE",
        material: "Hello Mr. Karim, this is Nora from Bright Smile Dental. Your Thursday appointment has been moved from 10:30 to 11:15 because the dentist has an emergency. Please reply to confirm that the new time works. If it does not, call us before Wednesday at 5:00 p.m. and we will offer another day.",
        instruction: "Read the message and answer the three questions.",
        questions: [
            Q("purpose", "Why is Nora contacting Mr. Karim?", ["To cancel his treatment", "To tell him an appointment time has changed", "To ask him to pay a bill", "To ask him to bring documents"], 1, "The message announces that the Thursday appointment has moved to a later time."),
            Q("condition", "What should Mr. Karim do if the new time is not suitable?", ["Arrive at 10:30 anyway", "Reply after Thursday", "Call before Wednesday at 5:00 p.m.", "Visit the office on Friday"], 2, "The last sentence asks him to call before Wednesday at 5:00 p.m. so another day can be offered."),
            Q("inference", "What can be inferred about the dentist?", ["The dentist is unavailable at 10:30", "The dentist has closed the office", "The dentist prefers later appointments", "The dentist is on holiday"], 0, "The appointment moved because of an emergency, which suggests the dentist cannot see patients at the original time.")
        ]
    });

    bank.daily.push({
        id: "d3", level: 1, title: "Bus Schedule Change",
        materialTitle: "NOTICE · ROUTE 14 SCHEDULE CHANGE",
        material: "From Monday 3 March, weekday buses between 7:00 and 9:00 a.m. will leave every 15 minutes instead of every 20. Weekend times will not change. While Elm Street is closed for road works, the Elm Street stop will move to Oak Avenue.",
        instruction: "Use the notice to answer the three questions.",
        questions: [
            Q("detail", "What changes on weekday mornings?", ["Buses start earlier", "Buses stop only at Oak Avenue", "Buses run more often", "Buses run only on weekends"], 2, "Buses leave every 15 minutes instead of every 20, so they run more often between 7:00 and 9:00 a.m."),
            Q("condition", "When will the Elm Street stop move?", ["From March onwards permanently", "While Elm Street is closed for road works", "Only on weekends", "After 9:00 a.m. every day"], 1, "The stop moves while the street is closed for road works, so the change is temporary."),
            Q("detail", "What will stay the same?", ["Weekday morning frequency", "The location of the Elm Street stop", "The date of the change", "Weekend times"], 3, "The notice states that weekend times will not change.")
        ]
    });

    bank.daily.push({
        id: "d4", level: 1, title: "Bakery Post",
        materialTitle: "SOCIAL MEDIA POST · SUNRISE BAKERY",
        material: "Our cinnamon rolls are back! They are baked on Saturdays only and usually sell out by 10:00 a.m. To guarantee yours, pre-order on our website by Friday at 5:00 p.m. Pick-up starts at 8:00 a.m.",
        instruction: "Read the post and answer both questions.",
        questions: [
            Q("condition", "How can a customer be sure of getting a roll?", ["Arrive before 8:00 a.m.", "Order on the website by Friday at 5:00 p.m.", "Visit on Sunday", "Call the bakery on Saturday"], 1, "The post says a pre-order on the website by Friday at 5:00 p.m. guarantees a roll."),
            Q("inference", "What can be inferred about Saturday morning?", ["The bakery opens at 10:00 a.m.", "Pre-orders are not accepted", "The rolls cost more", "The rolls may be gone by late morning"], 3, "Because the rolls usually sell out by 10:00 a.m., customers who arrive late may find none left.")
        ]
    });

    bank.daily.push({
        id: "d5", level: 1, title: "Smoke Alarm Check",
        materialTitle: "EMAIL · BUILDING MANAGER",
        material: "Subject: Smoke alarm check\n\nDear residents,\n\nA technician will check the smoke alarms in every apartment on Wednesday between 9:00 a.m. and 12:00 noon. The check takes about ten minutes. An adult must be at home; if you cannot be there, please ask the front desk to arrange another time by Tuesday. No action is needed if you will be home.",
        instruction: "Read the email and answer the three questions.",
        questions: [
            Q("purpose", "What is the main purpose of the email?", ["To raise the rent", "To report a fire", "To announce a check of smoke alarms", "To ask residents to move out"], 2, "The email tells residents when a technician will check the smoke alarms and what they need to do."),
            Q("condition", "What is required during the check?", ["Residents must leave the building", "An adult must be at home", "Residents must buy new alarms", "The front desk must be closed"], 1, "The email says that an adult must be at home."),
            Q("condition", "What should a resident who cannot be home do?", ["Reply after Wednesday", "Wait for the technician to leave a note", "Give the technician a key", "Ask the front desk for another time by Tuesday"], 3, "Residents who cannot be there are asked to arrange another time through the front desk by Tuesday.")
        ]
    });

    bank.daily.push({
        id: "d6", level: 2, title: "Conversation Club Flyer",
        materialTitle: "FLYER · CONVERSATION CAFÉ",
        material: "CONVERSATION CAFÉ\nPractise your English with friendly volunteers.\nFridays, 5:00–6:30 p.m. · Room 12, Community Centre\nFree to attend. Beginners welcome. Bring a drink if you like; snacks are provided. No registration needed, but groups are limited to eight people, so arrive early.",
        instruction: "Read the flyer and answer both questions.",
        questions: [
            Q("detail", "What does the flyer say about registration?", ["It closes on Thursday", "It is not needed", "It costs a small fee", "It is required for beginners"], 1, "The flyer says no registration is needed."),
            Q("inference", "Why does the flyer advise people to arrive early?", ["Snacks run out quickly", "The room closes at 5:00 p.m.", "Each group has a maximum size", "Volunteers leave early"], 2, "Groups are limited to eight people, so latecomers may not find a place.")
        ]
    });

    bank.daily.push({
        id: "d7", level: 2, title: "Shipping Confirmation",
        materialTitle: "EMAIL · ORDER SHIPPED",
        material: "Subject: Your order has shipped\n\nHello Leila, your order #48213 left our warehouse today. Delivery usually takes 3–5 business days. A signature is required, so please choose a delivery address where someone will be home. If your parcel has not arrived within 7 business days, contact support with your order number. Unused items can be returned within 30 days of delivery.",
        instruction: "Read the email and answer the three questions.",
        questions: [
            Q("detail", "How long does delivery usually take?", ["1–2 business days", "7–10 business days", "3–5 business days", "30 days"], 2, "The email says delivery usually takes 3–5 business days."),
            Q("condition", "Why should Leila choose an address where someone will be home?", ["The parcel is very large", "The warehouse needs a call", "Delivery takes longer for empty houses", "A signature is required"], 3, "The email explains that a signature is required, so someone must be there to sign."),
            Q("condition", "When should Leila contact support?", ["When the parcel arrives in four days", "When it has not arrived after 7 business days", "When she wants to return items after 40 days", "When she chooses a different address"], 1, "Support should be contacted if the parcel has not arrived within 7 business days.")
        ]
    });

    bank.daily.push({
        id: "d8", level: 2, title: "Meeting Moved",
        materialTitle: "EMAIL · TEAM MEETING",
        material: "Subject: Team meeting moved\n\nHi all,\n\nThursday’s team meeting will take place at 2:00 p.m. instead of 10:00 a.m. because the client presentation was brought forward. We will meet in the larger Conference Room B, which has the projector. Please send me your updates by Wednesday noon so I can combine them into one slide. If you cannot attend, tell me in advance and I will share the notes.\n\nOmar",
        instruction: "Read the email and answer the three questions.",
        questions: [
            Q("detail", "Why was the meeting moved?", ["The client presentation was brought forward", "The room is unavailable", "The manager is travelling", "The projector needs repair"], 0, "Omar explains that the client presentation was brought forward."),
            Q("detail", "What should team members send Omar, and when?", ["Their notes after the meeting", "Their updates by Wednesday noon", "A slide on Thursday at 2:00 p.m.", "Their reasons for absence on Friday"], 1, "He asks for updates by Wednesday noon so he can combine them into one slide."),
            Q("inference", "What can be inferred about someone who cannot attend?", ["They must present alone", "They will lose their updates", "They will still be able to receive the notes", "They must move the meeting"], 2, "Omar says he will share the notes with people who tell him in advance that they cannot attend.")
        ]
    });

    bank.daily.push({
        id: "d9", level: 2, title: "Concert Tickets",
        materialTitle: "TEXT MESSAGE · FROM MAYA",
        material: "Tickets for Saturday’s concert go on sale at 9 a.m. tomorrow. Tarek, can you buy ours? The cheaper section sells out quickly. I’ll send you the money tonight. Don’t buy more than four tickets; the limit is four per person, and Jana might want one too.",
        instruction: "Read the message and answer the three questions.",
        questions: [
            Q("purpose", "Why is Maya writing to Tarek?", ["To cancel the concert", "To ask for money back", "To invite him to dinner", "To ask him to buy tickets"], 3, "Maya asks Tarek to buy tickets when sales open."),
            Q("condition", "What limit applies to ticket purchases?", ["Two tickets per person", "Four tickets per person", "No limit", "Four tickets per concert"], 1, "Maya says the limit is four tickets per person."),
            Q("inference", "Why does Maya mention that the cheaper section sells out quickly?", ["She thinks the concert may be cancelled", "She wants to wait until Saturday", "She wants Tarek to buy as soon as sales open", "She plans to buy expensive tickets"], 2, "The comment explains why Tarek should buy at 9 a.m., before the cheaper tickets are gone.")
        ]
    });

    bank.daily.push({
        id: "d10", level: 2, title: "Printing Instructions",
        materialTitle: "INSTRUCTIONS · PRINTING ON THIS FLOOR",
        material: "PRINTING ON THIS FLOOR\n1. Send your document from your laptop to ‘Floor-3 Printer’.\n2. Touch your ID card to the reader. Jobs are deleted after 2 hours.\n3. For double-sided copies, choose ‘Duplex’ before you press Print.\nColour printing costs 20 cents a page; black-and-white is free for the first 50 pages each week.",
        instruction: "Read the instructions and answer the three questions.",
        questions: [
            Q("condition", "What happens to a print job after two hours?", ["It is printed automatically", "It moves to colour printing", "It is deleted", "It is emailed to the user"], 2, "Step 2 says jobs are deleted after 2 hours."),
            Q("detail", "How does a user print double-sided copies?", ["Touch the ID card twice", "Ask the staff", "Use the colour printer", "Choose ‘Duplex’ before pressing Print"], 3, "Step 3 says to choose ‘Duplex’ before pressing Print."),
            Q("condition", "Which printing is free?", ["All colour pages", "Black-and-white pages up to 50 each week", "Double-sided pages only", "Any pages printed within two hours"], 1, "Black-and-white printing is free for the first 50 pages each week.")
        ]
    });

    bank.daily.push({
        id: "d11", level: 3, title: "Cancellation Policy",
        materialTitle: "EMAIL · UPDATE TO OUR CANCELLATION POLICY",
        material: "Subject: Update to our cancellation policy\n\nDear members,\n\nFrom 1 April, cancellations made less than 48 hours before a class will no longer receive a credit. Cancellations made earlier will still be refunded as credits, which expire after six months. Exceptions will be considered for medical emergencies if a note is provided within five days. We introduced this change because late cancellations leave empty places that other members could have used.",
        instruction: "Read the email and answer the three questions.",
        questions: [
            Q("purpose", "What is the main purpose of the email?", ["To announce new classes", "To announce a change to the cancellation policy", "To apologise for a mistake", "To request payment"], 1, "The email informs members of a new rule for cancelling classes."),
            Q("condition", "From 1 April, which cancellation will normally receive a credit?", ["One made 24 hours before the class", "One made 30 hours before the class", "One made 3 days before the class", "One made 12 hours before the class"], 2, "Only cancellations made at least 48 hours before the class receive a credit, and 3 days is more than 48 hours."),
            Q("inference", "Why did the company make the change?", ["To raise prices", "To reduce class sizes", "To close the studio", "To reduce the number of places left empty"], 3, "The last sentence says late cancellations leave empty places that others could have used.")
        ]
    });

    bank.daily.push({
        id: "d12", level: 3, title: "Found Backpack",
        materialTitle: "NOTICE · FOUND PROPERTY",
        material: "FOUND: grey backpack, Tuesday afternoon, near the sports hall. It contains a calculator and two notebooks with the initials R.H. on the cover. To claim it, describe one more item inside and show student ID at the main office, open 8:00–4:00. Unclaimed items are donated after 30 days.",
        instruction: "Read the notice and answer the three questions.",
        questions: [
            Q("condition", "What must a person do to claim the backpack?", ["Pay a small fee", "Wait 30 days", "Describe another item inside and show student ID", "Bring the calculator to the office"], 2, "The notice says to describe one more item inside and show student ID at the main office."),
            Q("inference", "What can be inferred about the owner?", ["Their initials may be R.H.", "They are a teacher", "They lost the bag on Monday", "They own a laptop"], 0, "Both notebooks have the initials R.H. on the cover, which suggests the owner’s initials."),
            Q("detail", "What happens to items nobody claims?", ["They are thrown away after a week", "They are donated after 30 days", "They are sold at the office", "They are returned to the sports hall"], 1, "The last sentence says unclaimed items are donated after 30 days.")
        ]
    });

    bank.daily.push({
        id: "d13", level: 3, title: "Hotel Breakfast",
        materialTitle: "NOTICE · BREAKFAST AT THE HARBOUR HOTEL",
        material: "Weekdays 6:30–10:00 a.m. · Weekends and holidays 7:30–11:00 a.m.\nIncluded for guests with a breakfast rate. Otherwise $12 per person, charged to your room. Please show your room number at the entrance. Children under 6 eat free with a paying adult.",
        instruction: "Read the notice and answer the three questions.",
        questions: [
            Q("detail", "When is breakfast served at weekends?", ["6:30–10:00 a.m.", "7:00–10:30 a.m.", "8:00 a.m.–noon", "7:30–11:00 a.m."], 3, "The first line gives 7:30–11:00 a.m. for weekends and holidays."),
            Q("condition", "Who pays $12?", ["Guests whose rate does not include breakfast", "Every child", "Guests with a breakfast rate", "People who arrive after 10:00 a.m."], 0, "Guests with a breakfast rate eat for free; otherwise the cost is $12 per person."),
            Q("condition", "Two adults and a 5-year-old have a rate without breakfast. What is the total cost?", ["$36", "$12", "$24", "$30"], 2, "Each adult pays $12, and a child under 6 eats free with a paying adult, so the total is $24.")
        ]
    });

    bank.daily.push({
        id: "d14", level: 3, title: "Farmers’ Market",
        materialTitle: "POSTER · HILLSIDE PARK FARMERS’ MARKET",
        material: "On the second Saturday of each month, April–October, 8:00 a.m.–1:00 p.m. Stalls are allocated by lottery; apply by the 20th of the previous month. Vendors must arrive by 7:00 a.m. and remove vehicles from the grass by 7:45. In heavy rain the market moves to the Community Hall, and an update is posted on the website by 6:30 a.m. Free parking is available on Maple Street.",
        instruction: "Read the poster and answer the three questions.",
        questions: [
            Q("detail", "How often is the market held?", ["Every Saturday", "Twice a month all year", "On the second Saturday of each month from April to October", "Every Saturday in summer"], 2, "The poster states the second Saturday of each month, April–October."),
            Q("condition", "What must vendors do by 7:45 a.m.?", ["Move vehicles off the grass", "Pay the lottery fee", "Leave the park", "Post an update online"], 0, "Vendors must remove vehicles from the grass by 7:45."),
            Q("inference", "What should a visitor do if heavy rain is forecast?", ["Go to Maple Street", "Wait until 1:00 p.m.", "Apply by the 20th", "Check the website that morning"], 3, "The market may move to the Community Hall, and the website carries an update by 6:30 a.m.")
        ]
    });

    /* ------------------------------------------------------
       READ AN ACADEMIC PASSAGE — 8 passages, 5 questions each
       skills: main, detail, vocab, inference, purpose
       ------------------------------------------------------ */

    bank.academic.push({
        id: "a1", level: 1, title: "How Bees Share Directions",
        materialTitle: "THE WAGGLE DANCE",
        material: "Honeybees do not simply wander until they find flowers. When a forager discovers a rich source of nectar, she returns to the hive and performs a pattern of movements on the comb. The angle of the movement relative to vertical indicates the direction of the food in relation to the sun, and the length of the movement indicates the distance.\n\nOther workers follow the dancer closely, touching her with their antennae, and then leave to search the area she has described. Experiments in which researchers moved a feeder to a new position showed that bees arrived at the new location with remarkable accuracy, though not perfectly. Dances advertising richer sources are also repeated more times, which attracts more followers.\n\nThe system has limits. Because the signal depends on the sun, it becomes harder to interpret on very cloudy days, and bees sometimes rely on other cues such as landmarks. Nevertheless, the dance allows a colony to direct many foragers toward the best food sources at the same time, which increases the efficiency of the whole group. Colonies that share information this way can also make use of short flowering periods before they end.",
        instruction: "Read the passage. A question can refer to any part of it.",
        questions: [
            Q("main", "What is the passage mainly about?", ["Why honeybees prefer certain flowers", "How bees build their hive", "How honeybees use movement to communicate where food is", "Why bees avoid cloudy weather"], 2, "Each paragraph describes the dance, how others use it, or its limits. The other options mention minor or unrelated ideas."),
            Q("detail", "According to the passage, what does the length of the movement show?", ["The direction of the food", "The distance to the food", "The quality of the nectar", "The number of workers needed"], 1, "The first paragraph says the length of the movement indicates the distance."),
            Q("vocab", "The word ‘remarkable’ in the second paragraph is closest in meaning to:", ["ordinary", "slow", "impressive", "uncertain"], 2, "‘Remarkable accuracy’ means very good accuracy, so ‘impressive’ fits."),
            Q("inference", "What can be inferred about the dance on a very cloudy day?", ["It stops completely", "It always leads bees to poor food", "It is performed outside the hive", "It may be less reliable for other bees"], 3, "The passage says the signal depends on the sun and is harder to interpret when it is cloudy."),
            Q("purpose", "Why does the author mention the experiment with a moved feeder?", ["To suggest that bees ignore the dance", "To show that bees can find new positions with good accuracy", "To explain how nectar is made", "To describe how the hive is cleaned"], 1, "The experiment provides evidence that the information in the dance guides bees accurately.")
        ]
    });

    bank.academic.push({
        id: "a2", level: 1, title: "Coral Bleaching",
        materialTitle: "WHEN CORAL TURNS WHITE",
        material: "Coral reefs are built by tiny animals that live in partnership with microscopic algae. The algae live inside the coral’s tissues, supplying much of the energy the coral needs, and in return the coral provides protection and certain nutrients. This partnership gives healthy reefs their bright colours.\n\nWhen ocean water becomes unusually warm for an extended period, the partnership is placed under stress. The coral may expel its algae, leaving the white skeleton visible through transparent tissue. This is called bleaching. A bleached coral is not necessarily dead, but without its algae it starves slowly, and many bleached reefs experience widespread mortality if the heat persists.\n\nRecovery is possible when temperatures return to normal quickly enough for algae to re-establish. Scientists therefore monitor water temperature closely and study which coral species tolerate heat best. Some researchers hope that protecting these more resilient reefs could preserve habitats while longer-term efforts to limit warming continue. Recovery also depends on factors other than heat, such as water quality and the presence of fish that graze on seaweed. Without such grazers, fast-growing seaweed can cover a damaged reef and prevent young coral from settling.",
        instruction: "Read the passage and choose the best answer for each question.",
        questions: [
            Q("main", "What is the passage mainly about?", ["How algae are grown in laboratories", "Why coral skeletons are white in all oceans", "How fish choose where to live", "Why warm water threatens coral reefs and what may help them recover"], 3, "The passage explains the coral–algae partnership, the effect of heat, and the possibility of recovery and protection."),
            Q("detail", "According to the passage, what do the algae provide to the coral?", ["Protection from predators", "Much of its energy", "Its skeleton", "Warm water"], 1, "The first paragraph says the algae supply much of the energy the coral needs."),
            Q("vocab", "The word ‘persists’ in the second paragraph is closest in meaning to:", ["ends", "improves", "continues", "moves"], 2, "If the heat persists, it continues, and the reefs suffer more."),
            Q("inference", "What can be inferred about a bleached coral?", ["It may still recover if conditions improve soon enough", "It has already died", "It no longer needs energy", "It cannot be studied by scientists"], 0, "The passage says a bleached coral is not necessarily dead and that recovery is possible if temperatures return to normal quickly."),
            Q("purpose", "Why does the author mention that scientists monitor water temperature?", ["To argue that research on reefs is unnecessary", "To explain how algae reproduce", "To describe the history of reef science", "To show how researchers try to protect reefs and identify heat-tolerant species"], 3, "The final paragraph describes monitoring and the study of heat-tolerant species as steps toward protection.")
        ]
    });

    bank.academic.push({
        id: "a3", level: 2, title: "The Origins of Money",
        materialTitle: "FROM BARTER TO COINS",
        material: "Before money existed, people exchanged goods directly. This system, called barter, works only when each person happens to have what the other wants. A farmer with spare grain who needs a plough must find a toolmaker who also needs grain at that moment, a situation economists call a double coincidence of wants.\n\nSocieties gradually solved this problem by agreeing on items that most people would accept, such as shells, salt, or metal. A good form of money had to be durable, portable, and divisible into smaller amounts. Metals such as silver met these requirements well, and coins stamped by rulers made their weight and purity easier to trust. In some regions, paper notes later replaced metal because they were lighter, although they required even greater trust in the issuer.\n\nMoney did more than simplify trade. It allowed value to be stored for the future and made it possible to compare very different goods using a common unit. However, its usefulness depends on trust. If people doubt that a currency will keep its value, they may return to barter or switch to another form of payment.",
        instruction: "Read the passage and choose the best answer for each question.",
        questions: [
            Q("main", "What is the main point of the passage?", ["Rulers invented money to control farmers", "Money developed to overcome the limits of barter and relies on trust", "Barter remains more efficient than money", "Metals are the only suitable form of money"], 1, "The passage describes the problem with barter, the solutions societies found, and the role of trust."),
            Q("detail", "According to the passage, why was barter difficult?", ["Goods were always too expensive", "People disliked trading", "Both people needed to want what the other had", "Rulers forbade exchange"], 2, "Barter works only when each person has what the other wants."),
            Q("vocab", "The word ‘durable’ in the second paragraph is closest in meaning to:", ["expensive", "visible", "fragile", "able to last"], 3, "A durable form of money does not wear out quickly, so ‘able to last’ fits."),
            Q("inference", "What can be inferred about a currency that people no longer trust?", ["It becomes more valuable", "People may use other ways to trade", "It is not affected", "Rulers stop collecting taxes"], 1, "The last sentence says people may return to barter or switch to another form of payment."),
            Q("purpose", "Why does the author mention a farmer with spare grain?", ["To compare the prices of grain and tools", "To argue that grain was the first money", "To illustrate a difficulty with barter", "To show that farmers invented coins"], 2, "The farmer’s example shows how hard it is to find someone with the right needs.")
        ]
    });

    bank.academic.push({
        id: "a4", level: 2, title: "Plants in the Desert",
        materialTitle: "SURVIVING WITHOUT WATER",
        material: "Plants that survive in deserts face two problems: water is scarce, and the sun is intense. Many desert species have solved the first by developing extensive root systems that spread widely near the surface, allowing them to absorb brief rainfall before it evaporates. Others grow a long taproot that reaches groundwater deep below. Some species also open the pores on their surfaces only at night, when cooler air reduces water loss.\n\nStorage is another strategy. Cacti, for example, hold water in thick, spongy stems, and their ribbed surface can expand as they fill and shrink as they empty. Their leaves have been reduced to spines, which lowers water loss and discourages animals from eating the stem. Other plants store water in swollen leaves or underground tubers instead.\n\nSome plants avoid the problem by timing. Their seeds remain dormant for years, then germinate within days after rain, grow, flower, and produce new seeds before the soil dries. These annuals spend most of their existence as seeds rather than visible plants, which explains why a barren desert can seem to turn green almost overnight.",
        instruction: "Read the passage and choose the best answer for each question.",
        questions: [
            Q("main", "What is the passage mainly about?", ["Why deserts receive little rain", "How cacti are used by people", "Why desert animals avoid plants", "How desert plants survive with little water in different ways"], 3, "The three paragraphs describe roots, storage, and timing as different strategies."),
            Q("detail", "How does a long taproot help a plant?", ["It collects dew from leaves", "It reaches groundwater deep underground", "It stores water in the stem", "It reflects sunlight"], 1, "The first paragraph says a long taproot reaches groundwater deep below."),
            Q("vocab", "The word ‘dormant’ in the third paragraph is closest in meaning to:", ["growing quickly", "damaged", "inactive", "colourful"], 2, "Seeds that remain dormant for years are inactive until conditions change."),
            Q("inference", "What can be inferred about the sudden greening of a desert after rain?", ["It is caused by cacti spreading", "It means rainfall happens every week", "It happens only in cold seasons", "It comes from seeds that were already waiting in the soil"], 3, "The passage says annuals spend most of their existence as seeds and grow within days after rain."),
            Q("purpose", "Why does the author mention that cactus leaves have been reduced to spines?", ["To show that cacti cannot photosynthesize", "To explain one way the plant reduces water loss and protects itself", "To compare desert and forest leaves", "To argue that spines are decorative"], 1, "The passage states that spines lower water loss and discourage animals.")
        ]
    });

    bank.academic.push({
        id: "a5", level: 2, title: "Printing and Reading",
        materialTitle: "THE PRINTING REVOLUTION",
        material: "In the fifteenth century, the introduction of movable-type printing in Europe sharply reduced the cost of producing books. Before this, each copy had to be written by hand, which took weeks or months and made books expensive. Printers could now produce hundreds of identical copies in a fraction of the time. The new technology required considerable investment, so early printers often worked in cities where paper, ink, and customers were easily found.\n\nThe effects spread beyond the book trade. Cheaper books increased the demand for reading skills, and schools in many towns expanded. Scholars could compare identical editions of a text, which made it easier to detect errors and to build on the work of others. At the same time, ideas, including controversial ones, travelled faster than authorities could control. Standard spelling and page layouts also gradually spread as printers tried to make their books easy to read and sell.\n\nHistorians caution, however, that literacy did not rise overnight. Many people still could not read, and for generations most books were owned by wealthy households or institutions. The printing press therefore did not create an educated public immediately; rather, it gradually made the conditions for one.",
        instruction: "Read the passage and choose the best answer for each question.",
        questions: [
            Q("main", "What is the main point of the passage?", ["Printing replaced all handwriting within a year", "Only wealthy families benefited from printing", "Printing lowered the cost of books and gradually changed education and the spread of ideas", "Authorities welcomed every new idea"], 2, "The passage describes cheaper books, wider effects, and the slow pace of change."),
            Q("detail", "Why could scholars detect errors more easily after printing?", ["They copied texts more slowly", "They could compare identical editions of a text", "They stopped reading older books", "They printed their own books"], 1, "The second paragraph says identical editions made it easier to detect errors."),
            Q("vocab", "The word ‘sharply’ in the first paragraph is closest in meaning to:", ["slightly", "slowly", "carefully", "dramatically"], 3, "A sharp reduction in cost is a large and sudden one."),
            Q("inference", "What can be inferred about literacy in the generations after printing?", ["Almost everyone could read", "Schools disappeared", "Many people still could not read", "Books became free"], 2, "The last paragraph says many people still could not read and books were mostly owned by wealthy households."),
            Q("purpose", "Why does the author include the final paragraph?", ["To qualify earlier claims about the speed of change", "To contradict the whole passage", "To describe how presses work", "To promote reading"], 0, "The paragraph adds a caution that literacy rose gradually, which limits the earlier impression of rapid change.")
        ]
    });

    bank.academic.push({
        id: "a6", level: 3, title: "Wetlands",
        materialTitle: "THE KIDNEYS OF THE LANDSCAPE",
        material: "Wetlands, areas where the ground is saturated with water for much of the year, are often described as the kidneys of the landscape. As water flows slowly through marsh vegetation, plants and soil microorganisms capture sediment and absorb nutrients, so the water leaving the wetland is generally cleaner than the water that entered.\n\nThis function has practical value. Communities downstream from healthy wetlands may need less costly treatment for drinking water, and the spongy ground also absorbs floodwater, releasing it gradually rather than all at once. In addition, wetland plants provide shelter for birds, fish, and amphibians, many of which breed nowhere else. Yet these benefits are rarely reflected in land prices, which are usually determined by what the land would produce if drained and converted to farms or housing.\n\nAs a consequence, wetlands have been lost faster than many other habitats. Some governments now require developers who destroy a wetland to create or restore another elsewhere. Critics argue that a newly built wetland often takes decades to match the performance of a natural one, so the policy may replace function only slowly, if at all.",
        instruction: "Read the passage and choose the best answer for each question.",
        questions: [
            Q("main", "What is the passage mainly about?", ["Wetlands are mainly valuable as farmland", "Drinking-water treatment is always unnecessary", "Wetlands exist only downstream of cities", "Wetlands provide useful services that are often undervalued, and replacing them is difficult"], 3, "The passage describes wetland services, why they are undervalued, and the debate over replacements."),
            Q("detail", "What happens to water as it moves through a wetland?", ["It becomes saltier", "Plants and microorganisms remove sediment and nutrients", "It evaporates completely", "It is heated by the soil"], 1, "The first paragraph says plants and soil microorganisms capture sediment and absorb nutrients."),
            Q("vocab", "The word ‘saturated’ in the first paragraph is closest in meaning to:", ["covered with ice", "filled with plants", "completely soaked", "cooled quickly"], 2, "Ground saturated with water is completely full of water."),
            Q("inference", "What can be inferred about why wetlands are often drained?", ["Governments require owners to drain them", "Land prices reflect uses such as farming or housing more than wetland services", "Wetlands cannot hold water", "Drained land is always cheaper"], 1, "The second paragraph says land prices reflect what the land would produce if drained, not the benefits of wetlands."),
            Q("purpose", "Why does the author mention critics in the final paragraph?", ["To argue that governments never protect wetlands", "To describe how developers build farms", "To praise developers", "To show that replacement wetlands may take decades to perform as well"], 3, "The critics’ argument shows a limit of the replacement policy.")
        ]
    });

    bank.academic.push({
        id: "a7", level: 3, title: "Railways and Time",
        materialTitle: "HOW STANDARD TIME BEGAN",
        material: "Until the nineteenth century, towns set their clocks by local noon, when the sun reached its highest point. Because noon arrives later as one travels west, neighbouring towns could differ by several minutes. For most purposes this did not matter, since travel was slow and few people moved between towns in a single day. Local noon depended on a town’s longitude, so every place had its own, slightly different time.\n\nRailways changed that. Timetables that listed arrival and departure times required a shared reference, and passengers who missed trains because local clocks disagreed quickly demanded consistency. Railway companies began to use a single time across their networks, and eventually governments adopted standard time zones so that entire regions followed the same clock. Telegraph lines made it possible to send a precise signal to many towns at once.\n\nThe change was not universally welcomed. Some communities argued that artificial time ignored the natural rhythm of the day, and for years towns displayed two clocks, one showing local time and one showing railway time. Over time, however, the convenience of coordination outweighed attachment to local noon, and standard time became so familiar that its origins are now rarely noticed.",
        instruction: "Read the passage and choose the best answer for each question.",
        questions: [
            Q("main", "What is the main idea of the passage?", ["Railway workers invented the first clocks", "Towns permanently rejected standard time", "Railways created a need for shared time that gradually replaced local noon", "The sun was never used to measure time"], 2, "The passage traces the change from local noon to standard time because of railways."),
            Q("detail", "Why did differences in local time rarely matter before railways?", ["Governments set all clocks", "All towns used identical clocks", "Railways were not yet cheap", "Few people travelled quickly between towns"], 3, "The first paragraph says travel was slow and few people moved between towns in a single day."),
            Q("vocab", "The word ‘outweighed’ in the third paragraph is closest in meaning to:", ["was removed by", "became more important than", "weighed less than", "was copied by"], 1, "The convenience of coordination was more important than attachment to local noon."),
            Q("inference", "What can be inferred about towns that displayed two clocks?", ["They were abandoned by travellers", "They refused to use any clocks", "They were adjusting to a new system while keeping an old one", "They had no railway"], 2, "Two clocks show that local time and railway time were used together during a transition."),
            Q("purpose", "Why does the author mention the towns with two clocks?", ["To illustrate how resistance to standard time appeared in practice", "To explain how clocks work", "To show clocks were inaccurate", "To argue that railway time was wrong"], 0, "The two clocks are an example of the reluctance to give up local time.")
        ]
    });

    bank.academic.push({
        id: "a8", level: 3, title: "Citizen Science",
        materialTitle: "VOLUNTEERS AND RESEARCH",
        material: "Citizen science projects invite volunteers to help collect or analyse data for scientific research. Participants might count birds in their gardens, photograph insects, or classify images of distant galaxies. Because volunteers can cover far more places and time than a small team of professionals, these projects can build datasets that would otherwise be impossible to gather. Online platforms have allowed millions of people to take part from home.\n\nThe approach raises an obvious question: how reliable is data collected by non-experts? Researchers address this in several ways. They provide clear training materials, design simple protocols, and compare volunteers’ records with those of professionals. Statistical methods can also identify unusual entries that merit checking. Studies that applied such safeguards have often found that volunteer data is accurate enough for many purposes.\n\nParticipation can benefit the volunteers as well. People who contribute regularly often develop a stronger understanding of scientific methods and a greater interest in the environment around them. Still, project designers warn that enthusiasm alone is not enough; volunteers need feedback, and they are more likely to continue when they can see how their work is being used.",
        instruction: "Read the passage and choose the best answer for each question.",
        questions: [
            Q("main", "What is the passage mainly about?", ["Volunteers have replaced professional scientists", "Data collected by non-experts is always inaccurate", "Citizen science is limited to counting birds", "Citizen science uses volunteers to gather data, with safeguards for quality and benefits for participants"], 3, "The passage covers the purpose of citizen science, how data quality is protected, and benefits to volunteers."),
            Q("detail", "How do researchers check volunteer data?", ["By paying volunteers more", "By comparing records with professionals’ and using statistical checks", "By refusing unusual data", "By asking volunteers to guess"], 1, "The second paragraph mentions comparison with professionals’ records and statistical methods."),
            Q("vocab", "The word ‘merit’ in ‘merit checking’ is closest in meaning to:", ["avoid", "delay", "deserve", "reduce"], 2, "Unusual entries that merit checking deserve to be checked."),
            Q("inference", "What can be inferred about volunteers who receive no feedback?", ["They produce more accurate data", "They become professionals", "They always continue", "They may be less likely to keep taking part"], 3, "The final paragraph says volunteers are more likely to continue when they see how their work is used."),
            Q("purpose", "Why does the author include a question about reliability in the second paragraph?", ["To suggest the passage cannot be trusted", "To raise a concern that the rest of the paragraph answers", "To end the discussion of data quality", "To introduce a new topic about galaxies"], 1, "The question introduces the concern, and the rest of the paragraph describes how researchers deal with it.")
        ]
    });



    window.toeflReadingBank = bank;
    window.__toeflReadingBankHelpers = { G, Q, bank };
})();
