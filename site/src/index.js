import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CalcularAcai from './pages'
import Salario from './pages'
import SignoLibra from './pages'
import Sorveteria from './pages'
import Temperatura from './pages';

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

</Routes>
</BrowserRouter>
  </React.StrictMode>
);

