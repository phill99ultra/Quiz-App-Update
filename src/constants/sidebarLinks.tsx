import { NavigationLink } from '../interfaces/interfaces';
import LoginIcon from '@mui/icons-material/Login';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

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
    },   
    {
        id: 3,
        to: '/quiz-create',
        label: 'Creează test', 
        icon: <CreateNewFolderIcon fontSize="large"/>       
    }
];