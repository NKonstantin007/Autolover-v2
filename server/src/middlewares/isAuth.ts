import jwt from 'express-jwt';

import config from '../config';
import getTokenFromHeader from '../utils/getTokenFromHeader';

export default jwt({
  secret: config.jwt.secret,
  userProperty: 'token', 
  getToken: getTokenFromHeader
});