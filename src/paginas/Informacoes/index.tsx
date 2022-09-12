import React, { useState, useEffect } from "react";
import { Container, Conteudo } from "../../styles/global";
import api from "../../services/api";
import Menu from "../Menu";

export default function Home() {
  const [idTramento, setTramento] = useState('');

  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post("/tramento/listarPorFuncionario", {
        id_estabelecimento: 1,
        id_funcionario:localStorage.getItem("idFuncionario")
      }, config)
      .then((response) => setTramento(response.data));
  }, []);

  console.log(idTramento);
  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <br></br>
        Tramento
        {localStorage.getItem("idFuncionario")}
      </Conteudo>
    </Container>
  );
}
