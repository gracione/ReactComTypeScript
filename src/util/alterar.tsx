import api from '../services/api';

export default function Alterar(modulo: any, dados: any) {
  const url = "/" + modulo + "/alterar";
  api.post(url, dados);
  return "/" + modulo;
}