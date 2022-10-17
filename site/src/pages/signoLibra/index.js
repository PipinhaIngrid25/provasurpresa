import { useState } from "react";
import './index.scss'

export default function Index () {
    const [mes, setMes] = useState(" ");
    const [dia, setDia] = useState(0);
    const [resultado, setResultado] = useState(" ");
    
    function signoLibra () {
        if (mes === "setembro" && dia >= 23 || mes === "outubro" && dia <= 22) {
        return setResultado("Seu signo é de Libra!")
        }
        else {
            return setResultado("Seu singo não é de libra")
        }
    }

return(
    <main>
        <div>
            <img src="../images/Libra.jpeg"></img>
        </div>
        <div className="Textos">
            <h1>Veja se você é do signoLibra:</h1>
            <imput></imput>
            <imput type="text">Dia de nascimento?</imput>
            <imput type="text">Mês de nascimento?</imput>
            <button className="botão">você é libriano?</button>
        </div>
    </main>
 )
}