import { useState, useEffect } from "react";
import api from "../services/api";

export default function BuscarDadosApi(funcao: string, opcao: string): any[] {
  const [listagem, setListagem] = useState([]);
  const url = "/" + funcao + "/" + opcao;

  useEffect(() => {
    api
      .post(url, {
        id: 1
      })
      .then((response) => setListagem(response.data));
  }, []);

  return listagem;
}
