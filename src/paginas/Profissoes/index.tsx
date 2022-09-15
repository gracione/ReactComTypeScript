import Menu from "../Menu";
import { Adicionar, Container, Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import listarEditarExcluir from "../../util/listar";

export default function Profissoes() {
  const funcionarios = BuscarDadosApi('/feriados/listar');
  const listarFuncionarios = listarEditarExcluir(funcionarios);

  return (
    <Container>
      <Menu></Menu>
      <div className="display-flex" >
        <Conteudo>
          <div className="editar-excluir" >
            {listarFuncionarios}
          </div>
        </Conteudo>
        <Adicionar href="profissoes/adicionar">+</Adicionar>
      </div>
    </Container>
  );
}
