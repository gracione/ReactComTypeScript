import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import api from "../../services/api";

import { Conteudo, Container, AgendarHorario, CompartilheLink, HorariosMarcados, CardFuncionario, CardAdicionarFuncionario } from "./styles";

export default function Home() {
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
  console.log(funcionarios);

  let funcionariosDisponivel: any = [];

  funcionarios.forEach((element: any) => {
    funcionariosDisponivel.push(
      <CardFuncionario>
        <h5>{element.nome_usuario}</h5>
        <h6>{element.funcao}</h6>
        <h2>{element.id_funcao}</h2>
      </CardFuncionario>
    )
  });

  //
  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <div className="agendar-horario" >
          <AgendarHorario>
            <label>Agendar Horário</label>
            <form>
              <input type="text" placeholder="Digite o nome do cliente" />
              <div className="funcionarios">
                {funcionariosDisponivel}
                <CardAdicionarFuncionario >
                    <h5>Cadastrar</h5>
                    <h6>Funcionário</h6>
                    <h2>+</h2>
                </CardAdicionarFuncionario>
              </div>
            </form>
          </AgendarHorario>
          <CompartilheLink>
            <label>Compartilhe o link com seus clientes</label>
            <form action="">
              <input type="text" />
              <button>x</button>
            </form>
          </CompartilheLink>
        </div>
        <HorariosMarcados>
          <label>Horários Marcados</label>
          <div></div>
        </HorariosMarcados>
      </Conteudo>
    </Container>
  );
}
