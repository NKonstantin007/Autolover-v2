import axios from 'axios';

import {getDefaultParams} from './base';

export default (url, body, params = {...getDefaultParams()}) => axios.put(url, body, params);