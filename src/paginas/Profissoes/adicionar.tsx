import Menu from "../Menu";
import { Container, Conteudo } from "../../styles/global";
import { useState } from "react";
import AdicionarItem from "../../util/adicionar";

export default function Adicionar() {
  const [nome, setNome] = useState('');

  const date={
    nome:nome
  }
  
  function inserir(){
    return AdicionarItem('teste');
  }

  return (
    <Container>
      <Menu></Menu>
      <div className="display-flex" >
        <Conteudo>
          <form onSubmit={inserir}>
            <input
              name='nome'
              placeholder="..."
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />

            <input type="text" name="id_estabelecimento" value="1" />
            <button>Salvar</button>
          </form>
        </Conteudo>
      </div>
    </Container>
  );
}
