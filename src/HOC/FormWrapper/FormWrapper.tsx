import React from 'react';
import { Box } from '@mui/material';

import classes from './form-wrapper.module.css';

type FormWrapperProps = {
    children?: React.ReactNode | React.ReactNode[] | unknown
}

export const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
    return(
        <Box className={classes.FormWrapper}>
            <>
                { children }
            </>
        </Box>
    )
}

