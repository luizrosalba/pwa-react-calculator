import React, {useState} from 'react';

import './App.css';

import Botoes from './components/Botoes'


function App() {
  const [entrada, setEntrada] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [operation, setOperation] = useState(null);
  
  
  const equals = () => {
    if (operation==="+")
      setEntrada(parseFloat(previous) + parseFloat(entrada))
    if (operation==="-")
      setEntrada(parseFloat(previous) - parseFloat(entrada))
    if (operation==="x")
      setEntrada(parseFloat(previous) * parseFloat(entrada))
    if (operation==="/")
      setEntrada(parseFloat(previous) / parseFloat(entrada))
    console.log(previous+ " " + operation+ " " +entrada)
  }

  const minusCase = () => {
    if (entrada===0)
    {
      setEntrada("-");
    }
    else 
    {
      setPrevious(entrada);
      setEntrada(0);
      setOperation("-");
    }
  }



  const handleEntrada = (event) => {

    const newEntrada = event.target.innerText;
    switch (newEntrada) {
      case "1":
        setEntrada(entrada===0?newEntrada:entrada+newEntrada);
        break   
      case "2":
        setEntrada(entrada===0?newEntrada:entrada+newEntrada);
        break
      case "3":
        setEntrada(entrada===0?newEntrada:entrada+newEntrada);
        break
      case "4":
        setEntrada(entrada===0?newEntrada:entrada+newEntrada);
        break    
      case "5":
        setEntrada(entrada===0?newEntrada:entrada+newEntrada);
        break    
      case "6":
        setEntrada(entrada===0?newEntrada:entrada+newEntrada);
        break    
      case "7":
        setEntrada(entrada===0?newEntrada:entrada+newEntrada);
        break  
      case "8":
        setEntrada(entrada===0?newEntrada:entrada+newEntrada);
        break  
      case "9":
        setEntrada(entrada===0?newEntrada:entrada+newEntrada);
        break  
      case "0":
        setEntrada(entrada===0?entrada:entrada+newEntrada);
        break      
      case "AC":
        setEntrada(0);
        setOperation("");
        break;
      case ".":
        setEntrada(entrada.toString().includes(".")?entrada:entrada+newEntrada);
        break;
      case "+":       
          setPrevious(entrada);
          setEntrada(0);
          setOperation("+")
        break;
      case "-":
        minusCase();
        break;
      case "/":
          setPrevious(entrada);
          setEntrada(0);
          setOperation("/")
        break;
      case "x":
          setPrevious(entrada);
          setEntrada(0);
          setOperation("x")
        break;
      case "=":
          equals();
        break;
      default:
        break;
    }
    
    


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
                readOnly
                id="display"        
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

