import Menu from "../Menu";
import { AdicionarItem, Container, Conteudo, Header } from "../../styles/global";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import GerarUrl from "../../util/adicionar";
import BuscarDadosApi from "../../util/util";

export default function InserirTratamento() {
  const [tratamento, setTratamento] = useState('');
  const [horas, setHoras] = useState('');
  const [minutos, setMinutos] = useState('');
  const [idProfissao, setIdProfissao] = useState("");
  const profissoes = BuscarDadosApi('profissao', 'listar');

  const [matrix, setMatrix] = useState(
    Array.from({ length: 1 },
      () => Array.from({ length: 1 }, () => []))
  );
  const [tipoFiltro, setTipoFiltro] = useState(
    Array.from({ length: 1 }, () => [0]),
  );

  let optionProfissoes: any = [];
  profissoes.forEach(element => {
    optionProfissoes.push(
      <option value={element.id}>{element.nome}</option>
    );
  });

  const nomeDoTipoFiltro = (row: any, column: number, event: any) => {
    let nomeFiltro = [...tipoFiltro];

    nomeFiltro[row] = event.target.value;
    setTipoFiltro(nomeFiltro);
  };

  const nomeDoFiltro = (row: any, column: number, event: any) => {
    let copy: any = [...matrix];
    copy[row][column][0] = event.target.value;
    setMatrix(copy);
  };

  const porcentagemDoFiltro = (row: any, column: number, event: any) => {
    let copy: any = [...matrix];
    copy[row][column][1] = event.target.value;
    setMatrix(copy);
  };

  const adicionarLinha = (row: any) => {
    let copy: any = [...matrix];
    copy[row].push([]);
    setMatrix(copy);
  }
  const adicionarColuna = (tamanho: any) => {
    let copy: any = [...matrix];
    copy.push([]);
    setMatrix(copy);
    let nomeFiltro = [...tipoFiltro];

    nomeFiltro.push([tamanho]);
    setTipoFiltro(nomeFiltro);
    console.log(nomeFiltro);
  }
  const data = {
    nome_tratamento: tratamento,
    tempo_gasto: (parseInt(horas) * 60) + parseInt(minutos),
    tipo_de_filtro: matrix,
    nomesTipoFiltro: tipoFiltro,
    id_profissao: idProfissao
  };
  const history = useNavigate();

  function inserir() {
    const url = GerarUrl("tratamentos", "inserir");

    api.post(url, data)
    history('/home');
  }

  return (
    <Container>
      <Menu></Menu>
      <Header>
        <Conteudo>
          <form onSubmit={inserir}>
            <h2 >Adicionar Tratamento</h2>
            <div>
              <input
                placeholder="Tratamento"
                value={tratamento}
                onChange={e => setTratamento(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                placeholder="Hora"
                value={horas}
                type="number"
                onChange={e => setHoras(e.target.value)}
                required
              />
              <input
                placeholder="Minutos"
                value={minutos}
                type="number"
                onChange={e => setMinutos(e.target.value)}
                required
              />
            </div>
            <div>
              <select
                onChange={e => setIdProfissao(e.target.value)}
                required
              >
                <option value={0}>Escolha a Profissão</option>
                {optionProfissoes}
              </select>
            </div>

            <div>
              {matrix.map((row: any, tipoFiltro: any) => (
                <div key={tipoFiltro} className="border">
                  <input
                    placeholder="Nome do filtro"
                    onChange={e => nomeDoTipoFiltro(tipoFiltro, 0, e)}
                  />
                  {row.map((column: any, filtro: number) => (
                    <div className="display-flex" key={filtro}>
                      <input
                        placeholder="Filtro"
                        name="filtro"
                        type="text"
                        onChange={e => nomeDoFiltro(tipoFiltro, filtro, e)}
                      />
                      <input
                        placeholder="Porcentagem"
                        name="porcentagem"
                        type="number"
                        onChange={e => porcentagemDoFiltro(tipoFiltro, filtro, e)}
                      />
                    </div>
                  ))}
                  <div>

                    <div onClick={() => adicionarLinha(tipoFiltro)}>add</div>
                  </div>
                </div>
              ))}
            </div>
            <AdicionarItem onClick={() => adicionarColuna(matrix.length)}>+</AdicionarItem>

            <button type="submit">Salvar</button>
          </form>

        </Conteudo>
      </Header>
    </Container>
  );
}
