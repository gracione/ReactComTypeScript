import Menu from "../Menu";
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Tratamentos() {
  let funcionarios = BuscarDadosApi('tratamentos', 'listar');
  const listarFuncionarios = listarEditarExcluir(funcionarios, 'tratamentos');

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
            {listarFuncionarios}
        </Conteudo>
        <Adicionar href="tratamentos/adicionar">+</Adicionar>
      </Header>
    </Container>
  )
}
