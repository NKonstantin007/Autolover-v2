import {baseUrl} from './base/axios';
import post from './base/post';
import axiosWithAuth from './axiosWithAuth';

export default {
    uploadFile: axiosWithAuth((file) => post(`${baseUrl}/file/upload`, file))
};
