import { Container } from "./styles";
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Horarios(props: any) {
  console.log(props.data);
  const [user, setUser] = useState([]);
  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post("/horarios-disponivel", {
        data:props.data,
        idFuncionario:1,
        idFiltro:1,
        idTratamento:1
      }, config)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [props.data]);

  let horariosDisponivel: any = [];

  user.forEach((element: any) => {
    horariosDisponivel.push(
      <label className="horario-disponivel" >
        <input type="radio" id="html" name="data-horario" value={element.horario_inicio + "#" + props.data} />
        {element.inicio}
      </label>
    )
  });

  let listaHorarios: any = [];

  return (
    <Container >
      {listaHorarios}
      {horariosDisponivel}
    </Container>
  );
}
