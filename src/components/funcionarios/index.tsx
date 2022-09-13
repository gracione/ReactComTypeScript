import React, { useState, useEffect } from "react";
import BuscarDadosApi from "../../paginas/Home/util";

import { CardFuncionario, Container } from "./styles";

export default function Funcionarios() {
  const [idFuncionario, setIdFuncionario] = useState('');

  const funcionario = BuscarDadosApi('/funcionario/listar');

  localStorage.setItem('idFuncionario', idFuncionario);

  let funcionariosDisponivel: any = [];

  funcionario.forEach((element: any) => {
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