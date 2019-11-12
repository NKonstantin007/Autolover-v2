import get from './base/get';
import {baseUrl} from './base/base';

export default {
    test: (user) => get(`${baseUrl}/test`)
}