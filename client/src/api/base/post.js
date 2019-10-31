import axios from './axios';

export default (url, body) => axios.post(url, body);