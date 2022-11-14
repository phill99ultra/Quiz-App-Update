import React from 'react';
import { Box } from '@mui/material';

import classes from './buttons.module.css';

type ButtonsProps = {
    children?: React.ReactNode
}

export const ButtonsWrapper: React.FC<ButtonsProps> = ({ children }) => {
    return(
        <Box className={classes.ButtonsWrapper}>
            { children }
        </Box>
    )
}