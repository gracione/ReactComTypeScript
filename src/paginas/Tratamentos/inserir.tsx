import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";
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
  const data = {
    nome: tratamento,
    tempo_gasto: (parseInt(horas) * 60) + parseInt(minutos),
    id_profissao: idProfissao
  };
  const history = useNavigate();

  function inserir() {
    const token = localStorage.getItem('token');
    const url = GerarUrl("tratamentos", "inserir");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    api.post(url, data, config)
    history('/home');
  }


  let optionProfissoes: any = [];
  profissoes.forEach(element => {
    optionProfissoes.push(
      <option value={element.id}>{element.nome}</option>
    );
  });

  const n = 1;
    const [matrix, setMatrix] = useState(Array.from({length: n},()=> Array.from({length: n}, () => null)));
  
    const handleChange = (row:any, column:any, event:any) => {
      let copy:any = [...matrix];
      copy[row][column] = +event.target.value;
      copy[row].push([]);
      setMatrix(copy);
  
      console.log(matrix);
    };
    const adicionarLinha = (row:any) =>{
      let copy:any = [...matrix];
      copy[row].push([]);
      setMatrix(copy);
    }
    const adicionarColuna = (row:any) =>{
      let copy:any = [...matrix];
      copy.push([]);
      setMatrix(copy);
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


              <div className="sheet">
                <table>
                  <tbody>
                    {matrix.map((row:any, rowIndex:any) => (
                      <div key={rowIndex}>
                        {row.map((column:any, columnIndex:any) => (
                          <div className="display-flex" key={columnIndex}>
                            <input
                              type="number"
                              onChange={e => handleChange(rowIndex, columnIndex, e)}
                            />
                            <input
                              type="number"
                              onChange={e => handleChange(rowIndex, columnIndex, e)}
                            />
                          </div>
                        ))}
                        <td>

                        <input onClick={() => adicionarLinha(rowIndex)} placeholder="add" />
                        <input onClick={() => adicionarColuna(rowIndex)} placeholder="coluna" />
                        </td>
                      </div>
                    ))}
                  </tbody>
                </table>
              </div>



              <button type="submit">Salvar</button>
            </form>

          </Conteudo>
        </Header>
      </Container>
    );
  }
