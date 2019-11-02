import {Request, Response, NextFunction} from 'express'

import BaseController from './BaseController';
import UserModel, { User } from '../models/UserModel';
import isAuth from '../middlewares/isAuth';
import SyncValidate from '../middlewares/SyncValidate';
import AttachCurrentUser from '../middlewares/AttachCurrentUser';
import {UserInfoValidators} from '../validations/UserValidations';

class UserController extends BaseController {

    public init() {
        this.router.put(
            '/info',
            AttachCurrentUser,
            isAuth,
            SyncValidate(UserInfoValidators),
            this.updateUserInfo
        );

        this.router.post(
            '/avatar',
            isAuth,
            AttachCurrentUser,
            this.updateAvatarUser
        );
    }

    private async updateUserInfo(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const userId = req.user._id;
        const info = req.body;
        try {
            await UserModel.findByIdAndUpdate(userId, info);
            res.status(200).json(info);
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