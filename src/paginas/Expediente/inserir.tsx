import { useState } from 'react';
import { Adicionar, Conteudo } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import api from '../../services/api';
import GerarUrl from "../../util/adicionar";
import { useNavigate } from 'react-router-dom';

export default function InserirExpediente() {
  const [inicioExpediente, setInicioExpediente] = useState('');
  const [inicioAlmoco, setInicioAlmoco] = useState('');
  const [fimAlmoco, setFimAlmoco] = useState('');
  const [fimExpediente, setFimExpediente] = useState('');
  const [idFuncionario, setIdFuncionario] = useState('');
  let funcionario = BuscarDadosApi('funcionario', 'listar');
  const data = {
    inicioExpediente,
    inicioAlmoco,
    fimAlmoco,
    fimExpediente,
    idFuncionario
  };
  const history = useNavigate();

  const optionFuncionarios: any = [];
  funcionario.forEach(element => {
    optionFuncionarios.push(
      <option value={element.id}>{element.nome}</option>
    );
  });
  function inserir() {
    const url = GerarUrl("expediente", "inserir");

    api.post(url, data)
    history('/expediente');
  }

  return (
    <div>
      <Conteudo>
        <h1>Adicionar Expediente</h1>
        <form onSubmit={inserir}>
          <select
            onChange={e => setIdFuncionario(e.target.value)}
            required
          >
            <option >Escolha a Profissão</option>
            {optionFuncionarios}
          </select>
          <input type="time" placeholder="Inicio Expediente" onChange={e => setInicioExpediente(e.target.value)} />
          <input type="time" placeholder="Inicio Almoco" onChange={e => setInicioAlmoco(e.target.value)} />
          <input type="time" placeholder="Fim Almoco" onChange={e => setFimAlmoco(e.target.value)} />
          <input type="time" placeholder="Fim Expediente" onChange={e => setFimExpediente(e.target.value)} />
          <button type="submit">Salvar</button>
        </form>
      </Conteudo>
      <Adicionar href="adicionar">+</Adicionar>
    </div>
  );
}
