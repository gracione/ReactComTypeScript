import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { CardFuncionario } from "./styles";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  let token = "2|LR3xXV504AqiQpFOShtJzclb3bWJVUOWpSRNmRbq";
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post("/funcionario/listar", {
        id_estabelecimento: 1
      }, config)
      .then((response) => setFuncionarios(response.data));
  }, []);

  let funcionariosDisponivel: any = [];

  funcionarios.forEach((element: any) => {
    funcionariosDisponivel.push(
      <CardFuncionario>
        <button value='gracione' name='tes'>
          <h5>{element.nome_usuario}</h5>
          <h6>{element.funcao}</h6>
          <h2>{element.id_funcao}</h2>
        </button>
      </CardFuncionario>
    )
  });

  return (
    <>
      {funcionariosDisponivel}
    </>
  );
}