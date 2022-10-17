import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CalcularAcai from './pages/CalcularAcai'
import Salario from './pages/Salario'
import SignoLibra from './pages/signoLibra'
import Sorveteria from './pages/sorveteria'
import Temperatura from './pages/Temperatura';
import Tanque from './pages/Tanque';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>

<Route path='/calcularAcai' elemento={< CalcularAcai /> }/>
<Route path='/salario' elemento={< Salario /> }/>
<Route path='/signoLibra' elemento={< SignoLibra /> }/>
<Route path='/sorveteria' elemento={< Sorveteria /> }/>
<Route path='/temperatura' elemento={< Temperatura /> }/>
<Route path='/tanque' elemento={< Tanque /> }/>

</Routes>
</BrowserRouter>
  </React.StrictMode>
);

