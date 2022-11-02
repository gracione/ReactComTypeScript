/* eslint-disable jsx-a11y/anchor-has-content */
import api from '../../src/services/api';
import { Adicionar, Conteudo, Header } from '../styles/global';
import { useState, useEffect } from "react";

export default function Listar(props: any) {
  const funcao = props.funcao;
  const [listagem, setListagem] = useState([]);
  useEffect(() => {
    api.post("/" + funcao + "/listar", {
    }).then((response) => setListagem(response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [funcao]);

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
        <h2>{funcao}</h2>
        {listar}
      </Conteudo>
      <Adicionar href={funcao + "/adicionar"}>+</Adicionar>
    </Header>
  );
}