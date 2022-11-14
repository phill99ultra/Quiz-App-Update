import React from 'react';
import { TextField } from '@mui/material';

type InputProps = {
    inputName?: string;
    inputLabel: string;
    inputVariant: "standard" | "filled" | "outlined" | undefined;
    inputHandleBlur?: (e: any) => void;
    inputHandleChange?: (e: React.ChangeEvent<any>) => void;
    inputValue?: string;
    inputError?: boolean;
    inputErrorText?: string;
}

export const InputComponent: React.FC<InputProps> = (
    { 
        inputName,
        inputLabel, 
        inputVariant, 
        inputHandleBlur, 
        inputHandleChange, 
        inputValue,
        inputError,
        inputErrorText
    }) => {   

    return(
        <TextField 
            sx={{ borderRadius: '5px' }}             
            error={inputError}   
            name={inputName}      
            label={inputLabel}
            variant={inputVariant}
            onBlur={inputHandleBlur}
            onChange={inputHandleChange}
            value={inputValue}
            helperText={inputErrorText}
        />
    )
}