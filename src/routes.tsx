import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home/index';
import Informacoes from './paginas/Informacoes/index';
import Configuracoes from "./paginas/Configuracoes";
import AlterarFuncionario from "./paginas/Funcionarios/alterar";
import AdicionarProfissao from "./paginas/Profissoes/adicionar";
import AlterarProfissao from "./paginas/Profissoes/alterar";
import Expediente from "./paginas/Expediente";
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
    return (
        <BrowserRouter>
            <Container>
                <Menu />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/informacoes/:idFuncionario/:idProfissao/:nomeCliente" element={<Informacoes />} />
                    <Route path="/informacoes/:idFuncionario/:idProfissao" element={<Informacoes />} />
                    <Route path="/escolher-horario/:idFuncionario/:idProfissao/:idTratamento/:idFiltro" element={<EtapaCalendario />} />

                    <Route path="/funcionarios" element={<Listar funcao="funcionarios" />} />
                    <Route path="/funcionario/alterar/:idFuncionario" element={<AlterarFuncionario />} />
                    <Route path="/funcionarios/inserir" element={<InserirFuncionario />} />

                    <Route path="/feriados" element={<Listar funcao="feriados" />} />
                    <Route path="/feriados/adicionar" element={< InserirFeriado />} />
                    <Route path="/feriados/alterar/:idFeriado" element={< AlterarFeriado />} />

                    <Route path="/folgas" element={<Listar funcao="folgas" />} />
                    <Route path="/folga/adicionar" element={< InserirFolga />} />

                    <Route path="/expediente" element={<Expediente />} />
                    <Route path="/expediente/adicionar" element={< InserirExpediente />} />
                    <Route path="/expediente/alterar/:idExpediente" element={< InserirExpediente />} />

                    <Route path="/tratamentos" element={<Listar funcao="tratamentos" />} />
                    <Route path="/tratamentos/adicionar" element={<InserirTratamento />} />
                    <Route path="/tratamentos/alterar/:idTratamento" element={<AlterarTratamento />} />

                    <Route path="/configuracoes" element={<Configuracoes />} />

                    <Route path="/profissao" element={<Listar funcao="profissao" />} />
                    <Route path="/profissao/adicionar" element={<AdicionarProfissao />} />
                    <Route path="/profissao/alterar/:idProfissao" element={<AlterarProfissao />} />
                </Routes>
            </Container>
        </BrowserRouter >
    );
}