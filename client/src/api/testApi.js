import get from './base/get';
import {baseUrl} from './base/axios';

export default {
    test: (user) => get(`${baseUrl}/test`)
}