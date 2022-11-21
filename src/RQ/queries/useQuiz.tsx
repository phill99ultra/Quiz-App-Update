import { useQuery } from "react-query";

import { QuizService } from "../../constants/axios";
import { useQuizStore } from "../../stores/quiz/store";

export const useQuiz = (quizId?: string | undefined) => {
    const [ setDataToQuiz ] = useQuizStore(state => [       
        state.setDataToQuiz,       
    ]);   

    return useQuery(
        ['quiz', quizId], 
        () => QuizService.getQuiz(String(quizId)),       
        {
            select: data => {               
                const { items } = data.data;                
                setDataToQuiz(items);
                return items;
            },
            refetchOnWindowFocus: false,           
            enabled: !!quizId
        }
    );
} 