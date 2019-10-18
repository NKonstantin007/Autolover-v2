import {Request, Response, NextFunction} from 'express';
import BaseController from './BaseController';
import AuthService from '../services/AuthService';

class AuthController extends BaseController {

    public init() {
        this.router.post('/signup', this.signUp);
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
            console.log("sign in ", req.body);
            return res.status(200).json({user, token});
        }
        catch(err) {
            console.log(err);
            return next(err);
        }
    }
}

export default AuthController;