/* =========================================================
   IELTS READING - exam-style practice, part 4
   Lengthens each practice passage with extra paragraphs and adds
   the matching questions, so every test is a fuller exam-style set.
   ALL text is ORIGINAL to PassMyEnglish.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var X = ns.rx;
    if (!X || !X.tests) return;
    var H = X.helpers, S = H.S, T = H.T, TF = H.TF, YN = H.YN, R = H.R;
    function test(id) { for (var i = 0; i < X.tests.length; i++) if (X.tests[i].id === id) return X.tests[i]; throw new Error("missing test " + id); }
    function para(t, p) { t.passage.push(p); }
    function lastPart(t) { return t.parts[t.parts.length - 1]; }
    function addToBox(part, items, choices) { items.forEach(function (i) { part.box.items.push(i); }); (choices || []).forEach(function (c) { part.choices.push(c); }); }
    function renumber(part, from, to) { part.instruction = part.instruction.replace(/Questions \d+\u2013\d+/, "Questions " + from + "\u2013" + to); }
    function vocab(t, arr) { arr.forEach(function (v) { t.vocab.push(v); }); }
    function newPart(t, instruction, qs, fromQ) {
        var n = 0; t.parts.forEach(function (p) { n += p.qs.length; });
        t.parts.push({ instruction: instruction.replace("{a}", n + 1).replace("{b}", n + qs.length), qs: qs });
    }

    /* ---- headings ---- */
    var t = test("rx-headings-ac");
    para(t, { l: "F", t: "Not everyone is persuaded. Some residents fear that dimmer streets will invite crime, and shopkeepers worry that dark windows will drive customers away. Studies of towns that have dimmed their lamps have so far found no clear rise in crime, but the fear is real, and councils that explain their plans in advance meet far less opposition." });
    para(t, { l: "G", t: "The night sky is also a record of human history. Every culture has told stories about the stars, and ancient sailors and farmers organised their lives by them. Losing the stars means losing an inheritance that connects us to people who lived thousands of years ago." });
    var p = lastPart(t); addToBox(p, ["ix  Worries about safety and business", "x  Stories that link us to the past"], ["ix", "x"]);
    p.qs.push(S("Paragraph F", 8, "Residents fear crime and shopkeepers fear losing customers: worries about safety and business."), S("Paragraph G", 9, "The stars have inspired stories and guided people for thousands of years: stories that link us to the past. Heading ii is close but is about the loss of the view today, which is paragraph A."));
    p.instruction = p.instruction.replace("Questions 1\u20135. The passage has five paragraphs, A\u2013E.", "Questions 1\u20137. The passage has seven paragraphs, A\u2013G.");
    vocab(t, [["persuaded", "made to believe or agree"], ["opposition", "people who are against a plan"]]);

    t = test("rx-headings-gt");
    para(t, { l: "F", t: "Wages are paid on the 28th of each month directly into your bank account. Your payslip is sent to you by email. If you notice a mistake, tell the payroll office within two weeks so that it can be corrected in the next payment." });
    para(t, { l: "G", t: "If you drive to work, you may park in the yard behind the building. The gate is locked at 6 p.m., so cars left after that time cannot be moved until the next morning. Cyclists can use the covered racks next to the main door." });
    p = lastPart(t); addToBox(p, ["ix  Joining the staff social club"], ["ix"]);
    p.qs.push(S("Section F", 6, "Payment date, bank account, payslip and mistakes: how and when wages are paid."), S("Section G", 5, "Parking in the yard, the locked gate and the bike racks: using the staff car park."));
    p.instruction = p.instruction.replace("Questions 1\u20135. The text has five sections, A\u2013E.", "Questions 1\u20137. The text has seven sections, A\u2013G.");
    vocab(t, [["payslip", "a paper or email showing your pay"], ["payroll", "the department that pays wages"]]);

    /* ---- matching information ---- */
    t = test("rx-info-ac");
    para(t, { l: "G", t: "Teachers also disagree about how it should be taught. Some schools use joined-up writing from the start, others prefer separate letters, and a few have introduced a simple printed style similar to a typeface. Many teachers say that the style matters less than regular practice." });
    p = lastPart(t); p.choices.push("G");
    p.qs.push(S("a mention of different ways of forming letters in schools", 6, "Paragraph G: joined-up writing, separate letters and a printed style."), S("a view that regular practice matters more than style", 6, "Paragraph G: \u2018the style matters less than regular practice\u2019."));
    p.instruction = p.instruction.replace("Questions 1\u20137. The passage has six paragraphs, A\u2013F.", "Questions 1\u20139. The passage has seven paragraphs, A\u2013G.").replace("A\u2013F", "A\u2013G");
    vocab(t, [["joined-up writing", "writing where the letters are linked together"], ["typeface", "the style of letters in print"]]);

    t = test("rx-info-gt");
    para(t, { l: "G", t: "Items found in the centre are kept at reception for 30 days. After that time, clothing is given to a local charity." });
    para(t, { l: "H", t: "Schools and clubs can book the main hall for groups of twenty or more at a reduced rate. Please contact the bookings manager at least two weeks beforehand." });
    p = lastPart(t); p.choices.push("G", "H");
    p.qs.push(S("how long forgotten belongings are kept", 6, "Section G: kept at reception for 30 days."), S("who to contact to arrange a booking for a large group", 7, "Section H: contact the bookings manager."));
    p.instruction = p.instruction.replace("Questions 1\u20136. The text has six sections, A\u2013F.", "Questions 1\u20138. The text has eight sections, A\u2013H.").replace("A\u2013F", "A\u2013H");
    vocab(t, [["belongings", "things that you own and carry"], ["reduced rate", "a lower price"]]);

    /* ---- matching features ---- */
    t = test("rx-features-ac");
    t.passage[1].t = t.passage[1].t.replace("A start nearer nine", "Studies in several schools suggest that exam results improve slightly when lessons begin later. A start nearer nine");
    t.passage[2].t = t.passage[2].t.replace("Schools will need to adjust", "Parents, she says, were mostly in favour, although a few worried about evening activities. Schools will need to adjust");
    t.passage[3].t = t.passage[3].t.replace("These costs deserve", "Schools could share transport by giving different year groups different start times, which he sees as the cheapest solution. These costs deserve");
    p = lastPart(t);
    p.qs.push(S("Exam results may improve if school starts later.", 0, "Dr Osei: exam results improve slightly when lessons begin later."), S("Some parents worried about activities after school.", 1, "Professor Brandt: a few parents worried about evening activities."), S("Different start times for different year groups could solve the transport problem.", 2, "Dr Rivera: different year groups with different start times, the cheapest solution."));
    p.instruction = p.instruction.replace("Questions 1\u20137", "Questions 1\u201310");

    t = test("rx-features-gt");
    t.passage[1].t += " Short homework tasks are set each week.";
    t.passage[2].t += " A tripod can be borrowed from the college office.";
    t.passage[3].t += " Students take home the dishes they have cooked.";
    p = lastPart(t);
    p.qs.push(S("Students are given work to do at home.", 0, "Course A: short homework tasks each week."), S("Equipment can be borrowed from the college.", 1, "Course B: a tripod can be borrowed."), S("Students take home what they have made.", 2, "Course C: students take home the dishes they have cooked."));
    p.instruction = p.instruction.replace("Questions 1\u20136", "Questions 1\u20139");

    /* ---- sentence endings ---- */
    t = test("rx-endings-ac");
    para(t, "Dancing is also used when a swarm of bees looks for a new home. Scouts report on possible nest sites, and the more attractive a site is, the longer and more lively the scout\u2019s dance. Other bees visit the sites that are advertised most strongly. The swarm leaves only when most of the scouts are dancing for the same place.");
    p = lastPart(t); addToBox(p, ["I  is advertised with the longest and most lively dances.", "J  most of the scouts agree on one place."], ["I", "J"]);
    p.qs.push(S("In a swarm looking for a new home, the best nest site", 8, "The more attractive the site, the longer and livelier the dance (I)."), S("The swarm leaves only when", 9, "The swarm leaves only when most scouts dance for the same place (J)."));
    p.instruction = p.instruction.replace("Questions 1\u20136", "Questions 1\u20138").replace("A\u2013H", "A\u2013J");
    vocab(t, [["swarm", "a large group of bees that leaves the hive together"], ["nest site", "a place where bees could make a new home"]]);

    t = test("rx-endings-gt");
    para(t, "Plastic bottles, cans and clean cardboard go in the blue bin. Schools that want a talk about recycling should contact the council office.");
    p = lastPart(t);
    p.box.items.push("H  should contact the council office.");
    p.choices.push("H");
    p.qs[5].explanation = "Collected every week in the small brown bin (G). The blue bin (F) is for bottles, cans and cardboard, not food.";
    p.qs.push(S("Plastic bottles and cans", 5, "They go in the blue bin (F)."), S("Schools that want a talk about recycling", 7, "They should contact the council office (H)."));
    p.instruction = p.instruction.replace("Questions 1\u20136", "Questions 1\u20138").replace("A\u2013G", "A\u2013H");

    /* ---- sentence completion ---- */
    t = test("rx-sentence-ac");
    para(t, "Salt also has a darker history. Governments often taxed it heavily because everyone needed it, and in some countries the tax was so hated that it caused riots. In India, a famous march to the sea in 1930, made to produce salt without paying the tax, became a symbol of protest.");
    p = lastPart(t);
    p.qs.push(T("Governments taxed salt heavily because ______ needed it.", ["everyone"], "Paragraph 5: \u2018taxed it heavily because everyone needed it\u2019."), T("In 1930, a famous march to the ______ protested against the salt tax.", ["sea"], "Paragraph 5: \u2018a famous march to the sea in 1930\u2019."));
    p.instruction = p.instruction.replace("Questions 1\u20137", "Questions 1\u20139");
    vocab(t, [["tax", "money paid to the government"], ["riot", "violent public protest"]]);

    t = test("rx-sentence-gt");
    para(t, "Staff are entitled to 28 days of holiday a year. Requests must be made on the form at reception, and the head housekeeper approves them.");
    p = lastPart(t);
    p.qs.push(T("Holiday requests must be made on a ______ at reception.", ["form"], "Paragraph 5: \u2018on the form at reception\u2019."), T("The ______ approves holiday requests.", ["head housekeeper", "housekeeper"], "Paragraph 5: \u2018the head housekeeper approves them\u2019."));
    p.instruction = p.instruction.replace("Questions 1\u20137", "Questions 1\u20139");

    /* ---- summary ---- */
    t = test("rx-summary-ac");
    para(t, { l: "C", t: "Cocoa farming faces problems. The trees are fragile and easily damaged by disease and by changes in rainfall, and most are grown on small farms where families earn little. Several groups now run schemes in which farmers receive training and a guaranteed minimum price." });
    newPart(t, "Questions {a}\u2013{b}. Complete the sentences below. Choose NO MORE THAN TWO WORDS from paragraph C for each answer.", [
        T("Cocoa trees are easily damaged by disease and changes in ______.", ["rainfall"], "Paragraph C: \u2018changes in rainfall\u2019."),
        T("Most cocoa is grown on small ______.", ["farms"], "Paragraph C: \u2018most are grown on small farms\u2019."),
        T("Some schemes give farmers training and a guaranteed minimum ______.", ["price"], "Paragraph C: \u2018a guaranteed minimum price\u2019.")
    ]);
    vocab(t, [["fragile", "easily damaged"], ["guaranteed", "promised for certain"]]);

    t = test("rx-summary-gt");
    para(t, "The library is open from 9 a.m. to 7 p.m., Monday to Friday, and from 9 a.m. to 4 p.m. on Saturday. It is closed on Sundays.");
    newPart(t, "Questions {a}\u2013{b}. Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.", [
        T("At what time does the library close on Saturday?", ["4 p.m.", "4pm", "4 pm", "4"], "Last paragraph: \u20189 a.m. to 4 p.m. on Saturday\u2019."),
        T("On which day is the library closed?", ["sunday", "sundays"], "Last paragraph: \u2018It is closed on Sundays\u2019.")
    ]);

    /* ---- diagrams ---- */
    t = test("rx-diagram-ac");
    para(t, "Solar water heaters work best in sunny climates, but they also function in cloudier places, though more slowly. Many systems include an electric back-up heater that switches on when the water in the tank is not hot enough.");
    newPart(t, "Questions {a}\u2013{b}. Complete the sentences below. Choose ONE WORD ONLY from the passage for each answer.", [
        T("In less sunny places, the system works more ______.", ["slowly"], "Paragraph 5: \u2018though more slowly\u2019."),
        T("When the water is not hot enough, an electric ______ heater switches on.", ["back-up", "backup"], "Paragraph 5: \u2018an electric back-up heater\u2019."),
        T("Solar water heaters work best in ______ climates.", ["sunny"], "Paragraph 5: \u2018work best in sunny climates\u2019.")
    ]);

    t = test("rx-diagram-gt");
    para(t, "Check the tyres regularly. They should feel firm when you press them with your thumb. Worn tyres, with no pattern left on them, grip the road badly in wet weather. A white light at the front and a red light at the back must be used after dark.");
    newPart(t, "Questions {a}\u2013{b}. Complete the sentences below. Choose ONE WORD ONLY from the text for each answer.", [
        T("Tyres should feel ______ when you press them with your thumb.", ["firm"], "Paragraph 6: \u2018should feel firm\u2019."),
        T("Worn tyres grip the road badly in ______ weather.", ["wet"], "Paragraph 6: \u2018grip the road badly in wet weather\u2019."),
        T("After dark, a ______ light must be used at the front.", ["white"], "Paragraph 6: \u2018A white light at the front\u2019.")
    ]);

    /* ---- true / false / not given ---- */
    t = test("rx-tfng-ac");
    para(t, "Octopuses have also been seen using tools. Some collect coconut shell halves from the sea floor, carry them away, and later put them together to make a shelter. Researchers see this as evidence of planning, because the shells are carried a long way before they are needed. Others argue that the animals are simply using whatever is nearby.");
    p = lastPart(t);
    p.qs.push(TF("Some octopuses carry coconut shells to use later as a shelter.", 0, "TRUE: they carry shells away and later put them together as a shelter."), TF("All researchers agree that carrying shells shows planning.", 1, "FALSE: \u2018Others argue\u2019 that the animals simply use what is nearby."), TF("Octopuses use tools more skilfully than monkeys.", 2, "NOT GIVEN: monkeys are never mentioned."));
    p.instruction = p.instruction.replace("Questions 1\u20138", "Questions 1\u201311");

    t = test("rx-tfng-gt");
    para(t, "Clubs may reserve a lane for an hour by telephoning the office. At least one adult must be present for every ten children. Swimming goggles may be worn.");
    p = lastPart(t);
    p.qs.push(TF("A club can reserve a lane by telephone.", 0, "TRUE: \u2018by telephoning the office\u2019."), TF("One adult is needed for every five children.", 1, "FALSE: one adult for every ten children."), TF("Goggles are not allowed in the pool.", 1, "FALSE: \u2018Swimming goggles may be worn\u2019."));
    p.instruction = p.instruction.replace("Questions 1\u20139", "Questions 1\u201312");

    /* ---- yes / no / not given ---- */
    t = test("rx-ynng-ac");
    para(t, "Some readers will object that slow travel is impractical for people with young children. I sympathise, but children often enjoy a train more than a plane. They can walk about, look out of the window and play cards at a table, and the long queues at airports are far less fun for them.");
    p = lastPart(t);
    p.qs.push(YN("Slow travel is impractical for families with young children.", 1, "NO: the writer sympathises but disagrees, saying children often enjoy trains."), YN("Many children enjoy train travel more than flying.", 0, "YES: \u2018children often enjoy a train more than a plane\u2019."), YN("Card games are the best way to keep children happy on a journey.", 2, "NOT GIVEN: cards are mentioned only as one possible activity."));
    p.instruction = p.instruction.replace("Questions 1\u20138", "Questions 1\u201311");

    t = test("rx-ynng-gt");
    para(t, "A few colleagues have said that a shorter week would be unfair to the sales team, who often work evenings. I take their point, and perhaps the trial should start with the office staff only. Whatever we decide, it must be fair to everyone.");
    p = lastPart(t);
    p.qs.push(YN("The trial might begin with office staff only.", 0, "YES: \u2018perhaps the trial should start with the office staff only\u2019."), YN("The writer ignores the worries of the sales team.", 1, "NO: \u2018I take their point\u2019."), YN("Sales staff are paid more than office staff.", 2, "NOT GIVEN: pay differences are not mentioned."));
    p.instruction = p.instruction.replace("Questions 1\u20137", "Questions 1\u201310");

    /* ---- multiple choice ---- */
    t = test("rx-mcq-ac");
    para(t, "Some companies have begun to set \u2018quiet hours\u2019 in which no emails or messages are allowed. Employees at one design firm told researchers that these hours gave them time to think, but several also admitted that they felt anxious at first without their usual stream of messages. Critics say that such rules treat workers like children, and that people should simply learn to manage their own attention.");
    newPart(t, "Questions {a}\u2013{b}. Choose the correct letter, A, B, C or D.", [
        R("What did some employees at the design firm say about quiet hours?", ["They were unnecessary.", "They gave time to think.", "They were too short.", "They improved sales."], 1, "Paragraph 5: \u2018these hours gave them time to think\u2019."),
        R("How did several employees feel at first?", ["relaxed", "bored", "anxious", "angry"], 2, "Paragraph 5: \u2018felt anxious at first\u2019."),
        R("What do critics say about quiet hours?", ["They treat workers like children.", "They cost too much.", "They are good for managers.", "They should be longer."], 0, "Paragraph 5: \u2018treat workers like children\u2019.")
    ]);

    t = test("rx-mcq-gt");
    para(t, "Technology can help or hinder. Video calls let people in different offices join in, but the chair should check that the equipment works before the start. Mobile phones should be silent, and laptops should stay closed unless they are needed to take notes.");
    newPart(t, "Questions {a}\u2013{b}. Choose the correct letter, A, B, C or D.", [
        R("What should the chair check before a video meeting?", ["the length of the agenda", "that the equipment works", "who has the most notes", "the time in other offices"], 1, "Paragraph 5: \u2018check that the equipment works before the start\u2019."),
        R("What should happen to laptops during a meeting?", ["They should stay closed unless needed for notes.", "They should be left in another room.", "They should be used by everyone.", "They should be switched to silent."], 0, "Paragraph 5: \u2018stay closed unless they are needed to take notes\u2019."),
        R("What is said about mobile phones?", ["They should be silent.", "They are banned from the building.", "They should be used for notes.", "They are useful for video calls."], 0, "Paragraph 5: \u2018Mobile phones should be silent\u2019.")
    ]);

    /* ---- short answers ---- */
    t = test("rx-short-ac");
    para(t, "Weather can also threaten bridges. Strong winds caused one famous suspension bridge to twist and collapse in 1940, and since then the designers of large bridges have tested scale models in wind tunnels before construction begins.");
    p = lastPart(t);
    p.qs.push(T("In which year did a famous suspension bridge collapse in strong winds?", ["1940"], "Paragraph 5: \u2018collapse in 1940\u2019."), T("What do designers test in wind tunnels?", ["scale models", "models"], "Paragraph 5: \u2018tested scale models in wind tunnels\u2019."), T("What did the strong winds make the bridge do before it collapsed?", ["twist"], "Paragraph 5: \u2018to twist and collapse\u2019."));
    p.instruction = p.instruction.replace("Questions 1\u20138", "Questions 1\u201311");

    t = test("rx-short-gt");
    para(t, "School groups must book at least two weeks in advance by emailing the education officer. The museum shop, beside the main entrance, sells books, maps and postcards. Wheelchair users can reach all floors by lift.");
    p = lastPart(t);
    p.qs.push(T("How far ahead must school groups book?", ["two weeks", "2 weeks", "at least two weeks"], "Paragraph 5: \u2018at least two weeks in advance\u2019."), T("Who should schools email?", ["the education officer", "education officer"], "Paragraph 5: \u2018emailing the education officer\u2019."), T("What do wheelchair users use to reach all floors?", ["lift", "a lift", "the lift"], "Paragraph 5: \u2018reach all floors by lift\u2019."), T("What is the museum shop beside?", ["the main entrance", "main entrance"], "Paragraph 5: \u2018beside the main entrance\u2019."));
    p.instruction = p.instruction.replace("Questions 1\u20138", "Questions 1\u201312");
})();
