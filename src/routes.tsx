import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home/index';
import Login from './paginas/Autenticacao/Login/index';
import Registrar from './paginas/Autenticacao/Registrar/index';
import Informacoes from './paginas/Informacoes/index';
import Configuracoes from "./paginas/Configuracoes";
import AlterarFuncionario from "./paginas/Funcionarios/alterar";
import AdicionarProfissao from "./paginas/Profissoes/adicionar";
import AlterarProfissao from "./paginas/Profissoes/alterar";
import EtapaCalendario from "./paginas/EtapaCalendario";
import InserirFuncionario from "./paginas/Funcionarios/inserir";
import InserirTratamento from "./paginas/Tratamentos/inserir";
import AlterarTratamento from "./paginas/Tratamentos/alterar";
import InserirExpediente from "./paginas/Expediente/inserir";
import InserirFeriado from "./paginas/Feriados/inserir";
import InserirFolga from "./paginas/Folgas/inserir";
import AlterarFeriado from './paginas/Feriados/alterar';
import Listar from './util/listar';
import { Container } from './styles/global';
import Menu from './paginas/Menu';

export default function Rota() {
    const token = localStorage.getItem("token");
    let currentUrl = window.location.href.toLowerCase();
    console.log(token);
    if (token === null || token == 'undefined') {
        if (!currentUrl.includes("/registrar") && !currentUrl.includes("/login")) {
            window.location.href = "/login";
        }
        return (
            <BrowserRouter>
                <Container>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/registrar" element={<Registrar />} />
                    </Routes>
                </Container>
            </BrowserRouter >
        );
    } else {
        if (currentUrl.includes("/registrar") || currentUrl.includes("/login")) {
            window.location.href = "/home";
        }
    }

    return (
        <BrowserRouter>
            <Container>
                <Menu />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/informacoes/:idFuncionario/:idProfissao/:nomeCliente" element={<Informacoes />} />
                    <Route path="/informacoes/:idFuncionario/:idProfissao" element={<Informacoes />} />
                    <Route path="/escolher-horario/:idFuncionario/:idProfissao/:idTratamento/:idFiltro" element={<EtapaCalendario />} />

                    <Route path="/funcionarios" element={<Listar funcao="funcionarios" colunas={["nome", "profissão"]} />} />
                    <Route path="/funcionarios/alterar/:idFuncionario" element={<AlterarFuncionario />} />
                    <Route path="/funcionarios/adicionar" element={<InserirFuncionario />} />

                    <Route path="/feriados" element={<Listar funcao="feriados" colunas={["nome", "data"]} />} />
                    <Route path="/feriados/adicionar" element={< InserirFeriado />} />
                    <Route path="/feriados/alterar/:idFeriado" element={< AlterarFeriado />} />

                    <Route path="/folgas" element={<Listar funcao="folgas" colunas={["funcionario", "folga"]} />} />
                    <Route path="/folgas/adicionar" element={< InserirFolga />} />

                    <Route path="/expediente" element={<Listar funcao="expediente" colunas={["funcionario", "inicio_de_expediente", "inicio_horario_de_almoco", "fim_horario_de_almoco", "fim_de_expediente"]} />} />
                    <Route path="/expediente/adicionar" element={< InserirExpediente />} />
                    <Route path="/expediente/alterar/:idExpediente" element={< InserirExpediente />} />

                    <Route path="/tratamentos" element={<Listar funcao="tratamentos" colunas={["tratamento", "profissão", "tempo_gasto"]} />} />
                    <Route path="/tratamentos/adicionar" element={<InserirTratamento />} />
                    <Route path="/tratamentos/alterar/:idTratamento" element={<AlterarTratamento />} />


                    <Route path="/profissao" element={<Listar funcao="profissao" colunas={["profissão"]} />} />
                    <Route path="/profissao/adicionar" element={<AdicionarProfissao />} />
                    <Route path="/profissao/alterar/:idProfissao" element={<AlterarProfissao />} />

                    <Route path="/configuracoes" element={<Configuracoes />} />
                </Routes>
            </Container>
        </BrowserRouter >
    );
}