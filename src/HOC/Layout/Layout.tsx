import React from 'react';

import classes from './layout.module.css';
import DrawerComponent from '../../components/Navigation/Drawer/Drawer';

type LayoutProps = {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {   
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
