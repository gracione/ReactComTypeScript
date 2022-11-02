import Menu from "../Menu";
import { useState } from 'react';
import { Adicionar, Container, Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import api from '../../services/api';
import GerarUrl from "../../util/adicionar";
import { useNavigate } from 'react-router-dom';

export default function InserirFolga() {
  const [diaSemana, setDiaSemana] = useState('');
  const [idFuncionario, setIdFuncionario] = useState('');
  let funcionario = BuscarDadosApi('funcionario', 'listar');
  const dados = {
    diaSemana,
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
    const url = GerarUrl("folga", "inserir");

    api.post(url, dados)
    history('/folgas');
  }

  return (
    <div>
      <Conteudo>
        <h1>Adicionar folga ao funcionario</h1>
        <form onSubmit={inserir}>
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
          <button type="submit">Salvar</button>
        </form>
      </Conteudo>
      <Adicionar href="adicionar">+</Adicionar>
    </div>
  );
}
