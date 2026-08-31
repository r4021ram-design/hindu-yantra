'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle2, XCircle, HelpCircle, RotateCcw, Sparkles } from 'lucide-react';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export default function EducationalLearningMode({ dsl }: { dsl?: any }) {
  const [activeTab, setActiveTab] = useState<'lessons' | 'glossary' | 'quiz'>('lessons');
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('sgos_learning_progress');
      if (saved) {
        setCompletedLessons(JSON.parse(saved));
      }
    } catch (e) {
      // ignore SSR or local storage error
    }
  }, []);

  const toggleLesson = (id: number) => {
    const updated = completedLessons.includes(id)
      ? completedLessons.filter(l => l !== id)
      : [...completedLessons, id];
    setCompletedLessons(updated);
    try {
      localStorage.setItem('sgos_learning_progress', JSON.stringify(updated));
    } catch (e) {}
  };

  const lessons = [
    {
      id: 1,
      title: 'Lesson 1: The Principle of Bindu',
      content: 'The Bindu (point) is the central singularity of all sacred Yantras. It represents unmanifest potential and the unity of Shiva (pure consciousness) and Shakti (primordial energy).'
    },
    {
      id: 2,
      title: 'Lesson 2: Trikona Interlocking Triangles',
      content: 'Triangles facing upward (Shiva) represent spiritual aspiration and fire, while downward-pointing triangles (Shakti) represent material manifestation and water. Interlocking them creates structural dynamic balance.'
    },
    {
      id: 3,
      title: 'Lesson 3: The 9 Navavarana Enclosures',
      content: 'Shri Yantra contains 9 concentric circuits (Avaranas), starting from Trailokyamohana (outer Bhupura square) inwards to Sarvanandamaya (inner Bindu point).'
    },
    {
      id: 4,
      title: 'Lesson 4: Lotus Petal Symbolism',
      content: 'The 8-petal and 16-petal lotus rings represent the expansion of consciousness through the Tattvas (elements), sensory faculties, and mental powers.'
    }
  ];

  const glossary = [
    { term: 'Bindu (बिन्दु)', definition: 'Central focal point; the cosmic singularity of unmanifest consciousness.' },
    { term: 'Trikona (त्रिकोण)', definition: 'Triangle element; upwards for Shiva/fire, downwards for Shakti/water.' },
    { term: 'Bhupura (भूपुर)', definition: 'Outer 3-tiered square enclosure with 4 cardinal gates protecting the sanctum.' },
    { term: 'Avarana (आवरण)', definition: 'Concentric structural layer or energy circuit within the Yantra topology.' },
    { term: 'Marma (मर्म)', definition: 'Critical geometric intersection point where 3 lines intersect.' },
    { term: 'Sandhi (सन्धि)', definition: 'Intersection point where 2 lines cross.' }
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: 'How many total sub-triangles are formed in the central region of the Shri Chakra?',
      options: ['9 Triangles', '14 Triangles', '43 Triangles', '64 Triangles'],
      correctIndex: 2,
      explanation: 'Soundarya Lahari verse 11 confirms that the 4 Shiva and 5 Shakti primary triangles intersect to solve exactly 43 sub-triangles.'
    },
    {
      id: 2,
      question: 'What direction do downward-pointing triangles represent in Tantric geometry?',
      options: ['Shiva (Consciousness)', 'Shakti (Divine Feminine Energy)', 'Vayu (Air Element)', 'Surya (Sun)'],
      correctIndex: 1,
      explanation: 'Downward-pointing triangles represent Shakti (Divine Feminine / Water / Creation).'
    },
    {
      id: 3,
      question: 'What is the outermost enclosure of the Shri Yantra called?',
      options: ['Ashtadala', 'Trivalaya', 'Bhupura', 'Bindu'],
      correctIndex: 2,
      explanation: 'The Bhupura is the 3-tiered outer square boundary containing 4 cardinal entrance gates.'
    }
  ];

  const handleSelectAnswer = (qId: number, optionIdx: number) => {
    if (!quizSubmitted) {
      setQuizAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="bg-[#FFFDF9] border border-[#EADBC8] rounded-[24px] p-6 shadow-sm space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#EADBC8]/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F28C28]/10 flex items-center justify-center text-[#F28C28]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-outfit font-black text-[#4A2C17]">Guided Learning Mode & Quizzes</h3>
            <p className="text-xs text-[#4A2C17]/60">Interactive educational curriculum, terminology glossary, and self-assessment quizzes</p>
          </div>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-2 bg-[#FFF5EB] px-3 py-1.5 rounded-full border border-[#EADBC8] text-xs font-bold text-[#F28C28]">
          <Award className="w-4 h-4 text-[#F28C28]" />
          <span>Progress: {completedLessons.length} / {lessons.length} Lessons</span>
        </div>
      </div>

      {/* Mode Sub-tabs */}
      <div className="flex items-center gap-2 border-b border-[#EADBC8]/60 pb-2 text-xs font-bold font-outfit">
        <button
          onClick={() => setActiveTab('lessons')}
          className={`px-3 py-1.5 rounded-xl border transition-all ${
            activeTab === 'lessons' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'
          }`}
        >
          📚 Guided Lessons
        </button>
        <button
          onClick={() => setActiveTab('glossary')}
          className={`px-3 py-1.5 rounded-xl border transition-all ${
            activeTab === 'glossary' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'
          }`}
        >
          📖 Terminology Glossary
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-3 py-1.5 rounded-xl border transition-all ${
            activeTab === 'quiz' ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF5EB] text-[#4A2C17] border-[#EADBC8]'
          }`}
        >
          ✍️ Knowledge Quiz
        </button>
      </div>

      {/* Tab 1: Lessons */}
      {activeTab === 'lessons' && (
        <div className="space-y-4">
          {lessons.map(lesson => {
            const isDone = completedLessons.includes(lesson.id);
            return (
              <div key={lesson.id} className="bg-[#FFF5EB]/60 p-4 rounded-2xl border border-[#EADBC8] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-outfit font-bold text-sm text-[#4A2C17]">{lesson.title}</span>
                  <button
                    onClick={() => toggleLesson(lesson.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                      isDone ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-[#FFFDF9] text-[#4A2C17] border-[#EADBC8]'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isDone ? 'Completed' : 'Mark as Complete'}
                  </button>
                </div>
                <p className="text-xs text-[#4A2C17]/90 leading-relaxed">{lesson.content}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: Glossary */}
      {activeTab === 'glossary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossary.map((item, idx) => (
            <div key={idx} className="bg-[#FFF5EB]/60 p-4 rounded-2xl border border-[#EADBC8] space-y-1">
              <div className="font-outfit font-bold text-sm text-[#F28C28]">{item.term}</div>
              <p className="text-xs text-[#4A2C17]/90">{item.definition}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Quiz */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {quizQuestions.map(q => (
            <div key={q.id} className="bg-[#FFF5EB]/60 p-4 rounded-2xl border border-[#EADBC8] space-y-3">
              <div className="font-outfit font-bold text-sm text-[#4A2C17] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#F28C28]" />
                <span>{q.id}. {q.question}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = quizAnswers[q.id] === optIdx;
                  const isCorrect = q.correctIndex === optIdx;
                  let btnStyle = 'bg-[#FFFDF9] text-[#4A2C17] border-[#EADBC8]';

                  if (quizSubmitted) {
                    if (isCorrect) btnStyle = 'bg-emerald-600 text-white border-emerald-600';
                    else if (isSelected) btnStyle = 'bg-rose-600 text-white border-rose-600';
                  } else if (isSelected) {
                    btnStyle = 'bg-[#F28C28] text-white border-[#F28C28]';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(q.id, optIdx)}
                      className={`w-full text-left px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {quizSubmitted && (
                <div className="bg-[#FFFDF9] p-3 rounded-xl border border-[#EADBC8] text-xs text-[#4A2C17]/90 italic">
                  <span className="font-bold text-[#F28C28] not-italic">Explanation: </span> {q.explanation}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center justify-between pt-2">
            {!quizSubmitted ? (
              <button
                onClick={() => setQuizSubmitted(true)}
                disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                className="px-6 py-2.5 rounded-xl bg-[#F28C28] text-white font-bold text-xs shadow-xs hover:brightness-105 disabled:opacity-40"
              >
                Submit Answers
              </button>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="font-outfit font-bold text-sm text-[#4A2C17]">
                  Your Score: <span className="text-[#F28C28] text-base">{calculateScore()}</span> / {quizQuestions.length}
                </div>
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#FFF5EB] border border-[#EADBC8] text-xs font-bold text-[#4A2C17] flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
