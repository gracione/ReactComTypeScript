import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logon from './paginas/Autenticacao/Login/index';
import Home from './paginas/Home/index';
import Registrar from './paginas/Autenticacao/Registrar/index';
import Funcionarios from './paginas/Funcionarios';
import Informacoes from './paginas/Informacoes/index';

export default function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logon />} />
                <Route path="/register" element={<Registrar />} />
                <Route path="/home" element={<Home />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
                <Route path="/informacoes" element={<Informacoes />} />
            </Routes>
        </BrowserRouter>
    );
}