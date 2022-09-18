import api from "../services/api";
import { useNavigate } from 'react-router-dom';

export default function AdicionarItem(dados: any) {
  const history = useNavigate();
  const token = localStorage.getItem('token');
  console.log(dados);
  let url = "http://salao.localhost/api/profissao/inserir";
  
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  
  api.post(url, { data:'112', id_estabelecimento: 1 }, config)
  history('/profissoes');

}
