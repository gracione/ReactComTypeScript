import React, { useState, useEffect } from "react";
import BuscarDadosApi from "../../util/util";

import { CardFuncionario, CardAdicionarFuncionario, Container } from "./styles";

export default function Funcionarios() {
  const [idFuncionario, setIdFuncionario] = useState('');

  const funcionario = BuscarDadosApi('funcionario', 'listar');

  localStorage.setItem('idFuncionario', idFuncionario);

  let funcionariosDisponivel: any = [];

  funcionario.forEach((element: any) => {
    funcionariosDisponivel.push(
      <CardFuncionario>
        <input
          id={element.id}
          value={element.id}
          name='tes'
          type="radio"
          onChange={e => setIdFuncionario(e.target.value)}
        />

        <label htmlFor={element.id}>
          {element.nome}
        </label>
        <label htmlFor={element.id}>
          {element.funcao}
        </label>
        <label htmlFor={element.id}>
          {element.id}
        </label>
      </CardFuncionario>
    )
  });

  return (
    <Container>

      <form action="/informacoes">
        {funcionariosDisponivel}
        <CardAdicionarFuncionario >
          <h5>Cadastrar</h5>
          <h6>Funcionário</h6>
          <h2>+</h2>
        </CardAdicionarFuncionario>

      </form>
    </Container>
  );
}