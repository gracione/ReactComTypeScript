import Menu from "../Menu";
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Profissoes() {
  const funcionarios = BuscarDadosApi('/feriados/listar');
  const listarFuncionarios = listarEditarExcluir(funcionarios);

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <div className="editar-excluir" >
            {listarFuncionarios}
          </div>
        </Conteudo>
        <Adicionar href="profissoes/adicionar">+</Adicionar>
      </Header>
    </Container>
  );
}
