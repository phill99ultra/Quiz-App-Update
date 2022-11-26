import React from 'react';
import { ListItem, List, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './list.module.css';

type QuizesProps = {
    data: any[] | undefined;
    isLoading: boolean;
    isError: boolean;
    error: any
}

const Quizes: React.FC<QuizesProps> = ({ data, isLoading, isError, error }) => {     

    if (isError && error instanceof Error) {
        return <h2>{error.message}</h2>
    }
  
    return(       
        <List>
            {
                data && data.map((element, index) => (
                    <ListItem key={element.id}>
                        <NavLink 
                            className={classes.QuizLink}
                            to={`/quiz/${element.id}`}
                        >
                            <ListItemText>                                
                                { index + 1 }.&nbsp;{ element.title } 
                            </ListItemText>
                        </NavLink>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default Quizes;