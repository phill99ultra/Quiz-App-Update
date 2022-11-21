import axios from "axios";

import { AddQuiz } from "../interfaces/interfaces";

const API_URL = 'https://react-quiz-app-8f76b-default-rtdb.europe-west1.firebasedatabase.app';
axios.defaults.baseURL = API_URL;

export const QuizService = {
    async getQuizes() {
        return axios.get('/quizes.json');
    },
    async getQuiz(id: string) {
        return axios.get(`/quizes/${id}.json`);
    },
    async addQuiz(value: AddQuiz) {
        return axios.post('/quizes.json', value, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}