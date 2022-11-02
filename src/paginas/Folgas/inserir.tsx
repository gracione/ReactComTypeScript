import { useState } from 'react';
import { Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import Inserir from "../../util/inserir";

export default function InserirFolga() {
  const [diaSemana, setDiaSemana] = useState('');
  const [idFuncionario, setIdFuncionario] = useState('');
  let funcionario = BuscarDadosApi('funcionarios', 'listar');

  const optionFuncionarios: any = [];
  funcionario.forEach(element => {
    optionFuncionarios.push(
      <option value={element.id}>{element.nome}</option>
    );
  });

  return (
    <Conteudo>
      <form action={"/folgas"} onSubmit={() => Inserir("folgas", { diaSemana,idFuncionario })}>
        <div>
          <h1>Adicionar folga ao funcionario</h1>
          <select
            onChange={e => setIdFuncionario(e.target.value)}
            required
          >
            <option >Escolha o Funcionario</option>
            {optionFuncionarios}
          </select>
          <select
            onChange={e => setDiaSemana(e.target.value)}
            required
          >
            <option >Dia da Semana</option>
            <option value={1}>Domingo</option>
            <option value={2}>Segunda Feira</option>
            <option value={3}>Terça Feira</option>
            <option value={4}>Quarta Feira</option>
            <option value={5}>Quinta Feira</option>
            <option value={6}>Sexta Feira</option>
            <option value={7}>Sabado</option>
          </select>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </Conteudo>
  );
}
