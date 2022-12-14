import React from 'react';
import { Drawer } from '@mui/material';

import classes from './drawer.module.css';
import MenuToggle from '../MenuToggle/MenuToggle';
import { useQuizStore } from '../../../stores/quiz/store';
import { BackdropComponent } from '../../UI/Backdrop/Backdrop';
import PagesLinks from './Links/Links';

const DrawerComponent: React.FC<{}> = () => {
    const [
        isAuth,
        menu, 
        setMenuHandler
    ] = useQuizStore(state => [
        state.isAuth,
        state.menu, 
        state.setMenuHandler
    ]);
    const cls = [classes.Drawer];
    if (menu) cls.push(classes.open);
    if (!menu && menu !== null) cls.push(classes.close);    
      
    return(
        <React.Fragment>
            <Drawer variant="permanent" className={cls.join(' ')}>
                <MenuToggle
                    isOpen={menu}
                    handleToggle={setMenuHandler}
                />
                <PagesLinks 
                    isOpen={menu}
                    listClass={classes.NavLinks}
                    authState={isAuth}
                    handleToggle={setMenuHandler}
                />
            </Drawer>
            { menu && <BackdropComponent handleToggle={setMenuHandler} /> }           
        </React.Fragment>
    )
}

export default DrawerComponent;