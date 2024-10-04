import { BrowserRouter } from 'react-router-dom';
import PublicRouter from './pages/PublicRouter';
import Footer from './Layout/Footer';
import '../src/assets/Css/Template/app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
