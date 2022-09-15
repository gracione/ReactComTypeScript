import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function Adicionar() {
  const funcionarios = BuscarDadosApi('/feriados/listar');

  const [listagem, setListagem] = useState([]);
  let url = "http://salao.localhost/api/profissao/inserir";
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post(url, {
        id_estabelecimento: 1
      }, config)
      .then((response) => setListagem(response.data));
  }, []);



  return (
    <Container>
      <Menu></Menu>
      <div className="display-flex" >
        <Conteudo>
          <form action="http://salao.localhost/api/profissao/inserir">
          <input type="text" name="nome"/>
          <input type="text" name="id_estabelecimento" value="1" />
          </form>
        <button>Salvar</button>
        </Conteudo>
      </div>
    </Container>
  );
}
