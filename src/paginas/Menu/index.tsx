import { useNavigate } from "react-router-dom";

import { Container } from "./style";

export default function Menu() {
  const history = useNavigate();
  function handleLogout() {
    localStorage.clear();
    history("/");
  }
  
  return (
    <Container>
      <img onClick={() => history("/home")} src="/logo-alternativa.svg" alt="logo Cyan" />
      <div className="opcoes">
        <p onClick={() => history("/home")}>Home</p>
        <p onClick={() => history("/funcionarios")}>Funcionários</p>
        <p onClick={() => history("/feriados")}>Feriados</p>
        <p onClick={() => history("/folgas")}>Folgas</p>
        <p onClick={() => history("/expediente")}>Expediente</p>
        <p onClick={() => history("/tratamentos")}>Tratamentos</p>
        <p onClick={() => history("/profissao")}>Profissões</p>
        <p onClick={() => history("/configuracoes")}>Configurações</p>
        <p onClick={handleLogout} >
          <a href="/">
            SAIR
          </a>
        </p>
      </div>
    </Container>
  );
}
