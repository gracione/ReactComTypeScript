import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import InputMask from "react-input-mask";

import api from '../../../services/api';
import './styles.css';


export default function Register() {
  const [name, setName] = useState('');
  const [numero, setNumero] = useState('');
  const [id_sexo, setId_Sexo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [idEstabelecimento, setIdEstabelecimento] = useState(1);

  const history = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      numero,
      id_sexo,
      email,
      password,
      "password_confirmation": confirmPassword,
      id_estabelecimento: idEstabelecimento,
    };

    try {
      api.post('/registrarCliente', data)
      .then(async (res) => {
        if (res.data.access_token) {
          const response = await api.post('/login', { email, password });
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('id_estabelecimento', '1');
            history('/home');
          }
        });
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e agende seu horario.</p>

        </section>
        <form onSubmit={handleRegister}>
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

          <select
            onChange={e => setId_Sexo(e.target.value)}
            required
          >
            <option value={0}>Escolha o sexo</option>
            <option value={1}>Masculino</option>
            <option value={2}>Feminino</option>
          </select>
          <input
            placeholder="Seu E-mail"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className='display-none'
            value="1"
            type="text"
            onChange={e => setIdEstabelecimento(1)}
          />

          <input
            placeholder="Digite sua Senha"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            required
          />

          <input
            placeholder="Confirme sua Senha"
            value={confirmPassword}
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />

          <button className="button" type="submit">Cadastrar</button>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#3498db" />
            Já possuo cadastro
          </Link>

        </form>
      </div>
    </div>
  );
}