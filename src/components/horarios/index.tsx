import { Container,HorariosDisponivel } from "./styles";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Center } from "../../styles/global";

export default function Horarios(props: any) {
  const [user, setUser] = useState([]);
  const idTratamento = localStorage.getItem('idTratamento');
  const idsFiltro = localStorage.getItem('idsFiltro');
  const history = useNavigate();

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

  function agendarHorario(data: any, horario: any) {
    api
      .post("/horario/inserir", {
        data: data,
        horario: horario,
        idCliente: 1,
        idTratamento: idTratamento,
        idFuncionario: 1
      })
    history('/home');
  }
  return (
    <Container >
      <Center>
        {props.data + " " + horarioEscolhido}
      </Center>
      <HorariosDisponivel>
        {horariosDisponivel}
      </HorariosDisponivel>
      <button
        onClick={() => agendarHorario(props.data, horarioEscolhido)}
      >Agendar</button>
    </Container>
  );
}
