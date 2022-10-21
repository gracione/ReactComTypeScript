import { Center, Container, Conteudo } from "../../styles/global"
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from './card';

export default function HorariosMarcado() {
  const [horariosMarcados, setHorariosMarcados] = useState([]);
  const idTratamento = localStorage.getItem('idTratamento');
  const idsFiltro = localStorage.getItem('idsFiltro');

  useEffect(() => {
    api
      .post("/horarios-marcados", {
        idFuncionario: 1,
        idFiltro: idsFiltro,
        idTratamento: idTratamento
      })
      .then((response) => setHorariosMarcados(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  console.log(horariosMarcados);

  let dadosCard = [
    {
      "cliente": "carlos",
      "funcionario": "pedro",
      "tratamento": "hidra",
      "telefone": "999998",
      "horario": "08:30",
      "data": "3 de janeiro 2021"
    },
    {
      "cliente": "jose",
      "funcionario": "araujo",
      "tratamento": "hidra",
      "telefone": "555998",
      "horario": "09:30",
      "data": "3 de janeiro 2021"
    },
  ];

  let card = [];
  for (let index = 0; index < horariosMarcados.length; index++) {
    card[index] = <Card
      idHorario={horariosMarcados[index]['idHorario']}
      cliente={horariosMarcados[index]['cliente']}
      funcionario={horariosMarcados[index]['funcionario']}
      tratamento={horariosMarcados[index]['tratamento']}
      telefone={horariosMarcados[index]['telefone']}
      horario={horariosMarcados[index]['horario']}
      data={horariosMarcados[index]['data']}
    />;
  }

  return (
    <Container>
      <Center>
        <div>
          {card}
        </div>
      </Center>
    </Container>
  );

}
