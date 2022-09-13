import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function BuscarDadosApi($url: string): any[] {
  const [listagem, setListagem] = useState([]);

  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post($url, {
        id_estabelecimento: 1
      }, config)
      .then((response) => setListagem(response.data));
  }, []);

  return listagem;
}
