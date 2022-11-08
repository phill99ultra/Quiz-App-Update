import React from 'react';

import classes from './layout.module.css';
import DrawerComponent from '../../components/Navigation/Drawer/Drawer';

interface Props {
    children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {   
    return(
        <div className={classes.Layout}>
            <DrawerComponent/>           
            <main>
                { children }
            </main>
        </div>
    )
}

export default Layout;
