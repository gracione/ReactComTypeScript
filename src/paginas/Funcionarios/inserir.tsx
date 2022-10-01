import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";
import { useState } from 'react';
import InputMask from "react-input-mask";
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import GerarUrl from "../../util/adicionar";
import BuscarDadosApi from "../../util/util";
import { AdicionarPrifissao } from "./styles";

export default function InserirFuncionario() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [id_sexo, setId_Sexo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profissoesCadastradas, setProfissoesCadastradas] = useState([]);
  const profissoesCadastradasAux: any = profissoesCadastradas;
  const idEstabelecimento = localStorage.getItem('id_estabelecimento');
  const profissoes = BuscarDadosApi('profissao', 'listar');
  const data = {
    nome,
    numero,
    id_sexo,
    email,
    password,
    id_estabelecimento: idEstabelecimento,
    profissoesCadastradas
  };
  const history = useNavigate();
  const [quantidadeProfissoes, setQuantidadeProfissoes] = useState(1);
  

  function inserir() {
    const url = GerarUrl("funcionario", "inserir");

    api.post(url, data)
    history('/home');
  }

  function adicionarProfissao(valor: any, indice: any) {
    profissoesCadastradasAux[indice] = valor;
    setProfissoesCadastradas(profissoesCadastradasAux);
  }

  let selectProfissoes: any = [];
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
            <AdicionarPrifissao onClick={() => setQuantidadeProfissoes(quantidadeProfissoes + 1)}>
              Adicionar mais uma profissão
            </AdicionarPrifissao>
            <button type="submit">Salvar</button>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
