import axios from 'axios';

const api = axios.create({
  baseURL: process.env.LIVE ? 'https://abare-project.herokuapp.com/' : 'http://localhost:3333/',
});

export default api;

