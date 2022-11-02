import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Autenticacao/Login/index';
import Registrar from './paginas/Autenticacao/Registrar/index';

export default function Rota() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/registrar" element={<Registrar />} />
                </Routes>
        </BrowserRouter >
    );
}