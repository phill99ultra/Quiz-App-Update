import * as yup from 'yup';

export const createQuizSchema = yup.object().shape({
    question: yup.string().required('Acest cîmp este obligatoriu!'),
    option1: yup.string().required('Acest cîmp este obligatoriu!'),
    option2: yup.string().required('Acest cîmp este obligatoriu!'),
    option3: yup.string().required('Acest cîmp este obligatoriu!'),
    option4: yup.string().required('Acest cîmp este obligatoriu!'),
    answer: yup.number().required('Alegeți răspunsul corect la întrebare!').min(1).max(4)
});