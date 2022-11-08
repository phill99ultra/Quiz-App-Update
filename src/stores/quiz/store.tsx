import create from 'zustand';

import { QuizStore, State } from '../../interfaces/interfaces';
import { generateId } from './helpers';

export const useQuizStore = create<QuizStore>((set, get) => ({
    menu: null,
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
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
        } else {
            resultsAnswers[question.id] = State.ERROR;            
            set({ 
                answerState: {
                    [answerId]: State.ERROR
                },
                results: resultsAnswers
            });                      
        }
    },
    quiz: [
        {
            id: '1',
            question: 'Ce culoare are cerul?',
            rightAnswerId: '1',
            answers: [
                {
                    id: '1',
                    text: 'albastru'
                },
                {
                    id: '2',
                    text: 'verde'
                },
                {
                    id: '3',
                    text: 'negru'
                },
                {
                    id: '4',
                    text: 'galben'
                }
            ]
        },
        {
            id: '2',
            question: 'Care este capitala Moldovei?',
            rightAnswerId: '3',
            answers: [
                {
                    id: '1',
                    text: 'Moscova'
                },
                {
                    id: '2',
                    text: 'Paris'
                },
                {
                    id: '3',
                    text: 'Chișinău'
                },
                {
                    id: '4',
                    text: 'Berlin'
                }
            ]
        }
    ]
}));
