import React, { useState, useEffect } from "react";
import { Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import api from "../../services/api";
import Menu from "../Menu";
import GerarUrl from "../../util/adicionar";

export default function Home() {
  const [idTratamento, setTratamento] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const filtroD:any = filtro;
  let tratamentos: any = [];
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const data = {
    id_tratamento:30,
    id_estabelecimento:1
  };

  async function listarFiltros(){

    const url = GerarUrl("filtro", "listar");

    const filtross:any = await api.post(url, data, config);
    (filtross.data).forEach((element: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
      filtroD.push(
        <option>{element}</option>
        )
      });
      setFiltro(filtroD);
  }

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

  
  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <form action="/escolher-horario">
            <div>
              <label htmlFor="">Tratamento</label>
              <select name="tratamento" onChange={() => listarFiltros()}  >
                {tratamentos}
              </select>
            </div>
            {filtro}
            <div>
              <button>Prosseguir</button>
            </div>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
