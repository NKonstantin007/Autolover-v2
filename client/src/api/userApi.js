import {baseUrl} from './base/axios';
import get from './base/get';
import put from './base/put';
import post from './base/post';
import axiosWithAuth from './axiosWithAuth';

export default {
    getCurrent: axiosWithAuth(() => get(`${baseUrl}/auth/current`)),
    signOutCurrentUser: () => get(`${baseUrl}/auth/signout`),
    updateCurrentUser: axiosWithAuth((user) => put(`${baseUrl}/user/all`, user)),
    updateAvatarCurrentUser: axiosWithAuth((avatar) => post(`${baseUrl}/user/avatar`, avatar)), 
};
