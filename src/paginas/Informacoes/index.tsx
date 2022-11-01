import React, { useState, useEffect } from "react";
import { Button, Center, Container, Conteudo, Header } from "../../styles/global";
import api from "../../services/api";
import Menu from "../Menu";
import Filtros from "./filtro";
import BuscarDadosApi from "../../util/util";
import { useParams } from "react-router-dom";

export default function Informacoes() {
  const [tempoGasto, setTempoGasto] = useState(0);
  const [idTratamento, setIdTratamento] = useState('');
  const tratamentos: any = [];
  const [idFiltro, setIdFiltro] = useState('0');
  const { idFuncionario, idProfissao } = useParams();
  let tratamentoPorProfissao = BuscarDadosApi('tratamentos', 'listar-profissao', { idProfissao });
  tratamentoPorProfissao.forEach((element: any) => {
    tratamentos.push(
      <option
        value={element.id}
      >
        {element.nome}
      </option>
    )
  });
  useEffect(() => {
    api
      .post("/horario/tempo-gasto", {
        filtros: idFiltro,
        tratamento: idTratamento
      })
      .then((response) => setTempoGasto(response.data));
  }, [idTratamento, idFiltro]);

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <form action={"/escolher-horario/" + idFuncionario + "/" + idProfissao + "/" + idTratamento + "/" + idFiltro + "/"}>
            <div>
              <div>Tempo gasto aproximado {tempoGasto}</div>
              <label htmlFor="">Tratamento</label>
              <select
                onChange={e => setIdTratamento(e.target.value)}
                required
              >
                <option value="">------ Selecione ------</option>
                {tratamentos}
              </select>
            </div>
            <Filtros
              data={idTratamento}
              setIdFiltro={setIdFiltro}
            />
            <button>Prosseguir</button>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
