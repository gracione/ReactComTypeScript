import Menu from "../Menu";
import { useState } from 'react';
import { Container, Conteudo, Header } from "../../styles/global";
import api from '../../services/api';
import GerarUrl from "../../util/adicionar";
import { useNavigate } from 'react-router-dom';

export default function InserirFeriado() {
  const [data, setData] = useState('');
  const [nome, setFeriado] = useState('');
  const history = useNavigate();

  function inserir(modulo:any,dados:any) {
    const url = GerarUrl(modulo, "inserir");

    api.post(url, dados)
    history('/'+modulo);
  }

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <form onSubmit={() => inserir("feriados",{data,nome})}>
            <div>
              <h2>Adicionar Feriado</h2>
              <input type="text" placeholder="Nome do feriado" onChange={e => setFeriado(e.target.value)} />
              <input type="date" onChange={e => setData(e.target.value)} />
            </div>
            <button>Salvar</button>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
