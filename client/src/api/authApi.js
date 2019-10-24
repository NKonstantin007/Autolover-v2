import post from './base/post';
import get from './base/get';
import {baseUrl} from './base/axios';

export default {
    signUp: (user) => post(`${baseUrl}/auth/signup`, user),
    signIn: (user) => post(`${baseUrl}/auth/signin`, user),
    refreshToken: () => get(`${baseUrl}/auth/refresh`),
    
}