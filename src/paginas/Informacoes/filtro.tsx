import React, { useState, useEffect } from "react";
import { Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import api from "../../services/api";

export default function Filtros(props: any) {
  const [filtro, setFiltro] = useState([]);
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };


  useEffect(() => {
    api.post("/filtro/listar", {
      id_tratamento: 30,
      id_estabelecimento: 1
      //,data:props.data
    }, config)
      .then((response) => setFiltro(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [props.data]);

  console.log(filtro)
  let filtroD: any = [];

  filtro.forEach((element: any) => {
    filtroD.push(
      <div>
        <label htmlFor="">
          {element.nome}
        </label>
        <select name="" id="">

          {(element.filtro).map((row: any) => (
            <option>
              s
            </option>
          ))}
        </select>
      </div>
    )
  });
  return (
    <>
      {filtroD}
    </>
  )
}
