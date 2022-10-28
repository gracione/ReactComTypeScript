import Menu from "../Menu";
import { useState } from 'react';
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";

export default function Expediente() {
  const expediente = BuscarDadosApi('expediente', 'listar');
  console.log(expediente);
  const horarioTrabalho: any = [];
  expediente.forEach(element => {
    horarioTrabalho.push(
      <tr>
        <td>{element.nome}</td>
        <td>{element.inicio1}</td>
        <td>{element.fim1}</td>
        <td>{element.inicio1}</td>
        <td>{element.fim2}</td>
        <td>EDITAR</td>
        <td>EXCLUIR</td>
      </tr>
    );
  });

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          LISTAR

          <table border={1} width="100%">
            <tr>
              <td>nome</td>
              <td>Inicio Expediente</td>
              <td>Inicio Almoço </td>
              <td>Fim Almoço</td>
              <td>Fim Expediente</td>
            </tr>
            {horarioTrabalho}
          </table>
        </Conteudo>
        <Adicionar href="expediente/adicionar">+</Adicionar>
      </Header>
    </Container>
  );
}
