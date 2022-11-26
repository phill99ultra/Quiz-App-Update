import { Navigate } from "react-router-dom";
import { useQuizStore } from "../../stores/quiz/store";

type RequireAuthProps = {
    children?: React.ReactNode
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const [ isAuth ] = useQuizStore(state => [
        state.isAuth
    ]);
   
    if (isAuth) return (
        <>
            { children }
        </>
    );    

    return <Navigate to='/' replace />    
}
