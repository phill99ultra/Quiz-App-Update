import { CreateQuiz, FormControl, AnswerFormControl } from "../interfaces/interfaces";

const createOption = (num: number) => {
    return({
        name: `option${num}`,
        label: `Varianta ${num}`
    })
}

const question: FormControl = {
    name: 'question',
    label: 'Introduceți întrebarea'
}

const answer: AnswerFormControl = {
    name: 'answer',
    label: 'Răspunsul',
    text: 'Alegeți răspunsul corect la întrebare'
}

export const CREATE_QUIZ_STATE: CreateQuiz = {
    answer,
    options: Array(4).fill(null).map((_, i) => i + 1),
    formControls: {
        question,
        option1: createOption(1),
        option2: createOption(2),
        option3: createOption(3),
        option4: createOption(4),
    }
}

