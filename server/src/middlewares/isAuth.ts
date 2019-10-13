import jwt from 'express-jwt';

import config from '../config';

const getTokenFromHeader = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
};

export default jwt({
  secret: config.jwtSecret,
  userProperty: 'token', 
  getToken: getTokenFromHeader
});