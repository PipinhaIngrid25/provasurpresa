import { useState } from "react";
import './index.scss'

export default function Index() {
    const [gramas, setGramas] = useState(0.0);
    const [resultado, setResultado] = useState(0.0)
    const [msg, setMsg] = useState(" ");

    function Sorveteria () {
        if (gramas >= 1000) {
            setResultado((gramas/100) * 3);
            setMsg(' ');
        }
        else if (gramas == 0) {
            setMsg("Peso inválido")
        }
        else {
            setResultado((gramas/100) * 3.5);
            setMsg('')
        }
    }
}