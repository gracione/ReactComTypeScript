import Menu from "../Menu";
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Feriados() {
  const funcionarios = BuscarDadosApi('feriados', 'listar');
  const listarFuncionarios = listarEditarExcluir(funcionarios, 'feriados');

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <div className="editar-excluir" >
            {listarFuncionarios}
          </div>
        </Conteudo>
        <Adicionar href="feriado/adicionar">+</Adicionar>
      </Header>
    </Container>
  );
}
