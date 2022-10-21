import { Container } from "../../styles/global";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../../src/services/api";

export default function Alterar() {
  const history = useNavigate();
  const idDadosAlterar = localStorage.getItem('idDadosAlterar');
  const [listagem, setListagem] = useState([]);
  useEffect(() => {
    api
      .post("/profissao/dados-alterar", {
        id: idDadosAlterar
      })
      .then((response) => setListagem(response.data));
  }, []);

  let dadosAlterar:any = [];

  listagem.forEach(element => {
    dadosAlterar.push(
        <input
         value={element['nome']}
        />
    )
  });
  return (
    <Container>
      {dadosAlterar}
    </Container>
  );
}
