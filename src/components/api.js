import axios from 'axios';
import md5 from 'md5';

const password = 'Valantis';

export const getAuthString = () => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  return md5(`${password}_${timestamp}`);
};

export const api = axios.create({
  baseURL: 'http://api.valantis.store:40000/',
  headers: {
    'X-Auth': getAuthString(),
  },
});