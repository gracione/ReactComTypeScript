import Menu from "../Menu";
import { useState } from 'react';
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import api from '../../services/api';
import GerarUrl from "../../util/adicionar";
import { useNavigate } from 'react-router-dom';

export default function InserirFolga() {
  const [inicioExpediente, setInicioExpediente] = useState('');
  const [inicioAlmoco, setInicioAlmoco] = useState('');
  const [fimAlmoco, setFimAlmoco] = useState('');
  const [fimExpediente, setFimExpediente] = useState('');
  const [idFuncionario, setIdFuncionario] = useState('');
  const funcionario = BuscarDadosApi('funcionario', 'listar');
  const data = {
    inicioExpediente,
    inicioAlmoco,
    fimAlmoco,
    fimExpediente,
    idFuncionario
  };
  const history = useNavigate();

  const optionFuncionarios: any = [];
  funcionario.forEach(element => {
    optionFuncionarios.push(
      <option value={element.id}>{element.nome}</option>
    );
  });
  function inserir() {
    const url = GerarUrl("expediente", "inserir");

    api.post(url, data)
    history('/expediente');
  }

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <h1>Horario de funcionamento</h1>
          <form onSubmit={inserir}>
            <select
              onChange={e => setIdFuncionario(e.target.value)}
              required
            >
              <option >Escolha a Profissão</option>
              {optionFuncionarios}
            </select>
            <input type="date" placeholder="Inicio Expediente" onChange={e => setInicioExpediente(e.target.value)} />
            <button type="submit">Salvar</button>
          </form>
        </Conteudo>
        <Adicionar href="adicionar">+</Adicionar>
      </Header>
    </Container>
  );
}
