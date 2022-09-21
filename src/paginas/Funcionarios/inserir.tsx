import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";
import React, { useState } from 'react';
import InputMask from "react-input-mask";
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import GerarUrl from "../../util/adicionar";
import BuscarDadosApi from "../../util/util";

export default function InserirFuncionario() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [id_sexo, setId_Sexo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id_funcao_tipo, setIdProfissao] = useState('1');
  const [profissoesCadastradas, setProfissoesCadastradas] = useState([]);
  const profissoesCadastradasAux: any = profissoesCadastradas;
  const idEstabelecimento = localStorage.getItem('id_estabelecimento');
  const profissoes = BuscarDadosApi('profissao', 'listar');
  const history = useNavigate();
  const data = {
    nome,
    numero,
    id_sexo,
    email,
    password,
    id_estabelecimento: idEstabelecimento,
    profissoesCadastradas
  };


  function inserir() {
    const token = localStorage.getItem('token');
    const url = GerarUrl("funcionario", "inserir");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    api.post(url, data, config)
    history('/home');
  }

  function adicionarProfissao(valor: any, indice: any) {
    profissoesCadastradasAux[indice] = valor;
    setProfissoesCadastradas(profissoesCadastradasAux);
  }

  let selectProfissoes: any = [];
  const [quantidadeProfissoes, setmes] = useState(1);
  let optionProfissoes: any = []
  profissoes.forEach(element => {
    optionProfissoes.push(
      <option value={element.id}>{element.nome}</option>
    );
  });

  for (let index = 0; index < quantidadeProfissoes; index++) {
    selectProfissoes.push(
      <div>
        <select
          onChange={e => adicionarProfissao(e.target.value, index)}
          required
        >
          <option value={0}>Escolha a Profissão</option>
          {optionProfissoes}
        </select>
      </div>
    );
    //////////////////////////////////////////////////////////////q

  }
  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <form onSubmit={inserir}>
            <h2 >Adicionar Funcionario</h2>
            <div>
              <input
                placeholder="Seu Nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
              <InputMask
                mask="(99) 9 9999-9999"
                placeholder="Seu Numero"
                value={numero}
                onChange={e => setNumero(e.target.value)}
                required
              />
            </div>
            <input
              placeholder="Seu E-mail"
              value={email}
              type="email"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <div>
              <select
                onChange={e => setId_Sexo(e.target.value)}
                required
              >
                <option value={0}>Escolha o sexo</option>
                <option value={1}>Masculino</option>
                <option value={2}>Feminino</option>
              </select>
            </div>
            <div>
              <input
                name='password'
                placeholder="Sua Senha"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            {selectProfissoes}
            <div className='adicionar' onClick={() => setmes(quantidadeProfissoes + 1)}> {"+"} </div>
            <button type="submit">Salvar</button>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
