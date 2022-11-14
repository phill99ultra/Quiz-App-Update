import React from 'react';
import { List, Box, ListItem, ListItemText, Typography } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { green, red } from '@mui/material/colors';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import QuizIcon from '@mui/icons-material/Quiz';
import { Link } from 'react-router-dom';

import classes from './finished-quiz.module.css';
import { Quiz, State } from '../../interfaces/interfaces';
import { ButtonComponent } from '../UI/Button/Button';

interface FinishedQuizProps {
    quiz: Quiz[];
    quizLength: number;
    results: any;
    handleRetry: () => void;
}

const FinishedQuiz: React.FC<FinishedQuizProps> = ({ quiz, quizLength, results, handleRetry }) => {
    console.log('results ', results)
    const successCount = Object.keys(results).reduce((total, key) => {
        if (results[key] === State.SUCCESS) total++
        return total
    }, 0);
    return(
        <Box className={classes.FinishedQuiz}>
            <List disablePadding={true}>
                {
                    quiz.map((quizItem, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemText>
                                    <Box component='span' sx={{ fontWeight: 'bold' }}>{index + 1}.&nbsp;</Box>
                                    {quizItem.question}
                                    {
                                        (results[quizItem.id] === State.ERROR) && (
                                            <HighlightOffIcon fontSize="large" sx={{ color: red[500] }} />
                                        )                                        
                                    }
                                    {
                                        (results[quizItem.id] === State.SUCCESS) && (
                                            <CheckCircleOutlineIcon fontSize="large" sx={{ color: green[500] }} />
                                        )                                        
                                    }
                                </ListItemText>
                            </ListItem>
                        )
                    })
                }                
            </List>
            <Typography paragraph={true}>Corect răspuns {successCount} din {quizLength}</Typography>
            <Box>
                <ButtonComponent
                    title="Repetă încă o dată" 
                    variantBtn="contained" 
                    sizeBtn='medium' 
                    iconBtn={<ReplayIcon fontSize="large" />}
                    onClick={handleRetry}
                />
                <Link to='/'>
                    <ButtonComponent
                        title="Treci la lista testelor" 
                        variantBtn="contained" 
                        sizeBtn='medium' 
                        colorBtn='success'
                        iconBtn={<QuizIcon fontSize="large" />}
                        onClick={handleRetry}                   
                    />                    
                </Link>
            </Box>
        </Box>
    )
}

export default FinishedQuiz;