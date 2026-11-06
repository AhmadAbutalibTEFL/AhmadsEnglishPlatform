/* ==========================================================================
   Ahmad's English Platform - Streamlined IELTS Learning & Practice Engine
   Instructional Hierarchy: SKILL -> QUESTION TYPE -> TEACH -> PRACTICE
   Simplified 2-Stage Sequence:
     Stage 1: Teach & Strategy (How it works, 3-step strategy, examiner trap, worked example)
     Stage 2: Practice Workout (Authentic Cambridge items, dual-pane reader, audio player, instant check)
   Architecture: Vanilla ES5/ES6, Zero Dependencies, GitHub Pages Compatible
   ========================================================================== */

(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    // LocalStorage helper for completed question types / subskills
    function getCompletedSubskills() {
        try {
            var raw = localStorage.getItem("ielts_subskills_completed");
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            return {};
        }
    }

    function setSubskillCompleted(code) {
        try {
            var done = getCompletedSubskills();
            done[code] = {
                completedAt: new Date().toISOString(),
                status: "mastered"
            };
            localStorage.setItem("ielts_subskills_completed", JSON.stringify(done));
        } catch (e) {}
    }

    // String cleaner & HTML escape helpers
    function esc(s) {
        if (!s) return "";
        return String(s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function cleanStr(s) {
        if (!s) return "";
        return String(s)
            .toLowerCase()
            .trim()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "")
            .replace(/\s+/g, " ");
    }

    // Audio file mapper for Listening subskills
    var AUDIO_MAP = {
        "L_SPEC_INFO": {
            url: "audio/ielts-listening/ielts-l1-booking.mp3",
            title: "IELTS Section 1: Greenfield Centre Course Booking",
            section: "Part 1 (Everyday Social Transaction)"
        },
        "L_DETAIL_FOLLOW": {
            url: "audio/ielts-listening/ielts-l1-course-options.mp3",
            title: "IELTS Section 1: Student Course Options Dialogue",
            section: "Part 1 (Two-Way Detailed Dialogue)"
        },
        "L_SPATIAL_DIR": {
            url: "audio/ielts-listening/ielts-authentic-museum-map.mp3",
            title: "IELTS Section 2: Historical Museum Floorplan Orientation",
            section: "Part 2 (Spatial Layout & Map Labelling)"
        },
        "L_ATTITUDE_OPIN": {
            url: "audio/ielts-listening/ielts-l3-multiple-choice.mp3",
            title: "IELTS Section 3: Academic Project Consultation",
            section: "Part 3 (Tutor-Student Agreement & Stance)"
        },
        "L_ACAD_LECTURE": {
            url: "audio/ielts-listening/ielts-l4-lecture.mp3",
            title: "IELTS Section 4: Academic Monologue on Environmental Ecology",
            section: "Part 4 (University Lecture Notes)"
        },
        "L_PARAPHRASE_DIST": {
            url: "audio/ielts-listening/cambridge18-test1.mp3",
            title: "Cambridge IELTS 18: Listening Test 1 (Full Section 3 Traps)",
            section: "Part 3 (Distractor Elimination Workout)"
        }
    };

    // Format passage text cleanly into readable paragraphs without questions pollution or fake markers
    function formatPassageHTML(rawText, isMatchingHeadings) {
        if (!rawText) return "<p class=\"passage-p\">Passage text is loading...</p>";

        // 1. Cut off any question block that was accidentally appended to the passage
        var qSplit = rawText.search(/\n+(?:Questions?\s+\d+|### Questions|\*\*Questions|Look at the [^\n]+ reviews|Do the following statements agree)/i);
        if (qSplit !== -1) {
            rawText = rawText.substring(0, qSplit).trim();
        }

        var lines = rawText.split(/\n\s*\n/);
        var html = "";
        var letterIndex = 0;
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        lines.forEach(function (para) {
            para = para.trim();
            if (!para) return;
            if (para.indexOf("# ") === 0 || para.indexOf("---") === 0) {
                // Header or divider - skip
                return;
            }
            if (para.length < 80 && (para.indexOf("Passage") !== -1 || para.indexOf("Section ") === 0 || para.indexOf("Part ") === 0)) {
                html += '<h4 class="passage-subheading">' + esc(para) + '</h4>';
                return;
            }

            // Natural letter sections (e.g., "A Sharpsavers", "B Carltons")
            var naturalMatch = para.match(/^([A-Z])\s+([A-Z0-9].*)$/);
            if (naturalMatch && naturalMatch[1].length === 1 && !isMatchingHeadings) {
                html += '<div class="passage-section-card">';
                html += '<span class="passage-section-badge">' + naturalMatch[1] + '</span>';
                html += '<div class="passage-section-body"><strong>' + esc(naturalMatch[1]) + '</strong> ' + esc(naturalMatch[2]) + '</div>';
                html += '</div>';
                return;
            }

            // If question type is explicitly Matching Headings, show letters A, B, C, D, E, F up to paragraph 7
            if (isMatchingHeadings && letterIndex < 7) {
                var marker = letters[letterIndex];
                letterIndex++;
                html += '<div class="passage-paragraph-marked">';
                html += '<span class="paragraph-letter-tag">' + marker + '</span>';
                html += '<div class="passage-marked-body">' + esc(para) + '</div>';
                html += '</div>';
            } else {
                html += '<p class="passage-p">' + esc(para) + '</p>';
            }
        });

        return html;
    }

    var SubskillEngine = {
        version: "2.2.0",

        // -------------------------------------------------------------
        // Level 1: Clean IELTS Dashboard Overview (No Clutter)
        // -------------------------------------------------------------
        renderDashboardEnhancements: function (state) {
            // Minimal, clean overview that does NOT push the skill cards down
            return "";
        },

        // -------------------------------------------------------------
        // Level 2: Clean Question Types Grid for Skill Dashboard
        // -------------------------------------------------------------
        renderSubskillsGrid: function (skillCategory) {
            if (!ns.curriculumData || !ns.curriculumData[skillCategory]) return "";
            var skillData = ns.curriculumData[skillCategory];
            var subskills = skillData.subskills || [];
            var completed = getCompletedSubskills();

            var html = '<div class="ielts-subskills-header" style="margin-bottom: 20px;">';
            html += '<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">';
            html += '<div>';
            html += '<h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin: 0 0 4px 0;">Official Question Types (' + subskills.length + ')</h3>';
            html += '<p style="font-size: 13.5px; color: #64748b; margin: 0;">Master the exam strategy, then practice with authentic Cambridge past papers.</p>';
            html += '</div>';
            html += '</div>';
            html += '</div>';

            html += '<div class="ielts-subskills-grid">';
            subskills.forEach(function (sub) {
                var isDone = !!completed[sub.code];
                html += '<div class="subskill-card" data-ielts-open-subskill="' + esc(sub.code) + '">';
                html += '<div>';
                html += '<div class="subskill-card-top">';
                html += '<span class="subskill-badge">' + esc(sub.badge || "Core") + '</span>';
                if (isDone) {
                    html += '<span style="font-size: 11px; font-weight: 700; color: #15803d; background: #dcfce7; padding: 2px 8px; border-radius: 6px;">✓ Practiced</span>';
                } else {
                    html += '<span class="subskill-difficulty">' + esc(sub.difficulty || "All Bands") + '</span>';
                }
                html += '</div>';

                html += '<h4 class="subskill-card-title">' + esc(sub.name) + '</h4>';
                html += '<p class="subskill-card-desc">' + esc(sub.understand ? sub.understand.summary : "") + '</p>';

                html += '<div class="subskill-card-types">';
                (sub.questionTypes || []).slice(0, 3).forEach(function (qt) {
                    html += '<span class="subskill-type-tag">' + esc(qt) + '</span>';
                });
                html += '</div>';
                html += '</div>';

                html += '<div class="subskill-card-action" style="display: flex; gap: 8px; align-items: center; justify-content: flex-end; margin-top: 14px; border-top: 1px solid #f1f5f9; padding-top: 12px;">';
                html += '<button type="button" class="secondary-button" style="padding: 6px 14px; font-size: 12px;" data-ielts-open-subskill="' + esc(sub.code) + '" data-ielts-subskill-stage="1">📘 Teach & Strategy</button>';
                html += '<button type="button" class="modern-btn-primary" style="padding: 6px 14px; font-size: 12px;" data-ielts-open-subskill="' + esc(sub.code) + '" data-ielts-subskill-stage="2">🎯 Practice Workout →</button>';
                html += '</div>';
                html += '</div>';
            });
            html += '</div>';

            return html;
        },

        // -------------------------------------------------------------
        // Level 3: Streamlined 2-Stage Learning Engine (Teach -> Practice)
        // -------------------------------------------------------------
        renderSubskillLearning: function (subskillCode, skillCategory, state) {
            var sub = ns.getSubskillByCode ? ns.getSubskillByCode(subskillCode) : null;
            if (!sub) {
                return '<div class="ielts-banner ielts-banner-alert">Question type ' + esc(subskillCode) + ' not found. <button type="button" class="secondary-button" data-ielts-close-subskill>← Return</button></div>';
            }

            var stage = state.subskillStage || 1;
            // Ensure stage is clamped to 1 or 2
            if (stage > 2) stage = 2;

            var html = '<div class="subskill-learning-page">';

            // Breadcrumb navigation
            html += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">';
            html += '<div style="display: flex; align-items: center; gap: 8px; font-size: 13.5px; color: #64748b;">';
            html += '<button type="button" class="secondary-button" data-ielts-close-subskill style="padding: 6px 14px; font-size: 12.5px;">← Back to ' + esc(skillCategory.toUpperCase()) + '</button>';
            html += '<span>/</span>';
            html += '<strong style="color: #0f172a; font-size: 14px;">' + esc(sub.name) + '</strong>';
            html += '</div>';
            html += '<span class="subskill-difficulty">' + esc(sub.badge || "IELTS Official") + ' · ' + esc(sub.difficulty || "Standard") + '</span>';
            html += '</div>';

            // Clean 2-Stage Navigation Stepper
            html += '<div class="two-stage-stepper" style="margin-bottom: 24px;">';
            html += '<button type="button" class="stage-pill ' + (stage === 1 ? "active" : "") + '" data-ielts-subskill-stage="1">';
            html += '<span class="stage-pill-icon">📘</span> 1. Teach & Strategy';
            html += '</button>';
            html += '<button type="button" class="stage-pill ' + (stage === 2 ? "active" : "") + '" data-ielts-subskill-stage="2">';
            html += '<span class="stage-pill-icon">🎯</span> 2. Practice Workout';
            html += '</button>';
            html += '</div>';

            // Render Stage 1: Teach OR Stage 2: Practice
            if (stage === 1) {
                html += SubskillEngine.renderStage1Teach(sub);
            } else {
                html += SubskillEngine.renderStage2Practice(sub, state);
            }

            html += '</div>';
            return html;
        },

        // -------------------------------------------------------------
        // STAGE 1: TEACH & STRATEGY
        // -------------------------------------------------------------
        
        // -------------------------------------------------------------
        // Built-in Lightweight Answer Evaluator
        // -------------------------------------------------------------
        evaluateAnswer: function (question, userAnswer) {
            if (!question) return { isCorrect: false, canonical: "", explanation: "" };
            var canonical = String(question.answer || "").trim().toLowerCase();
            var user = String(userAnswer || "").trim().toLowerCase();
            var isCorrect = false;

            if (user === canonical) {
                isCorrect = true;
            } else if (Array.isArray(question.acceptableAnswers)) {
                isCorrect = question.acceptableAnswers.some(function (ans) {
                    return String(ans).trim().toLowerCase() === user;
                });
            } else if (canonical === "true" && (user === "t" || user === "true")) {
                isCorrect = true;
            } else if (canonical === "false" && (user === "f" || user === "false")) {
                isCorrect = true;
            } else if (canonical === "not given" && (user === "ng" || user === "not given")) {
                isCorrect = true;
            } else if (canonical === "yes" && (user === "y" || user === "yes")) {
                isCorrect = true;
            } else if (canonical === "no" && (user === "n" || user === "no")) {
                isCorrect = true;
            }

            return {
                isCorrect: isCorrect,
                canonical: question.answer,
                explanation: question.explanation || ""
            };
        },

        renderStage1Teach: function (sub) {
            var u = sub.understand || {};
            var r = sub.recognise || {};
            var s = sub.strategise || {};
            var t = r.trapRadar || {};

            var html = '<div class="stage-teach-container" style="display: flex; flex-direction: column; gap: 20px;">';

            // Card 1: What is this question type?
            html += '<div class="modern-card" style="padding: 24px; background: #ffffff;">';
            html += '<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">';
            html += '<span style="font-size: 20px;">📖</span>';
            html += '<h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">How It Works in the Exam</h3>';
            html += '</div>';
            html += '<p style="font-size: 14.5px; color: #334155; line-height: 1.6; margin: 0 0 12px 0;">' + esc(u.summary) + '</p>';
            if (r.examAppearance) {
                html += '<div style="font-size: 13px; color: #64748b; background: #f8fafc; border-radius: 8px; padding: 10px 14px;"><strong>Where it appears:</strong> ' + esc(r.examAppearance) + '</div>';
            }
            html += '</div>';

            // Card 2: 3-Step Proven Strategy
            html += '<div class="modern-card" style="padding: 24px; background: #ffffff;">';
            html += '<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">';
            html += '<span style="font-size: 20px;">🧭</span>';
            html += '<h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">' + esc(s.title || "The 3-Step Execution Strategy") + '</h3>';
            html += '</div>';

            var steps = s.steps || [];
            html += '<div style="display: flex; flex-direction: column; gap: 12px;">';
            steps.forEach(function (st) {
                html += '<div style="display: flex; gap: 14px; align-items: flex-start; background: #f8fafc; padding: 14px 16px; border-radius: 10px; border-left: 3px solid #6366f1;">';
                html += '<span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: #6366f1; color: #ffffff; font-size: 12px; font-weight: 800; flex-shrink: 0;">' + st.step + '</span>';
                html += '<div>';
                html += '<strong style="font-size: 14px; color: #0f172a; display: block; margin-bottom: 2px;">' + esc(st.name) + '</strong>';
                html += '<span style="font-size: 13.5px; color: #475569; line-height: 1.5;">' + esc(st.instruction) + '</span>';
                html += '</div>';
                html += '</div>';
            });
            html += '</div>';

            // Golden Rules
            if (s.goldenRules && s.goldenRules.length > 0) {
                html += '<div style="margin-top: 16px; padding: 12px 16px; background: #eff6ff; border-radius: 8px; font-size: 13px; color: #1e40af;">';
                html += '<strong style="display: block; margin-bottom: 6px;">💡 Key Exam Tips:</strong>';
                html += '<ul style="margin: 0; padding-left: 18px;">';
                s.goldenRules.forEach(function (gr) {
                    html += '<li style="margin-bottom: 4px;">' + esc(gr) + '</li>';
                });
                html += '</ul>';
                html += '</div>';
            }
            html += '</div>';

            // Card 3: Examiner Trap Radar
            if (t.name) {
                html += '<div class="modern-card modern-trap-radar" style="padding: 20px; background: #fff5f5; border: 1px solid #fed7d7; border-left: 4px solid #ef4444;">';
                html += '<div style="display: flex; gap: 12px; align-items: center; margin-bottom: 8px;">';
                html += '<span class="trap-icon-pulse">⚠️</span>';
                html += '<h4 style="font-size: 14.5px; font-weight: 800; color: #991b1b; margin: 0;">Examiner Trap: ' + esc(t.name) + '</h4>';
                html += '</div>';
                html += '<p style="font-size: 13.5px; color: #7f1d1d; line-height: 1.5; margin: 0 0 10px 0;">' + esc(t.trapDescription) + '</p>';
                html += '<div style="font-size: 13px; color: #15803d; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border: 1px solid #bbf7d0;"><strong>How to Avoid:</strong> ' + esc(t.howToAvoid) + '</div>';
                html += '</div>';
            }

            // CTA: Jump into Practice
            html += '<div style="text-align: center; margin-top: 12px;">';
            html += '<button type="button" class="modern-btn-primary" data-ielts-subskill-stage="2" style="padding: 14px 36px; font-size: 15px; font-weight: 700; border-radius: 12px;">Start Practice Workout →</button>';
            html += '</div>';

            html += '</div>';
            return html;
        },

        // -------------------------------------------------------------
        // STAGE 2: PRACTICE WORKOUT (Authentic Cambridge Questions)
        // -------------------------------------------------------------
        renderStage2Practice: function (sub, state) {
            var skill = sub.code.charAt(0).toLowerCase() === "l" ? "listening" :
                        sub.code.charAt(0).toLowerCase() === "r" ? "reading" :
                        sub.code.charAt(0).toLowerCase() === "w" ? "writing" : "speaking";

            state.practiceAnswers = state.practiceAnswers || {};
            state.practiceChecked = state.practiceChecked || {};
            state.practiceHintsRevealed = state.practiceHintsRevealed || {};
            var mode = state.subskillPracticeMode || "guided";

            // Query built-in practice questions directly from subskill definition
            var practiceDef = sub.practice || {};
            var questions = state.practiceQuestions;
            if (!questions || questions.length === 0) {
                questions = practiceDef.questions || [];
                state.practiceQuestions = questions;
            }

            var html = '<div class="stage-practice-container">';

            // Mode Selector Bar
            html += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;">';
            html += '<div style="display: flex; gap: 8px;">';
            html += '<button type="button" class="practice-mode-pill ' + (mode === "guided" ? "active" : "") + '" data-ielts-set-practice-mode="guided">✨ Practice Mode (Instant Check & Hints)</button>';
            html += '<button type="button" class="practice-mode-pill ' + (mode === "independent" ? "active" : "") + '" data-ielts-set-practice-mode="independent">🎯 Test Mode (Submit at End)</button>';
            html += '</div>';
            html += '<span style="font-size: 12.5px; color: #64748b; font-weight: 600;">' + ((skill === "writing") ? "Official Writing Task Workout" : (skill === "speaking") ? "Official Speaking Simulation" : ("Practice Workout (" + questions.length + " Items)")) + '</span>';
            html += '</div>';

            // CASE A: READING SKILL -> DUAL PANE SPLIT SCREEN
            if (skill === "reading") {
                var passageText = practiceDef.passageContext || practiceDef.passage || "";
                var passageTitle = practiceDef.passageTitle || sub.name;
                var isMatchingHeadings = (sub.code === "R_SKIM_MAIN");

                html += '<div class="ielts-split-reader">';

                // LEFT: Passage
                html += '<div class="ielts-passage-column">';
                html += '<div class="passage-header-sticky">';
                html += '<span class="passage-badge">📖 AUTHENTIC PASSAGE</span>';
                html += '<h3 class="passage-title">' + esc(passageTitle) + '</h3>';
                html += '</div>';

                html += '<div class="passage-content-scrollable">';
                html += formatPassageHTML(passageText, isMatchingHeadings);
                html += '</div>';
                html += '</div>';

                // RIGHT: Questions
                html += '<div class="ielts-questions-column">';
                html += SubskillEngine.renderQuestionsList(questions, state, mode);
                html += '</div>';

                html += '</div>';
            }
            // CASE B: LISTENING SKILL -> AUDIO STATION
            else if (skill === "listening") {
                var audioInfo = {
                    url: practiceDef.audioUrl || "audio/ielts-listening/ielts-l1-booking.mp3",
                    title: practiceDef.audioTitle || (sub.name + " Audio Practice"),
                    section: sub.badge || "Listening Section"
                };

                html += '<div class="modern-card audio-exam-station" style="margin-bottom: 24px; padding: 20px;">';
                html += '<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">';
                html += '<div>';
                html += '<span class="modern-pill-badge" style="margin-bottom: 4px;">🎧 ' + esc(audioInfo.section) + '</span>';
                html += '<h4 style="font-size: 15px; font-weight: 800; color: #0f172a; margin: 0;">' + esc(audioInfo.title) + '</h4>';
                html += '</div>';
                html += '<span style="font-size: 12px; color: #64748b;">Listen once only, just like the real exam.</span>';
                html += '</div>';
                html += '<audio controls style="width: 100%; border-radius: 8px;" src="' + esc(audioInfo.url) + '"></audio>';
                html += '</div>';

                html += '<div class="ielts-questions-column" style="max-width: 800px; margin: 0 auto;">';
                html += SubskillEngine.renderQuestionsList(questions, state, mode);
                html += '</div>';
            }
            // CASE C: WRITING SKILL -> LIVE STUDIO
            else if (skill === "writing") {
                html += SubskillEngine.renderWritingStudio(sub, state);
            }
            // CASE D: SPEAKING SKILL -> INTERACTIVE CUE CARD
            else if (skill === "speaking") {
                html += SubskillEngine.renderSpeakingStudio(sub, state);
            }

            // Bottom Navigation & Completion Bar
            html += '<div class="stage-footer-nav" style="display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid #e2e8f0; margin-top: 24px;">';
            html += '<button type="button" class="secondary-button" data-ielts-subskill-stage="1">← Back to Teach & Strategy</button>';
            html += '<button type="button" class="modern-btn-primary" data-ielts-complete-subskill="' + esc(sub.code) + '">✓ Mark as Practiced & Return</button>';
            html += '</div>';

            html += '</div>';
            return html;
        },

        // -------------------------------------------------------------
        // Questions List Renderer with Instant Checking & Hints
        // -------------------------------------------------------------
        renderQuestionsList: function (questions, state, mode) {
            var html = "";
            questions.forEach(function (q, idx) {
                var qId = q.id || ("q_" + idx);
                var userAns = state.practiceAnswers[qId] || "";
                var checkRes = state.practiceChecked[qId];
                var hintsRevealed = state.practiceHintsRevealed[qId] || 0;
                var qType = String(q.type || "").toLowerCase();
                var isTFNG = (qType.indexOf("true") !== -1 || qType.indexOf("tfng") !== -1);
                var isYNNG = (qType.indexOf("yes") !== -1 || qType.indexOf("ynng") !== -1);

                html += '<div class="unified-question-card" id="qcard-' + esc(qId) + '">';

                // Header
                html += '<div class="unified-question-header">';
                html += '<span class="unified-question-num">Question ' + (idx + 1) + ' · ' + esc(q.type || "Authentic Question") + '</span>';
                html += '<span style="font-size: 11px; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; color: #475569;">' + esc(q.exam || "Authentic Exam") + '</span>';
                html += '</div>';

                // Question Prompt
                html += '<div class="unified-question-prompt">' + esc(q.prompt || ("Question item " + (idx + 1))) + '</div>';

                // Answer Input Interface:
                // Case 1: TFNG Clickable Pills
                if (isTFNG) {
                    var tfngOpts = ["TRUE", "FALSE", "NOT GIVEN"];
                    html += '<div class="tfng-pill-group" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;">';
                    tfngOpts.forEach(function (opt) {
                        var isSel = (cleanStr(userAns) === cleanStr(opt));
                        html += '<button type="button" class="tfng-pill-btn ' + (isSel ? "active" : "") + '" data-ielts-answer-q="' + esc(qId) + '" data-ielts-val="' + esc(opt) + '">' + esc(opt) + '</button>';
                    });
                    html += '</div>';
                }
                // Case 2: YNNG Clickable Pills
                else if (isYNNG) {
                    var ynngOpts = ["YES", "NO", "NOT GIVEN"];
                    html += '<div class="tfng-pill-group" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;">';
                    ynngOpts.forEach(function (opt) {
                        var isSel = (cleanStr(userAns) === cleanStr(opt));
                        html += '<button type="button" class="tfng-pill-btn ' + (isSel ? "active" : "") + '" data-ielts-answer-q="' + esc(qId) + '" data-ielts-val="' + esc(opt) + '">' + esc(opt) + '</button>';
                    });
                    html += '</div>';
                }
                // Case 3: Multiple Choice Options
                else if (q.options && q.options.length > 0) {
                    html += '<div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">';
                    q.options.forEach(function (opt) {
                        var isSelected = (cleanStr(userAns) === cleanStr(opt));
                        html += '<label style="display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: #1e293b; background: ' + (isSelected ? "#eef2ff" : "#f8fafc") + '; border: 1px solid ' + (isSelected ? "#818cf8" : "#e2e8f0") + '; border-radius: 8px; padding: 10px 14px; cursor: pointer;">';
                        html += '<input type="radio" name="opt_' + esc(qId) + '" value="' + esc(opt) + '" ' + (isSelected ? "checked" : "") + ' data-ielts-answer-q="' + esc(qId) + '"> ' + esc(opt);
                        html += '</label>';
                    });
                    html += '</div>';
                }
                // Case 4: Text Input for Completion / Short Answer
                else {
                    html += '<div style="margin-bottom: 14px; display: flex; gap: 10px; align-items: center;">';
                    html += '<input type="text" value="' + esc(userAns) + '" placeholder="Type your answer here..." data-ielts-input-q="' + esc(qId) + '" style="flex-grow: 1; max-width: 320px; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px;">';
                    html += '</div>';
                }

                // Guided Mode Hints & Instant Check
                if (mode === "guided") {
                    var hints = q.hints || [];
                    if (hints.length > 0) {
                        html += '<div style="margin-bottom: 12px;">';
                        for (var h = 0; h < hintsRevealed && h < hints.length; h++) {
                            html += '<div class="guided-hint-item"><strong>💡 Hint ' + (h + 1) + ':</strong> ' + esc(hints[h]) + '</div>';
                        }
                        if (hintsRevealed < hints.length && !checkRes) {
                            html += '<button type="button" class="hint-trigger-btn" data-ielts-reveal-hint="' + esc(qId) + '">💡 Need a hint? Reveal clue ' + (hintsRevealed + 1) + ' of ' + hints.length + '</button>';
                        }
                        html += '</div>';
                    }

                    // Check Answer Button / Feedback
                    if (!checkRes) {
                        html += '<button type="button" class="modern-btn-primary" data-ielts-check-guided="' + esc(qId) + '" style="padding: 7px 16px; font-size: 13px;">Check Answer</button>';
                    } else {
                        var isRight = checkRes.isCorrect;
                        html += '<div style="background: ' + (isRight ? "#f0fdf4" : "#fff1f2") + '; border: 1px solid ' + (isRight ? "#86efac" : "#fca5a5") + '; border-radius: 8px; padding: 14px; margin-top: 10px;">';
                        html += '<div style="display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 14px; color: ' + (isRight ? "#15803d" : "#b91c1c") + '; margin-bottom: 4px;">';
                        html += '<span>' + (isRight ? "✓ Correct!" : "✗ Not quite") + '</span>';
                        html += '</div>';
                        html += '<div style="font-size: 13px; color: #334155; margin-bottom: 4px;"><strong>Correct Answer:</strong> ' + esc(q.answer) + '</div>';
                        if (q.explanation) {
                            html += '<div style="font-size: 12.5px; color: #475569; line-height: 1.4;">' + esc(q.explanation) + '</div>';
                        }
                        html += '</div>';
                    }
                }

                html += '</div>'; // end question card
            });

            // If independent mode, submit all button
            if (mode === "independent" && !state.practiceSubmitted) {
                html += '<div style="text-align: center; margin-top: 20px;">';
                html += '<button type="button" class="modern-btn-primary" data-ielts-submit-independent style="padding: 12px 28px; font-size: 14px;">Submit All Answers & View Score →</button>';
                html += '</div>';
            } else if (mode === "independent" && state.practiceSubmitted) {
                // Score summary
                var correctCount = 0;
                questions.forEach(function (q) {
                    var ans = state.practiceAnswers[q.id] || "";
                    if (SubskillEngine.evaluateAnswer(q, ans).isCorrect) {
                        correctCount++;
                    }
                });
                html += '<div class="modern-card" style="padding: 20px; background: #f0fdf4; border: 1px solid #86efac; text-align: center; margin-top: 20px;">';
                html += '<h3 style="font-size: 1.2rem; font-weight: 800; color: #166534; margin: 0 0 6px 0;">Workout Complete!</h3>';
                html += '<p style="font-size: 14px; color: #15803d; margin: 0;">Score: <strong>' + correctCount + ' / ' + questions.length + ' (' + Math.round((correctCount / questions.length) * 100) + '%)</strong></p>';
                html += '</div>';
            }

            return html;
        },

        // Writing Studio
        renderWritingStudio: function (sub, state) {
            var pData = sub.practice || {};
            var isTask1 = (sub.code === "W_TASK_ACHIEVE");
            var prompt = pData.prompt || (isTask1 ?
                "The bar chart below shows the percentage of households with internet access in three countries between 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words." :
                "Some people believe that universities should focus on providing students with skills for employment, while others think the main purpose of university education should be to access knowledge for its own sake. Discuss both views and give your own opinion. Write at least 250 words.");

            var targetWords = pData.targetWordCount || (isTask1 ? 150 : 250);
            var currentText = state.writingText || "";
            var wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;
            var showModel = state.showWritingModel || false;

            var html = '<div class="writing-studio-container" style="max-width: 800px; margin: 0 auto;">';
            html += '<div class="modern-card" style="padding: 24px; background: #ffffff; margin-bottom: 20px;">';
            html += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">';
            html += '<span class="modern-pill-badge">' + (isTask1 ? "Task 1 · Minimum 150 words" : "Task 2 · Minimum 250 words") + '</span>';
            html += '<span style="font-size: 13px; font-weight: 700; color: ' + (wordCount >= targetWords ? "#16a34a" : "#dc2626") + ';">Word Count: ' + wordCount + ' / ' + targetWords + ' words</span>';
            html += '</div>';

            html += '<div style="background: #f8fafc; border-left: 3px solid #6366f1; padding: 14px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 14px; color: #1e293b; line-height: 1.5;">';
            html += '<strong>Question Prompt:</strong> ' + esc(prompt);
            html += '</div>';

            html += '<textarea placeholder="Write your response here..." data-ielts-writing-input style="width: 100%; min-height: 220px; padding: 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 14.5px; line-height: 1.6; font-family: inherit; margin-bottom: 14px; box-sizing: border-box;">' + esc(currentText) + '</textarea>';

            html += '<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">';
            html += '<button type="button" class="secondary-button" data-ielts-toggle-model style="font-size: 13px;">' + (showModel ? "Hide Model Answer" : "💡 Reveal Band 8.5+ Model Answer") + '</button>';
            html += '<span style="font-size: 12px; color: #64748b;">Live word counter updates as you type.</span>';
            html += '</div>';

            if (showModel) {
                html += '<div style="margin-top: 18px; padding: 18px; background: #f0fdf4; border: 1px solid #86efac; border-radius: 10px;">';
                html += '<h4 style="font-size: 14px; font-weight: 800; color: #166534; margin: 0 0 8px 0;">Official Band 8.5+ Model Answer</h4>';
                html += '<p style="font-size: 13.5px; color: #1e293b; line-height: 1.6; margin: 0 0 10px 0;">' + (isTask1 ?
                    "The bar chart illustrates the proportion of households having internet connectivity across three nations from 2010 to 2020. Overall, it is evident that internet access expanded dramatically in all three countries over the ten-year period, with Country A consistently maintaining the highest access rates throughout. In 2010, Country A led with 60% of homes connected, followed by Country B at 45% and Country C at 28%. By 2020, internet penetration in Country A climbed to nearly 95%, while Country B and Country C converged at approximately 82% and 75% respectively, reflecting significant technological convergence." :
                    "It is often debated whether higher education should serve strictly as career preparation or as an intellectual pursuit for general enlightenment. While career training offers direct individual economic returns, I believe universities must balance specialized workplace skills with broader critical inquiry. On the one hand, proponents of vocational focus argue that tuition fees are substantial investments requiring tangible financial dividends. However, purely utilitarian education risks intellectual narrowness. A comprehensive university education develops critical analysis, ethical reasoning, and cultural adaptability—competencies that allow graduates to navigate evolving global economies.") + '</p>';
                html += '</div>';
            }

            html += '</div>';
            html += '</div>';
            return html;
        },

        // Speaking Studio
        renderSpeakingStudio: function (sub, state) {
            var pData = sub.practice || {};
            var prepTime = pData.prepSeconds || 60;
            var speakTime = pData.speakSeconds || 120;
            var timerSec = (typeof state.speakingSecondsLeft === "number") ? state.speakingSecondsLeft : prepTime;
            var timerType = state.speakingTimerType || "prep"; // "prep" or "speech"
            var isRunning = !!state.speakingTimerRunning;

            var html = '<div class="speaking-studio-container" style="max-width: 760px; margin: 0 auto;">';
            html += '<div class="modern-card" style="padding: 24px; background: #ffffff;">';

            // Cue Card Box
            html += '<div style="background: #fdfbf7; border: 1px solid #fed7aa; border-radius: 12px; padding: 20px; margin-bottom: 20px;">';
            html += '<span style="display: inline-block; font-size: 11px; font-weight: 800; color: #c2410c; background: #ffedd5; padding: 2px 8px; border-radius: 4px; margin-bottom: 8px;">CANDIDATE CUE CARD</span>';
            html += '<h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0 0 12px 0;">' + esc(pData.topic || "Describe an interesting city or town you have visited.") + '</h3>';
            html += '<p style="font-size: 13.5px; color: #475569; margin: 0 0 10px 0;">You should say:</p>';
            html += '<ul style="font-size: 13.5px; color: #334155; line-height: 1.6; margin: 0 0 12px 0; padding-left: 20px;">';
            html += '<li>Where the city is and when you visited it</li>';
            html += '<li>What you did during your visit</li>';
            html += '<li>What made the city stand out to you</li>';
            html += '<li>And explain why you would or would not recommend visiting it to others.</li>';
            html += '</ul>';
            html += '<span style="font-size: 12px; color: #9a3412; font-style: italic;">You have 1 minute to make notes before speaking for 1 to 2 minutes.</span>';
            html += '</div>';

            // Timer Widget
            var m = Math.floor(timerSec / 60);
            var s = timerSec % 60;
            var timeFormatted = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;

            html += '<div style="text-align: center; padding: 20px; background: #f8fafc; border-radius: 12px; margin-bottom: 20px;">';
            html += '<div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">';
            html += (timerType === "prep" ? "⏱️ 1-Minute Preparation Time" : "🎙️ 2-Minute Speech Time");
            html += '</div>';
            html += '<div style="font-size: 3rem; font-weight: 900; font-family: monospace; color: ' + (timerSec < 15 ? "#ef4444" : "#4f46e5") + '; margin-bottom: 12px;">' + timeFormatted + '</div>';

            html += '<div style="display: flex; gap: 10px; justify-content: center;">';
            if (!isRunning) {
                html += '<button type="button" class="modern-btn-primary" data-ielts-start-speaking-timer style="padding: 8px 24px; font-size: 13.5px;">▶ Start Timer</button>';
            } else {
                html += '<button type="button" class="secondary-button" data-ielts-pause-speaking-timer style="padding: 8px 20px; font-size: 13.5px;">⏸ Pause</button>';
            }
            html += '<button type="button" class="secondary-button" data-ielts-reset-speaking-timer style="padding: 8px 16px; font-size: 13.5px;">↺ Reset</button>';
            html += '<button type="button" class="secondary-button" data-ielts-switch-speaking-timer style="padding: 8px 16px; font-size: 13.5px;">Switch to ' + (timerType === "prep" ? "Speech (2 min)" : "Prep (1 min)") + '</button>';
            html += '</div>';
            html += '</div>';

            html += '</div>';
            html += '</div>';
            return html;
        },

        // -------------------------------------------------------------
        // Event Delegator
        // -------------------------------------------------------------
        handleClick: function (el, state, render) {
            if (!el) return false;

            // 1. Open Subskill
            if (el.hasAttribute("data-ielts-open-subskill")) {
                var code = el.getAttribute("data-ielts-open-subskill");
                var stageAttr = el.getAttribute("data-ielts-subskill-stage");
                state.activeSubskill = code;
                state.subskillStage = stageAttr ? parseInt(stageAttr, 10) : 1;
                state.subskillPracticeMode = "guided";
                state.practiceQuestions = null;
                state.practiceAnswers = {};
                state.practiceChecked = {};
                state.practiceHintsRevealed = {};
                render();
                window.scrollTo({ top: 0, behavior: "smooth" });
                return true;
            }

            // 2. Close Subskill
            if (el.hasAttribute("data-ielts-close-subskill")) {
                state.activeSubskill = null;
                render();
                window.scrollTo({ top: 0, behavior: "smooth" });
                return true;
            }

            // 3. Switch Stage (1 = Teach, 2 = Practice)
            if (el.hasAttribute("data-ielts-subskill-stage")) {
                var sNum = parseInt(el.getAttribute("data-ielts-subskill-stage"), 10);
                state.subskillStage = sNum;
                render();
                window.scrollTo({ top: 0, behavior: "smooth" });
                return true;
            }

            // 4. Set Practice Mode
            if (el.hasAttribute("data-ielts-set-practice-mode")) {
                state.subskillPracticeMode = el.getAttribute("data-ielts-set-practice-mode");
                state.practiceQuestions = null;
                render();
                return true;
            }

            // 5. Reveal Progressive Hint
            if (el.hasAttribute("data-ielts-reveal-hint")) {
                var hQId = el.getAttribute("data-ielts-reveal-hint");
                state.practiceHintsRevealed = state.practiceHintsRevealed || {};
                state.practiceHintsRevealed[hQId] = (state.practiceHintsRevealed[hQId] || 0) + 1;
                render();
                return true;
            }

            // 6. Check Guided Answer
            if (el.hasAttribute("data-ielts-check-guided")) {
                var cQId = el.getAttribute("data-ielts-check-guided");
                var cAns = (state.practiceAnswers && state.practiceAnswers[cQId]) || "";
                var targetQ = null;
                if (state.practiceQuestions) {
                    for (var qi = 0; qi < state.practiceQuestions.length; qi++) {
                        if (state.practiceQuestions[qi].id === cQId) {
                            targetQ = state.practiceQuestions[qi];
                            break;
                        }
                    }
                }
                var evalResult = SubskillEngine.evaluateAnswer(targetQ, cAns);
                state.practiceChecked = state.practiceChecked || {};
                state.practiceChecked[cQId] = evalResult;
                render();
                return true;
            }

            // 7. Submit Independent
            if (el.hasAttribute("data-ielts-submit-independent")) {
                state.practiceSubmitted = true;
                render();
                return true;
            }

            // 8. TFNG Pill Select
            if (el.hasAttribute("data-ielts-answer-q") && el.hasAttribute("data-ielts-val")) {
                var tfQId = el.getAttribute("data-ielts-answer-q");
                var val = el.getAttribute("data-ielts-val");
                state.practiceAnswers = state.practiceAnswers || {};
                state.practiceAnswers[tfQId] = val;
                // If guided, auto check or let them click check
                render();
                return true;
            }

            // 9. Mark Subskill as Completed
            if (el.hasAttribute("data-ielts-complete-subskill")) {
                var completeCode = el.getAttribute("data-ielts-complete-subskill");
                setSubskillCompleted(completeCode);
                state.activeSubskill = null;
                render();
                window.scrollTo({ top: 0, behavior: "smooth" });
                return true;
            }

            // 10. Toggle Writing Model
            if (el.hasAttribute("data-ielts-toggle-model")) {
                state.showWritingModel = !state.showWritingModel;
                render();
                return true;
            }

            // 11. Speaking Timers
            if (el.hasAttribute("data-ielts-start-speaking-timer")) {
                state.speakingTimerRunning = true;
                if (window._ieltsSpeakTimer) clearInterval(window._ieltsSpeakTimer);
                window._ieltsSpeakTimer = setInterval(function () {
                    if (typeof state.speakingSecondsLeft !== "number") {
                        state.speakingSecondsLeft = (state.speakingTimerType === "speech") ? 120 : 60;
                    }
                    if (state.speakingSecondsLeft > 0) {
                        state.speakingSecondsLeft--;
                        render();
                    } else {
                        clearInterval(window._ieltsSpeakTimer);
                        state.speakingTimerRunning = false;
                        render();
                    }
                }, 1000);
                render();
                return true;
            }

            if (el.hasAttribute("data-ielts-pause-speaking-timer")) {
                state.speakingTimerRunning = false;
                if (window._ieltsSpeakTimer) clearInterval(window._ieltsSpeakTimer);
                render();
                return true;
            }

            if (el.hasAttribute("data-ielts-reset-speaking-timer")) {
                state.speakingTimerRunning = false;
                if (window._ieltsSpeakTimer) clearInterval(window._ieltsSpeakTimer);
                state.speakingSecondsLeft = (state.speakingTimerType === "speech") ? 120 : 60;
                render();
                return true;
            }

            if (el.hasAttribute("data-ielts-switch-speaking-timer")) {
                state.speakingTimerRunning = false;
                if (window._ieltsSpeakTimer) clearInterval(window._ieltsSpeakTimer);
                state.speakingTimerType = (state.speakingTimerType === "prep") ? "speech" : "prep";
                state.speakingSecondsLeft = (state.speakingTimerType === "speech") ? 120 : 60;
                render();
                return true;
            }

            return false;
        }
    };

    // Mount to namespace
    ns.subskillEngine = SubskillEngine;
    console.log("[Ahmad's English Platform] IELTS Subskill Engine v" + SubskillEngine.version + " initialized successfully.");
})();
