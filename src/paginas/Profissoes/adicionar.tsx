import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";

export default function Adicionar() {
  const [nome, setNome] = useState('');

  const token = localStorage.getItem('token');
  const history = useNavigate();


  function inserir() {
    let url = "http://salao.localhost/api/profissao/inserir";
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    api
      .post(url, {
        nome: nome,
        id_estabelecimento: 1
      }, config)
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

            <input type="text" name="id_estabelecimento" value="1" />
            <button>Salvar</button>
          </form>
        </Conteudo>
      </div>
    </Container>
  );
}
