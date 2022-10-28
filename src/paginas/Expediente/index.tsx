import Menu from "../Menu";
import { useState } from 'react';
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";

export default function Expediente() {
  return (
    <Container>
      <Menu></Menu>
        <Header>
          <Conteudo>
            LISTAR
          </Conteudo>
          <Adicionar href="expediente/adicionar">+</Adicionar>
        </Header>
    </Container>
  );
}
