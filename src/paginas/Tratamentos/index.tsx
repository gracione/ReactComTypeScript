import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Tratamentos() {
  const funcionarios = BuscarDadosApi('/tratamentos/listar');
  const listarFuncionarios = listarEditarExcluir(funcionarios);

  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <div className="editar-excluir" >
          {listarFuncionarios}
        </div>
      </Conteudo>
    </Container>
  )
}
