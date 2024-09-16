import { BrowserRouter } from 'react-router-dom';
import PublicRouter from '@/pages/Public/PublicRouter';
import '@/assets/Css/Template/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
