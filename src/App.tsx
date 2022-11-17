import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Layout from './HOC/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Auth from './containers/Auth/Auth';
import QuizCreate from './containers/QuizCreate/QuizCreate';
import QuizList from './containers/QuizList/QuizList';
import { finalTheme } from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App: React.FC<{}> = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
