/* eslint-disable jsx-a11y/anchor-has-content */
import api from '../../src/services/api';
import { Adicionar, Conteudo, Header } from '../styles/global';
import { useState, useEffect } from "react";

export default function Listar(props: any) {
  const funcao: any = props.funcao;
  const colunas: any = props.colunas;
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
    window.location.href = "/" + funcao;
  }

  let link: any = [];
  listagem.forEach((element: any) => {
    link['editar'] = "/" + funcao + "/alterar/" + element.id;
    link['listagem'] = "/" + funcao;

    listar.push(
      <tr>
        {colunas.map((nomeColuna: any) => (
          <td>{element[nomeColuna]}</td>
        ))}
        <td><a href={link['editar']} className='editar' /></td>
        <td onClick={() => excluir(element.id)} className='excluir'>x</td>
      </tr>

    )
  });

  return (
    <Header>
      <Conteudo>
        {funcao}
        <table>
          <tr>
            {colunas.map((nome: any) => (
              <th>{nome}</th>
            ))}
            <th colSpan={2} ></th>
          </tr>

          {listar}
        </table>
      </Conteudo>
      <Adicionar href={funcao + "/adicionar"}>+</Adicionar>
    </Header>
  );
}