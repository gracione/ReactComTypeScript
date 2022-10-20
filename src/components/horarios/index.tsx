import { Container } from "./styles";
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Horarios(props: any) {
  console.log(props.data);
  const [user, setUser] = useState([]);
  const idTratamento = localStorage.getItem('idTratamento');
  const idsFiltro = localStorage.getItem('idsFiltro');

  useEffect(() => {
    api
      .post("/horarios-disponivel", {
        data: props.data,
        idFuncionario: 1,
        idFiltro: idsFiltro,
        idTratamento: idTratamento
      })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [props.data]);

  const [horarioEscolhido, setHorarioEscolhido] = useState(0);
  let horariosDisponivel: any = [];

  user.forEach((element: any) => {
    horariosDisponivel.push(
      <label className="horario-disponivel" >
        <input
          type="radio"
          onClick={() => setHorarioEscolhido(element.inicio)}
        />
        {element.inicio}
      </label>
    )
  });

  let listaHorarios: any = [];

  return (
    <Container >
      {horarioEscolhido}
      {listaHorarios}
      {horariosDisponivel}
      <button>Agendar</button>
    </Container>
  );
}
