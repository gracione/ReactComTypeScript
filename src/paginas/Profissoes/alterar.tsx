import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";
import Alterar from "../../util/alterar";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export default function AlterarProfissao() {
  const [nome, setNome] = useState('');
  const [listagem, setListagem]: any = useState([]);
  const { idProfissao } = useParams();

  useEffect(() => {
    api
      .post("/profissao/listar-id", {
        idProfissao
      })
      .then((response) => setListagem(response.data[0]));

  }, []);
  console.log(listagem);
  return (
    <Container>
      <Menu></Menu>
      <div className="display-flex" >
        <Conteudo>
          <form action="/profissoes" >
            <input
              name='nome'
              placeholder="..."
              defaultValue={nome}
              onChange={e => setNome(e.target.value)}
              required
            />
            <button onClick={() => Alterar("profissoes", { id: idProfissao, nome })} >Alterar</button>
          </form>
        </Conteudo>
      </div>
    </Container>
  );
}
