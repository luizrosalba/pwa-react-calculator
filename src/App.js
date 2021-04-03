import './App.css';

import Botoes from './components/Botoes'

function onClick (event){
  console.log(event.target.innerText)
}

function App() {
  return (

    <div className="App">
      <header className="App-header">
          <h1> Projeto Calculadora </h1> 
      </header>
      <section>
        <div className="container">
          <div className="wrap">
            <div>
              <input className="entrada" />
            </div>
            <Botoes 
              onClick= {onClick}
            />
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default App;

