import React from 'react';
import { MenuItem, TextField  } from '@mui/material';

type SelectProps = {
    selectLabel: string;
    selectName: string;
    selectValue?: number;
    selectHelperText?: string;
    selectError: boolean;
    selectHandleChange?: (e: React.ChangeEvent<any>) => void;
    selectHandleBlur?: (e: any) => void;
    options: number[];
}

export const SelectComponent: React.FC<SelectProps> = (
    { 
        selectLabel, 
        selectName,
        selectValue,
        selectHelperText,
        selectHandleChange,
        selectHandleBlur, 
        selectError,
        options
    }) => {
    return(
        <TextField
            select
            id={`demo-select-${selectName}`}
            label={selectLabel}
            name={selectName}
            value={selectValue}
            error={selectError}
            helperText={selectHelperText}
            onChange={selectHandleChange}
            onBlur={selectHandleBlur}
        >         
            {
                options.map((option, index) => (
                    <MenuItem 
                        key={`${option}-${index}`}
                        value={option}
                    >
                        {option}
                    </MenuItem>
                ))
            }           
        </TextField>
    )
}
