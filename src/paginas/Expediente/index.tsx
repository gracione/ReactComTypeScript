import { Adicionar, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import ExcluirDadosApi from "../../util/excluir";

export default function Expediente() {
  let expediente = BuscarDadosApi('expediente', 'listar');
  console.log(expediente);
  const horarioTrabalho: any = [];
  expediente.forEach(element => {
    horarioTrabalho.push(
      <tr>
        <td>{element.nome}</td>
        <td>{element.inicio1}</td>
        <td>{element.fim1}</td>
        <td>{element.inicio1}</td>
        <td>{element.fim2}</td>
        <td>EDITAR</td>
        <td onClick={() => ExcluirDadosApi('expediente', 'excluir', element.id)} >EXCLUIR</td>
      </tr>
    );
  });

  return (
    <Header>
      <Conteudo>
        LISTAR

        <table border={1} width="100%">
          <tr>
            <td>nome</td>
            <td>Inicio Expediente</td>
            <td>Inicio Almoço </td>
            <td>Fim Almoço</td>
            <td>Fim Expediente</td>
          </tr>
          {horarioTrabalho}
        </table>
      </Conteudo>
      <Adicionar href="expediente/adicionar">+</Adicionar>
    </Header>
  );
}
