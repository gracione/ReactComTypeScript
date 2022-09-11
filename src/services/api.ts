import axios from 'axios';

const api = axios.create({
  baseURL:"http://salao.localhost/api",
})

api.interceptors.request.use(async config => {
  if (localStorage.getItem('access_token')) {
    axios.defaults.headers.common['Authorization'] = "Bearer ${localStorage.getItem('access_token')";
  }

  return config;
});

export default api;