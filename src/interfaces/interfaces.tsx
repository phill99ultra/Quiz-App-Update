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
export interface NavigationLink {
    id: number,
    to: string,
    label: string,
    icon: React.ReactNode    
}
export interface AuthValues {
    email: string;
    password: string;
}

export interface FormControl {   
    name: string,
    label: string,   
}
export interface AuthFormControls {
    formControls: {
        email: FormControl,
        password: FormControl
    }
}

export interface AnswerFormControl extends FormControl {
    text: string
}
export interface CreateQuiz {
    answer: AnswerFormControl,
    options: number[],
    formControls: {
        question: FormControl,
        option1: FormControl,
        option2: FormControl,
        option3: FormControl,
        option4: FormControl,
    }
}

export interface CreateQuizValues {
    answer: number | string,
    question: string,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
}

