import React from 'react';
import { ListItem, List, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './list.module.css';

const listP = [1, 2, 3];

const Quizes: React.FC<{}> = () => {
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