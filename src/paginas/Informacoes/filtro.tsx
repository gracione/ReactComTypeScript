import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function Filtros(props: any) {
  const [filtro, setFiltro] = useState([]);
  const [matrix, setMatrix] = useState(
    Array.from({ length: 1 }, () => [0])
  );


  const filtros = (row: any, event: any) => {
    console.log("teste");
    let copy: any = [...matrix];
    copy[row] = event.target.value;
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

  console.log(props.data+"::::teste:::");
  let filtroD: any = [];

  filtro.forEach((element: any) => {
    filtroD.push(
      <div>
        <label htmlFor="">
          {element.nome}
        </label>
        <select
          onChange={e => filtros(1, e)}
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
