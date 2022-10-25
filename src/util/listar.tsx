import api from '../../src/services/api';
import { useNavigate } from 'react-router-dom';

export default function listarEditarExcluir(funcionarios: any[], funcao: string): any[] {
  let listar: any = [];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useNavigate();
  function excluir(id: any) {
    api.post("/" + funcao + "/excluir", {
      id: id
    })
    history('/' + funcao);
  }

  function alterar(id: any) {
    localStorage.setItem('idDadosAlterar', id);
    history("/" + funcao + "/alterar");
  }

  funcionarios.forEach((element: any) => {
    listar.push(
      <div className='editar-excluir' >
        <label>

          {element.nome}
        </label>
        <div onClick={() => alterar(element.id)} className='editar'></div>
        <div onClick={() => excluir(element.id)} className='excluir'>x</div>
      </div>
    )
  });

  return listar;
}