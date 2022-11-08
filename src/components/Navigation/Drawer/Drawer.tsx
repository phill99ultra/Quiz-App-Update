import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

import classes from './drawer.module.css';
import MenuToggle from '../MenuToggle/MenuToggle';
import { useQuizStore } from '../../../stores/quiz/store';
import BackdropComponent from '../../UI/Backdrop/Backdrop';

const links = [1, 2, 3];

const renderLinks = () => {
    return links.map((link, index) => {
        return (
            <ListItem key={index}>
                <ListItemText>
                    Link {link}
                </ListItemText>
            </ListItem>
        )
    })
}

const DrawerComponent: React.FC<{}> = () => {
    const [menu, setMenuHandler] = useQuizStore(state => [state.menu, state.setMenuHandler]);
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
                <List>
                    { renderLinks() }
                </List>
            </Drawer>
            { menu && <BackdropComponent handleToggle={setMenuHandler} /> }
           
        </React.Fragment>
    )
}

export default DrawerComponent;