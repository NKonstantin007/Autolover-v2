import axios from './axios';

export default (url, body) => axios.put(url, body);