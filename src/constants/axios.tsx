import axios from "axios";

import { AddQuiz, AuthData } from "../interfaces/interfaces";

const API_URL = 'https://react-quiz-app-8f76b-default-rtdb.europe-west1.firebasedatabase.app';
axios.defaults.baseURL = API_URL;
const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_Nf3PZdXh7_61LmuTAPIdvpCh8lkedNA';
const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_Nf3PZdXh7_61LmuTAPIdvpCh8lkedNA';

export const QUIZ_SERVICE = {
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
    },   
    async authSign(value: AuthData) {
        return axios.post(value.returnSecureToken ? SIGN_IN_URL : SIGN_UP_URL, value, {
            headers: { 'Content-Type': 'application/json' }
        })        
    }
}