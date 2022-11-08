export interface Answer {
    id: string;
    text: string;
}

export interface Quiz {
    id: string;    
    question: string;
    rightAnswerId: string;
    answers: Answer[]    
}

export enum State {
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface AnswerState {
    [key: number]: State;
}

export interface QuizStore {
    menu: boolean | null;
    results: any;
    isFinished: boolean;
    activeQuestion: number;
    answerState: AnswerState | null;
    setMenuHandler: () => void;
    setRetryQuiz: () => void;
    setActiveQuestion: (answerId: number) => void;
    quiz: Quiz[];
}

