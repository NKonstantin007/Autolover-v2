import {baseUrl} from './base/axios';
import get from './base/get';
import axiosWithAuth from './axiosWithAuth';

export default {
    getCurrent: axiosWithAuth(() => get(`${baseUrl}/auth/current`))
};
