import Menu from "../Menu";
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";

export default function Folgas() {

  return (
    <Container>
      <Menu></Menu>
        <Header>
          <Conteudo>
            <h1>Folgas</h1>
          </Conteudo>
          <Adicionar href="folga/adicionar">+</Adicionar>

        </Header>
    </Container>
  );
}
