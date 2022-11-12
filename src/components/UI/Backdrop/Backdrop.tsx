import React from 'react';
import { Backdrop } from '@mui/material';

type BackDropProps = {
    handleToggle: () => void;
}

export const BackdropComponent: React.FC<BackDropProps> = ({ handleToggle }) => {    
    return(
        <Backdrop 
            sx={{ zIndex: 1 }}
            open={true} 
            onClick={() => handleToggle()}
        />       
    )
}