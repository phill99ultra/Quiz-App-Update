import { useMutation } from "react-query";

import { QuizService } from "../../constants/axios";

export const useCreateQuiz = () => {
    return useMutation(QuizService.addQuiz);
}