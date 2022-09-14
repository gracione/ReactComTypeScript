import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";

export default function Folgas() {

  return (
    <Container>
      <Menu></Menu>
        <Header>
          <Conteudo>
            <h1>Folgas</h1>
          </Conteudo>
          <Conteudo>
            <h1>Horario de funcionamento</h1>
          </Conteudo>
        </Header>
    </Container>
  );
}
