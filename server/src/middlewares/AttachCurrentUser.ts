import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

import getTokenFromHeader from '../utils/getTokenFromHeader';
import config from '../config';

export default (req: Request, res: Response, next: NextFunction) => {
    const token = getTokenFromHeader(req);
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
        if(err) {
            console.log(err);
            next();
        }
        req.user = decoded.data;
        next();
    });
}