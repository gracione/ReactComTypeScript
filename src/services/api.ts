import axios from 'axios';

const api = axios.create({
  baseURL:"http://salao.localhost/api",
})

export default api;