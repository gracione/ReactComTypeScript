import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function Filtros(props: any) {
  const [filtro, setFiltro] = useState([]);
  const [matrix, setMatrix] = useState(
    () => Array.from({ length: 10 },
      () => [0])
  );


  const filtros = (row: any, event: any) => {
    let copy: any = [...matrix];
    copy[row] = event.target.value;
    console.log(copy);
    setMatrix(copy);
  };

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

  useEffect(() => {
    const copy =
      () => Array.from({ length: 10 },
        () => [0])
    setMatrix(copy);
  }, [props.data]);

  let filtroD: any = [];
  filtro.forEach((element: any) => {
    filtroD.push(
      <div>
        <label htmlFor="">
          {element.nome}
        </label>
        <select
          onChange={e => filtros(element.id, e)}
        >

          {(element.filtro).map((row: any) => (
            <option
              value={row.id}
            >
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
