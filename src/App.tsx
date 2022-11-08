import Layout from './HOC/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';

const App: React.FC<{}> = () => {
  return (
    <Layout>
      <Quiz/>
    </Layout>
  );
}

export default App;
