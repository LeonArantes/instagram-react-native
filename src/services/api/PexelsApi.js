// 563492ad6f917000010000019bbcaa18ce6d499599e08cf2b0acde8e
import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  timeout: 15000,
});

export default api;
