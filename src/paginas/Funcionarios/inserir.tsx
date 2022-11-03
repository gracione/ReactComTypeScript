import { Conteudo } from "../../styles/global";
import { useState } from 'react';
import InputMask from "react-input-mask";
import Inserir from "../../util/inserir";
import BuscarDadosApi from "../../util/util";
import { AdicionarPrifissao } from "./styles";

export default function InserirFuncionario() {
  const [inicioExpediente, setInicioExpediente] = useState('');
  const [inicioAlmoco, setInicioAlmoco] = useState('');
  const [fimAlmoco, setFimAlmoco] = useState('');
  const [fimExpediente, setFimExpediente] = useState('');

  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [id_sexo, setId_Sexo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profissoesCadastradas, setProfissoesCadastradas] = useState([]);
  const profissoesCadastradasAux: any = profissoesCadastradas;

  const profissoes = BuscarDadosApi('profissao', 'listar');
  const [quantidadeProfissoes, setQuantidadeProfissoes] = useState(1);

  function adicionarProfissao(valor: any, indice: any) {
    profissoesCadastradasAux[indice] = valor;
    console.log(valor);
    setProfissoesCadastradas(profissoesCadastradasAux);
  }

  const selecaoProfissao: any = [];

  for (let index = 0; index < quantidadeProfissoes; index++) {
    selecaoProfissao.push(
      <div>
        <select
          onChange={e => adicionarProfissao(e.target.value, index)}
          required
        >
          <option>Escolha a Profissão</option>
          {
            profissoes.map((element) => (
              <option value={element.id}>{element.profissão}</option>
            ))
          }
        </select>
      </div>
    );
  }
  return (
    <Conteudo>
      {profissoesCadastradas}
      <form action={"/funcionarios"} onSubmit={() => Inserir("funcionarios", { nome, numero, id_sexo, email, password, profissoesCadastradas, inicioExpediente, inicioAlmoco, fimAlmoco, fimExpediente })}>
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
        {selecaoProfissao}
        <AdicionarPrifissao onClick={() => setQuantidadeProfissoes(quantidadeProfissoes + 1)}>
          Adicionar mais uma profissão
        </AdicionarPrifissao>
        <fieldset className="p-1 display-flex">
          <input type="time" placeholder="Inicio Expediente" onChange={e => setInicioExpediente(e.target.value)} />
          <input type="time" placeholder="Inicio Almoco" onChange={e => setInicioAlmoco(e.target.value)} />
          <input type="time" placeholder="Fim Almoco" onChange={e => setFimAlmoco(e.target.value)} />
          <input type="time" placeholder="Fim Expediente" onChange={e => setFimExpediente(e.target.value)} />
        </fieldset>

        <button type="submit">Salvar</button>
      </form>
    </Conteudo>
  );
}
