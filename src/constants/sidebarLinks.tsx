import { NavigationLink } from '../interfaces/interfaces';
import LoginIcon from '@mui/icons-material/Login';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import LogoutIcon from '@mui/icons-material/Logout';

export const SIDEBAR_LINKS:NavigationLink[] = [
    {
        id: 1,
        to: '/auth',
        label: 'Autorizare', 
        icon: <LoginIcon fontSize="large"/>      
    },
    {
        id: 2,
        to: '/',
        label: 'Lista testelor',
        icon: <FormatListNumberedIcon fontSize="large"/>       
    } 
];


export const AUTH_SIDEBAR_LINKS:NavigationLink[] = [
    {
        id: 1,
        to: '/',
        label: 'Lista testelor',
        icon: <FormatListNumberedIcon fontSize="large"/>       
    },  
    {
        id: 2,
        to: '/quiz-create',
        label: 'Creează test', 
        icon: <CreateNewFolderIcon fontSize="large"/>       
    },
    {
        id: 3,
        to: '/logout',
        label: 'Delogare', 
        icon: <LogoutIcon fontSize="large"/>       
    }
]
