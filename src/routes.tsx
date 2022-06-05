import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logon from './paginas/Autenticacao/Login/index';
import Home from './paginas/Home/index';
import Menu from './paginas/Menu/index';
import Registrar from './paginas/Autenticacao/Registrar/index';

export default function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logon />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/register" element={<Registrar />} />
            </Routes>
        </BrowserRouter>
    );
}