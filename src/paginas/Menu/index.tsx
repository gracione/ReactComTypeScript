import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

export default function Menu() {
  const [token] = useState(localStorage.getItem("token"));
  const history = useNavigate();

  if (token === "" || token === null) {
    history("/");
  }

  function handleLogout() {
    localStorage.clear();
    history("/");
  }

  return (
    <Container>
      <img src="logo-alternativa.svg" alt="logo Cyan" />
        <>
          <a href="/funcionarios">
            <div>FUNCIONARIOS</div>
          </a>
          <a href="/home">
            <div>FERIADOS</div>
          </a>
          <a href="/test">
            <div>FOLGA</div>
          </a>
          <a href="#">
            <div>CONTATO</div>
          </a>
        </>
      <a onClick={handleLogout} href="/">
        <div >SAIR</div>
      </a>
    </Container>
  );
}
