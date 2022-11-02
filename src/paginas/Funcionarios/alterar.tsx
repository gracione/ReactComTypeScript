import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";
import InputMask from "react-input-mask";
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useState, useEffect } from "react";
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
  let profissoes = BuscarDadosApi('profissao', 'listar');
  const history = useNavigate();
  let selectProfissoes: any = [];
  let optionProfissoes: any = []
  const data = {
    nome,
    numero,
    id_sexo,
    email,
    password,
    profissoesCadastradas
  };
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

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const idDadosAlterar = localStorage.getItem('idDadosAlterar');
  const [listagem, setListagem] = useState([]);
  const dadosAlterar: any = [];
  console.log(idDadosAlterar);
  useEffect(() => {
    api
      .post("/funcionario/listar-id", {
        id: idDadosAlterar
      })
      .then((response) => setListagem(response.data));
  }, []);

  return (
    <Conteudo>
      <form onSubmit={inserir}>
        <h2 >Alterar Funcionario</h2>
        <div>
          <input
            placeholder={listagem[0]['nome']}
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
          <InputMask
            mask="(99) 9 9999-9999"
            placeholder={listagem[0]['numero']}
            value={numero}
            onChange={e => setNumero(e.target.value)}
            required
          />
        </div>
        <input
          placeholder={listagem[0]['email']}
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div>
          <select
            onChange={e => setId_Sexo(listagem[0]['id_sexo'])}
            required
          >
            <option value={0}>Escolha o sexo</option>
            <option value={2}>Feminino</option>
            <option value={1}>Masculino</option>
          </select>
        </div>
        {selectProfissoes}
        <AdicionarPrifissao onClick={() => setQuantidadeProfissoes(quantidadeProfissoes + 1)}>
          Adicionar mais uma profissão
        </AdicionarPrifissao>
        <button type="submit">Salvar</button>
      </form>
    </Conteudo>
  );
}
