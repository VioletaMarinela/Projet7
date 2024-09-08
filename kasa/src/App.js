//import logo from '@/logo.svg';
import '@/App.css';

import Home from '@/pages/Home';
import Apropos from '@/pages/Apropos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Erreurs from '@/_utils/Erreurs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />

          <Route path="*" element={<Erreurs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
