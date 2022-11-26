import React from 'react';
import { Box, Typography } from '@mui/material';

import classes from './page-not-found.module.css';

const PageNotFound: React.FC<{}> = () => {
    return(
        <Box className={classes.NotFound}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h3'>Pagina nu a fost găsită</Typography>
        </Box>
    )
}

export default PageNotFound;