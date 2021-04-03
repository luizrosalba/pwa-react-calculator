import './Botoes.css';


function Botoes() {

  return (
    <div>
    <section>
        <div className="grid grid-columns-1">
            <div className="item">
            <button className="botao-vermelho">
                AC
            </button>
            </div>
            <div className="item">
                <button className="botao-operacoes">
                    /
                </button>    
            </div>
            <div className="item">
                <button className="botao-operacoes">
                    x
                </button>    
            </div>
        </div>
    
        <div className="grid grid-columns-2">
            <div className="item">
                <button className="botao-numeros">
                    7
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros">
                    8
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros">
                    9
                </button>    
            </div>
            <div className="item">
                <button className="botao-operacoes">
                    /
                </button>    
            </div>
        </div>
        <div className="grid grid-columns-2">
            <div className="item">
                <button className="botao-numeros">
                    4
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros">
                    5
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros">
                    6
                </button>    
            </div>
            <div className="item">
                <button className="botao-operacoes">
                    /
                </button>    
            </div>
        </div>
        <div className="grid grid-columns-2">
            <div className="item">
                <button className="botao-numeros">
                    1
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros">
                    2
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros">
                    3
                </button>    
            </div>
            <div className="item-equal botao-equal">
                <button className="botao-equal">
                    =
                </button>    
            </div>
            <div className="item-0">
                <button className="botao-numeros">
                    0
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros">
                    .
                </button>    
            </div>
        </div>
        
    </section>
</div>

  );
}

export default Botoes;