import { Container, Conteudo } from "../../styles/global";
import Menu from "../Menu";

export default function Home() {
  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        
        {localStorage.getItem("idFuncionario")}
      </Conteudo>
    </Container>
  );
}
