import { useState } from "react";
import './index.scss'

export default function Tanque(){
    const [km, setKm] = useState(0);
    const [tanque, setTanque] = useState(0);
    const [consumo, setConsumo] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcularParadas(){
       let x = km / consumo / tanque;
       
        setResultado(Math.ceil (x));
       
       
       
     
    }
} 