import axios from 'axios';

export const key = '4eb290aa';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;