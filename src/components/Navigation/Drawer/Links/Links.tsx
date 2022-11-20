import React from 'react';
import { 
    List, 
    ListItem, 
    ListItemText, 
    ListItemIcon, 
    Tooltip, 
    Zoom 
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import { SIDEBAR_LINKS } from '../../../../constants/sidebarLinks';
import classes from './links.module.css';

type LinksProps = {
    listClass: string;
    handleToggle: () => void;
}

const PagesLinks: React.FC<LinksProps> = ({ listClass, handleToggle }) => {
    return(
        <List className={listClass}>
            {
                SIDEBAR_LINKS.map((link, index) => (
                    <ListItem   
                        key={link.id}
                    >
                        <NavLink 
                            className={classes.NavLink}
                            to={link.to}                          
                        >
                            <Tooltip 
                                placement='right' 
                                title={link.label}
                                TransitionComponent={Zoom}
                            >
                                <ListItemIcon 
                                    className={classes.NavIcon}
                                >
                                    { link.icon }
                                </ListItemIcon>
                            </Tooltip>
                            <ListItemText
                                onClick={() => handleToggle()}
                                className={classes.NavText}
                            >
                                { link.label }
                            </ListItemText>
                        </NavLink>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default PagesLinks;