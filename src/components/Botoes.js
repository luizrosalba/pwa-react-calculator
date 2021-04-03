import './Botoes.css';

function Botoes(props) {

  return (
    <div>
    <section>
        <div className="grid grid-columns-1"  >
            <div className="item">
            <button className="botao-vermelho" onClick={props.onClick}>
                AC
            </button>
            </div>
            <div className="item">
                <button className="botao-operacoes" onClick={props.onClick}>
                    /
                </button>    
            </div>
            <div className="item">
                <button className="botao-operacoes" onClick={props.onClick}>
                    x
                </button>    
            </div>
        </div>
    
        <div className="grid grid-columns-2">
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    7
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    8
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    9
                </button>    
            </div>
            <div className="item">
                <button className="botao-operacoes" onClick={props.onClick}>
                    +
                </button>    
            </div>
        </div>
        <div className="grid grid-columns-2">
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    4
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    5
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    6
                </button>    
            </div>
            <div className="item">
                <button className="botao-operacoes" onClick={props.onClick}>
                    -
                </button>    
            </div>
        </div>
        <div className="grid grid-columns-2">
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    1
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    2
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    3
                </button>    
            </div>
            <div className="item-equal botao-equal" onClick={props.onClick}>
                <button className="botao-equal">
                    =
                </button>    
            </div>
            <div className="item-0">
                <button className="botao-numeros" onClick={props.onClick}>
                    0
                </button>    
            </div>
            <div className="item">
                <button className="botao-numeros" onClick={props.onClick}>
                    .
                </button>    
            </div>
        </div>
        
    </section>
</div>

  );
}

export default Botoes;