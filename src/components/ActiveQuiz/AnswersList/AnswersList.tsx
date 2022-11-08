import React from 'react';
import { List } from '@mui/material';

import classes from './answers-list.module.css';
import { Answer, AnswerState } from '../../../interfaces/interfaces';
import AnswerItem from './AnswerItem/AnswerItem';

interface AnswerListProps {
    answers: Answer[];
    answerState: AnswerState | null;
    handleAnswerClick: (answerId: number) => void
}

const AnswersList: React.FC<AnswerListProps> = ({ answers, answerState, handleAnswerClick }) => {  
   
    return(
        <List disablePadding={true}>
            {
                answers.map(answer => {
                    return (
                        <AnswerItem 
                            key={answer.id} 
                            answer={answer}
                            answerState={answerState ? answerState[Number(answer.id)] : null}
                            handleAnswerClick={handleAnswerClick}
                        />
                    )
                })
            }
        </List>
    )
}

export default AnswersList;