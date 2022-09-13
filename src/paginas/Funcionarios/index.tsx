import Menu from "../Menu";
import React, { useState, useEffect } from "react";
import { Container, Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Funcionarios() {
  const funcionarios = BuscarDadosApi('/funcionario/listar');
  const listarFuncionarios = listarEditarExcluir(funcionarios);

  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <div className="editar-excluir" >
          {listarFuncionarios}
        </div>
      </Conteudo>
    </Container>
  );
}
