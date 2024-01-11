import axios from 'axios';

const AXIOS = axios.create({
    baseURL: 'https://api.jokolodang.com/api'
});

export default AXIOS;
