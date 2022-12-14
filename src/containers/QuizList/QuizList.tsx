import React from 'react';
import { Box, Typography } from '@mui/material';

import Quizes from './List/List';
import classes from './quiz-list.module.css';
import { useQuizList } from '../../RQ/queries/useQuizList';
import { NoData } from './NoData/NoData';
import { LoaderComponent } from '../../components/UI/Loader/Loader';

const QuizList: React.FC<{}> = () => {  
    const { data, isLoading, isError, error } = useQuizList();
    
    if (isLoading) return (
        <Box className={classes.QuizList}>
            <LoaderComponent/>
        </Box>
    ); 

    if (!data?.length) return <NoData/>;
    
    return(       
        <Box className={classes.QuizList}>
            <Typography variant='h3'>Lista Testelor</Typography>
            <Quizes
                data={data}
                isLoading={isLoading}
                isError={isError}
                error={error}
            />
        </Box>
    )
}

export default QuizList;