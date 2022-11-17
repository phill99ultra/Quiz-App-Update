import React from 'react';
import { ListItem, List, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

import classes from './list.module.css';

const listP = [1, 2, 3];

const Quizes: React.FC<{}> = () => {
    const fetchQuiz = () => {
        return axios.get('https://react-quiz-app-8f76b-default-rtdb.europe-west1.firebasedatabase.app/quiz.json')
    }

    const { data, isLoading, isError, isFetching, error } = useQuery('quiz', fetchQuiz)

    console.log('data ', data?.data)
    console.log('error', { isLoading, isFetching })
    if (isError && error instanceof Error) {
        return <h2>{error.message}</h2>
    }
    return(
        <List>
            {
                listP.map((element, index) => (
                    <ListItem key={index}>
                        <NavLink 
                            className={classes.QuizLink}
                            to={`/quiz/${element}`}
                        >
                            <ListItemText>
                                { isLoading && <span>Is loading...</span> }
                                Test Nr. {element} 
                            </ListItemText>
                        </NavLink>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default Quizes;