import { useMutation } from "react-query";
import axios from "axios";

import { AddQuiz } from "../../interfaces/interfaces";

const addQuiz = (value: AddQuiz) => {
    return axios.post('https://react-quiz-app-8f76b-default-rtdb.europe-west1.firebasedatabase.app/quizes.json', value);
}

export const useCreateQuiz = () => {
    return useMutation(addQuiz);
}