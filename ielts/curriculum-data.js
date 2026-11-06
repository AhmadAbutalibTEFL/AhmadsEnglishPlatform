/* ==========================================================================
   Ahmad's English Platform - IELTS Curriculum Data Layer
   Clear, Student-Friendly Instructional Taxonomy: SKILL -> QUESTION TYPE -> STRATEGY -> PRACTICE
   Coverage: 6 Listening, 6 Reading, 4 Writing, 4 Speaking Question Types
   Architecture: Vanilla ES5/ES6, Zero Dependencies, GitHub Pages Compatible
   ========================================================================== */

(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    var CURRICULUM = {
    "listening": {
        "title": "Listening Mastery",
        "description": "Four recorded sections progressing from everyday social dialogues to academic university lectures.",
        "timeAllowed": "30 minutes (+ 10 minutes transfer time in paper-based)",
        "totalQuestions": 40,
        "subskills": [
            {
                "code": "L_SPEC_INFO",
                "id": "l-spec-info",
                "badge": "Section 1",
                "name": "Form & Note Completion",
                "questionTypes": [
                    "Form Completion",
                    "Note Completion",
                    "Table Completion"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 5.5 - 7.5",
                "understand": {
                    "summary": "Listen to everyday conversations (e.g. booking a hotel, renting a flat) and write down names, numbers, dates, and addresses into forms.",
                    "whatItMeant": "Extract precise facts without getting confused by casual chit-chat or speaker hesitations.",
                    "whyIELTSTests": "Examiners check if you can accurately note essential information in real-life English-speaking situations.",
                    "performanceImpact": "Section 1 questions are usually the most straightforward points in the exam. Getting 10/10 here builds a strong foundation for a high band score.",
                    "keyFocus": "Spelling of names, numbers, dates, prices, and adhering strictly to word count limits."
                },
                "recognise": {
                    "examAppearance": "Appears in Section 1 (everyday social transactions). Structured as a form or note with blank lines to fill.",
                    "identifyingMarkers": "Colons (Name: _____), currency signs ($/£), or labels (Date: _____).",
                    "trapRadar": {
                        "name": "The Self-Correction Trap",
                        "trapDescription": "The speaker gives one number or date, pauses, and corrects themselves (e.g., 'It's the 14th... oh sorry, that was last year, we moved it to the 21st').",
                        "howToAvoid": "Never rush to write the first number you hear. Keep listening until the speaker confirms the final arrangement."
                    }
                },
                "strategise": {
                    "title": "3-Step Form Completion Strategy",
                    "timeTarget": "30 seconds pre-reading time",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Predict the Answer Type",
                            "instruction": "Look at the words around the gap and predict what is needed: a name, date, phone number, or noun."
                        },
                        {
                            "step": 2,
                            "name": "Listen for the Landmark",
                            "instruction": "Listen for words just before the gap as signposts that the answer is coming up."
                        },
                        {
                            "step": 3,
                            "name": "Check Final Confirmation & Spelling",
                            "instruction": "Write the exact word or number heard. Double check spelling and word limits (e.g. NO MORE THAN TWO WORDS)."
                        }
                    ],
                    "goldenRules": [
                        "Never exceed the stated word limit: hyphenated words count as one word.",
                        "Spelling must be 100% correct; both UK and US spellings are accepted.",
                        "Do not repeat words already printed on the question sheet."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 45,
                    "simulationTitle": "Section 1 Speed Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Writing the first number mentioned",
                            "reason": "Fell for the self-correction distractor.",
                            "fix": "Listen for pivot words: 'actually', 'sorry', 'in fact'."
                        },
                        {
                            "mistake": "Exceeding the word limit",
                            "reason": "Wrote unnecessary words like 'in the' or 'a'.",
                            "fix": "Only write the necessary content words."
                        }
                    ],
                    "bandChecklist": [
                        "Wrote only what was heard?",
                        "Correct spelling?",
                        "Strictly within word limits?"
                    ]
                },
                "practice": {
                    "audioUrl": "audio/ielts-listening/ielts-l1-booking.mp3",
                    "audioTitle": "Section 1 · Greenfield Centre Photography Course Booking",
                    "questions": [
                        {
                            "id": "l_si_1",
                            "type": "Form Completion",
                            "prompt": "Complete the note below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER:\nName of Course: _____ Class",
                            "answer": "Photography",
                            "acceptableAnswers": [
                                "Photography",
                                "photography"
                            ],
                            "explanation": "The caller asks to book the photography course.",
                            "hints": [
                                "Listen to the caller's very first opening question.",
                                "What subject is she asking about?",
                                "Write 'Photography'."
                            ]
                        },
                        {
                            "id": "l_si_2",
                            "type": "Form Completion",
                            "prompt": "Complete the note below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER:\nSaturday Class Start Time: _____ am",
                            "answer": "10:30",
                            "acceptableAnswers": [
                                "10:30",
                                "10.30",
                                "half past ten"
                            ],
                            "explanation": "The staff member clarifies it used to be nine, but now starts at 10:30 am.",
                            "hints": [
                                "Listen for the self-correction after 9:00 am is mentioned.",
                                "What is the actual updated start time for Saturday?",
                                "Write '10:30'."
                            ]
                        },
                        {
                            "id": "l_si_3",
                            "type": "Form Completion",
                            "prompt": "Complete the note below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER:\nAddress: 24 _____ Avenue",
                            "answer": "Highland",
                            "acceptableAnswers": [
                                "Highland",
                                "highland"
                            ],
                            "explanation": "The address is given as 24 Highland Avenue.",
                            "hints": [
                                "Listen for the street name given by the caller.",
                                "Pay attention to the spelling given in the conversation.",
                                "The street name is 'Highland'."
                            ]
                        },
                        {
                            "id": "l_si_4",
                            "type": "Form Completion",
                            "prompt": "Complete the note below. Write NO MORE THAN A NUMBER:\nContact Phone Number: _____",
                            "answer": "07892 411092",
                            "acceptableAnswers": [
                                "07892 411092",
                                "07892411092"
                            ],
                            "explanation": "The caller provides her mobile number 07892 411092.",
                            "hints": [
                                "Listen carefully to the digits spoken at the end of the booking.",
                                "The number begins with '07892'.",
                                "The complete phone number is '07892 411092'."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "L_DETAIL_FOLLOW",
                "id": "l-detail-follow",
                "badge": "Section 2 & 3",
                "name": "Multiple Choice Questions",
                "questionTypes": [
                    "Multiple Choice (Single)",
                    "Multiple Choice (Multiple)"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 8.0",
                "understand": {
                    "summary": "Choose the correct option (A, B, or C) from a list in detailed discussions and academic consultations.",
                    "whatItMeant": "Understand the main argument or specific decision made by speakers, distinguishing between accepted and rejected ideas.",
                    "whyIELTSTests": "Tests your ability to follow nuanced conversations without being tricked by distractors.",
                    "performanceImpact": "Multiple choice questions appear frequently in Sections 2 and 3 and can make the difference between Band 6.5 and Band 7.5+.",
                    "keyFocus": "Synonyms, paraphrasing, and identifying when an option is rejected or modified."
                },
                "recognise": {
                    "examAppearance": "Found in Section 2 (talk on general interest) and Section 3 (academic discussion with 2-3 speakers).",
                    "identifyingMarkers": "A question stem followed by 3 choices (A, B, C) or 'Choose TWO letters'.",
                    "trapRadar": {
                        "name": "The Word-Match Decoy Trap",
                        "trapDescription": "The audio repeats exact words from an incorrect option to trick you, while the correct answer uses synonyms.",
                        "howToAvoid": "Do not choose an option just because you hear the exact words. Focus on whether the MEANING matches the question stem."
                    }
                },
                "strategise": {
                    "title": "3-Step Multiple Choice Strategy",
                    "timeTarget": "30-45 seconds pre-reading time",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Underline the Question Stem",
                            "instruction": "Focus on what the question is asking (who, why, what decision) before looking at the choices."
                        },
                        {
                            "step": 2,
                            "name": "Anticipate Synonyms",
                            "instruction": "Think of parallel words for the options so you recognize them when spoken differently."
                        },
                        {
                            "step": 3,
                            "name": "Eliminate Distractors",
                            "instruction": "Cross out options that are contradicted, rejected, or happened in the past."
                        }
                    ],
                    "goldenRules": [
                        "Read the stem first to know what you are listening for.",
                        "Speakers will mention all options; only one answers the specific question.",
                        "If you miss a question, make your best guess and move on immediately."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 50,
                    "simulationTitle": "Multiple Choice Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Picking the first option mentioned",
                            "reason": "Did not wait for other choices to be considered.",
                            "fix": "Listen to the whole exchange before confirming."
                        }
                    ],
                    "bandChecklist": [
                        "Identified the core question?",
                        "Eliminated rejected options?"
                    ]
                },
                "practice": {
                    "audioUrl": "audio/ielts-listening/ielts-l1-booking.mp3",
                    "audioTitle": "Section 2 & 3 · Greenfield Course Equipment & Concessions",
                    "questions": [
                        {
                            "id": "l_mcq_1",
                            "type": "Multiple Choice",
                            "prompt": "Why does the receptionist advise students to bring their own digital camera?",
                            "options": [
                                "A. Centre cameras are reserved for diploma students",
                                "B. Centre cameras carry an additional weekly rental deposit",
                                "C. Students learn faster using their own equipment controls"
                            ],
                            "answer": "C. Students learn faster using their own equipment controls",
                            "explanation": "The receptionist explains that students become familiar with their personal camera settings faster.",
                            "hints": [
                                "Listen for when camera options are compared.",
                                "What reason is given regarding personal learning?",
                                "Select Option C."
                            ]
                        },
                        {
                            "id": "l_mcq_2",
                            "type": "Multiple Choice",
                            "prompt": "What qualifies an applicant for the weekend concession discount?",
                            "options": [
                                "A. Registering at least one month before the term begins",
                                "B. Presenting an accredited student identity card",
                                "C. Signing up for both beginner and intermediate levels"
                            ],
                            "answer": "B. Presenting an accredited student identity card",
                            "explanation": "A discount is granted upon showing a current student identity card.",
                            "hints": [
                                "Listen for the word 'discount' or 'concession'.",
                                "What document must be shown at the desk?",
                                "Select Option B."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "L_SPATIAL_DIR",
                "id": "l-spatial-dir",
                "badge": "Section 2",
                "name": "Map & Plan Labelling",
                "questionTypes": [
                    "Map Labelling",
                    "Plan Labelling",
                    "Diagram Labelling"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 7.5",
                "understand": {
                    "summary": "Follow a guide's directions around a building, park, or tourist site, and label letters on a map or floor plan.",
                    "whatItMeant": "Track spatial movements and relationships between buildings, rooms, and landmarks.",
                    "whyIELTSTests": "Assesses how well you can navigate an English-speaking environment following verbal instructions.",
                    "performanceImpact": "Map questions are very common in Section 2. Understanding directional language gives you quick, easy marks.",
                    "keyFocus": "Directional vocabulary: opposite, adjacent, beyond, north/south, clockwise, at the far end."
                },
                "recognise": {
                    "examAppearance": "Appears in Section 2 with an illustrated map or diagram with letters (A-H) and a list of place names.",
                    "identifyingMarkers": "Compass rose (North), starting point ('Entrance' or 'You are here'), and named landmarks.",
                    "trapRadar": {
                        "name": "The Relative Viewpoint Trap",
                        "trapDescription": "'On your left' means from the speaker's moving perspective as they walk, which might be the right side of your paper.",
                        "howToAvoid": "Trace the speaker's path with your finger or pen on the paper as they describe their movement."
                    }
                },
                "strategise": {
                    "title": "3-Step Map Labelling Strategy",
                    "timeTarget": "30 seconds map orientation",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Find the Starting Point",
                            "instruction": "Locate the main entrance or 'You are here' point before the audio begins."
                        },
                        {
                            "step": 2,
                            "name": "Trace the Path with Your Pen",
                            "instruction": "Physically move your pen along the pathways as the speaker guides you through the map."
                        },
                        {
                            "step": 3,
                            "name": "Match Landmark Letters",
                            "instruction": "Write the corresponding letter (A, B, C...) next to each listed location."
                        }
                    ],
                    "goldenRules": [
                        "Always keep your pen moving with the speaker's walking route.",
                        "Know your directional phrases: 'at the rear', 'adjacent to', 'facing'.",
                        "Double check the compass orientation if given."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 45,
                    "simulationTitle": "Spatial Navigation Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Losing position on the map",
                            "reason": "Stopped to write an answer and missed the speaker's turn.",
                            "fix": "Jot down the letter quickly and stay on track."
                        }
                    ],
                    "bandChecklist": [
                        "Oriented with starting point?",
                        "Tracked continuous movement?"
                    ]
                },
                "practice": {
                    "audioUrl": "audio/ielts-listening/ielts-l1-booking.mp3",
                    "audioTitle": "Section 2 · Greenfield Arts Campus Tour & Map",
                    "questions": [
                        {
                            "id": "l_map_1",
                            "type": "Multiple Choice",
                            "prompt": "Where is the Photography Darkroom situated on the ground floor plan?",
                            "options": [
                                "A. Directly opposite the main entrance doors",
                                "B. Down the corridor on the left, next to the courtyard",
                                "C. At the far right corner behind the administrative offices"
                            ],
                            "answer": "B. Down the corridor on the left, next to the courtyard",
                            "explanation": "The tour guide directs listeners down the left hallway adjacent to the central courtyard.",
                            "hints": [
                                "Track the guide's directional words from the entrance.",
                                "Listen for 'corridor on the left' and 'courtyard'.",
                                "Option B is the correct room location."
                            ]
                        },
                        {
                            "id": "l_map_2",
                            "type": "Multiple Choice",
                            "prompt": "Where can visitors collect their borrowed equipment lockers?",
                            "options": [
                                "A. Basement locker hallway next to the fire stairs",
                                "B. At the information kiosk in the lobby",
                                "C. In the courtyard storage shed"
                            ],
                            "answer": "A. Basement locker hallway next to the fire stairs",
                            "explanation": "Lockers are designated in the basement level beside the fire stairs.",
                            "hints": [
                                "Listen for 'lockers' or 'equipment storage'.",
                                "Notice the floor level specified.",
                                "Option A is correct."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "L_ATTITUDE_OPIN",
                "id": "l-attitude-opin",
                "badge": "Section 3",
                "name": "Matching & Classification",
                "questionTypes": [
                    "Matching Information",
                    "Classification"
                ],
                "cognitiveLevel": "Advanced",
                "difficulty": "Band 6.5 - 8.0",
                "understand": {
                    "summary": "Match numbered items with a list of categories or speakers in an academic discussion.",
                    "whatItMeant": "Identify opinions, agreements, and decisions between multiple university students or a student and tutor.",
                    "whyIELTSTests": "Examiners evaluate whether you can follow collaborative academic discussions and attribute viewpoints correctly.",
                    "performanceImpact": "Essential for high-band scores in Section 3 where two or three people share different ideas.",
                    "keyFocus": "Phrases of agreement and disagreement ('That's true, but...', 'I'm not so sure', 'Let's go with that')."
                },
                "recognise": {
                    "examAppearance": "Appears in Section 3 with a box of lettered categories (A, B, C) and a numbered list of features or tasks.",
                    "identifyingMarkers": "Instructions stating 'Which person/category applies to each of the following?'",
                    "trapRadar": {
                        "name": "The Preliminary Agreement Trap",
                        "trapDescription": "One speaker suggests an idea and seems keen, but the other speaker raises an objection, leading to a changed decision.",
                        "howToAvoid": "Wait until both speakers reach a conclusion before choosing your answer."
                    }
                },
                "strategise": {
                    "title": "3-Step Matching Strategy",
                    "timeTarget": "30 seconds scanning",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Understand the Categories",
                            "instruction": "Read the 3-4 options in the box to understand the choices."
                        },
                        {
                            "step": 2,
                            "name": "Follow the Numbered List",
                            "instruction": "The questions will be discussed in the exact order they appear on the page."
                        },
                        {
                            "step": 3,
                            "name": "Listen for the Final Decision",
                            "instruction": "Listen for agreement markers before writing down the letter."
                        }
                    ],
                    "goldenRules": [
                        "Options in the box can often be used more than once.",
                        "Questions are always heard in chronological order.",
                        "Listen for qualifiers: 'probably', 'definitely', 'unlikely'."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 45,
                    "simulationTitle": "Matching Workout"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Selecting on first mention",
                            "reason": "Did not listen for the partner's response.",
                            "fix": "Wait for mutual agreement."
                        }
                    ],
                    "bandChecklist": [
                        "Followed question order?",
                        "Confirmed final agreement?"
                    ]
                },
                "practice": {
                    "audioUrl": "audio/ielts-listening/ielts-l1-booking.mp3",
                    "audioTitle": "Section 3 · Student Seminar: Urban Architecture Feedback",
                    "questions": [
                        {
                            "id": "l_att_1",
                            "type": "Multiple Choice",
                            "prompt": "What opinion does the tutor express regarding glass skyscraper facades?",
                            "options": [
                                "A. They are aesthetically superior to concrete structures",
                                "B. They create severe microclimate heat islands at pedestrian levels",
                                "C. They lower interior air-conditioning costs significantly"
                            ],
                            "answer": "B. They create severe microclimate heat islands at pedestrian levels",
                            "explanation": "The tutor highlights that reflective glass surfaces intensify street-level heat and glare.",
                            "hints": [
                                "Listen for the tutor's evaluation of glass facades.",
                                "Does the tutor praise or criticize their street-level impact?",
                                "Select Option B."
                            ]
                        },
                        {
                            "id": "l_att_2",
                            "type": "Multiple Choice",
                            "prompt": "Both students agree that the city council's new zoning plan should prioritize:",
                            "options": [
                                "A. Pedestrianized green corridors between residential quarters",
                                "B. High-speed elevated arterial highways",
                                "C. Expanding underground suburban park-and-ride facilities"
                            ],
                            "answer": "A. Pedestrianized green corridors between residential quarters",
                            "explanation": "Both speakers reach consensus that car-free green routes are the most beneficial urban amenity.",
                            "hints": [
                                "Listen for agreement words like 'I totally agree' or 'That's spot on'.",
                                "What amenity do they both advocate for?",
                                "Select Option A."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "L_ACAD_LECTURE",
                "id": "l-acad-lecture",
                "badge": "Section 4",
                "name": "Academic Lecture Notes",
                "questionTypes": [
                    "Note Completion",
                    "Summary Completion",
                    "Sentence Completion"
                ],
                "cognitiveLevel": "Advanced",
                "difficulty": "Band 7.0 - 8.5",
                "understand": {
                    "summary": "Complete a structured set of lecture notes while listening to a continuous university talk by a professor.",
                    "whatItMeant": "Follow the logical development of an academic lecture without any conversational breaks.",
                    "whyIELTSTests": "Directly tests whether you can take accurate lecture notes in an English-medium university.",
                    "performanceImpact": "Section 4 contains 10 questions with NO pause in the middle. Mastering lecture notes is vital for Band 7.5+.",
                    "keyFocus": "Signposting language ('Turning now to...', 'Furthermore', 'The main reason for this')."
                },
                "recognise": {
                    "examAppearance": "The entire Section 4 (Questions 31-40). Formatted as bulleted notes, an outline, or a summary.",
                    "identifyingMarkers": "Headings, subheadings, and bullet points dividing the lecture into clear phases.",
                    "trapRadar": {
                        "name": "The Unbroken Flow Trap",
                        "trapDescription": "There is no pause in the middle of Section 4. If you hesitate on one question, you can easily miss two or three more.",
                        "howToAvoid": "If you are unsure of an answer, write down your best guess and immediately look ahead to the next bullet point."
                    }
                },
                "strategise": {
                    "title": "3-Step Lecture Note Strategy",
                    "timeTarget": "60 seconds pre-reading time",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Scan All Headings",
                            "instruction": "Use the 60 seconds to scan the main headings to understand the lecture's structure."
                        },
                        {
                            "step": 2,
                            "name": "Underline Anchor Words",
                            "instruction": "Circle technical terms and nouns near each blank that the lecturer is likely to say."
                        },
                        {
                            "step": 3,
                            "name": "Listen and Copy Exact Words",
                            "instruction": "Write down the exact word or words spoken by the lecturer. Check singular/plural endings."
                        }
                    ],
                    "goldenRules": [
                        "Never stop listening—if you get lost, use the next heading to re-orient yourself.",
                        "Answers almost always come in the form of nouns or noun phrases.",
                        "Check singular vs plural: missing an 's' on a plural noun marks it incorrect."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 40,
                    "simulationTitle": "Lecture Speed Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Losing your place",
                            "reason": "Hesitated on a missed answer.",
                            "fix": "Drop missed questions and keep moving forward."
                        }
                    ],
                    "bandChecklist": [
                        "Followed lecture headings?",
                        "Exact singular/plural forms?"
                    ]
                },
                "practice": {
                    "audioUrl": "audio/ielts-listening/ielts-l1-booking.mp3",
                    "audioTitle": "Section 4 · University Lecture: Cetacean Echolocation",
                    "questions": [
                        {
                            "id": "l_lec_1",
                            "type": "Sentence Completion",
                            "prompt": "Complete the lecture notes. Write NO MORE THAN TWO WORDS:\nDolphins generate directional clicking pulses inside their nasal passages through structures known as _____.",
                            "answer": "phonic lips",
                            "acceptableAnswers": [
                                "phonic lips",
                                "the phonic lips"
                            ],
                            "explanation": "The lecturer explains that sound pulses are produced in the nasal phonic lips.",
                            "hints": [
                                "Listen for the anatomical structure inside the blowhole/nasal area.",
                                "It consists of two words starting with 'phonic...'",
                                "Write 'phonic lips'."
                            ]
                        },
                        {
                            "id": "l_lec_2",
                            "type": "Sentence Completion",
                            "prompt": "Complete the lecture notes. Write NO MORE THAN ONE WORD:\nThe sound beam is concentrated into a narrow forward acoustic cone by an oily forehead organ called the _____.",
                            "answer": "melon",
                            "acceptableAnswers": [
                                "melon",
                                "the melon"
                            ],
                            "explanation": "The lecturer states the lipid-filled acoustic lens is known as the melon.",
                            "hints": [
                                "Listen for the acoustic organ situated in the forehead.",
                                "It shares the name of a common fruit (5 letters).",
                                "Write 'melon'."
                            ]
                        },
                        {
                            "id": "l_lec_3",
                            "type": "Sentence Completion",
                            "prompt": "Complete the lecture notes. Write NO MORE THAN ONE WORD:\nReturning ultrasonic echoes are captured primarily through the dolphin's lower _____.",
                            "answer": "jaw",
                            "acceptableAnswers": [
                                "jaw",
                                "jawbone",
                                "mandible"
                            ],
                            "explanation": "The echoes travel through the fat bodies of the lower jaw to the inner ear.",
                            "hints": [
                                "Listen for how returning echoes enter the animal's auditory system.",
                                "Which bone receives the sound waves?",
                                "Write 'jaw'."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "L_PARAPHRASE_DIST",
                "id": "l-paraphrase-dist",
                "badge": "All Sections",
                "name": "Short Answer & Distractors",
                "questionTypes": [
                    "Short Answer Questions",
                    "Sentence Completion"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 7.5",
                "understand": {
                    "summary": "Answer direct factual questions and filter out deceptive distractors using exact words from the recording.",
                    "whatItMeant": "Identify the real answer when speakers mention multiple related numbers, places, or reasons.",
                    "whyIELTSTests": "Ensures you can filter out background chatter and identify the specific answer required.",
                    "performanceImpact": "Appears across Sections 1 to 4 and tests core listening precision.",
                    "keyFocus": "Synonyms, negation words (not, never, except, rather than), and strict word limits."
                },
                "recognise": {
                    "examAppearance": "Appears in any listening section with direct question prompts (e.g. 'What was the total cost?').",
                    "identifyingMarkers": "Explicit word limits: 'NO MORE THAN THREE WORDS AND/OR A NUMBER'.",
                    "trapRadar": {
                        "name": "The Negation Shift Trap",
                        "trapDescription": "The speaker mentions a fact, but adds a negation word: 'We wanted to visit the castle, but it was closed, so we went to the museum instead'.",
                        "howToAvoid": "Listen for contrast words like 'but', 'however', 'although', 'instead of'."
                    }
                },
                "strategise": {
                    "title": "3-Step Short Answer Strategy",
                    "timeTarget": "20 seconds pre-reading time",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Identify the Question Word",
                            "instruction": "Note if the question asks Who, When, Where, Why, or How Much."
                        },
                        {
                            "step": 2,
                            "name": "Listen for Contrasts",
                            "instruction": "Watch for speakers changing their mind or clarifying details."
                        },
                        {
                            "step": 3,
                            "name": "Count Your Words",
                            "instruction": "Ensure your answer does not exceed the stated word limit."
                        }
                    ],
                    "goldenRules": [
                        "Numbers can be written as words or digits (e.g., '3' or 'three').",
                        "Answers must directly address the question word.",
                        "Only write essential information."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 45,
                    "simulationTitle": "Distractor Filter Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Writing too many words",
                            "reason": "Included extra filler.",
                            "fix": "Only write the required fact."
                        }
                    ],
                    "bandChecklist": [
                        "Answered specific question?",
                        "Checked word count?"
                    ]
                },
                "practice": {
                    "audioUrl": "audio/ielts-listening/ielts-l1-booking.mp3",
                    "audioTitle": "Sections 1–4 · Avoiding Distractors & Recognizing Paraphrase",
                    "questions": [
                        {
                            "id": "l_dist_1",
                            "type": "Short Answer",
                            "prompt": "What was the initial registration fee quoted before the weekend surcharge? Write NO MORE THAN A NUMBER:\n£_____",
                            "answer": "45",
                            "acceptableAnswers": [
                                "45",
                                "£45"
                            ],
                            "explanation": "The receptionist initially quotes £45 before explaining that weekend sessions require an extra fee.",
                            "hints": [
                                "Listen carefully for the first price mentioned before extra charges.",
                                "The total with materials is £55, but the initial fee was lower.",
                                "Write '45'."
                            ]
                        },
                        {
                            "id": "l_dist_2",
                            "type": "Short Answer",
                            "prompt": "Which month was the campus exhibition rescheduled to? Write NO MORE THAN ONE WORD:\n_____",
                            "answer": "November",
                            "acceptableAnswers": [
                                "November",
                                "november"
                            ],
                            "explanation": "The speaker explains it was originally scheduled for October, but deferred until November.",
                            "hints": [
                                "Watch out for the self-correction distractor: October is rejected.",
                                "Which later month is confirmed as the final date?",
                                "Write 'November'."
                            ]
                        }
                    ]
                }
            }
        ]
    },
    "reading": {
        "title": "Reading Mastery",
        "description": "Three extensive academic or general training passages featuring authentic articles from books, journals, magazines, and newspapers.",
        "timeAllowed": "60 minutes (no extra transfer time)",
        "totalQuestions": 40,
        "subskills": [
            {
                "code": "R_SKIM_MAIN",
                "id": "r-skim-main",
                "badge": "Passage 1-3",
                "name": "Matching Headings",
                "questionTypes": [
                    "Matching Headings",
                    "Choosing a Title"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 7.5",
                "understand": {
                    "summary": "Match paragraphs from the passage to the correct heading from a list that best summarizes the main idea of each paragraph.",
                    "whatItMeant": "Identify the central purpose of an entire paragraph rather than getting distracted by individual details or examples.",
                    "whyIELTSTests": "In academic study, you must survey texts rapidly to grasp the overarching argument of each section.",
                    "performanceImpact": "Matching Headings can take a lot of time. Having a clear 3-step strategy saves precious minutes for the rest of the test.",
                    "keyFocus": "Distinguishing the main point from supporting examples, statistics, and minor details."
                },
                "recognise": {
                    "examAppearance": "Placed BEFORE the passage (numbered with Roman numerals: i, ii, iii...). There are always more headings than paragraphs.",
                    "identifyingMarkers": "A list of 6-9 headings with instructions to choose the correct heading for sections A, B, C, etc.",
                    "trapRadar": {
                        "name": "The Detail Trap",
                        "trapDescription": "A heading repeats a specific word or statistic from the paragraph, but it only describes one sentence—not the MAIN idea.",
                        "howToAvoid": "Check if the heading covers the whole paragraph or just one example. The correct heading summarizes the overall topic."
                    }
                },
                "strategise": {
                    "title": "3-Step Headings Strategy",
                    "timeTarget": "90 seconds per paragraph",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Read Headings & Underline Keywords",
                            "instruction": "Read through the list of headings and underline key nouns and qualifiers."
                        },
                        {
                            "step": 2,
                            "name": "Read First and Last Sentences",
                            "instruction": "Paragraph main ideas are usually stated in the topic sentence (first or second sentence) and summary sentence (last sentence)."
                        },
                        {
                            "step": 3,
                            "name": "Skim Middle to Confirm",
                            "instruction": "Quickly check that the middle sentences support the chosen heading, then cross the heading off your list."
                        }
                    ],
                    "goldenRules": [
                        "Always do Matching Headings FIRST before other questions on that passage.",
                        "Cross off headings once used so you have fewer choices as you progress.",
                        "If two headings seem possible, write both down and choose the best one after reading the rest."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 80,
                    "simulationTitle": "Headings Speed Workout"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Matching a single keyword",
                            "reason": "Chose heading based on one word rather than paragraph theme.",
                            "fix": "Always ask: 'What is this whole paragraph about?'"
                        }
                    ],
                    "bandChecklist": [
                        "Identified topic sentences?",
                        "Checked overall paragraph focus?"
                    ]
                },
                "practice": {
                    "passageTitle": "Sustainable Architecture and Urban Vertical Farming",
                    "passageContext": "[A] As the global population is projected to reach nearly ten billion by the middle of the century, traditional agriculture faces unprecedented constraints. Arable land is rapidly deteriorating due to soil erosion, desertification, and climate instability. Conventional horizontal farming requires immense geographical acreage, often demanding clear-cutting of vital forests and exhausting freshwater aquifers.\n\n[B] In response to this impending crisis, agricultural engineers and urban planners have developed high-tech vertical farms. Utilizing computer-monitored LED lighting that delivers targeted light spectrums for photosynthesis, crops can now thrive in enclosed multi-storey city towers. Aeroponic and hydroponic systems mist nutrient-dense water directly onto exposed plant roots, eliminating the requirement for soil entirely.\n\n[C] The ecological benefits of this localized production model are profound. Closed-loop vertical farming consumes approximately 95% less water than traditional open-field methods while requiring zero chemical pesticides. Furthermore, producing produce directly within metropolitan centers eliminates thousands of transportation miles, drastically curbing fossil-fuel emissions and post-harvest spoilage.\n\n[D] Nonetheless, significant structural hurdles impede universal commercial adoption. The initial capital expenditure needed to purchase urban real estate and outfit facilities with precision sensors is extraordinarily high. Additionally, reliance on uninterrupted grid electricity for artificial illumination creates vulnerability to energy price spikes and grid failures.",
                    "questions": [
                        {
                            "id": "r_skim_1",
                            "type": "Matching Headings",
                            "prompt": "Which heading best matches Paragraph A?",
                            "options": [
                                "i. Meeting future food demands under severe land constraints",
                                "ii. Technological breakthroughs in artificial crop illumination",
                                "iii. Ecological advantages and resource conservation",
                                "iv. Financial and structural obstacles to city adoption"
                            ],
                            "answer": "i. Meeting future food demands under severe land constraints",
                            "explanation": "Paragraph A introduces population growth, loss of arable land, and the limitations of conventional farming.",
                            "hints": [
                                "Focus on the first sentence: projected population and traditional agriculture constraints.",
                                "Notice keywords: 'ten billion', 'arable land deteriorating', 'horizontal farming'.",
                                "Heading (i) directly captures the land scarcity and future food demand dilemma."
                            ]
                        },
                        {
                            "id": "r_skim_2",
                            "type": "Matching Headings",
                            "prompt": "Which heading best matches Paragraph B?",
                            "options": [
                                "i. Meeting future food demands under severe land constraints",
                                "ii. Technological breakthroughs in artificial crop illumination",
                                "iii. Ecological advantages and resource conservation",
                                "iv. Financial and structural obstacles to city adoption"
                            ],
                            "answer": "ii. Technological breakthroughs in artificial crop illumination",
                            "explanation": "Paragraph B explains LED lighting, targeted spectrums, multi-storey towers, and aeroponics.",
                            "hints": [
                                "Skim for the main technical inventions discussed.",
                                "Look for 'LED lighting', 'targeted spectrums', and 'aeroponic systems'.",
                                "Heading (ii) summarizes these indoor cultivation breakthroughs."
                            ]
                        },
                        {
                            "id": "r_skim_3",
                            "type": "Matching Headings",
                            "prompt": "Which heading best matches Paragraph C?",
                            "options": [
                                "i. Meeting future food demands under severe land constraints",
                                "ii. Technological breakthroughs in artificial crop illumination",
                                "iii. Ecological advantages and resource conservation",
                                "iv. Financial and structural obstacles to city adoption"
                            ],
                            "answer": "iii. Ecological advantages and resource conservation",
                            "explanation": "Paragraph C describes saving 95% water, zero pesticides, and eliminating transport emissions.",
                            "hints": [
                                "Identify the central theme of paragraph C.",
                                "Notice '95% less water', 'zero chemical pesticides', and 'drastically curbing emissions'.",
                                "Heading (iii) accurately covers environmental conservation."
                            ]
                        },
                        {
                            "id": "r_skim_4",
                            "type": "Matching Headings",
                            "prompt": "Which heading best matches Paragraph D?",
                            "options": [
                                "i. Meeting future food demands under severe land constraints",
                                "ii. Technological breakthroughs in artificial crop illumination",
                                "iii. Ecological advantages and resource conservation",
                                "iv. Financial and structural obstacles to city adoption"
                            ],
                            "answer": "iv. Financial and structural obstacles to city adoption",
                            "explanation": "Paragraph D discusses expensive upfront real estate capital and high electricity demands.",
                            "hints": [
                                "Look at the transition word 'Nonetheless' and 'structural hurdles'.",
                                "Identify words related to cost: 'capital expenditure', 'energy price spikes'.",
                                "Heading (iv) describes the financial and operational obstacles."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "R_SCAN_DETAIL",
                "id": "r-scan-detail",
                "badge": "Passage 1-3",
                "name": "Sentence & Note Completion",
                "questionTypes": [
                    "Sentence Completion",
                    "Note Completion",
                    "Table Completion",
                    "Short Answer"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 5.5 - 7.0",
                "understand": {
                    "summary": "Find specific facts (names, dates, numbers, technical terms) in the reading text to fill gaps in sentences or notes.",
                    "whatItMeant": "Locate exact words in the passage using scanning techniques without reading every single word.",
                    "whyIELTSTests": "Tests your ability to locate specific information quickly in long, complex texts.",
                    "performanceImpact": "These questions follow the order of the text and offer high-probability points if you follow word limits.",
                    "keyFocus": "Identifying keyword synonyms, scanning systematically, and respecting word limits."
                },
                "recognise": {
                    "examAppearance": "Appears across all three reading passages. Features sentences or notes with blank lines.",
                    "identifyingMarkers": "Instructions such as 'Choose NO MORE THAN TWO WORDS from the text for each answer'.",
                    "trapRadar": {
                        "name": "The Word-Form Change Trap",
                        "trapDescription": "Students find the right concept, but change the word form (e.g. changing an adjective to a noun).",
                        "howToAvoid": "Always copy words EXACTLY as they appear in the passage. Never alter their spelling or form."
                    }
                },
                "strategise": {
                    "title": "3-Step Sentence Completion Strategy",
                    "timeTarget": "60 seconds per question",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Underline Anchor Keywords",
                            "instruction": "Identify unique keywords in the question (names, dates, technical terms) that are easy to spot."
                        },
                        {
                            "step": 2,
                            "name": "Scan Text and Find Location",
                            "instruction": "Move your eyes rapidly down the passage until you locate the keyword or its synonym."
                        },
                        {
                            "step": 3,
                            "name": "Extract Exact Word and Check Grammar",
                            "instruction": "Copy the required word(s) directly from the text and verify that the sentence makes grammatical sense."
                        }
                    ],
                    "goldenRules": [
                        "Questions appear in chronological order through the passage.",
                        "Copy words exactly: do not change singular to plural or vice versa.",
                        "Check the word limit strictly: writing 3 words when the limit is 2 gives 0 marks."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 60,
                    "simulationTitle": "Scanning Speed Workout"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Exceeding the word limit",
                            "reason": "Included articles like 'the' or 'a'.",
                            "fix": "Check word count after writing each answer."
                        }
                    ],
                    "bandChecklist": [
                        "Copied words exactly?",
                        "Followed question order?"
                    ]
                },
                "practice": {
                    "passageTitle": "Deep-Sea Bioluminescence and Ocean Chemistry",
                    "passageContext": "Bioluminescence, the biochemical production and emission of visible light by living organisms, is extraordinarily prevalent throughout the deep marine environment. In the oceanic twilight and midnight zones—where sunlight fails to penetrate—over seventy percent of marine creatures generate their own illumination.\n\nThis cold light is generated through an oxidation reaction catalyzed by an enzyme termed luciferase. When the substrate molecule luciferin reacts with oxygen in the presence of adenosine triphosphate (ATP), light photons are discharged with minimal thermal dissipation, making it one of the most energy-efficient processes in nature.\n\nOrganisms utilize this biological radiance for multiple survival strategies. Predators and prey alike deploy specialized light-emitting organs called photophores located on their bellies for counter-illumination, an optical camouflage that matches the faint downwelling ambient light from above, rendering them invisible to predators hunting from below.\n\nFurthermore, deep-sea anglerfish deploy a modified dorsal fin tipped with glowing symbiotic bacteria, known as an esca, acting as a luminous lure in the total pitch-black darkness of the ocean abyss.",
                    "questions": [
                        {
                            "id": "r_scan_1",
                            "type": "Sentence Completion",
                            "prompt": "Complete the sentence below with NO MORE THAN TWO WORDS from the passage:\nBioluminescent reactions are accelerated by an organic enzyme called _____.",
                            "answer": "luciferase",
                            "acceptableAnswers": [
                                "luciferase",
                                "the enzyme luciferase"
                            ],
                            "explanation": "Paragraph 2 states that the reaction is catalyzed by an enzyme termed luciferase.",
                            "hints": [
                                "Scan Paragraph 2 for the word 'enzyme'.",
                                "Look for the word following 'catalyzed by an enzyme termed...'",
                                "Write the single word: luciferase."
                            ]
                        },
                        {
                            "id": "r_scan_2",
                            "type": "Sentence Completion",
                            "prompt": "Complete the sentence below with NO MORE THAN TWO WORDS from the passage:\nMarine organisms hide from creatures hunting beneath them by using a camouflage strategy known as _____.",
                            "answer": "counter-illumination",
                            "acceptableAnswers": [
                                "counter-illumination",
                                "counter illumination"
                            ],
                            "explanation": "Paragraph 3 explains that matching ambient light with belly photophores is called counter-illumination.",
                            "hints": [
                                "Scan Paragraph 3 for 'camouflage' or 'hunting from below'.",
                                "Find the name of the technique ending in '-illumination'.",
                                "The exact term from the passage is 'counter-illumination'."
                            ]
                        },
                        {
                            "id": "r_scan_3",
                            "type": "Sentence Completion",
                            "prompt": "Complete the sentence below with NO MORE THAN ONE WORD from the passage:\nThe glowing lure of the anglerfish contains symbiotic _____ that generate light.",
                            "answer": "bacteria",
                            "acceptableAnswers": [
                                "bacteria"
                            ],
                            "explanation": "Paragraph 4 explains that the lure (esca) contains glowing symbiotic bacteria.",
                            "hints": [
                                "Scan Paragraph 4 for 'anglerfish' and 'symbiotic'.",
                                "Identify the noun that follows 'symbiotic'.",
                                "The word is 'bacteria'."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "R_TRUTH_VERIFY",
                "id": "r-truth-verify",
                "badge": "Passage 1-3",
                "name": "True / False / Not Given",
                "questionTypes": [
                    "True / False / Not Given",
                    "Identifying Factual Claims"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 8.0",
                "understand": {
                    "summary": "Determine whether factual statements agree with the text (TRUE), contradict the text (FALSE), or if the text has no information about it (NOT GIVEN).",
                    "whatItMeant": "Distinguish between what is clearly stated, what is contradicted, and what is simply not mentioned.",
                    "whyIELTSTests": "Examiners evaluate whether you can verify factual claims accurately without assuming unstated information.",
                    "performanceImpact": "TFNG questions appear on nearly every IELTS exam (up to 8-12 questions total). Mastering them is essential for Band 7+.",
                    "keyFocus": "Understanding the precise definition of NOT GIVEN versus FALSE."
                },
                "recognise": {
                    "examAppearance": "A series of 4-6 statements accompanied by TRUE / FALSE / NOT GIVEN instructions.",
                    "identifyingMarkers": "Statements based on factual passages (historical, scientific, nature).",
                    "trapRadar": {
                        "name": "The Common Sense / Assumption Trap",
                        "trapDescription": "A statement sounds true in real life, so you mark TRUE, even though the text never actually mentions it.",
                        "howToAvoid": "Only rely on what is written on the page. If the passage does not explicitly say it, the answer is NOT GIVEN."
                    }
                },
                "strategise": {
                    "title": "3-Step TFNG Strategy",
                    "timeTarget": "70 seconds per question",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Underline Keywords & Core Claim",
                            "instruction": "Identify the specific claim, especially qualifiers like 'all', 'only', 'never', 'usually'."
                        },
                        {
                            "step": 2,
                            "name": "Locate Passage Sentence",
                            "instruction": "Find the exact sentence in the text that discusses this topic."
                        },
                        {
                            "step": 3,
                            "name": "Apply the 3-Way Test",
                            "instruction": "TRUE = same meaning. FALSE = opposite is stated. NOT GIVEN = information is missing or incomplete."
                        }
                    ],
                    "goldenRules": [
                        "Questions appear in chronological order through the passage.",
                        "FALSE means the passage directly contradicts the statement (the opposite is true).",
                        "NOT GIVEN means the text does not have enough information to confirm or deny."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 70,
                    "simulationTitle": "TFNG Precision Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Confusing FALSE with NOT GIVEN",
                            "reason": "Looked for missing details instead of direct contradiction.",
                            "fix": "Ask: 'Does the text state the opposite?' If no opposite is stated, it is NOT GIVEN."
                        }
                    ],
                    "bandChecklist": [
                        "Checked for qualifiers (only/all/some)?",
                        "Verified against text alone?"
                    ]
                },
                "practice": {
                    "passageTitle": "The Evolution of Timekeeping and Mechanical Horology",
                    "passageContext": "Early human civilizations relied upon shadow clocks and sundials to measure the passage of daylight. While effective during cloudless skies, these primitive instruments were completely useless during overcast days and after sunset, necessitating the creation of clepsydras, or water clocks, in ancient Egypt and Mesopotamia.\n\nThe revolutionary turning point occurred in fourteenth-century Europe with the invention of the mechanical clock driven by falling weights and controlled by a verge-and-foliot escapement. These massive iron mechanisms were initially installed in church belfries to regulate monastic prayer schedules rather than to coordinate private commercial activities or domestic households.\n\nAlthough Galileo Galilei noted the isochronous property of pendulums in 1581, it was the Dutch polymath Christiaan Huygens who patented the first operational pendulum clock in 1656. This breakthrough reduced daily timekeeping errors from fifteen minutes down to a mere ten seconds, paving the way for accurate marine navigation and astronomical observation.",
                    "questions": [
                        {
                            "id": "r_tv_1",
                            "type": "True / False / Not Given",
                            "prompt": "Sundials could not provide time readings at night or during cloudy weather.",
                            "answer": "TRUE",
                            "explanation": "Paragraph 1 explicitly notes that sundials were 'completely useless during overcast days and after sunset'.",
                            "hints": [
                                "Scan Paragraph 1 for 'sundials' and weather conditions.",
                                "Check what happened during overcast days or after sunset.",
                                "The statement agrees completely with the passage, so the answer is TRUE."
                            ]
                        },
                        {
                            "id": "r_tv_2",
                            "type": "True / False / Not Given",
                            "prompt": "Fourteenth-century mechanical clocks were primarily designed for ordinary domestic household timekeeping.",
                            "answer": "FALSE",
                            "explanation": "Paragraph 2 states they were massive iron mechanisms in church belfries to regulate monastic prayer, 'rather than to coordinate private commercial activities or domestic households'.",
                            "hints": [
                                "Locate 'fourteenth-century' and 'domestic' in Paragraph 2.",
                                "Where were these clocks installed and for whose schedule?",
                                "The text explicitly says 'rather than domestic households', which contradicts the statement: FALSE."
                            ]
                        },
                        {
                            "id": "r_tv_3",
                            "type": "True / False / Not Given",
                            "prompt": "Galileo constructed a functional pendulum clock before Christiaan Huygens did.",
                            "answer": "FALSE",
                            "explanation": "Paragraph 3 notes Galileo observed the pendulum's property in 1581, but Christiaan Huygens patented the first operational pendulum clock in 1656.",
                            "hints": [
                                "Look for Galileo Galilei and Christiaan Huygens in Paragraph 3.",
                                "Did Galileo build an operational pendulum clock?",
                                "Huygens built the first operational clock, directly contradicting the statement: FALSE."
                            ]
                        },
                        {
                            "id": "r_tv_4",
                            "type": "True / False / Not Given",
                            "prompt": "Huygens received significant financial rewards from the Dutch government for his patent.",
                            "answer": "NOT GIVEN",
                            "explanation": "Paragraph 3 mentions Huygens patented the clock, but there is zero information regarding whether he received financial rewards.",
                            "hints": [
                                "Search Paragraph 3 for 'rewards', 'money', 'payment', or 'government'.",
                                "Does the passage mention how much money or recognition he received?",
                                "No information about financial reward exists in the passage: NOT GIVEN."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "R_WRITER_STANCE",
                "id": "r-writer-stance",
                "badge": "Passage 2-3",
                "name": "Yes / No / Not Given & Multiple Choice",
                "questionTypes": [
                    "Yes / No / Not Given",
                    "Multiple Choice (Academic)"
                ],
                "cognitiveLevel": "Advanced",
                "difficulty": "Band 6.5 - 8.5",
                "understand": {
                    "summary": "Analyze the writer's opinions, arguments, and claims in complex academic articles.",
                    "whatItMeant": "Determine if a statement reflects the writer's personal perspective (YES), disagrees with it (NO), or if no opinion is given (NOT GIVEN).",
                    "whyIELTSTests": "Higher education requires understanding an author's stance and perspective in scholarly articles.",
                    "performanceImpact": "Appears in Passage 2 and 3 where articles deal with academic debate, analysis, and opinion.",
                    "keyFocus": "Opinion verbs ('suggests', 'argues', 'believes', 'claims') and modal verbs ('may', 'could', 'should')."
                },
                "recognise": {
                    "examAppearance": "Usually Passage 2 or 3. Accompanied by YES / NO / NOT GIVEN or 4-option Multiple Choice (A, B, C, D).",
                    "identifyingMarkers": "Instructions: 'Do the following statements agree with the claims/views of the writer?'",
                    "trapRadar": {
                        "name": "The Reported Speech Trap",
                        "trapDescription": "The author quotes someone else's opinion (e.g. 'Critics claim that...'), but the author personally disagrees.",
                        "howToAvoid": "Make sure you identify the WRITER'S opinion, not the opinion of someone the writer is quoting or debating."
                    }
                },
                "strategise": {
                    "title": "3-Step Writer's Stance Strategy",
                    "timeTarget": "75 seconds per question",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Underline the Opinion Claim",
                            "instruction": "Find the key argument or attitude in the statement."
                        },
                        {
                            "step": 2,
                            "name": "Locate Author's Stance in Text",
                            "instruction": "Find where the author discusses this topic and check words like 'In my view', 'However', 'Evidence shows'."
                        },
                        {
                            "step": 3,
                            "name": "Compare Stances",
                            "instruction": "YES = agrees with writer's view. NO = contradicts writer's view. NOT GIVEN = author expresses no view."
                        }
                    ],
                    "goldenRules": [
                        "YES/NO/NOT GIVEN is about opinions; TRUE/FALSE/NOT GIVEN is about facts.",
                        "Write YES/NO/NOT GIVEN on the answer sheet (don't write TRUE/FALSE).",
                        "Pay close attention to attitude adjectives: 'unconvincing', 'vital', 'exaggerated'."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 75,
                    "simulationTitle": "Stance Analysis Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Writing TRUE instead of YES",
                            "reason": "Careless labeling.",
                            "fix": "Double-check the question instructions."
                        }
                    ],
                    "bandChecklist": [
                        "Identified author's true stance?",
                        "Used correct YES/NO labels?"
                    ]
                },
                "practice": {
                    "passageTitle": "Artificial Intelligence and the Human Creative Spark",
                    "passageContext": "In recent years, the rapid emergence of generative artificial intelligence has ignited heated debate across the global artistic community. Optimists proclaim that algorithms will democratize creativity, whereas sceptics dread the obsolescence of human painters, novelists, and composers.\n\nHowever, attributing genuine subjective creative agency to computational neural networks fundamentally misunderstands the nature of artistic expression. A language model or image synthesis engine does not possess emotional motivations, existential doubts, or cultural lived experience; it simply performs complex mathematical probabilistic forecasting based on vast archives of pre-existing human works.\n\nNevertheless, rather than viewing these computational systems as mortal adversaries, visionary artists should view algorithmic platforms as augmentative creative instruments. When harnessed mindfully, artificial intelligence allows artists to rapidly prototype ideas, break out of repetitive habits, and discover unexpected conceptual combinations.",
                    "questions": [
                        {
                            "id": "r_ws_1",
                            "type": "Yes / No / Not Given",
                            "prompt": "Current generative algorithms possess genuine subjective emotional motivation when composing poetry.",
                            "answer": "NO",
                            "explanation": "Paragraph 2 states that neural networks do 'not possess emotional motivations, existential doubts, or cultural lived experience'.",
                            "hints": [
                                "Locate Paragraph 2 where the author discusses subjective emotions.",
                                "Does the writer agree that algorithms feel emotional motivation?",
                                "The writer directly rejects this claim, so the answer is NO."
                            ]
                        },
                        {
                            "id": "r_ws_2",
                            "type": "Yes / No / Not Given",
                            "prompt": "Human artists will discover new expressive horizons by treating artificial intelligence as a collaborator.",
                            "answer": "YES",
                            "explanation": "Paragraph 3 argues artists should view platforms as augmentative instruments to discover unexpected conceptual combinations.",
                            "hints": [
                                "Find the author's opinion in Paragraph 3 on using AI tools.",
                                "Does the author advocate using algorithmic platforms as augmentative instruments?",
                                "The author's view agrees with the statement, so the answer is YES."
                            ]
                        },
                        {
                            "id": "r_ws_3",
                            "type": "Yes / No / Not Given",
                            "prompt": "Digital artwork created with AI assistance sells for higher prices than traditional paintings.",
                            "answer": "NOT GIVEN",
                            "explanation": "The text discusses artistic expression and creativity, but makes zero mention of art market prices or auction sales.",
                            "hints": [
                                "Search the passage for words like 'prices', 'sells', 'market', or 'auction'.",
                                "Does the author discuss the financial value of AI art compared to traditional art?",
                                "No monetary comparisons are made anywhere in the text: NOT GIVEN."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "R_FEATURE_MATCH",
                "id": "r-feature-match",
                "badge": "Passage 2-3",
                "name": "Matching Features & Information",
                "questionTypes": [
                    "Matching Features",
                    "Matching Information to Paragraphs"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 8.0",
                "understand": {
                    "summary": "Match statements or scientific findings to a list of researchers, theories, or historical periods.",
                    "whatItMeant": "Scan for proper names or specific features across the text and connect them to their corresponding findings.",
                    "whyIELTSTests": "Assesses your ability to synthesize information dispersed across multiple paragraphs.",
                    "performanceImpact": "Very common in Passage 2 and 3. Can be solved quickly by scanning for capitalized names first.",
                    "keyFocus": "Proper names, chronological dates, and paraphrased research findings."
                },
                "recognise": {
                    "examAppearance": "A box of options (A-E: Names of people or places) and numbered statements.",
                    "identifyingMarkers": "Instructions stating 'You may use any letter more than once (NB)' or 'Match each statement with the correct person'.",
                    "trapRadar": {
                        "name": "The Mentioned Once Trap",
                        "trapDescription": "A scientist's name appears in two different paragraphs, but the relevant finding is in the second paragraph.",
                        "howToAvoid": "Scan the entire text first and highlight EVERY occurrence of each name before matching."
                    }
                },
                "strategise": {
                    "title": "3-Step Feature Matching Strategy",
                    "timeTarget": "70 seconds per question",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Scan and Circle All Names",
                            "instruction": "Find all names from the box in the passage and circle every place they appear."
                        },
                        {
                            "step": 2,
                            "name": "Read What Each Person Did",
                            "instruction": "Read the sentences around each name to understand their specific experiment or finding."
                        },
                        {
                            "step": 3,
                            "name": "Match Statements to Letters",
                            "instruction": "Match each statement with the corresponding person's finding."
                        }
                    ],
                    "goldenRules": [
                        "Questions do NOT follow text order; names appear scattered throughout.",
                        "If instructions say 'NB: You may use any letter more than once', expect one letter to be repeated.",
                        "Focus on findings ('found that', 'demonstrated that', 'suggested that')."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 70,
                    "simulationTitle": "Feature Matching Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Missing second occurrence of a name",
                            "reason": "Only read the first paragraph where the name appeared.",
                            "fix": "Always circle all occurrences first."
                        }
                    ],
                    "bandChecklist": [
                        "Scanned all name occurrences?",
                        "Checked for repeated letters?"
                    ]
                },
                "practice": {
                    "passageTitle": "The Cognitive Mechanisms of Avian Navigation",
                    "passageContext": "For decades, zoologists have puzzled over how migratory birds navigate thousands of kilometres across featureless oceans with pinpoint precision.\n\nDr. Stephen T. Emlen demonstrated in landmark planetarium experiments that indigo buntings do not inherit an innate star map; instead, young birds learn the patterns of stellar constellations by observing the rotational center of the night sky around Polaris.\n\nDr. William T. Keeton investigated geomagnetic orientation in homing pigeons. He discovered that when bar magnets or miniature Helmholtz coils were affixed to the birds' backs, their homing ability was severely scrambled on heavily overcast days, yet remained unaffected under clear blue skies when the sun was visible as a primary compass.\n\nMeanwhile, Dr. Klaus Schmidt-Koenig argued that celestial and magnetic cues are supplemented by atmospheric olfaction, demonstrating that pigeons formulate an olfactory gradient map of volatile environmental scents.",
                    "questions": [
                        {
                            "id": "r_fm_1",
                            "type": "Matching Features",
                            "prompt": "Demonstrated that young songbirds learn stellar constellations by watching the sky's rotation.",
                            "options": [
                                "A. Dr. Stephen T. Emlen",
                                "B. Dr. William T. Keeton",
                                "C. Dr. Klaus Schmidt-Koenig"
                            ],
                            "answer": "A. Dr. Stephen T. Emlen",
                            "explanation": "Paragraph 2 states that Dr. Stephen T. Emlen demonstrated buntings learn constellations around Polaris.",
                            "hints": [
                                "Look for the researcher who conducted planetarium experiments.",
                                "Match 'learn patterns of stellar constellations' with the researcher in Paragraph 2.",
                                "The researcher is Dr. Stephen T. Emlen (Option A)."
                            ]
                        },
                        {
                            "id": "r_fm_2",
                            "type": "Matching Features",
                            "prompt": "Showed that magnetic disruption only disorients birds when the sun is obscured.",
                            "options": [
                                "A. Dr. Stephen T. Emlen",
                                "B. Dr. William T. Keeton",
                                "C. Dr. Klaus Schmidt-Koenig"
                            ],
                            "answer": "B. Dr. William T. Keeton",
                            "explanation": "Paragraph 3 outlines Dr. William T. Keeton's experiments with bar magnets on overcast versus sunny days.",
                            "hints": [
                                "Look for 'bar magnets' and 'overcast days' in Paragraph 3.",
                                "Identify the scientist named in connection with Helmholtz coils.",
                                "The scientist is Dr. William T. Keeton (Option B)."
                            ]
                        },
                        {
                            "id": "r_fm_3",
                            "type": "Matching Features",
                            "prompt": "Proposed that birds use airborne environmental scents to build a navigational map.",
                            "options": [
                                "A. Dr. Stephen T. Emlen",
                                "B. Dr. William T. Keeton",
                                "C. Dr. Klaus Schmidt-Koenig"
                            ],
                            "answer": "C. Dr. Klaus Schmidt-Koenig",
                            "explanation": "Paragraph 4 explains Dr. Klaus Schmidt-Koenig's hypothesis on olfactory maps.",
                            "hints": [
                                "Look for 'olfactory' or 'environmental scents' in Paragraph 4.",
                                "Which researcher investigated airborne scents?",
                                "The researcher is Dr. Klaus Schmidt-Koenig (Option C)."
                            ]
                        }
                    ]
                }
            },
            {
                "code": "R_SYNTH_SUMMARY",
                "id": "r-synth-summary",
                "badge": "Passage 1-3",
                "name": "Summary & Flow-Chart Completion",
                "questionTypes": [
                    "Summary Completion (With/Without Word Box)",
                    "Flow-Chart Completion"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 7.5",
                "understand": {
                    "summary": "Complete a summary or flow-chart diagram of a section of the text using words from the passage or from a box of options.",
                    "whatItMeant": "Understand a cohesive summary of several paragraphs and select words that make grammatical and factual sense.",
                    "whyIELTSTests": "Tests your ability to understand how stages in a process connect and condense complex text.",
                    "performanceImpact": "High yield: summary questions often come in clusters of 4-6 questions and focus on one specific part of the text.",
                    "keyFocus": "Predicting parts of speech, understanding process stages, and checking grammar."
                },
                "recognise": {
                    "examAppearance": "A paragraph with gaps or a sequence of boxes connected by arrows (flow-chart).",
                    "identifyingMarkers": "Title over the summary (e.g. 'The manufacturing process') and a word limit or a box of letters.",
                    "trapRadar": {
                        "name": "The Word Box Synonym Trap",
                        "trapDescription": "When a box of words is given, the words in the box are synonyms of the words in the passage.",
                        "howToAvoid": "Find the word in the passage first, then find its matching synonym in the word box."
                    }
                },
                "strategise": {
                    "title": "3-Step Summary Completion Strategy",
                    "timeTarget": "60 seconds per question",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Locate Summary in Passage",
                            "instruction": "Use the summary title to find where this topic starts and ends in the passage."
                        },
                        {
                            "step": 2,
                            "name": "Predict Part of Speech",
                            "instruction": "Look at the words before and after the gap (noun, verb, adjective?)."
                        },
                        {
                            "step": 3,
                            "name": "Select Word & Check Meaning",
                            "instruction": "Find the matching word in the text and ensure the sentence reads smoothly and grammatically."
                        }
                    ],
                    "goldenRules": [
                        "Summary questions almost always come from ONE specific section of the text.",
                        "Read the completed summary sentence aloud in your head to check grammar.",
                        "If using a word box, write the letter (A, B, C), not the word itself."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 60,
                    "simulationTitle": "Summary Completion Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Searching the whole text",
                            "reason": "Did not realize the summary comes from one section.",
                            "fix": "Use title and first sentence to anchor the text range."
                        }
                    ],
                    "bandChecklist": [
                        "Anchored section in passage?",
                        "Grammatically correct fit?"
                    ]
                },
                "practice": {
                    "passageTitle": "Restoring Coastal Salt Marshes: An Ecological Blueprint",
                    "passageContext": "Coastal salt marshes serve as vital ecological buffers, mitigating hurricane storm surges, filtering agricultural runoff, and sequestering carbon at rates tenfold higher than tropical rainforests. Decades of land reclamation for industrial docks and livestock pastures degraded over half of historical tidal wetlands worldwide.\n\nModern managed realignment projects now aim to reverse this decline through controlled seawall breaching. Before excavating breaches, civil engineers undertake comprehensive bathymetric surveys to model tidal amplitude and current velocity. Once the embankments are opened, incoming tides deposit rich mineral sediment into shallow intertidal mudflats.\n\nPioneer vegetation, notably glasswort (Salicornia) and cordgrass (Spartina), rapidly colonizes the newly deposited mud. Their dense subterranean root systems bind loose silt and reduce water velocity, accelerating further sediment accretion and permanently establishing a flourishing intertidal marsh habitat.",
                    "questions": [
                        {
                            "id": "r_sum_1",
                            "type": "Summary Completion",
                            "prompt": "Complete the summary gap using NO MORE THAN TWO WORDS from the passage:\nEngineers must conduct thorough _____ surveys to measure water currents prior to breaching seawalls.",
                            "answer": "bathymetric",
                            "acceptableAnswers": [
                                "bathymetric",
                                "bathymetric surveys"
                            ],
                            "explanation": "Paragraph 2 states engineers conduct 'comprehensive bathymetric surveys' to model tidal current velocity.",
                            "hints": [
                                "Scan Paragraph 2 for 'surveys' or 'currents'.",
                                "Look at the word modifying 'surveys'.",
                                "The adjective from the passage is 'bathymetric'."
                            ]
                        },
                        {
                            "id": "r_sum_2",
                            "type": "Summary Completion",
                            "prompt": "Complete the summary gap using NO MORE THAN ONE WORD from the passage:\nPioneer plants stabilize the wetland by anchoring loose _____ with their root systems.",
                            "answer": "silt",
                            "acceptableAnswers": [
                                "silt",
                                "sediment"
                            ],
                            "explanation": "Paragraph 3 notes root systems 'bind loose silt and reduce water velocity'.",
                            "hints": [
                                "Scan Paragraph 3 for 'root systems' and 'bind loose...'",
                                "Identify the singular noun following 'loose'.",
                                "The exact word from Paragraph 3 is 'silt'."
                            ]
                        },
                        {
                            "id": "r_sum_3",
                            "type": "Summary Completion",
                            "prompt": "Complete the summary gap using NO MORE THAN ONE WORD from the passage:\nSalt marshes prevent climate change by absorbing large quantities of atmospheric _____.",
                            "answer": "carbon",
                            "acceptableAnswers": [
                                "carbon"
                            ],
                            "explanation": "Paragraph 1 highlights salt marshes 'sequestering carbon at rates tenfold higher than tropical rainforests'.",
                            "hints": [
                                "Look in Paragraph 1 for 'sequestering' or climate buffering.",
                                "What chemical element is absorbed?",
                                "The word is 'carbon'."
                            ]
                        }
                    ]
                }
            }
        ]
    },
    "writing": {
        "title": "Writing Mastery",
        "description": "Two structured writing tasks assessing academic reporting and essay composition.",
        "timeAllowed": "60 minutes total (suggested: 20 min for Task 1, 40 min for Task 2)",
        "totalQuestions": 2,
        "subskills": [
            {
                "code": "W_TASK_ACHIEVE",
                "id": "w-task-achieve",
                "badge": "Task 1",
                "name": "Task 1: Visual Data Report & Letters",
                "questionTypes": [
                    "Academic: Bar/Line/Pie/Table",
                    "Academic: Process/Map",
                    "General: Formal/Personal Letter"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 8.5",
                "understand": {
                    "summary": "Write a 150+ word factual report describing trends and comparisons in visual data (Academic), or write a clear formal/informal letter (General Training).",
                    "whatItMeant": "Select main features, compare data points, and present a clear overview without giving personal opinions.",
                    "whyIELTSTests": "Assesses whether you can synthesize factual data clearly and objectively in professional and academic settings.",
                    "performanceImpact": "Task 1 accounts for 1/3 of your total writing score. A clear overview is mandatory for Band 6 and above.",
                    "keyFocus": "A clear 2-sentence Overview, accurate data reporting, and comparative vocabulary."
                },
                "recognise": {
                    "examAppearance": "Task 1 on the exam paper. Academic: 1-2 charts, graphs, tables, maps, or process diagrams. General: A letter prompt with 3 bullet points.",
                    "identifyingMarkers": "Instructions: 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'",
                    "trapRadar": {
                        "name": "The Missing Overview Trap",
                        "trapDescription": "Writing all the detailed numbers but forgetting to include an overall summary of the main trends.",
                        "howToAvoid": "Always include a dedicated Overview paragraph (Paragraph 2) highlighting the 2-3 most noticeable big-picture features."
                    }
                },
                "strategise": {
                    "title": "4-Paragraph Task 1 Formula",
                    "timeTarget": "20 minutes (3 min plan, 14 min write, 3 min check)",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Paragraph 1: Introduction",
                            "instruction": "Paraphrase the prompt in 1-2 sentences using synonyms (e.g. 'The bar chart illustrates...')."
                        },
                        {
                            "step": 2,
                            "name": "Paragraph 2: Overview",
                            "instruction": "State the 2-3 general trends without mentioning specific data numbers (e.g. 'Overall, while X increased, Y declined...')."
                        },
                        {
                            "step": 3,
                            "name": "Paragraphs 3 & 4: Body Details",
                            "instruction": "Group data logically and compare key figures, highs, lows, and percentage changes with exact units."
                        }
                    ],
                    "goldenRules": [
                        "Never give personal opinions, explanations, or reasons why trends occurred in Task 1.",
                        "Aim for 160-180 words; falling below 150 words receives a penalty.",
                        "Always include units of measurement (%, million, tonnes, km)."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 1200,
                    "simulationTitle": "Task 1 20-Min Simulation"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Listing every number mechanically",
                            "reason": "Did not select and group key features.",
                            "fix": "Group high and low points; compare instead of just listing."
                        }
                    ],
                    "bandChecklist": [
                        "Clear overview included?",
                        "150+ words?",
                        "Paraphrased introduction?"
                    ]
                },
                "practice": {
                    "taskType": "Academic Task 1",
                    "prompt": "The line graph below shows the percentage of electricity generated from renewable sources in four European nations between 2000 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
                    "targetWordCount": 150,
                    "scaffolding": [
                        "Paragraph 1: Paraphrase the prompt using strong analytical verbs ('illustrates', 'compares').",
                        "Paragraph 2: Overview of 2 prominent overall trends without citing specific figures.",
                        "Paragraph 3: Detail the leading two nations with precise figures and time milestones.",
                        "Paragraph 4: Detail the remaining nations and draw clear comparisons."
                    ]
                }
            },
            {
                "code": "W_COHERENCE",
                "id": "w-coherence",
                "badge": "Task 2",
                "name": "Task 2: Opinion Essay (Agree / Disagree)",
                "questionTypes": [
                    "To what extent do you agree or disagree?",
                    "Opinion Essay"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 8.5",
                "understand": {
                    "summary": "Write a 250+ word academic essay expressing your clear position on an issue and supporting it with reasoned body paragraphs.",
                    "whatItMeant": "Present a clear stance in your introduction, develop 2 strong body paragraphs with topic sentences, and conclude firmly.",
                    "whyIELTSTests": "Tests your ability to present, organize, and support an intellectual argument in academic English.",
                    "performanceImpact": "Task 2 accounts for 2/3 of your total writing score. Having a strong 4-paragraph structure guarantees clear coherence.",
                    "keyFocus": "Clear thesis statement, logical paragraphing, and cohesive linking words."
                },
                "recognise": {
                    "examAppearance": "Task 2 statement followed by: 'To what extent do you agree or disagree?' Write at least 250 words.",
                    "identifyingMarkers": "Requires a clear personal stance from start to finish.",
                    "trapRadar": {
                        "name": "The Shifting Position Trap",
                        "trapDescription": "Agreeing in the introduction, arguing against it in Body 1, and coming to an ambiguous conclusion.",
                        "howToAvoid": "Decide your position before writing. Keep your thesis consistent in Introduction, Body 1, Body 2, and Conclusion."
                    }
                },
                "strategise": {
                    "title": "4-Paragraph Opinion Essay Blueprint",
                    "timeTarget": "40 minutes (5 min plan, 30 min write, 5 min check)",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Introduction (40 words)",
                            "instruction": "Sentence 1: Paraphrase prompt. Sentence 2: Clear thesis stating whether you agree or disagree."
                        },
                        {
                            "step": 2,
                            "name": "Body 1: First Reason (90 words)",
                            "instruction": "Topic sentence stating reason 1 -> Explanation -> Concrete example -> Result."
                        },
                        {
                            "step": 3,
                            "name": "Body 2: Second Reason (90 words)",
                            "instruction": "Topic sentence stating reason 2 -> Explanation -> Concrete example -> Result."
                        },
                        {
                            "step": 4,
                            "name": "Conclusion (30 words)",
                            "instruction": "Restate your thesis and summarize your two main supporting points in fresh words."
                        }
                    ],
                    "goldenRules": [
                        "Always write at least 250 words (aim for 260-280 words).",
                        "Every body paragraph MUST begin with a clear topic sentence.",
                        "Support abstract points with realistic examples."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 2400,
                    "simulationTitle": "Task 2 40-Min Simulation"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Unclear topic sentences",
                            "reason": "Paragraph lacked a clear focus.",
                            "fix": "Start each body paragraph with: 'The primary reason why...'"
                        }
                    ],
                    "bandChecklist": [
                        "Clear thesis in introduction?",
                        "250+ words?",
                        "Two distinct body paragraphs?"
                    ]
                },
                "practice": {
                    "taskType": "Task 2 Opinion",
                    "prompt": "Some people believe that university education should focus solely on providing graduates with knowledge and skills relevant to workplace employment. Others argue that higher education should focus on broad academic understanding regardless of career application.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words.",
                    "targetWordCount": 250,
                    "scaffolding": [
                        "Introduction: Paraphrase topic + clear thesis statement establishing your stance.",
                        "Body Paragraph 1: Analyze the workplace/vocational argument with supporting examples.",
                        "Body Paragraph 2: Analyze the broad academic knowledge argument and why theoretical depth matters.",
                        "Conclusion: Restate thesis with nuanced synthesis of both viewpoints."
                    ]
                }
            },
            {
                "code": "W_LEXICAL",
                "id": "w-lexical",
                "badge": "Task 2",
                "name": "Task 2: Discussion Essay (Both Views)",
                "questionTypes": [
                    "Discuss both views and give your opinion",
                    "Two-Sided Essay"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 8.5",
                "understand": {
                    "summary": "Discuss both sides of a controversial topic fairly, develop both perspectives, and give your own personal opinion.",
                    "whatItMeant": "Dedicate one body paragraph to View A, one body paragraph to View B, and make your own preference clear.",
                    "whyIELTSTests": "Examiners assess whether you can evaluate multiple viewpoints balanced against each other.",
                    "performanceImpact": "If you only discuss one view when asked to discuss both, your Task Response score is capped at Band 5.",
                    "keyFocus": "Balanced argument development, transition phrases ('On the one hand', 'Conversely'), and academic vocabulary."
                },
                "recognise": {
                    "examAppearance": "Two opposing statements followed by: 'Discuss both views and give your opinion.'",
                    "identifyingMarkers": "Requires exploring both perspectives even if you personally disagree with one.",
                    "trapRadar": {
                        "name": "The Imbalanced Body Trap",
                        "trapDescription": "Writing 120 words for the side you agree with, but only 30 words for the side you disagree with.",
                        "howToAvoid": "Give roughly equal weight (70-90 words) to each view before declaring which side you find more convincing."
                    }
                },
                "strategise": {
                    "title": "4-Paragraph Both Views Blueprint",
                    "timeTarget": "40 minutes",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Introduction",
                            "instruction": "Paraphrase both views and state your opinion upfront."
                        },
                        {
                            "step": 2,
                            "name": "Body 1: Discuss First View",
                            "instruction": "Explain why proponents hold View A with valid arguments and an example."
                        },
                        {
                            "step": 3,
                            "name": "Body 2: Discuss Second View + Your Opinion",
                            "instruction": "Explain View B and why you personally consider it more convincing."
                        },
                        {
                            "step": 4,
                            "name": "Conclusion",
                            "instruction": "Summarize both views and restate your final judgment."
                        }
                    ],
                    "goldenRules": [
                        "You MUST discuss both views thoroughly.",
                        "State your own opinion clearly in both the introduction and conclusion.",
                        "Use objective academic tone: 'Supporters argue that...', 'Proponents believe...'."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 2400,
                    "simulationTitle": "Both Views Simulation"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Neglecting one view",
                            "reason": "Focused entirely on own opinion.",
                            "fix": "Ensure both views have full development."
                        }
                    ],
                    "bandChecklist": [
                        "Both views discussed?",
                        "Own opinion stated clearly?"
                    ]
                },
                "practice": {
                    "taskType": "Task 2 Discussion",
                    "prompt": "In many cities around the world, historical buildings are being demolished to make way for modern high-rise apartments and shopping complexes.\n\nDo you consider this to be a positive or negative development?\n\nWrite at least 250 words.",
                    "targetWordCount": 250,
                    "scaffolding": [
                        "Introduction: Rephrase topic + state clear perspective (positive, negative, or balanced).",
                        "Body Paragraph 1: Cultural heritage, architectural identity, and tourism benefits of preservation.",
                        "Body Paragraph 2: Practical requirements of housing affordability, energy efficiency, and urban population density.",
                        "Conclusion: Summarise key arguments with forward-looking recommendation."
                    ]
                }
            },
            {
                "code": "W_GRAMMAR",
                "id": "w-grammar",
                "badge": "Task 2",
                "name": "Task 2: Problem & Solution Essay",
                "questionTypes": [
                    "Causes & Solutions",
                    "Problems & Solutions",
                    "Two-Part Questions"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 8.5",
                "understand": {
                    "summary": "Analyze the causes of a modern problem (traffic, pollution, obesity) and propose practical, realistic solutions.",
                    "whatItMeant": "Identify 1-2 root causes in Body 1, and pair them with 1-2 direct solutions in Body 2.",
                    "whyIELTSTests": "Tests analytical problem-solving and cause-and-effect linguistic structures in English.",
                    "performanceImpact": "Very common question type. If your solutions directly solve the causes identified in Body 1, you achieve Band 7+.",
                    "keyFocus": "Cause-and-effect language ('leads to', 'stems from', 'as a consequence') and solution modals ('should', 'ought to')."
                },
                "recognise": {
                    "examAppearance": "A statement about a modern problem followed by: 'What are the causes of this? What solutions can you suggest?'",
                    "identifyingMarkers": "Two distinct questions in the prompt that must both be answered.",
                    "trapRadar": {
                        "name": "The Disconnected Solution Trap",
                        "trapDescription": "Body 1 discusses economic causes, but Body 2 proposes education solutions that don't address those economic causes.",
                        "howToAvoid": "Every solution in Body 2 should directly target a specific cause you identified in Body 1."
                    }
                },
                "strategise": {
                    "title": "4-Paragraph Causes & Solutions Blueprint",
                    "timeTarget": "40 minutes",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Introduction",
                            "instruction": "Paraphrase the problem and state that causes will be examined and solutions proposed."
                        },
                        {
                            "step": 2,
                            "name": "Body 1: 1-2 Major Causes",
                            "instruction": "Explain Cause 1 and Cause 2 with clear mechanisms and examples."
                        },
                        {
                            "step": 3,
                            "name": "Body 2: Direct Practical Solutions",
                            "instruction": "Propose Solution 1 (addressing Cause 1) and Solution 2 (addressing Cause 2)."
                        },
                        {
                            "step": 4,
                            "name": "Conclusion",
                            "instruction": "Summarize key causes and reiterate that practical action can resolve the issue."
                        }
                    ],
                    "goldenRules": [
                        "Answer BOTH questions equally (Causes and Solutions).",
                        "Propose specific measures: legislation, taxes, subsidies, community action.",
                        "Avoid vague platitudes like 'people should be more careful'."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 2400,
                    "simulationTitle": "Problem & Solution Simulation"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Listing too many causes without explanation",
                            "reason": "Wrote 5 causes without developing any.",
                            "fix": "Limit yourself to 2 causes and explain each thoroughly."
                        }
                    ],
                    "bandChecklist": [
                        "Addressed causes and solutions equally?",
                        "Solutions matched causes?"
                    ]
                },
                "practice": {
                    "taskType": "Task 2 Problem & Solution",
                    "prompt": "Despite technological advancements in public transit, traffic congestion in metropolitan centers continues to worsen worldwide.\n\nWhat are the primary causes of this problem, and what practical measures could governments implement to address it?\n\nWrite at least 250 words.",
                    "targetWordCount": 250,
                    "scaffolding": [
                        "Introduction: Rephrase topic + state causes (suburban sprawl, car subsidies) and solutions (congestion pricing, rail investment).",
                        "Body Paragraph 1: Detailed causes with complex cause-and-effect connectors ('consequently', 'attributable to').",
                        "Body Paragraph 2: Practical government measures with conditional structures ('If municipal authorities were to...').",
                        "Conclusion: Final summary emphasizing sustainable multimodal transport."
                    ]
                }
            }
        ]
    },
    "speaking": {
        "title": "Speaking Mastery",
        "description": "Three-part one-on-one interview with an examiner testing fluency, vocabulary, grammar, and pronunciation.",
        "timeAllowed": "11–14 minutes total",
        "totalQuestions": 3,
        "subskills": [
            {
                "code": "S_FLUENCY",
                "id": "s-fluency",
                "badge": "Part 1",
                "name": "Part 1: Interview & Everyday Topics",
                "questionTypes": [
                    "Familiar Personal Questions",
                    "Routines, Work, Hometown, Hobbies"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 5.5 - 7.5",
                "understand": {
                    "summary": "Answer 4-5 questions about familiar everyday topics (hometown, studies, work, free time) smoothly and naturally.",
                    "whatItMeant": "Provide 2-3 complete sentences per question without long hesitations or sounding memorized.",
                    "whyIELTSTests": "Examiners assess your natural conversational fluency and readiness to speak in English.",
                    "performanceImpact": "Part 1 sets the tone for your whole test. Relaxed, fluent answers build confidence and examiner goodwill.",
                    "keyFocus": "Extending answers using Reason + Example (2-3 sentences per answer)."
                },
                "recognise": {
                    "examAppearance": "The first 4-5 minutes of the test. Fast-paced, friendly questions about yourself.",
                    "identifyingMarkers": "Questions starting with 'Do you prefer...', 'How often do you...', 'Tell me about your hometown...'",
                    "trapRadar": {
                        "name": "The One-Word Answer Trap",
                        "trapDescription": "Answering simply 'Yes, I like it' or 'In Alexandria' and waiting silently for the next question.",
                        "howToAvoid": "Always answer directly, then add 'because...' and one extra detail or past memory."
                    }
                },
                "strategise": {
                    "title": "3-Sentence Part 1 Formula",
                    "timeTarget": "15-20 seconds per answer",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Direct Answer",
                            "instruction": "Give an immediate, natural response to the question in sentence 1."
                        },
                        {
                            "step": 2,
                            "name": "Give a Reason",
                            "instruction": "Explain why: 'This is mainly because...'"
                        },
                        {
                            "step": 3,
                            "name": "Add a Detail or Example",
                            "instruction": "Add a recent example or detail: 'For instance, just last weekend I...'"
                        }
                    ],
                    "goldenRules": [
                        "Aim for 2 to 3 sentences per answer; don't give a speech.",
                        "Never memorize answers word for word; examiners spot memorized scripts instantly.",
                        "Speak at a natural, conversational pace with good eye contact."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 20,
                    "simulationTitle": "Part 1 Rapid Fire Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Too short or too long",
                            "reason": "Spoke 1 word or spoke for 2 minutes on Part 1.",
                            "fix": "Keep answers to 2-3 sentences."
                        }
                    ],
                    "bandChecklist": [
                        "Answered directly?",
                        "Added reason and detail?"
                    ]
                },
                "practice": {
                    "part": "Part 1",
                    "topic": "Hometown, Daily Routines & Leisure",
                    "cueCard": [
                        "Let's talk about your hometown. Where did you grow up?",
                        "What do you enjoy most about living in your current city?",
                        "Do you prefer spending your free time outdoors or indoors? Why?",
                        "How has technology changed the way you spend your weekends?"
                    ],
                    "modelPoints": [
                        "Use the 3-Sentence Rule: Direct Answer + Reason + Specific Personal Example.",
                        "Avoid flat 'yes' or 'no' responses; speak with continuous, fluent rhythm.",
                        "Vary conversational discourse markers: 'To be completely honest...', 'What stands out to me most is...'"
                    ]
                }
            },
            {
                "code": "S_LEXICAL",
                "id": "s-lexical",
                "badge": "Part 2",
                "name": "Part 2: The Cue Card (2-Minute Talk)",
                "questionTypes": [
                    "Individual Long Turn",
                    "Monologue from Task Card"
                ],
                "cognitiveLevel": "Core",
                "difficulty": "Band 6.0 - 8.5",
                "understand": {
                    "summary": "Speak uninterrupted for 1 to 2 minutes on a given topic after 1 minute of preparation time with a pen and paper.",
                    "whatItMeant": "Structure a coherent personal story covering all the bullet points on your card.",
                    "whyIELTSTests": "Examiners evaluate whether you can sustain a long turn in English without prompting or long silences.",
                    "performanceImpact": "Part 2 is the most influential portion of the speaking test. Speaking fluently for 1:45-2:00 mins guarantees Band 6.5+.",
                    "keyFocus": "Using 1 minute preparation time effectively and maintaining continuous flow."
                },
                "recognise": {
                    "examAppearance": "Examiner hands you a cue card with a topic (e.g. 'Describe a person you admire') and 4 bullet points.",
                    "identifyingMarkers": "1 minute to prepare notes, followed by 1 to 2 minutes of uninterrupted speaking.",
                    "trapRadar": {
                        "name": "The Early Finish Trap",
                        "trapDescription": "Stopping after 45 seconds or 1 minute and looking at the examiner, which reduces your fluency score.",
                        "howToAvoid": "Cover all bullet points and keep giving extra background details until the examiner says 'Thank you'."
                    }
                },
                "strategise": {
                    "title": "1-Minute Prep & 2-Minute Speech Blueprint",
                    "timeTarget": "1 min prep + 2 min talk",
                    "steps": [
                        {
                            "step": 1,
                            "name": "1-Min Prep Notes",
                            "instruction": "Write 2-3 keyword reminders for each bullet point (do not write full sentences)."
                        },
                        {
                            "step": 2,
                            "name": "Story Narrative Flow",
                            "instruction": "Introduce the topic -> Where/When -> Details -> Why it was important to you."
                        },
                        {
                            "step": 3,
                            "name": "Expand on Feelings",
                            "instruction": "Spend the final 45 seconds explaining your personal feelings, reflections, and future thoughts."
                        }
                    ],
                    "goldenRules": [
                        "Always speak until the examiner interrupts you.",
                        "Use past, present, and hypothetical structures ('If I had to do it again...').",
                        "Glance at your notes to stay on track, but look at the examiner while speaking."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 120,
                    "simulationTitle": "2-Minute Cue Card Simulation"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Running out of things to say",
                            "reason": "Did not prepare enough narrative details.",
                            "fix": "Talk about how the experience made you feel and what you learned."
                        }
                    ],
                    "bandChecklist": [
                        "Spoke for 1:45-2:00 mins?",
                        "Addressed all bullet points?"
                    ]
                },
                "practice": {
                    "part": "Part 2",
                    "topic": "An Influential Teacher or Mentor",
                    "prepSeconds": 60,
                    "speakSeconds": 120,
                    "cueCard": [
                        "Describe a teacher, mentor, or leader who had a significant positive influence on your life.",
                        "You should say:",
                        "• Who this person was and where you met them",
                        "• What subject or skill they taught you",
                        "• What specific qualities made their guidance memorable",
                        "And explain why their influence had such an enduring impact on your personal development."
                    ],
                    "modelPoints": [
                        "Use 1 minute prep to jot down 4 keywords: Name/Setting, Teaching style, Memorable event, Long-term impact.",
                        "Structure chronologically: Past encounter -> Teaching method -> Turning point -> Lasting impression.",
                        "Lexical resources: 'inspirational pedagogy', 'nurtured intellectual curiosity', 'constructive critique', 'pivotal milestone'."
                    ]
                }
            },
            {
                "code": "S_GRAMMAR",
                "id": "s-grammar",
                "badge": "Part 3",
                "name": "Part 3: Discussion & Analysis",
                "questionTypes": [
                    "Two-Way Abstract Discussion",
                    "Speculating, Comparing, Evaluating"
                ],
                "cognitiveLevel": "Advanced",
                "difficulty": "Band 6.5 - 8.5",
                "understand": {
                    "summary": "Discuss abstract, social, and global issues linked to the Part 2 topic in a two-way academic dialogue.",
                    "whatItMeant": "Move away from personal anecdotes to analyze society, trends, causes, and future predictions.",
                    "whyIELTSTests": "Examiners use Part 3 to test your peak language ability for Band 7, 8, and 9.",
                    "performanceImpact": "Demonstrating complex sentences, idiomatic expressions, and mature thinking pushes you into high band brackets.",
                    "keyFocus": "The AREA method (Answer, Reason, Example, Alternative) and speculating language."
                },
                "recognise": {
                    "examAppearance": "The final 4-5 minutes. Questions ask about broader societal impact (e.g. 'How has technology changed education?').",
                    "identifyingMarkers": "Abstract prompts: 'Why do you think...', 'To what extent...', 'How will this change in the future?'",
                    "trapRadar": {
                        "name": "The Personal Story Trap",
                        "trapDescription": "Giving personal stories about yourself and your family when asked about society in general.",
                        "howToAvoid": "Talk about 'people in my country', 'older generations', 'society as a whole'."
                    }
                },
                "strategise": {
                    "title": "The AREA Analytical Framework",
                    "timeTarget": "30-45 seconds per response",
                    "steps": [
                        {
                            "step": 1,
                            "name": "A - Answer",
                            "instruction": "State your direct evaluation or perspective."
                        },
                        {
                            "step": 2,
                            "name": "R - Reason",
                            "instruction": "Explain the sociological or psychological rationale behind it."
                        },
                        {
                            "step": 3,
                            "name": "E - Example",
                            "instruction": "Give a broad societal example (e.g. 'In many developing nations...')."
                        },
                        {
                            "step": 4,
                            "name": "A - Alternative",
                            "instruction": "Consider the other side: 'On the other hand, some might argue...'"
                        }
                    ],
                    "goldenRules": [
                        "Use high-level signposting: 'Generally speaking', 'It is often argued that'.",
                        "Speculate on the future: 'It seems probable that in coming decades...'.",
                        "If you need time to think, use natural fillers: 'That's a thought-provoking question...'"
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 45,
                    "simulationTitle": "Part 3 Analytical Drill"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Too personal",
                            "reason": "Answered with 'I did this yesterday'.",
                            "fix": "Talk about broader societal patterns."
                        }
                    ],
                    "bandChecklist": [
                        "Used AREA method?",
                        "Spoke about society generally?"
                    ]
                },
                "practice": {
                    "part": "Part 3",
                    "topic": "Education, Mentorship & Future Learning",
                    "cueCard": [
                        "How has the relationship between educators and students evolved over the past several decades?",
                        "Do you believe artificial intelligence will eventually replace human instructors in universities?",
                        "What qualities separate an adequate teacher from an exceptional, transformative mentor?",
                        "Should higher education curricula be determined primarily by government industrial needs or student interests?"
                    ],
                    "modelPoints": [
                        "Apply the A-R-E framework: Answer directly -> Reason/Mechanism -> Example/Implication.",
                        "Use speculative conditionals: 'If universities were to automate instruction entirely, students might suffer from...'",
                        "Express nuanced perspective: 'While it is undeniable that algorithmic tools accelerate factual acquisition, they inherently lack...'"
                    ]
                }
            },
            {
                "code": "S_PRONUNCIATION",
                "id": "s-pronunciation",
                "badge": "Full Interview",
                "name": "Full Speaking Test Simulation",
                "questionTypes": [
                    "Complete 3-Part Exam Simulation",
                    "Pronunciation & Intonation"
                ],
                "cognitiveLevel": "Mastery",
                "difficulty": "Band 6.0 - 8.5",
                "understand": {
                    "summary": "Practice all 3 parts of the IELTS Speaking interview continuously with realistic timings and model Band 8.5 audio responses.",
                    "whatItMeant": "Maintain clear pronunciation, appropriate pacing, natural sentence stress, and varied intonation throughout the interview.",
                    "whyIELTSTests": "Pronunciation accounts for 25% of your total speaking score and directly influences how easily you are understood.",
                    "performanceImpact": "Good intonation and sentence stress make your English sound expressive and easy to follow.",
                    "keyFocus": "Sentence stress on content words, smooth linking between words, and clear vowel contrasts."
                },
                "recognise": {
                    "examAppearance": "The complete 11-14 minute interview spanning Part 1, Part 2, and Part 3.",
                    "identifyingMarkers": "Full exam scenario simulation with recorded examiner questions and model band responses.",
                    "trapRadar": {
                        "name": "The Monotone / Fast Delivery Trap",
                        "trapDescription": "Speaking in a flat, robotic tone or rushing too fast, causing words to blend together indistinctly.",
                        "howToAvoid": "Slow down slightly, pause between ideas, and emphasize key content words for natural rhythm."
                    }
                },
                "strategise": {
                    "title": "3-Pillar Pronunciation Strategy",
                    "timeTarget": "Full 14-min simulation",
                    "steps": [
                        {
                            "step": 1,
                            "name": "Sentence Stress",
                            "instruction": "Emphasize nouns, main verbs, and adjectives; say small grammar words quickly."
                        },
                        {
                            "step": 2,
                            "name": "Smooth Chunking",
                            "instruction": "Group words into natural thought chunks rather than saying each word individually."
                        },
                        {
                            "step": 3,
                            "name": "Expressive Intonation",
                            "instruction": "Raise your pitch slightly on open questions, and lower it at the end of statements."
                        }
                    ],
                    "goldenRules": [
                        "Accent does NOT lower your score; clarity, stress, and intonation matter.",
                        "Pronounce word endings clearly: past tense '-ed' and plural '-s'.",
                        "Smile and relax—facial expressions naturally improve voice tone and intonation."
                    ]
                },
                "timedPressure": {
                    "timePerQuestionSeconds": 180,
                    "simulationTitle": "Full Speaking Simulation"
                },
                "evaluate": {
                    "commonMistakes": [
                        {
                            "mistake": "Mumbling endings",
                            "reason": "Rushed speech.",
                            "fix": "Slow down and articulate final consonants clearly."
                        }
                    ],
                    "bandChecklist": [
                        "Clear sentence stress?",
                        "Natural thought chunks?"
                    ]
                },
                "practice": {
                    "part": "Full Interview",
                    "topic": "Speaking Test Pacing, Intonation & Chunking",
                    "cueCard": [
                        "Simulation Stage 1: Part 1 Personal Warm-up (4-5 minutes)",
                        "Simulation Stage 2: Part 2 Individual Long Turn (1 min prep + 2 min uninterrupted speech)",
                        "Simulation Stage 3: Part 3 Abstract Discursive Dialogue (4-5 minutes)"
                    ],
                    "modelPoints": [
                        "Focus on thought groups: pause at natural grammatical boundaries rather than mid-clause.",
                        "Sentence stress: accentuate content words (nouns, main verbs, contrast words) while reducing functional words.",
                        "Intonation curves: use rising intonation on non-final list items, and falling intonation to signal completion of thoughts."
                    ]
                }
            }
        ]
    }
};

    // Export Curriculum to window.IELTS
    ns.curriculumData = CURRICULUM;

    // Helper functions for easy querying
    ns.getSubskillByCode = function (code) {
        if (!code) return null;
        code = code.toUpperCase();
        var all = [];
        ["listening", "reading", "writing", "speaking"].forEach(function (skill) {
            all = all.concat(CURRICULUM[skill].subskills);
        });
        for (var i = 0; i < all.length; i++) {
            if (all[i].code.toUpperCase() === code || all[i].id === code.toLowerCase()) {
                return all[i];
            }
        }
        return null;
    };

    ns.getSubskillsBySkill = function (skill) {
        if (!skill) return [];
        if (CURRICULUM[skill.toLowerCase()]) {
            return CURRICULUM[skill.toLowerCase()].subskills;
        }
        var all = [];
        ["listening", "reading", "writing", "speaking"].forEach(function (s) {
            all = all.concat(CURRICULUM[s].subskills);
        });
        return all;
    };

    console.log("[Ahmad's English Platform] IELTS Curriculum Data Layer initialized successfully.");
})();
