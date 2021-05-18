import axios from 'axios';

// eslint-disable-next-line no-console
console.log(process.env.LIVE);

const api = axios.create({
  baseURL: process.env.LIVE ? 'https://abare-project.herokuapp.com/' : 'http://localhost:3333/',
});

export default api;

