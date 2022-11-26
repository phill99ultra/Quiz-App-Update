import { useMutation } from "react-query";

import { QUIZ_SERVICE } from "../../constants/axios";

export const useCreateQuiz = () => {
    return useMutation(QUIZ_SERVICE.addQuiz);
}