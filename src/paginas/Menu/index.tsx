import React, { useState, useEffect } from "react";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { RiCalendarLine, RiCalendarTodoLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";
import api from "../../services/api";

export default function Menu() {
  const [token] = useState(localStorage.getItem("token"));

  const history = useNavigate();
  console.log(token);
  useEffect(() => {
    api.get("me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  }, [token]);

  if (token == null) {
    console.log(token);
    history("/");
  }

  function handleLogout() {
    localStorage.clear();
    history("/");
  }

  const [classOn, setClassOn] = useState(false);
  return (
    <Container>
        <img className="logo-cyan" src="logo-alternativa.svg" alt="logo Cyan" />

        <div
          className={classOn ? "menu-section on" : "menu-section"}
          onClick={() => setClassOn(!classOn)}
        >
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <nav>
            <a href="/funcionarios">
              <div className="item-menu-movel">FUNCIONARIOS</div>
              <FiUsers className="item-menu-desktop" />
            </a>
            <a href="/home">
              <div className="item-menu-movel">FERIADOS</div>
              <RiCalendarLine className="item-menu-desktop" />
            </a>
            <a href="/test">
              <div className="item-menu-movel">FOLGA</div>
              <RiCalendarTodoLine className="item-menu-desktop" />
            </a>
            <a href="#">
              <div className="item-menu-movel">CONTATO</div>
              <RiCalendarLine className="item-menu-desktop" />
            </a>
            <a onClick={handleLogout} href="/">
              <div className="item-menu-movel">SAIR</div>
              <FiLogOut className="item-menu-desktop" />
            </a>
          </nav>
        </div>
    </Container>
  );
}
