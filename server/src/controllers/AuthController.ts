import {Request, Response, NextFunction} from 'express';

import BaseController from './BaseController';
import AuthService from '../services/AuthService';
import SyncValidate from '../middlewares/SyncValidate';
import AttachCurrentUser from '../middlewares/AttachCurrentUser';
import isAuth from '../middlewares/isAuth';
import { SignUpValidators, SignInValidators } from '../validations/AuthValidators';
import getTokenFromHeader from '../utils/getTokenFromHeader';

class AuthController extends BaseController {

    public init() {
        this.router.post(
            '/signup',
            SyncValidate(SignUpValidators),
            this.signUp
        );
        this.router.post(
            '/signin', 
            SyncValidate(SignInValidators),
            this.signIn
        );
        this.router.get(
            '/current',
            isAuth,
            AttachCurrentUser,
            this.currentUser
        );
        this.router.get(
            '/refresh',
            isAuth,
            this.refreshToken
        );
        this.router.get(
            '/signout',
            isAuth,
            this.signOut
        );
    }

    private async signUp(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try{
            const user = await AuthService.signUp(req.body);
            return res.status(201).json({...user, msg: 'Success'});
        }
        catch(err) {
            console.log(err);
            return next(err);
        }
    }

    private async signIn(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try{
            const {user, token} = await AuthService.signIn(req.body);
            return res.status(200).json({_id: user._id, token, message: 'Success'});
        }
        catch(err) {
            console.log(err);
            return next(err);
        }
    }

    private async currentUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const { user } = req;
        if(!user) {
            return res.sendStatus(401);
        }
        return res.json(user);
    } 

    private async refreshToken(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const token = getTokenFromHeader(req);
            const newToken = await AuthService.refreshToken(token);
            if(newToken) {
                return res.json({
                    token: newToken
                });
            }
            else {
                return res.sendStatus(401);
            }
        }
        catch(err) {
            console.log(err);
            return next(err);
        }
    }

    private async signOut(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            req.user = null;
            return res.status(200).json('Signed out');
        }
        catch (err) {
            console.log(err);
            return next(err);
        }
    }
}

export default AuthController;