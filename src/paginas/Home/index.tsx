import Funcionarios from "../../components/funcionarios";
import Menu from "../Menu/index";

import { Conteudo, Container, AgendarHorario, CompartilheLink, HorariosMarcados } from "./styles";

export default function Home() {

  localStorage.setItem("funcionario", '123 ');
  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <div className="agendar-horario" >
          <AgendarHorario>
            <label>Agendar Horário</label>
            <input type="text" value='oiii' name="cliente" placeholder="Digite o nome do cliente" />
            <Funcionarios></Funcionarios>
          </AgendarHorario>
          <CompartilheLink>
            <label>Compartilhe o link com seus clientes</label>
            <form className="display-flex" action="">
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
    </Container >
  );
}