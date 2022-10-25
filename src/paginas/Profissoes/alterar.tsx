import { Container } from "../../styles/global";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../../src/services/api";

export default function Alterar() {
  const [nome, setNome] = useState('');
  const history = useNavigate();
  const idDadosAlterar = localStorage.getItem('idDadosAlterar');
  const [listagem, setListagem] = useState([]);
  const dadosAlterar: any = [];

  useEffect(() => {
    api
      .post("/profissao/dados-alterar", {
        id: idDadosAlterar
      })
      .then((response) => setListagem(response.data));
  }, []);


  listagem.forEach(element => {
    dadosAlterar.push(
      <input
        type='text'
        placeholder={element['nome']}
        onChange={e => setNome(e.target.value)}
      />
    )
  });

  function alterar() {
    api.post('/profissao/alterar', { nome: nome, id: idDadosAlterar })
    history('/profissoes');
  }

  return (
    <Container>
      <form onSubmit={alterar}>
        {dadosAlterar}
        <button>Alterar</button>
      </form>
    </Container>
  );
}
