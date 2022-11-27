import { SetLogOut } from "./SetLogOut";
import { SetAutoLogOut } from "./SetAutoLogOut";
import { useQuizStore } from "../stores/quiz/store";

export const SetAutoLogin = () => {
    const token = localStorage.getItem('token');    
    if (!token) SetLogOut();
    if (localStorage.getItem('expirationData')) {
        const expirationDate = new Date(localStorage.getItem('expirationData') as string);
        if (expirationDate <= new Date()) SetLogOut();        
        useQuizStore.setState({ isAuth: true }); 
        SetAutoLogOut( (expirationDate.getTime() - new Date().getTime()) / 1000 );
    }
    
}