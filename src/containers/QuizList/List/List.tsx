import React from 'react';
import { ListItem, List, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useQuizList } from '../../../RQ/queries/useQuizList';

import classes from './list.module.css';
import { LoaderComponent } from '../../../components/UI/Loader/Loader';

const listP = [1, 2, 3];

const Quizes: React.FC<{}> = () => {
    const { data, isLoading, isError, isFetching, error } = useQuizList()

    console.log('data ', data?.data)
    console.log('error', { isLoading, isFetching })
    if (isError && error instanceof Error) {
        return <h2>{error.message}</h2>
    }
    if (isLoading) return <LoaderComponent/>
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