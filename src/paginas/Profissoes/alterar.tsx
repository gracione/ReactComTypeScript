import { Container, Conteudo } from "../../styles/global";
import ExcluirDadosApi from "../../util/excluir";
import { useNavigate } from 'react-router-dom';

export default function AlterarProfissao() {
  const history = useNavigate();
  const idFuncionario = localStorage.getItem('idFuncionario');
  const operacao = localStorage.getItem('operacao');

  ExcluirDadosApi('profissao',operacao,idFuncionario);

  history('/profissoes');

  return (
    <Container>
    </Container>
  );
}
