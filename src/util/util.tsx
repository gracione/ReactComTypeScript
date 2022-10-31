import { useState, useEffect } from "react";
import api from "../services/api";

export default function BuscarDadosApi(funcao: string, opcao: string, dados = null): any[] {
  const [listagem, setListagem] = useState([]);
  const url = "/" + funcao + "/" + opcao;

  useEffect(() => {
    api
      .post(url, {
        id: 1,
        dados: dados
      })
      .then((response) => setListagem(response.data));
  }, []);

  return listagem;
}