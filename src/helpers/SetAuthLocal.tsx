import { useQuizStore } from "../stores/quiz/store"
import { SetAutoLogOut } from "./SetAutoLogOut";

export const SetAuthLocal = (token: string, id: string, expires: string) => {    
    const expirationData = new Date(new Date().getTime() + Number(expires) * 1000);   
    localStorage.setItem('token', token);
    localStorage.setItem('userId', id);
    localStorage.setItem('expirationData', String(expirationData));   
    useQuizStore.setState({ isAuth: true });   
    SetAutoLogOut(Number(expires));
}
