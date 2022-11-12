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
        // MuiTextField: {
        //     styleOverrides: {
        //         root: {
        //             '&:hover .MuiOutlinedInput-root': {
        //                 color: '#fff',
        //                 '& fieldset': {
        //                     borderColor: 'rgba(255, 255, 255, .87)'
        //                 },                       
        //                 '&.Mui-focused fieldset': {
        //                     borderColor: 'rgba(255, 255, 255, .87)'
        //                 }
        //             },
        //             '&:hover .MuiInputLabel-root': {
        //                 color: '#fff'
        //             }
        //         }
        //     }
        // },
        // MuiInputLabel: {
        //     styleOverrides: {
        //         root: {
        //             '&.Mui-focused': {
        //                 color: '#fff'
        //             }                   
        //         }
        //     }
        // },
        // MuiOutlinedInput: {
        //     styleOverrides: {
        //         root: {
        //             '&.Mui-focused': {
        //                 color: '#fff',
        //                 '& .MuiOutlinedInput-notchedOutline': {
        //                     borderColor: 'rgba(255, 255, 255, .87)'
        //                 }
        //             }  
        //         }
        //     }
        // }             
    }
})
