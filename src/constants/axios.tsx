import axios from "axios";

const API_URL = 'https://react-quiz-app-8f76b-default-rtdb.europe-west1.firebasedatabase.app';
axios.defaults.baseURL = API_URL;

export default axios.create({
    baseURL: 'https://react-quiz-app-8f76b-default-rtdb.europe-west1.firebasedatabase.app'
})

export const QuizService = {
    async getQuizes() {
        return axios.get('/quizes.json');
    },
    async getQuiz(id: string) {
        return axios.get(`/quizes/${id}.json`);
    }
}