import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

import classes from './menu-toggle.module.css';

type MenuToggleProps = {
    isOpen: boolean | null;
    handleToggle: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, handleToggle }) => {
   
    return(
        <Box>
            {
                isOpen && (
                    <CloseIcon 
                        className={classes.MenuToggle}
                        fontSize="large"
                        onClick={() => handleToggle()}
                    />
                )
            }
            {
                !isOpen && (
                    <MenuIcon 
                        className={classes.MenuToggle}
                        fontSize="large"
                        onClick={() => handleToggle()}
                    />
                )
            }           
        </Box>
    )
}

export default MenuToggle;