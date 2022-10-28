import Menu from "../Menu";
import { useState } from 'react';
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import api from '../../services/api';
import GerarUrl from "../../util/adicionar";
import { useNavigate } from 'react-router-dom';

export default function InserirFeriado() {
  const [data, setData] = useState('');
  const [nome, setFeriado] = useState('');
  const history = useNavigate();
  const dados = {
    data,
    nome
  };

  function inserir() {
    const url = GerarUrl("feriados", "inserir");

    api.post(url, dados)
    history('/feriados');
  }

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <h1>Horario de funcionamento</h1>
          <form onSubmit={inserir}>
            <input type="text" placeholder="Digite o nome do feriado" onChange={e => setFeriado(e.target.value)} />
            <input type="date" placeholder="Inicio Expediente" onChange={e => setData(e.target.value)} />
            <button type="submit">Salvar</button>
          </form>
        </Conteudo>
        <Adicionar href="adicionar">+</Adicionar>
      </Header>
    </Container>
  );
}
