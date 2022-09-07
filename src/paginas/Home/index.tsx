import Menu from "../Menu";

import { Conteudo, Container, AgendarHorario, CompartilheLink, HorariosMarcados } from "./styles";

export default function Home() {

  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <div className="agendar-horario" >
          <AgendarHorario>
            <label>Agendar Horário</label>
            <div></div>
          </AgendarHorario>
          <CompartilheLink>
            <label>Compartilhe o link com seus clientes</label>
            <form action="">
              <input type="text" />
              <button>x</button>
            </form>
          </CompartilheLink>
        </div>
        <HorariosMarcados>
          <label>Horários Marcados</label>
          <div></div>
        </HorariosMarcados>
      </Conteudo>
    </Container>
  );
}
