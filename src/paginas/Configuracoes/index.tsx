import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";

export default function Configuracoes() {

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <h1>Folgas</h1>
        </Conteudo>
      </Header>
    </Container>
  );
}
