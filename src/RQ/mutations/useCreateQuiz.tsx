import { useMutation } from "react-query";

import axios from "axios";
import { AddQuiz } from "../../interfaces/interfaces";

const addQuiz = (value: AddQuiz) => {
    return axios.post('/quizes.json', value);
}

export const useCreateQuiz = () => {
    return useMutation(addQuiz);
}