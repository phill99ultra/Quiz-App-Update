import React from 'react';
import { Backdrop } from '@mui/material';

type BackDropProps = {
    handleToggle: () => void;
}

const BackdropComponent: React.FC<BackDropProps> = ({ handleToggle }) => {    
    return(
        <Backdrop 
            sx={{ zIndex: 1 }}
            open={true} 
            onClick={() => handleToggle()}
        />       
    )
}

export default BackdropComponent;