import {Request, Response, NextFunction} from 'express'

import BaseController from './BaseController';
import UserModel, { User } from '../models/UserModel';
import isAuth from '../middlewares/isAuth';
import AttachCurrentUser from '../middlewares/AttachCurrentUser';

class UserController extends BaseController {

    public init() {
        this.router.put(
            '/all',
            isAuth,
            this.updateUser
        );

        this.router.post(
            '/avatar',
            isAuth,
            AttachCurrentUser,
            this.updateAvatarUser
        );
    }

    private async updateUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
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

    private async updateAvatarUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const userId = req.user._id;
        const avatar = req.body;
        try {
            await UserModel.findByIdAndUpdate(userId, {avatar});
            res.status(200).json(avatar);
        }
        catch(err) {
            console.log(err);
            return next(err);
        }
    }
}

export default UserController;