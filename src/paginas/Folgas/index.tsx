import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";

export default function Folgas() {

  return (
    <Container>
      <Menu></Menu>
      <div className="display-flex" >
        <Conteudo>
          <h1>Folgas</h1>
        </Conteudo>
        <Conteudo>
          <h1>Horario de funcionamento</h1>
        </Conteudo>
      </div>
    </Container>
  );
}
