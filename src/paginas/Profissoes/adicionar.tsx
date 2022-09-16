import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function Adicionar() {
  const funcionarios = BuscarDadosApi('feriados','listar');
  const [nome, setNome] = useState('');

  const [listagem, setListagem] = useState([]);
  let url = "http://salao.localhost/api/profissao/inserir";
  const token = localStorage.getItem('token');


  function inserir() {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    api
      .post(url, {
        nome: nome,
        id_estabelecimento: 1
      }, config)
  }

  return (
    <Container>
      <Menu></Menu>
      <div className="display-flex" >
        <Conteudo>
          <form onSubmit={inserir}>
            <input
              name='nome'
              placeholder="..."
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />

            <input type="text" name="id_estabelecimento" value="1" />
          <button>Salvar</button>
          </form>
        </Conteudo>
      </div>
    </Container>
  );
}
