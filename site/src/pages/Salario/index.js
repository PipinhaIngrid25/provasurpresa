import { useState } from "react";
import './index.scss'

export default function Liquido(){
    const [din, setDin] = useState(0);
    const [descont, setDescont] = useState(0);
    const [bonus, setBonus] = useState(0)
    const [resultado, setResultado] = useState(0)

    function salario(){
       let d = (din * (descont/100)+ din) - bonus
        setResultado(d);
    }