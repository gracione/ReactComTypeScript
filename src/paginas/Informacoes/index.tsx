import React, { useState, useEffect } from "react";
import { Container, Conteudo, Header } from "../../styles/global";
import api from "../../services/api";
import Menu from "../Menu";
import Filtros from "./filtro";

export default function Home() {
  const [idTratamento, setTratamento] = useState([]);
  const [tempoGasto, setTempoGasto] = useState('');
  let tratamentos: any = [];

  useEffect(() => {
    api
      .post("/tratamento/listarPorFuncionario", {
        id_profissao: 1
      })
      .then((response) => setTratamento(response.data));
  }, []);

  idTratamento.forEach((element: any) => {
    tratamentos.push(
      <option
        value={element.id}
        >
        {element.nome}
      </option>
    )
  });
  const [filtro, setFiltro] = useState('');
  localStorage.setItem('idTratamento', filtro)
  useEffect(() => {
    api
      .post("/horario/tempo-gasto", {
        filtros: localStorage.getItem('idsFiltro'),
        tratamento: filtro
      })
      .then((response) => setTempoGasto(response.data));
  }, [filtro,localStorage.getItem('idsFiltro')]);

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <form action="/escolher-horario">
            <div>Tempo gasto aproximado {tempoGasto}</div>
            <div>
              <label htmlFor="">Tratamento</label>
              <select
                onChange={e => setFiltro(e.target.value)}
                required
              >
                <option value="">------ Selecione ------</option>
                {tratamentos}
              </select>
            </div>
            <Filtros data={filtro}></Filtros>
            <div>
              <button>Prosseguir</button>
            </div>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
