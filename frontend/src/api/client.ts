import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8001',
});

api.interceptors.response.use(
  res => res,
  err => {
    console.error(err);
    return Promise.reject(err);
  }
);

export default api;
