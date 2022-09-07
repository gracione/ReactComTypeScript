import React, { useState, useEffect } from "react";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { RiCalendarLine, RiCalendarTodoLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";
import api from "../../services/api";

export default function Menu() {
  const [token] = useState(localStorage.getItem("token"));
  const [tipoPerfi, setTipoPerfil] = useState();
  const [classOn, setClassOn] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    //    const response = api.get('/profile');
    //    console.log(response);
  }, [token]);

  if (token === "" || token === null) {
    history("/");
  }

  function handleLogout() {
    localStorage.clear();
    history("/");
  }

  api
    .post("/verificar-tipo-perfil", token)
    .then((response) => setTipoPerfil(response.data));

  return (
    <Container>
      <img src="logo-alternativa.svg" alt="logo Cyan" />
      {tipoPerfi && (
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
      )}
      <a onClick={handleLogout} href="/">
        <div >SAIR</div>
      </a>
    </Container>
  );
}
