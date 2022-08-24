import logo from './logo.svg';
import './App.css';
import GreetngF from './pure/greetngF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Mis componentes */}
        <GreetngF name="Omar Camargo Ardila"/>
      </header>
    </div>
  );
}

export default App;
