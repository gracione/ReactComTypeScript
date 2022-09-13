import Menu from "../Menu";
import React, { useState, useEffect } from "react";
import { Container, Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../paginas/Home/util";

export default function Funcionarios() {
  const funcionarios = BuscarDadosApi('/funcionario/listar');
  let listarFuncionarios: any = [];
  let img = <img width="20px" className="icon" src="/icons/lapis.png" alt="editar" />

  function escolher(valor: any, operacao: any) {
    localStorage.setItem('idFuncionario', valor);
    localStorage.setItem('operacao', operacao);
  }
  funcionarios.forEach((element: any) => {
    listarFuncionarios.push(
      <form action="/funcionarios/alterar">

        <input
          value={element.nome}
          name='nome'
          type="text"
        />
        <button>
          <input
            type="radio"
            value={element.id}
            name="op"
            id={element.id + "editar"}
            onChange={e => escolher(e.target.value, 'editar')}
          />
          <input
            type="radio"
            value={element.id}
            name="op"
            id={element.id + "excluir"}
            onChange={e => escolher(e.target.value, 'excluir')}
          />
          <label htmlFor={element.id + "editar"}>z</label>
          <label htmlFor={element.id + "excluir"}>x</label>
        </button>
      </form>
    )
  });

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
