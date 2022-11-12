import React from 'react';
import { Button } from '@mui/material';

import classes from './button.module.css';

type BtnProps = {
    typeBtn?: "submit" | "button" | "reset" | undefined;
    title: string;
    variantBtn?: "text" | "outlined" | "contained" | undefined;
    sizeBtn?: "small" | "medium" | "large" | undefined;
    colorBtn?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    endIconBtn?: JSX.Element;
    onClick?: () => void;  
    disableBtn?: boolean;  
}

export const ButtonComponent: React.FC<BtnProps> = (
    { 
        typeBtn, 
        title, 
        variantBtn, 
        sizeBtn, 
        endIconBtn, 
        colorBtn, 
        onClick, 
        disableBtn }) => {
    return(
        <Button      
            type={typeBtn}                 
            className={classes.Button} 
            variant={variantBtn} 
            size={sizeBtn}    
            endIcon={endIconBtn} 
            color={colorBtn}           
            onClick={() => onClick?.()}
            disabled={disableBtn}
        >
            { title }
        </Button>
    )
}