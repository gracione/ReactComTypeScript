import Menu from "../Menu";
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Feriados() {
  let funcionarios = BuscarDadosApi('feriados', 'listar');
  const listarFuncionarios = listarEditarExcluir(funcionarios, 'feriados');

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
            {listarFuncionarios}
        </Conteudo>
        <Adicionar href="feriado/adicionar">+</Adicionar>
      </Header>
    </Container>
  );
}
