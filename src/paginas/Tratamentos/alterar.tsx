import { Container } from "../../styles/global";
import ExcluirDadosApi from "../../util/excluir";
import { useNavigate } from 'react-router-dom';

export default function AlterarTratamento() {
  const history = useNavigate();
  const idFuncionario = localStorage.getItem('idFuncionario');
  const operacao = localStorage.getItem('operacao');

  ExcluirDadosApi('tratamentos',operacao,idFuncionario);

  history('/tratamentos');

  return (
    <Container>
    </Container>
  );
}
