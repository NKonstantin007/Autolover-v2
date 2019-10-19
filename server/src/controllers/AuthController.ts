import {Request, Response, NextFunction} from 'express';

import BaseController from './BaseController';
import AuthService from '../services/AuthService';
import validate from '../middlewares/validate';
import { SignUpValidators } from '../validations/AuthValidators';

class AuthController extends BaseController {

    public init() {
        this.router.post(
            '/signup',
            validate(SignUpValidators),
            this.signUp
        );
        this.router.post('/signin', this.signIn);
    }

    private async signUp(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try{
            const user = await AuthService.signUp(req.body);
            return res.status(201).json(user);
        }
        catch(err) {
            console.log(err);
            return next(err);
        }
    }

    private async signIn(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try{
            const {user, token} = await AuthService.signIn(req.body);
            return res.status(200).json({user, token, msg: 'Success'});
        }
        catch(err) {
            console.log(err);
            return next(err);
        }
    }
}

export default AuthController;