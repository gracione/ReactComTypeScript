import api from "../services/api";

export default function ExcluirDadosApi(funcao: string, opcao: any, id: any) {
  const url = "/" + funcao + "/" + opcao;
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  api.post(url, { id: id, id_estabelecimento: 1 }, config)
  
}
