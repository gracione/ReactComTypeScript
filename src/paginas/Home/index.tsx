import Menu from "../Menu";

import { Conteudo, Container, AgendarHorario, CompartilheLink, HorariosMarcados } from "./styles";

export default function Home() {
  
  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <AgendarHorario/>
        <CompartilheLink/>
        <HorariosMarcados/>
      </Conteudo>
    </Container>
  );
}
