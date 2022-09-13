import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../paginas/Home/util";

export default function Funcionarios() {
  const funcionarios = BuscarDadosApi('/funcionario/listar');
  let listarFuncionarios: any = [];
  let img = <img width="20px" className="icon" src="/icons/lapis.png" alt="editar" />

  funcionarios.forEach((element: any) => {
    listarFuncionarios.push(
      <form action="">

        <input
          value={element.nome_usuario}
          name='nome'
          type="text"
        />
        <input
          className="none"
          value={element.id_funcionario}
          name='id_funcionario'
          type="text"
        />
        <input type="radio" value="editar" name={element.id_funcionario} id={element.id_funcionario} />
        <input type="radio" value="excluir" name={element.id_funcionario} id={element.id_funcionario + "excluir"} />
        <label htmlFor={element.id_funcionario}>{img}</label>
        <label htmlFor={element.id_funcionario + "excluir"}>x</label>
      </form>
    )
  });

  return (
    <Container>
      <Menu></Menu>
      <Conteudo>
        <div className="editar-excluir" >
          {listarFuncionarios}
        </div>
      </Conteudo>
    </Container>
  );
}
