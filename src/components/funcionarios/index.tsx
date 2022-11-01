import React, { useState } from "react";
import BuscarDadosApi from "../../util/util";

import { CardFuncionario, CardAdicionarFuncionario, Container } from "./styles";

export default function Funcionarios() {
  let funcionario = BuscarDadosApi('funcionario', 'listar');
  let funcionariosDisponivel: any = [];

  funcionario.forEach((element: any) => {
    console.log(element);
    funcionariosDisponivel.push(
      <CardFuncionario href={"informacoes/" + element.id+"/"+element.id_profissao}>
          <h5>
            {element.nome}
          </h5>
          <h6>
            {element.funcao}
          </h6>
          <h2>
            {element.id}
          </h2>
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