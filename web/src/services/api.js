import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'// Tem que ser URL maiúsculo....
});

export default api;