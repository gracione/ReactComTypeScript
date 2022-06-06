import Menu from "../Menu";
import { Conteudo, Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <h1>pagina</h1>
      </Conteudo>
    </Container>
  );
}
