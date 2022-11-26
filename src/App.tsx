import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Layout from './HOC/Layout/Layout';
import { finalTheme } from './theme';
import { ROUTES } from './routes/routes';

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
          {
            ROUTES
          }
        </Layout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
