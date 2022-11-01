import React, { useState } from "react";
import BuscarDadosApi from "../../util/util";

import { CardFuncionario, CardAdicionarFuncionario, Container } from "./styles";

export default function Funcionarios() {
  const [idFuncionario, setIdFuncionario] = useState('');
  localStorage.setItem('idFuncionario', idFuncionario);

  let funcionario = BuscarDadosApi('funcionario', 'listar');
  let funcionariosDisponivel: any = [];

  funcionario.forEach((element: any) => {
    console.log(element);
    funcionariosDisponivel.push(
      <CardFuncionario>
        <a href={"informacoes/" + element.id+"/"+element.id_profissao}>

          <label htmlFor={element.id}>
            {element.nome}
          </label>
          <label htmlFor={element.id}>
            {element.funcao}
          </label>
          <label htmlFor={element.id}>
            {element.id}
          </label>
        </a>
      </CardFuncionario>
    )
  });

  return (
    <Container>

      <form>
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