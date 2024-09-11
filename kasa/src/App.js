//import logo from '../../assets/logo.png';
import '@/App.css';

import Home from '@/pages/Home';
import Apropos from '@/pages/Apropos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Erreurs from '@/_utils/Erreurs';
import Layout from '@/pages/Layout';
import Logements from './pages/Logements';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/logements" element={<Logements />} />

            <Route path="*" element={<Erreurs />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
