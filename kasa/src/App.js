import logo from '@/logo.svg';
import '@/App.css';
import Home from '@/pages/Home';
import Apropos from '@/pages/Apropos';
import Logements from '@/pages/Logements';
import Erreurs from '@/pages/Erreurs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <Logements />
        <Erreurs />
        <Apropos />
      </header>
    </div>
  );
}

export default App;
