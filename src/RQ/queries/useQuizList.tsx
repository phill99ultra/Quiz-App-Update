import { useQuery } from "react-query";
import axios from "axios";

const fetchQuiz = () => {
    return axios.get('https://react-quiz-app-8f76b-default-rtdb.europe-west1.firebasedatabase.app/quizes.json');
}

export const useQuizList = () => {
    return useQuery('quiz-list', fetchQuiz);
}