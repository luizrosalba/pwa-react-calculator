import React, {useState} from 'react';

import './App.css';

import Botoes from './components/Botoes'


function App() {
  const [entrada, setValue] = useState(0);

  const handleEntrada = (event) => {

    const newEntrada = event.target.innerText;
    setValue(newEntrada);

  }

  return (

    <div className="App">
      <header className="App-header">
          <h1>  Projeto Calculadora Simples </h1> 
      </header>
      <section>
        <div className="container">
          <div className="wrap">
            <div>
              <input 
                handleAddValue={handleEntrada} 
                value={entrada}
                className="entrada" 
              />
            </div>
            <Botoes 
              onClick= {handleEntrada}
            />
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default App;

