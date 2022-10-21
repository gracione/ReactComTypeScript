import api from '../../src/services/api';
import { useNavigate } from 'react-router-dom';

export default function listarEditarExcluir(funcionarios: any[], funcao: string): any[] {
  let listarFuncionarios: any = [];
  let img = <img width="20px" className="icon" src="/icons/lapis.png" alt="editar" />

  const url = "/" + funcao + "/alterar";
  function escolher(valor: any, operacao: any) {
    localStorage.setItem('idFuncionario', valor);
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useNavigate();
  function excluir(id: any) {
    api.post("/" + funcao + "/excluir", {
      id: id
    })
    history('/home');
  }
  function alterar(id: any) {
    localStorage.setItem('idDadosAlterar',id);
    history("/" + funcao + "/alterar");
  }

  funcionarios.forEach((element: any) => {
    listarFuncionarios.push(
      <div>
        <input
          value={element.nome}
          name='nome'
          type="text"
        />
        <label htmlFor={element.id + "editar"} onClick={() => alterar(element.id)} className='editar'>..........</label>
        <label htmlFor={element.id + "excluir"} onClick={() => excluir(element.id)} className='excluir'>x</label>
      </div>
    )
  });
  return listarFuncionarios;
}