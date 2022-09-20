import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";
import React, { useState } from 'react';
import InputMask from "react-input-mask";
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function InserirFuncionario() {
  const [name, setName] = useState('');
  const [numero, setNumero] = useState('');
  const [id_sexo, setId_Sexo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const idEstabelecimento = localStorage.getItem('id_estabelecimento');

  const data = {
    name,
    numero,
    id_sexo,
    email,
    password,
    id_estabelecimento: idEstabelecimento,
  };

  const history = useNavigate();

  async function handleLogin(e:any) {
    e.preventDefault();

    try {
      const response = await api.post('/funcionario/inserir', data);
      history('/home');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <Container>
      <Menu></Menu>
      <Header>
        {idEstabelecimento}
        <Conteudo>
          <form onSubmit={handleLogin}>
            <h2 >Adicionar Funcionario</h2>
            <div>
              <input
                placeholder="Seu Nome"
                value={name}
                onChange={e => setName(e.target.value)}
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
            <button>Salvar</button>
          </form>
          <table>
            <tr>1</tr>
          </table>
          cadastrar funcionario
        </Conteudo>
      </Header>
    </Container>
  );
}
