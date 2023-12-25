import {React,  useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const incrase = () => {
    setCounter(count => count + 1);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <center>
        <h1>React Click Counter</h1>
        <br></br><br></br><br></br>
        <h2>{counter}</h2>
        <br></br>
        <button class='operation' onClick={incrase}>Click</button>
        <br></br><br></br>
        <button class='operation' onClick={reset}>Reset</button>
      </center>
    </div>
  );
}

export default App;
