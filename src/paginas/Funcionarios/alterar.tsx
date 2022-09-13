import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";

export default function AlterarFuncionario() {
  const idFuncionario = localStorage.getItem('idFuncionario');
  const operacao = localStorage.getItem('operacao');
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
