import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function Filtros(props: any) {
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    api.post("/filtro/listar", {
      id_tratamento: props.data,
      id_estabelecimento: 1
    })
      .then((response) => setFiltro(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [props.data]);

  console.log(props.data)
  let filtroD: any = [];

  filtro.forEach((element: any) => {
    filtroD.push(
      <div>
        <label htmlFor="">
          {element.nome}
        </label>
        <select name="" id="">

          {(element.filtro).map((row: any) => (
            <option value={row.id} >
              {row.nome}
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
