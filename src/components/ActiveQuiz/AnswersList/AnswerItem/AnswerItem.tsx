import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

import classes from './answer-item.module.css';
import { Answer } from '../../../../interfaces/interfaces';

interface AnswerItemProps {
    answer: Answer;
    answerState: string | null;
    handleAnswerClick: (answerId: number) => void
}

const AnswerItem: React.FC<AnswerItemProps> = (
    { 
        answer: { text, id }, 
        answerState, 
        handleAnswerClick 
    }) => {    
    const cls = [classes.AnswerItem];
    if (answerState) cls.push(classes[answerState]);
    return(
        <ListItem 
            className={cls.join(' ')}
            onClick={() => handleAnswerClick(Number(id))}
        >
            <ListItemText>
                { text }
            </ListItemText>
        </ListItem>
    )
}

export default AnswerItem;