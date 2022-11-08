import React from 'react';
import { Button } from '@mui/material';

import classes from './button.module.css';

interface BtnProps {
    title: string;
    variantBtn?: "text" | "outlined" | "contained" | undefined;
    sizeBtn?: "small" | "medium" | "large" | undefined;
    colorBtn?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    endIconBtn?: JSX.Element;
    onClick?: () => void;    
}

const ButtonComponent: React.FC<BtnProps> = ({ title, variantBtn, sizeBtn, endIconBtn, colorBtn, onClick }) => {
    return(
        <Button   
            className={classes.Button} 
            variant={variantBtn} 
            size={sizeBtn}    
            endIcon={endIconBtn} 
            color={colorBtn}           
            onClick={() => onClick?.()}
        >
            { title }
        </Button>
    )
}

export default ButtonComponent;