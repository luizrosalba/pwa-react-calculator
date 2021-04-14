import React, {useState, useEffect} from 'react';

import './App.css';

import Botoes from './components/Botoes'


function App() {
  const [display, setDisplay] = useState(0);
  const [memory, setMemory] = useState(0);
  const [operation, setOperation] = useState("");
  const [expression, setExpression] = useState(""); 
  const [answer, setAnswer] = useState(0); 

  const evaluateExpression = () =>{
    if (operation==="+")
    {
      setDisplay(parseFloat(memory) + parseFloat(display))
      setMemory(parseFloat(memory) + parseFloat(display))
    }
    if (operation==="-")
    {
      setDisplay(parseFloat(memory) - parseFloat(display))
      setMemory(parseFloat(memory) - parseFloat(display))
    }
    if (operation==="x")
    {
      setDisplay(parseFloat(memory) * parseFloat(display))
      setMemory(parseFloat(memory) * parseFloat(display))
    }
    if (operation==="/"){
      setDisplay(parseFloat(memory) / parseFloat(display))
      setMemory(parseFloat(memory) / parseFloat(display))
    }
  }

  const equals = () =>{
    setExpression(memory+operation+display);
    evaluateExpression();
    ///set memory com o valor do resultado
  }

  function filterOperation (operator) {

    if(display===0) {
      if (memory===0)
      {
        if (operator==="-"||operator==="+") setDisplay(operator); ///caso display 0 coloque o símbolo
        else {
          setOperation(operator);
        }
      }else
      {
        if (operator==="-") setDisplay(operator); ///caso display 0 coloque o símbolo
        else {
          setOperation(operator);
        }
      }
    }

    if( (display==="-" || display==="+") && ((operator==="+") || (operator==="-"))) {
      setDisplay(operator); ///caso display - troque o símbolo
    }
    if( (display==="-" || display==="+") && ((operator!=="-") )) {
      setOperation(operator); ///caso display - troque o símbolo
    }

    if (display!==0 && display!=="+" && display!=="-"){ 
       
      if (operation==="")
      {
        setMemory(display); /// coloca o display na memoria 
        setDisplay(0);  /// zera o display 
        setOperation(operator);
      }else{
        setOperation(operator);
      }


    }
    
    // if( (display===0 || display==="-" || display==="+")  && (operator==="-" || operator==="+")){
    //   setDisplay(operator);  /// zera o display  
    // }


    // if(display!==0 && display!=="-" && display!=="+"){
    //   if(memory===0 && operation!==""){
    //     setMemory(display); /// coloca o display na memoria 
    //     setDisplay(0);  /// zera o display 
    //   }   
    //   if(memory!==0 && operation!==""){
    //     equals();
    //   }


    //   if (display!=="" && operation==="")
    //   {
    //     setMemory(display); /// coloca o display na memoria 
    //     setDisplay(0);  /// zera o display 
    //     setOperation(operator);
    //   }
    // }
  }

  const handleEntrada = (event) => {

    const operadorOuNumero = event.target.innerText;
    let numbersRegex = /[0-9]/
    if (operadorOuNumero.match(numbersRegex))
    {
      let number = operadorOuNumero;
      if (display===0)
      {
        setDisplay(number); /// se a entrada é zero começa um novo numero 
      }
      else
      {
        setDisplay(display+number); /// se a entrada não é zero mostre no display 
      }
    }

    let testOperations = /[+\-\x/]/;
    if (testOperations.test(operadorOuNumero)) 
    {
      let operador = operadorOuNumero;

      filterOperation(operador) /// se for uma operacao faça filtragem
    }

    switch (operadorOuNumero) {
      case "AC":
          setMemory(0);
          setDisplay(0);
          setOperation("");
          setExpression("");
        break;
      case ".":
          console.log("ponto")
          setDisplay(display.includes(".")?display:display+operadorOuNumero);
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
                style={{textAlign:"end"}}
                readOnly
                id="display"        
                value={display}
                className="entrada" 
              />
              <input 
                style={{textAlign:"end"}}
                readOnly
                id="operacao"        
                value={operation}
                className="entrada" 
              />
              <input 
                style={{textAlign:"end"}}
                readOnly
                id="memoria"        
                value={memory}
                className="entrada" 
              />
              <input 
                style={{textAlign:"end"}}
                readOnly
                id="expression"        
                value={expression}
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

