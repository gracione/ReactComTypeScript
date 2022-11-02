import api from '../../src/services/api';

export default function Inserir(modulo: any, dados: any) {
  const url = "/" + modulo + "/inserir";
  console.log(url);
  api.post(url, dados);

  return "/" + modulo;
}