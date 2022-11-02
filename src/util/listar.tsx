/* eslint-disable jsx-a11y/anchor-has-content */
import api from '../../src/services/api';
import BuscarDadosApi from "../../src/util/util";
import Menu from '../paginas/Menu';
import { Adicionar, Container, Conteudo, Header } from '../styles/global';

export default function Listar(props: any) {
  const funcao = props.funcao;
  let listagem = BuscarDadosApi(funcao, 'listar');

  let listar: any = [];

  function excluir(id: any) {
    api.post("/" + funcao + "/excluir", {
      id: id
    })
  }

  let link: any = [];
  listagem.forEach((element: any) => {
    link['editar'] = "/" + funcao + "/alterar/" + element.id;
    link['listagem'] = "/" + funcao;
    listar.push(
      <div className='editar-excluir' >
        <label> {element.nome} </label>
        <a href={link['editar']} className='editar'></a>
        <div onClick={() => excluir(element.id)} className='excluir'>
          x
        </div>
        <a href={link['listagem']} >
        </a>
      </div>
    )
  });

  return (
    <Header>
      <Conteudo>
        {listar}
      </Conteudo>
      <Adicionar href={funcao + "/adicionar"}>+</Adicionar>
    </Header>
  );
}