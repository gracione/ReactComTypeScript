import Menu from "../Menu";
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Folgas() {
  const folgas = BuscarDadosApi('folga', 'listar');
  const listarFolgas = listarEditarExcluir(folgas, 'folga');

  return (
    <Container>
      <Menu></Menu>
        <Header>
          <Conteudo>
            <h1>Folgas</h1>
            {listarFolgas}
          </Conteudo>
          <Adicionar href="folga/adicionar">+</Adicionar>

        </Header>
    </Container>
  );
}
