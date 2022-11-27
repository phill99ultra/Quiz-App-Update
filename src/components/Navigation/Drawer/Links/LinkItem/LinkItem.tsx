import React from 'react';
import { ListItem, ListItemText, ListItemIcon, Tooltip, Zoom } from '@mui/material';
import { NavLink } from 'react-router-dom';

import classes from './link-item.module.css';
import { NavigationLink } from '../../../../../interfaces/interfaces';

type LinkItemProps = {
    link: NavigationLink;
    handleToggle: () => void;
}

const LinkItem: React.FC<LinkItemProps> = ({ link, handleToggle }) => {
    return(
        <ListItem>
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
    )
}

export default LinkItem;