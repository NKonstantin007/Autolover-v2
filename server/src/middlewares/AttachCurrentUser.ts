import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

import getTokenFromHeader from '../utils/getTokenFromHeader';
import UserModel from '../models/UserModel';
import config from '../config';

export default (req: Request, res: Response, next: NextFunction) => {
    const token = getTokenFromHeader(req);
    jwt.verify(token, config.jwt.secret, async (err, decoded) => {
        if(err) {
            console.log(err);
            next();
        }
        const _id = decoded.data._id;
        const user = await UserModel.findById(_id);
        req.user = {
            _id: user._id,
            name: user.name,
            email: user.email,
            aboutMe: user.aboutMe
        };
        next();
    });
}