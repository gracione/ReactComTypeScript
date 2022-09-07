import axios from 'axios';

const api = axios.create({
  baseURL:"http://salao.localhost/api",
})

api.interceptors.request.use(async config => {
  // Declaramos um token manualmente para teste.
  const token = "37|6RPmfosQRN5nFkMBWMB1HeWjq5GzFIpfZK94ozQ1";

  if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer ${localStorage.getItem('access_token')";
  }

  return config;
});

export default api;