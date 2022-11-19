import React from 'react';
import { Box } from '@mui/material';

import classes from './loader.module.css';

export const LoaderComponent: React.FC<{}> = () => {
    return(
        <Box className={classes.Loader}>
            <Box/>
            <Box/>
        </Box>
    )
}