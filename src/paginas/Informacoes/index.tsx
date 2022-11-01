import React, { useState, useEffect } from "react";
import { Container, Conteudo, Header } from "../../styles/global";
import api from "../../services/api";
import Menu from "../Menu";
import Filtros from "./filtro";
import BuscarDadosApi from "../../util/util";

export default function Informacoes() {
  const [tempoGasto, setTempoGasto] = useState(0);
  const [idTratamento, setIdTratamento] = useState('');
  const tratamentos: any = [];
  const [idFiltro,setIdFiltro]=useState('');
  let tratamentoPorProfissao = BuscarDadosApi('tratamentos', 'listar-profissao', { id_profissao: 1 });
  tratamentoPorProfissao.forEach((element: any) => {
    tratamentos.push(
      <option
        value={element.id}
      >
        {element.nome}
      </option>
    )
  });
  localStorage.setItem('idTratamento', idTratamento);
  useEffect(() => {
    api
      .post("/horario/tempo-gasto", {
        filtros: idFiltro,
        tratamento: idTratamento
      })
      .then((response) => setTempoGasto(response.data));
  }, [idTratamento,idFiltro]);

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
            <div>
              <button>Prosseguir</button>
            </div>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
