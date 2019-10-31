import {baseUrl} from './base/axios';
import get from './base/get';
import put from './base/put';
import axiosWithAuth from './axiosWithAuth';

export default {
    getCurrent: axiosWithAuth(() => get(`${baseUrl}/auth/current`)),
    signOutCurrentUser: () => get(`${baseUrl}/auth/signout`),
    updateCurrentUser: axiosWithAuth((user) => put(`${baseUrl}/user/all`, user)) 
};
