import { Container } from "./styles";
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Horarios(props: any) {
  const [user, setUser] = useState([]);
  const dia: any[] = props.data.split("/");
  const token = "4|Wxe2xqTQMrtHXXOP7LvX68STl22RPxCyeRorjcZ1";

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    api
      .post("/horarios-marcados", {
        dia: dia[0],
        mes: dia[1],
        ano: dia[2]
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
        {element.horario_inicio}
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
