import { Center, Container, Conteudo } from "../../styles/global"
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from './card';

export default function HorariosMarcado() {
  const [horariosMarcados, setHorariosMarcados] = useState([]);
  const idTratamento = localStorage.getItem('idTratamento');
  const idFiltro = localStorage.getItem('idFiltro');

  useEffect(() => {
    api
      .post("/horarios-marcados", {
        idFuncionario: localStorage.getItem("idFuncionario"),
        idFiltro: idFiltro,
        idTratamento: idTratamento
      })
      .then((response) => setHorariosMarcados(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

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
