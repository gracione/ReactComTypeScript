import Menu from "../Menu";
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Profissoes() {
  const profissoes = BuscarDadosApi('profissao','listar');
  const listarProfissoes = listarEditarExcluir(profissoes,'profissoes');

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <div className="editar-excluir" >
            {listarProfissoes}
          </div>
        </Conteudo>
        <Adicionar href="profissoes/adicionar">+</Adicionar>
      </Header>
    </Container>
  );
}
