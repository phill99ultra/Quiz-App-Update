import { useQuery } from "react-query";

import { AddQuiz } from '../../interfaces/interfaces';
import { QuizService } from "../../constants/axios";

export const useQuizList = () => {
    return useQuery('quiz-list', () => QuizService.getQuizes(), {
        select: data => {   
            const quizes: any[] = [];              
            if (data.data !== null) {               
                const modifyData = Object.entries(data.data).map(entry => {
                    return { [entry[0]]: entry[1] };
                });    
                modifyData.forEach((key, _) => {               
                    const id = Object.keys(key)[0];
                    const { title } = key[Object.keys(key)[0]] as AddQuiz;
                    quizes.push({
                        id, title
                    })
                })       
            } 
            return quizes;
        },
        retry: 1,
        refetchOnWindowFocus: false,        
    });
}