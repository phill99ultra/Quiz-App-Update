import { CreateQuizValues } from "../../interfaces/interfaces";

export const initialValues: CreateQuizValues = {
    answer: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
}

export type OnlyCreateQuizKeys = keyof CreateQuizValues;