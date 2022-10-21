import api from '../../src/services/api';
import { useNavigate } from 'react-router-dom';

export default function listarEditarExcluir(funcionarios: any[], funcao: string): any[] {
  let listarFuncionarios: any = [];
  let img = <img width="20px" className="icon" src="/icons/lapis.png" alt="editar" />

  const url = "/" + funcao + "/alterar";
  function escolher(valor: any, operacao: any) {
    localStorage.setItem('idFuncionario', valor);
    localStorage.setItem('operacao', operacao);
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useNavigate();
  function excluir(id: any) {
    console.log("teste");
    api.post("/" + funcao + "/excluir", {
      id: id
    })
    //history('/home');
  }

  funcionarios.forEach((element: any) => {
    listarFuncionarios.push(
      <form action={url}>

        <input
          value={element.nome}
          name='nome'
          type="text"
        />
        <button>
          <input
            type="radio"
            value={element.id}
            name="op"
            id={element.id + "editar"}
            onChange={e => escolher(e.target.value, 'editar')}
          />
          <input
            type="radio"
            value={element.id}
            name="op"

          />
          <label htmlFor={element.id + "editar"} className='editar'></label>
          <label htmlFor={element.id + "excluir"} onClick={() => excluir(element.id)} className='excluir'>x</label>
        </button>
      </form>
    )
  });
  return listarFuncionarios;
}