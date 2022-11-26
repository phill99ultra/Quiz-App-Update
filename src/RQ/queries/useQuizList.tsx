import { useQuery } from "react-query";

import { AddQuiz } from '../../interfaces/interfaces';
import { QUIZ_SERVICE } from "../../constants/axios";

export const useQuizList = () => {
    return useQuery('quiz-list', () => QUIZ_SERVICE.getQuizes(), {
        select: response => {   
            const quizes: any[] = [];              
            if (response.data !== null) {               
                const modifyData = Object.entries(response.data).map(entry => {
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