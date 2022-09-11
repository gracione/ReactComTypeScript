import Funcionarios from "../../components/funcionarios";
import Menu from "../Menu/index";

import { Conteudo, Container, AgendarHorario, CompartilheLink, HorariosMarcados, CardFuncionario, CardAdicionarFuncionario } from "./styles";

export default function Home(){

    return (
      <Container>
        <Menu></Menu>
        <Conteudo>
          <div className="agendar-horario" >
            <AgendarHorario>
              <label>Agendar Horário</label>
              <input type="text" value='oiii' name="cliente" placeholder="Digite o nome do cliente" />
              <div className="funcionarios">
                <Funcionarios></Funcionarios>
              </div>
                <CardAdicionarFuncionario >
                  <h5>Cadastrar</h5>
                  <h6>Funcionário</h6>
                  <h2>+</h2>
                </CardAdicionarFuncionario>
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
      </Container >
    );
}