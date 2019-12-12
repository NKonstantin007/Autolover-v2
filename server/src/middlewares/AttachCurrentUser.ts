import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

import getTokenFromHeader from '../utils/getTokenFromHeader';
import UserModel from '../models/UserModel';
import config from '../config';

export default (req: Request, res: Response, next: NextFunction): void => {
    const token: string = getTokenFromHeader(req);
    jwt.verify(token, config.jwt.secret, async (err, decoded) => {
        if(err) {
            console.log(err);
        }
        const _id = decoded.data._id;
        req.user = await UserModel.findById(_id)
            .select({password: 0})
            .populate('avatar')
            .lean();
        next();
    });
}