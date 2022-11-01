import { HorarioSelecionado, DataSelecionada, HorarioDisponivel, HorariosDisponivel } from "./styles";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Container, Button, Center, Conteudo } from "../../styles/global";

export default function Horarios(props: any) {
  const [horario, setHorarios] = useState([]);
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const idTratamento = localStorage.getItem('idTratamento');
  const idFiltro = localStorage.getItem('idFiltro');
  const history = useNavigate();


  useEffect(() => {
    api.post("/horarios-disponivel", {
      data: props.data,
      idFuncionario: 1,
      idFiltro: idFiltro,
      idTratamento: idTratamento
    }).then((response) => setHorarios(response.data));
    setHorarioEscolhido('');
  }, [props.data]);

  let horariosDisponivel: any = [];

  horario.forEach((element: any) => {
    if (horarioEscolhido == element.inicio) {
      horariosDisponivel.push(
        <HorarioDisponivel
          onClick={() => setHorarioEscolhido(element.inicio)}
        >
          {element.inicio}
        </HorarioDisponivel>
      )

    } else {
      horariosDisponivel.push(
        <HorarioSelecionado
          onClick={() => setHorarioEscolhido(element.inicio)}
        >
          {element.inicio}
        </HorarioSelecionado>
      )

    }
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
      <div>
        <Center>
          <DataSelecionada>
            Data Selecionada {props.data + " " + horarioEscolhido}
          </DataSelecionada>
        </Center>
        <HorariosDisponivel>
          {horariosDisponivel}
        </HorariosDisponivel>

      </div>
      <Center>
        <Button
          onClick={() => agendarHorario(props.data, horarioEscolhido)}
        >
          Agendar
        </Button>

      </Center>
    </Container>
  );
}
