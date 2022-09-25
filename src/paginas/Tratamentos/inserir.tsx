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
      () => Array.from({ length: 1 }, () => [
        Array.from([{length:2}])
      ]))
  );

  let optionProfissoes: any = [];
  profissoes.forEach(element => {
    optionProfissoes.push(
      <option value={element.id}>{element.nome}</option>
    );
  });

  const nomeDoTipoFiltro = (row: any, event: any) => {
    let copy: any = matrix;
    copy[row]['nomeTipoFiltro'] = event.target.value;
    setMatrix(copy);

    console.log(matrix);
  };

  const nomeDoFiltro = (row: any, column: any, event: any) => {
    let copy: any = matrix;
    copy[row][column][1]= event.target.value;
    setMatrix(copy);

    console.log(matrix);
  };
  const porcentagemDoFiltro = (row: any, column: any, event: any) => {
    let copy: any = matrix;
    copy[row][column][2] = event.target.value;
    setMatrix(copy);

    console.log(matrix);
  };

  const adicionarLinha = (row: any) => {
    let copy: any = matrix;
    copy[row].push([]);
    setMatrix(copy);
  }
  const adicionarColuna = () => {
    let copy: any = matrix;
    copy.push([]);
    setMatrix(copy);
  }
  ///////////////////////////////////////////////////////////////////
  const history = useNavigate();
  
  function inserir() {
    let copy: any = matrix;
    console.log(copy);
    const data = {
      nome_tratamento: tratamento,
      tempo_gasto: (parseInt(horas) * 60) + parseInt(minutos),
      tipo_de_filtro: copy,
      id_profissao: idProfissao
    };
    const token = localStorage.getItem('token');
    const url = GerarUrl("tratamentos", "inserir");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    api.post(url, data, config)
    history('/home');
  }

  ///////////////////////////////////////////////////////////////////
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

            <div className="display-flex">
              <p className="border" >Filtro</p>
              <p className="border">Porcentagem</p>
            </div>
            <div>
              {matrix.map((row: any, rowIndex: any) => (
                <div key={rowIndex} className="border">
                  <input
                    type="text"
                    onChange={e => nomeDoTipoFiltro(rowIndex, e)}
                  />
                  {row.map((column: any, columnIndex: any) => (
                    <div className="display-flex" key={columnIndex}>
                      <input
                        name="filtro"
                        type="text"
                        onChange={e => nomeDoFiltro(rowIndex, columnIndex, e)}
                      />
                      <input
                        name="porcentagem"
                        type="number"
                        onChange={e => porcentagemDoFiltro(rowIndex, columnIndex, e)}
                      />
                    </div>
                  ))}
                  <div>

                    <div onClick={() => adicionarLinha(rowIndex)}>add</div>
                  </div>
                </div>
              ))}
            </div>
            <AdicionarItem onClick={() => adicionarColuna()}>+</AdicionarItem>

            <button type="submit">Salvar</button>
          </form>

        </Conteudo>
      </Header>
    </Container>
  );
}
