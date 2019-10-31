import {Request, Response, NextFunction} from 'express'

import BaseController from './BaseController';
import UserModel from '../models/UserModel';
import isAuth from '../middlewares/isAuth';

class UserController extends BaseController {

    public init() {
        this.router.put(
            '/all',
            isAuth,
            this.updateUser
        );
    }

    private async updateUser(req: Request, res: Response, next: NextFunction) {
        const { _id, name, email, aboutMe} = req.body;
        try {
            const updatedUser = await UserModel
                .findByIdAndUpdate(_id, {name, email, aboutMe}, { new: true })
                .select({password: 0});
            res.status(200).json(updatedUser);
        }
        catch(err) {
            console.log(err);
            return next(err);
        }
    }
}

export default UserController;