import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";
import { useState } from "react";
import GerarUrl from "../../util/adicionar";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';

export default function Adicionar() {
  const [nome, setNome] = useState('');
  const history = useNavigate();
  
  function inserir() {
    const dados = {
      nome: nome
    }
    const token = localStorage.getItem('token');
    console.log(token);
    const url =  GerarUrl("profissao","inserir");

    api.post(url, { dados: dados })
    history('/profissoes');
  }

  return (
    <Container>
      <Menu></Menu>
      <div className="display-flex" >
        <Conteudo>
          <form onSubmit={inserir}>
            <input
              name='nome'
              placeholder="..."
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />
            <button>Salvar</button>
          </form>
        </Conteudo>
      </div>
    </Container>
  );
}
