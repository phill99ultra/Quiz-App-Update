import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import classes from './link-item.module.css';
import { NavigationLink } from '../../../../../interfaces/interfaces';

type LinkItemProps = {
    link: NavigationLink;
    handleToggle: () => void;
}

const LinkItemMenuOpen: React.FC<LinkItemProps> = ({ link, handleToggle }) => {
    const navigate = useNavigate();
    return(
        <ListItem>
             <ListItemIcon 
                className={classes.NavIcon}
            >
                { link.icon }
            </ListItemIcon>                                 
            <ListItemText
                className={classes.NavTextOpen}
                onClick={() => {
                    handleToggle();
                    navigate(link.to)
                }}                
            >
                { link.label }
            </ListItemText>           
        </ListItem>
    )
}

export default LinkItemMenuOpen;