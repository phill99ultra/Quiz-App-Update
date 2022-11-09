import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Layout from './HOC/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Auth from './containers/Auth/Auth';
import QuizCreate from './containers/QuizCreate/QuizCreate';
import QuizList from './containers/QuizList/QuizList';
import { finalTheme } from './theme';

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={finalTheme}>
      <Layout>
        <Routes>
          <Route path='/' element={<QuizList/>}/>
          <Route path='/auth' element={<Auth/>}/>       
          <Route path='/quiz/:id' element={<Quiz/>}/>
          <Route path='/quiz-create' element={<QuizCreate/>}/>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
