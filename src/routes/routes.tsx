import { Routes, Route } from 'react-router-dom';

import Quiz from '../containers/Quiz/Quiz';
import Auth from '../containers/Auth/Auth';
import QuizCreate from '../containers/QuizCreate/QuizCreate';
import QuizList from '../containers/QuizList/QuizList';
import LogOut from '../components/LogOut/LogOut';
import PageNotFound from '../containers/PageNotFound/PageNotFound';
import { RequireAuth } from '../HOC/RequireAuth/RequireAuth';

export const ROUTES = (
    <Routes>
        <Route path='/' element={<QuizList/>}/>
        <Route 
            path='/auth' 
            element={<Auth/>}
        />                    
        <Route path='/quiz/:id' element={<Quiz/>}/>
        <Route 
            path='/quiz-create' 
            element={
                <RequireAuth>
                    <QuizCreate/>
                </RequireAuth>
            }
        />
        <Route 
            path='/logout' 
            element={
                <RequireAuth>
                    <LogOut/>
                </RequireAuth>
            }
        />  
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
);

