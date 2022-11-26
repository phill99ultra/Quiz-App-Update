import React from 'react';
import { Typography, Box } from '@mui/material';

import classes from './active-quiz.module.css';
import { Quiz, AnswerState } from '../../interfaces/interfaces';
import AnswersList from './AnswersList/AnswersList';

type ActiveQuizProps = {
    quiz: Quiz;
    quizLength: number;
    answerNumber: number;
    answerState: AnswerState | null;
    handleAnswerClick: (answerId: number) => void
}

const ActiveQuiz: React.FC<ActiveQuizProps> = (
    { 
        quiz: { question, answers },
        quizLength, 
        answerNumber,
        answerState,
        handleAnswerClick 
    }
    ) => {   
    
    return(
        <Box className={classes.ActiveQuiz}>
            <Typography paragraph={true} className={classes.Question}>
                <Box component='span'>
                    <Box component='span' sx={{ fontWeight: 'bold' }}>{answerNumber}.&nbsp;</Box>
                   { question }
                </Box>
                <Box component='span'>{answerNumber} din {quizLength}</Box>
            </Typography>
            <AnswersList 
                answers={answers}
                answerState={answerState}
                handleAnswerClick={handleAnswerClick}
            />
        </Box>
    )
}

export default ActiveQuiz;