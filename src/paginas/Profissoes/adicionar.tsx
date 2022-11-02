import { Conteudo } from "../../styles/global";
import { useState } from "react";
import Inserir from "../../util/inserir";

export default function Adicionar() {
  const [nome, setNome] = useState('');
  return (
    <div className="display-flex" >
      <Conteudo>
        <form action={"/profissao"} onSubmit={() => Inserir("profissao",{nome})}>
          <input
            name='nome'
            placeholder="..."
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
          <button>Salvar</button>
        </form>
      </Conteudo>
    </div>
  );
}
