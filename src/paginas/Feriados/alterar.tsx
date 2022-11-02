import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";
import Alterar from "../../util/alterar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../src/services/api";

export default function AlterarFeriado() {
  const [listagem, setListagem]:any = useState([]);
  const { idFeriado } = useParams();
  
  const [data, setData] = useState('');
  const [nome, setFeriado] = useState('');
  useEffect(() => {
    api
      .post("/feriados/listar-id", {
        idFeriado
      })
      .then((response) => setListagem(response.data[0]));

  }, []);
  return (
    <Container>
      <Menu />
      <Header>
        <Conteudo>
          <form action="/feriados" >
            <div>
              <h2>Alterar Feriado</h2>
              <input
                type="text"
                defaultValue={listagem.nome}
                placeholder="Nome do feriado"
                onChange={e => setFeriado(e.target.value)}
                required
              />
              <input
                type="date"
                defaultValue={listagem.data}
                onChange={e => setData(e.target.value)}
                required
              />
            </div>
            <button onClick={() => Alterar("feriados", { id:idFeriado,data, nome })} >Alterar</button>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
