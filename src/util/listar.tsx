
export default function listarEditarExcluir(funcionarios: any[], funcao: string): any[] {
  let listarFuncionarios: any = [];
  let img = <img width="20px" className="icon" src="/icons/lapis.png" alt="editar" />

  const url = "/" + funcao + "/alterar";
  function escolher(valor: any, operacao: any) {
    localStorage.setItem('idFuncionario', valor);
    localStorage.setItem('operacao', operacao);
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
            id={element.id + "excluir"}
            onChange={e => escolher(e.target.value, 'excluir')}
          />
          <label htmlFor={element.id + "editar"} className='editar'></label>
          <label htmlFor={element.id + "excluir"} className='excluir'>x</label>
        </button>
      </form>
    )
  });
  return listarFuncionarios;
}