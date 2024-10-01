import { BrowserRouter } from 'react-router-dom';
import PublicRouter from './pages/PublicRouter';
import '../src/assets/Css/Template/app.css';

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
