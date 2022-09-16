import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function BuscarDadosApi(funcao: string,opcao: string): any[] {
  const [listagem, setListagem] = useState([]);
  const url = "/"+funcao+"/"+opcao;
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post(url, {
        id:1,
        id_estabelecimento: 1
      }, config)
      .then((response) => setListagem(response.data));
  }, []);

  return listagem;
}
