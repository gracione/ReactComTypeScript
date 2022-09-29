import React, { useState, useEffect } from "react";
import { Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import api from "../../services/api";
import Menu from "../Menu";
import GerarUrl from "../../util/adicionar";
import Filtros from "./filtro";

export default function Home() {
  const [idTratamento, setTratamento] = useState([]);
  let tratamentos: any = [];
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post("/tratamento/listarPorFuncionario", {
        id_estabelecimento: localStorage.getItem("id_estabelecimento"),
        id_profissao: localStorage.getItem("idFuncionario")
      }, config)
      .then((response) => setTratamento(response.data));
  }, []);

  idTratamento.forEach((element: any) => {
    tratamentos.push(
      <option value={element.id}>{element.nome}</option>
    )
  });
  const [filtro, setFiltro] = useState(0);
  
  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <form action="/escolher-horario">
            <div>
              <label htmlFor="">Tratamento</label>
              <select name="tratamento" onChange={() => setFiltro(filtro+1)}  >
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
