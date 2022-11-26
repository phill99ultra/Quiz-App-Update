import { useQuery } from "react-query";

import { QUIZ_SERVICE } from "../../constants/axios";
import { useQuizStore } from "../../stores/quiz/store";

export const useQuiz = (quizId?: string | undefined) => {
    const [ setDataToQuiz ] = useQuizStore(state => [       
        state.setDataToQuiz,       
    ]);   

    return useQuery(
        ['quiz', quizId], 
        () => QUIZ_SERVICE.getQuiz(String(quizId)),       
        {
            select: response => {               
                const { items } = response.data;
                const sortedItems = items.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);                          
                setDataToQuiz(sortedItems);
                return sortedItems;
            },
            refetchOnWindowFocus: false,           
            enabled: !!quizId
        }
    );
} 