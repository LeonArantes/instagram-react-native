import axios from 'axios';
const api = axios.create({
  baseURL: 'https://www.instagram.com',
  timeout: 15000,
});

export default api;
