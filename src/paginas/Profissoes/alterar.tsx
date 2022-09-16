import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";
import ExcluirDadosApi from "../../util/excluir";

export default function AlterarProfissao() {
  const idFuncionario = localStorage.getItem('idFuncionario');
  const operacao = localStorage.getItem('operacao');

  ExcluirDadosApi('profissao',operacao,idFuncionario);

  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        funcionario selecionado: {idFuncionario}
        operacao: {operacao}
      </Conteudo>
    </Container>
  );
}
