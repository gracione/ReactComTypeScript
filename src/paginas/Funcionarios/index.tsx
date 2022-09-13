import Menu from "../Menu";
import React, { useState, useEffect } from "react";
import { Container, Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../paginas/Home/util";
import ListarEditarExcluir from "../../paginas/Home/listar";

export default function Funcionarios() {
  const funcionarios = BuscarDadosApi('/funcionario/listar');
  const listarFuncionarios = ListarEditarExcluir(funcionarios);

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
