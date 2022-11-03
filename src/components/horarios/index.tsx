import { HorarioSelecionado, DataSelecionada, HorarioDisponivel, HorariosDisponivel } from "./styles";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { Container, Button, Center } from "../../styles/global";

export default function Horarios(props: any) {
  const [horario, setHorarios] = useState([]);
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const { idFuncionario, idProfissao, idTratamento, idFiltro } = useParams();
  const history = useNavigate();

  useEffect(() => {
    api.post("/horarios-disponivel", {
      data: props.data,
      idFuncionario,
      idFiltro,
      idTratamento
    }).then((response) => setHorarios(response.data));
    setHorarioEscolhido('');
  }, [props.data]);

  function test(horarioEscolhido: any, element: any) {
    if (horarioEscolhido === element.inicio) {
      <HorarioDisponivel
        className={horarioEscolhido === element.inicio ? "red" : "blue"}
        onClick={() => setHorarioEscolhido(element.inicio)}
      >
        {element.inicio}
      </HorarioDisponivel>

    } else {
      <HorarioSelecionado
        onClick={() => setHorarioEscolhido(element.inicio)}
      >
        {element.inicio}
      </HorarioSelecionado>
    }

  }

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
          {
            horario.map((element) => (
              <HorarioDisponivel
                className={horarioEscolhido === element['inicio'] ? "red" : "blue"}
                onClick={() => setHorarioEscolhido(element['inicio'])}
              >
                {element['inicio']}
              </HorarioDisponivel>
            ))
          }
        </HorariosDisponivel>

      </div>
      <button
        onClick={() => agendarHorario(props.data, horarioEscolhido)}
      >
        Agendar
      </button>
    </Container>
  );
}
