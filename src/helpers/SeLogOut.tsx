import { redirect } from 'react-router-dom';

import { useQuizStore } from "../stores/quiz/store"

export const SetLogOut = () => {      
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationData');
    useQuizStore.setState({ isAuth: false });
    return redirect('/');
}