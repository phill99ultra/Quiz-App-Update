import React from 'react';
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './no-data.module.css';

export const NoData: React.FC<{}> = () => {
    return (
        <Box className={classes.NoData}>
            <Typography variant='h4'>
                Lista testelor e goală
            </Typography>
            <NavLink to='/quiz-create'>
                Puteți crea un test nou
            </NavLink>
        </Box>
    )
}