import Menu from "../Menu";
import { useState } from 'react';
import { Container, Conteudo, Header } from "../../styles/global";
import Inserir from "../../util/inserir";

export default function InserirFeriado() {
  const [data, setData] = useState('');
  const [nome, setFeriado] = useState('');
  return (
    <Container>
      <Menu />
      <Header>
        <Conteudo>
          <form action={"/feriados?"} onSubmit={() => Inserir("feriados",{data,nome})}>
            <div>
              <h2>Adicionar Feriado</h2>
              <input type="text" placeholder="Nome do feriado" onChange={e => setFeriado(e.target.value)} required />
              <input type="date" onChange={e => setData(e.target.value)} required />
            </div>
            <button >Salvar</button>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
