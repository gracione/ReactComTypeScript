import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";
import Alterar from "../../util/alterar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../src/services/api";

export default function AlterarFeriado() {
  const [data, setData] = useState('');
  const [nome, setFeriado] = useState('');
  const [listagem, setListagem]:any = useState([]);
  const { idFeriado } = useParams();

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
          <form action={"/feriados"} onSubmit={() => Alterar("feriados", { data, nome })}>
            <div>
              <h2>Adicionar Feriado</h2>
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
            <button >Salvar</button>
          </form>
        </Conteudo>
      </Header>
    </Container>
  );
}
