import { createTheme, experimental_sx as sx } from '@mui/material/styles';

export const finalTheme = createTheme({
    components: {
        MuiDrawer: {           
            styleOverrides: {
                paper: sx({
                    padding: '20px 0 0 0'
                })
            }
        }       
    }
})
