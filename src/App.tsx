import { useState } from 'react';
import './App.css';
// import { Profile } from './components/Profile';


// Componente padre di tutti gli altri
// Contiene l'intera applicazione React
function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter+1);
    console.log(counter);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleClick}></button>
      {/* <Profile />
      <h2>Questo è il mio H2 per separare i profili</h2>
      <Profile /> */}
    </div>
  );
}

// Esporto il componente default App
export default App;
