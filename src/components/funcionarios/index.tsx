import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { CardFuncionario, Container } from "./styles";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [idFuncionario, setIdFuncionario] = useState('');

  localStorage.setItem('idFuncionario', idFuncionario);

  let token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post("/funcionario/listar", {
        id_estabelecimento: 1
      }, config)
      .then((response) => setFuncionarios(response.data));
  }, []);

  let funcionariosDisponivel: any = [];

  funcionarios.forEach((element: any) => {
    funcionariosDisponivel.push(
      <CardFuncionario>
        <input
          id={element.id_funcionario}
          value={element.id_funcionario}
          name='tes'
          type="radio"
          onChange={e => setIdFuncionario(e.target.value)}
        />

        <label htmlFor={element.id_funcionario}>
          {element.nome_usuario}
        </label>
        <label htmlFor={element.id_funcionario}>
          {element.funcao}
        </label>
        <label htmlFor={element.id_funcionario}>
          {element.id_funcionario}
        </label>
      </CardFuncionario>
    )
  });

  return (
    <Container>
      <form action="/informacoes">
        {funcionariosDisponivel}
      </form>
    </Container>
  );
}