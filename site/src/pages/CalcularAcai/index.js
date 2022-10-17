import { useState } from "react";
import './index.scss'

export default function Index() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  const [desc, setDesc] = useState(0);
  const [resul, setResul] = useState(0);

  function calcular() {
    let acai = n1 * 13.5 + n2 * 15 + n3 * 17.5;
    let d = acai - (acai * (desc/100));
    setResul (d);
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
}