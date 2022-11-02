/* eslint-disable jsx-a11y/anchor-has-content */
import api from '../../src/services/api';

export default function listarEditarExcluir(listagem: any[], funcao: string): any[] {
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

  return listar;
}