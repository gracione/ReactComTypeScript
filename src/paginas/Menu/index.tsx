import { useNavigate } from "react-router-dom";

import { Container } from "./style";

export default function Menu() {
  const token = localStorage.getItem("token");
  const history = useNavigate();

  if (token === "" || token === null) {
    history("/");
  }

  function handleLogout() {
    localStorage.clear();
    history("/");
  }

  return (
    <Container>
      <img src="/logo-alternativa.svg" alt="logo Cyan" />
      <div className="opcoes">
        <a href="/home">Home</a>
        <a href="/funcionarios">Funcionários</a>
        <a href="/feriados">Feriados</a>
        <a href="/folgas">Folgas</a>
        <a href="/expediente">Expediente</a>
        <a href="/tratamentos">Tratamentos</a>
        <a href="/profissao">Profissões</a>
        <a href="/configuracoes">Configurações</a>
        <a onClick={handleLogout} href="/">
          <div >SAIR</div>
        </a>
      </div>
    </Container>
  );
}
