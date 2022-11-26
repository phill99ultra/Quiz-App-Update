import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { QuizStore, State, CreateQuizValues, Quiz } from '../../interfaces/interfaces';

export const useQuizStore = create<QuizStore>()(
    devtools(
       (set, get) => ({
            menu: null,
            results: {},
            isFinished: false,
            modalTitleQuiz: false,
            activeQuestion: 0,
            answerState: null,
            isAuth: false,
            setMenuHandler: () => {
                set((state) => (
                    { menu: state.menu === null ? true : !state.menu}
                ))
            }, 
            setRetryQuiz: () => {
                set({
                    results: {},
                    isFinished: false,
                    activeQuestion: 0,
                    answerState: null,
                })
            },
            setActiveQuestion: (answerId: number) => {
                const { results, quiz, activeQuestion, answerState } = get();
                if (answerState) {
                    const key = Object.keys(answerState)[0];
                    if (answerState[Number(key)] === State.SUCCESS) return;
                }
                const question = quiz[activeQuestion];   
                const resultsAnswers = results;     
                if (Number(question.rightAnswerId) === answerId) {            
                    if (
                        resultsAnswers[question.id] === State.ERROR || !resultsAnswers[question.id]
                    ) resultsAnswers[question.id] = State.SUCCESS;       
                    
                    set({ 
                        answerState: {
                            [answerId]: State.SUCCESS
                        },
                        results: resultsAnswers 
                    });                    
                    
                } else {
                    resultsAnswers[question.id] = State.ERROR;            
                    set({ 
                        answerState: {
                            [answerId]: State.ERROR
                        },
                        results: resultsAnswers
                    });                      
                }
                const timeout = window.setTimeout(() => {
                    if (activeQuestion + 1 === quiz.length) {
                        set({ isFinished: true });
                    } else {                       
                        set(state => ({ 
                            activeQuestion: state.activeQuestion + 1, 
                            answerState: null
                        }));                    
                    }
                    window.clearTimeout(timeout);
                }, 1000);
            },
            setQuestionItem: (value: CreateQuizValues) => {                
                const { quiz } = get();
                const { answer, question, option1, option2, option3, option4 } = value;   
            
                const questionItem = {
                    id: quiz.length + 1,
                    question,
                    rightAnswerId: answer,
                    answers: [
                        { id: '1', text: option1 },
                        { id: '2', text: option2 },
                        { id: '3', text: option3 },
                        { id: '4', text: option4 },
                    ]
                }; 
    
                set({
                    quiz: [questionItem].concat(quiz)
                });       
            },
            setClearQuiz: () => {
                set({ quiz: [] })
            },
            setModalTitleQuiz: () => {
                set((state) => (
                    { modalTitleQuiz: !state.modalTitleQuiz}
                ))
            },
            setDataToQuiz: (items: Quiz[]) => {
                const { quiz } = get();                                          
                if (quiz.length === 0) {                               
                    set({
                        quiz: items.concat(quiz)
                    });
                }
            },
            setBackToQuizes: () => {
                set({
                    results: {},
                    isFinished: false,
                    activeQuestion: 0,
                    answerState: null,
                    quiz: []
                })
            },            
            quiz: []         
       })
    )
);

