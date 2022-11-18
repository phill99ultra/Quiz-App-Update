import { useMutation } from "react-query";
import axios from "axios";

import { Quiz } from "../../interfaces/interfaces";

const addQuiz = (quizItem: Quiz[]) => {
    return axios.post('https://react-quiz-app-8f76b-default-rtdb.europe-west1.firebasedatabase.app/quizes.json', quizItem).then(response => console.log('response ', response));
}

export const useCreateQuiz = () => {
    return useMutation(addQuiz);
}