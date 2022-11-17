import React from 'react';
import { Box, Typography } from '@mui/material';

import Quizes from './List/List';
import classes from './quiz-list.module.css';

const QuizList: React.FC<{}> = () => {   
    return(
        <Box className={classes.QuizList}>
            <Typography variant='h3'>Lista Testelor</Typography>
            <Quizes/>
        </Box>
    )
}

export default QuizList;