import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Alert, AlertTitle, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import classes from './alert.module.css';
import { SetErrorText } from '../../../helpers/SetErrorText';

type AlertProps = {
    error: Error | AxiosError | {};
}

export const AlertComponent: React.FC<AlertProps> = ({ error }) => {
    const [open, setOpen] = useState(true);
    if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data.error;        
        return (
            <Collapse in={open} className={classes.Alert}>
                <Alert 
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    <AlertTitle>Eroare</AlertTitle>
                    Aveți eroare — <strong>{ SetErrorText(message) }</strong>
                </Alert>
            </Collapse>
        )
    }
    return (
        <Collapse in={open}>
            <Alert 
                severity="error"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                <AlertTitle>Eroare</AlertTitle>
                <strong>Aveți eroare</strong>
            </Alert>
        </Collapse>
    )
}