import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';

import { QUIZ_SERVICE } from "../../constants/axios";
import { SetAuthLocal } from "../../helpers/SetAuthLocal";

export const useAuthSignIn = () => {
    const navigate = useNavigate();
    return useMutation(QUIZ_SERVICE.authSignIn, {
        onSuccess: (response) => {
            const { idToken, localId, expiresIn } = response.data;
            SetAuthLocal(idToken, localId, expiresIn);           
            console.log('data ', response);
            return navigate('/');
        }
    });
}