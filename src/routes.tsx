import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logon from './paginas/Autenticacao/Login/index';
import Home from './paginas/Home/index';
import Registrar from './paginas/Autenticacao/Registrar/index';
import Funcionarios from './paginas/Funcionarios';
import Informacoes from './paginas/Informacoes/index';
import Tratamentos from "./paginas/Tratamentos";
import Folgas from "./paginas/Folgas";
import Feriados from "./paginas/Feriados";
import Profissoes from "./paginas/Profissoes";
import Configuracoes from "./paginas/Configuracoes";
import AlterarFuncionario from "./paginas/Funcionarios/alterar";
import AdicionarProfissao from "./paginas/Profissoes/adicionar";
import AlterarProfissao from "./paginas/Profissoes/alterar";
import Expediente from "./paginas/Expediente";
import EtapaCalendario from "./paginas/EtapaCalendario";

export default function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logon />} />
                <Route path="/register" element={<Registrar />} />
                <Route path="/home" element={<Home />} />
                <Route path="/informacoes" element={<Informacoes />} />
                <Route path="/escolher-horario" element={<EtapaCalendario />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
                <Route path="/funcionarios/alterar" element={<AlterarFuncionario />} />
                <Route path="/feriados" element={<Feriados />} />
                <Route path="/folgas" element={<Folgas />} />
                <Route path="/expediente" element={<Expediente />} />
                <Route path="/tratamentos" element={<Tratamentos />} />
                <Route path="/profissoes" element={<Profissoes />} />
                <Route path="/configuracoes" element={<Configuracoes />} />
                <Route path="/profissoes/adicionar" element={<AdicionarProfissao />} />
                <Route path="/profissoes/alterar" element={<AlterarProfissao />} />
            </Routes>
        </BrowserRouter>
    );
}