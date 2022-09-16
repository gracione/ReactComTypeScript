import api from "../services/api";
import { Link, useNavigate } from 'react-router-dom';

export default function ExcluirDadosApi(funcao: string, opcao: any, id: any) {
  const history = useNavigate();
  const url = "/" + funcao + "/" + opcao;
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  api
    .post(url, {
      id: id,
      id_estabelecimento: 1
    }, config)
    history('/home');

}
