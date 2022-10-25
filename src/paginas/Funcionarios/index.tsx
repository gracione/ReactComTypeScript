import Menu from "../Menu";
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Funcionarios() {
  const funcionarios = BuscarDadosApi('funcionario', 'listar');
  const listarFuncionarios = listarEditarExcluir(funcionarios, 'funcionarios');

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          {listarFuncionarios}
        </Conteudo>
        <Adicionar href="funcionarios/inserir">+</Adicionar>
      </Header>
    </Container>
  );
}