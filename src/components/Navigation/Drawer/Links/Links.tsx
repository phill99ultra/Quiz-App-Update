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

import { SIDEBAR_LINKS, AUTH_SIDEBAR_LINKS } from '../../../../constants/sidebarLinks';
import classes from './links.module.css';

type LinksProps = {
    listClass: string;
    authState: boolean; 
    handleToggle: () => void;
}

const PagesLinks: React.FC<LinksProps> = ({ listClass, authState, handleToggle }) => {    
    let links = SIDEBAR_LINKS;
    if (authState) links = AUTH_SIDEBAR_LINKS;
    return(
        <List className={listClass}>
            {
                links.map((link, _) => (
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