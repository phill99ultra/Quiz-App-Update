import { createTheme } from '@mui/material/styles';

export const finalTheme = createTheme({
    components: {
        MuiDrawer: {           
            styleOverrides: {
                paper: {
                    padding: '20px 0 0 0'
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    width: '560px',
                    padding: '20px'
                }
            }
        }                  
    }
})
