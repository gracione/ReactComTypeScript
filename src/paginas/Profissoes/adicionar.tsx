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
    const url =  GerarUrl("profissao","inserir");
    
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    api.post(url, { dados: dados, id_estabelecimento: 1 }, config)
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
