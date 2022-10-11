import { useState } from "react";
import './index.scss'

export default function Index() {
    const [qtdP, setQtdP] = useState();
    const [qtdM, setQtdM] = useState();
    const [qtdG, setQtdG] = useState();
    const [desc, setDesc] = useState(0);
    const [resultado, setResultado] = useState();

    function calcularAcai() {
        const a = qtdP * 13.50;
        const b = qtdM * 15;
        const c = qtdG * 17.50;

        if (desc == 0) {
            const x = (a+b+c);
            setResultado(x)
        }
        else if (desc == 100) {
            setResultado(0)
        }
        else {
            const x = ((a+b+c) * desc)/100;
            setTotal(x)
        }
    } 
}
return(
    <main className="Calculo">
        <div>
            <img src="../images/Plantinha.png"></img>
        </div>
        <div className="Textos">
            <h1>Açaí pequeno</h1>
            <imput>Quantidade?</imput>
            <h1>Açaí médio</h1>
            <imput>Quantidade?</imput>
            <h1>Açaí grande</h1>
            <imput>Quantidade?</imput>
            <h1>Cupom</h1>
            <imput>Desconto?</imput>
        </div>
        <hr className="linha"></hr>
        <div className="Calcular">
            <h1>Total a pagar!</h1>
            <button>Calcular</button>
        </div>
    </main>
)