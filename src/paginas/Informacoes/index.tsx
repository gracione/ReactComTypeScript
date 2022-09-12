import React, { useState, useEffect } from "react";
import { Container, Conteudo } from "../../styles/global";
import api from "../../services/api";
import Menu from "../Menu";

export default function Home() {
  const [idTratamento, setTratamento] = useState([]);
  let tratamentos: any = [];
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post("/tratamento/listarPorFuncionario", {
        id_estabelecimento: 1,
        id_profissao: localStorage.getItem("idFuncionario")
      }, config)
      .then((response) => setTratamento(response.data));
  }, []);

  idTratamento.forEach((element: any) => {
    tratamentos.push(
      <option value={element.id}>{element.nome}</option>
    )
  });
  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <form action="">
          <div>
            <label htmlFor="">Tratamento</label>
            <select name="tratamento" >
              {tratamentos}
            </select>
          </div>
          <div>
            <button>Prosseguir</button>
          </div>
        </form>
      </Conteudo>
    </Container>
  );
}
