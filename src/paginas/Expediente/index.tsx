import Menu from "../Menu";
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";

export default function Expediente() {

  return (
    <Container>
      <Menu></Menu>
        <Header>
          <Conteudo>
            <h1>Horario de funcionamento</h1>
          </Conteudo>
          <Adicionar href="profissoes/adicionar">+</Adicionar>
        </Header>
    </Container>
  );
}
