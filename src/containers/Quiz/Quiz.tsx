import React from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import classes from './quiz.module.css';
import { useQuizStore } from '../../stores/quiz/store';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import { useQuiz } from '../../RQ/queries/useQuiz';
import { LoaderComponent } from '../../components/UI/Loader/Loader';

const Quiz: React.FC<{}> = () => {
    const [ 
        results, 
        isFinished, 
        activeQuestion, 
        answerState, 
        setRetryQuiz,
        setActiveQuestion,         
        quiz 
    ] = useQuizStore(state => [
        state.results,
        state.isFinished,
        state.activeQuestion,
        state.answerState,
        state.setRetryQuiz,
        state.setActiveQuestion,       
        state.quiz
    ]);   

    const params = useParams();    
    const { isLoading, isError, error } = useQuiz(params?.id);

    if (isError && error instanceof Error) {
        return <h2>{error.message}</h2>
    }
    if (isLoading) return <LoaderComponent/>    
    
    return (
        <Box className={classes.Quiz}>
            <Box className={classes.QuizWrapper}>
                <Typography variant='h3'>Răspunde-ți la toate întrebările</Typography>
                {
                    isFinished && (
                        <FinishedQuiz
                            quiz={quiz} 
                            quizLength={quiz.length}
                            results={results}
                            handleRetry={setRetryQuiz}
                        />
                    )
                }
                {
                    !isFinished && (
                        <ActiveQuiz 
                            quiz={quiz[activeQuestion]} 
                            quizLength={quiz.length}
                            answerNumber={activeQuestion + 1}                 
                            answerState={answerState}
                            handleAnswerClick={setActiveQuestion} 
                        />
                    )
                }               
            </Box>
        </Box>
    )
}

export default Quiz;