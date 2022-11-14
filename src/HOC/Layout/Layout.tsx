import React from 'react';
import { Box } from '@mui/material';

import classes from './layout.module.css';
import DrawerComponent from '../../components/Navigation/Drawer/Drawer';

type LayoutProps = {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {   
    return(
        <Box className={classes.Layout}>
            <DrawerComponent/>           
            <Box component='main'>
                { children }
            </Box>
        </Box>
    )
}

export default Layout;
