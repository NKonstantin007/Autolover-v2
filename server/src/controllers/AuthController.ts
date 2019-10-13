import {Request, Response, NextFunction} from 'express';
import BaseController from './BaseController';
import AuthSrvice from '../services/AuthService';
import AuthService from '../services/AuthService';

class AuthController extends BaseController {

    public init() {
        this.router.post('/signup', this.signUp)
    }

    private async signUp(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try{
            const user = await AuthService.signUp(req.body);
            return res.json({user}).status(201);
        }
        catch(err) {
            console.log(err);
            return next(err);
        }
    }
}
export default AuthController;