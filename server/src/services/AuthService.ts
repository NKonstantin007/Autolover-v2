import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

import UserModel from '../models/UserModel';
import config from '../config';
import IVerifyUser from '../interfaces/IVerifyUser';

class AuthService {
    private static generateToken(user): string {
        const {_id, email} = user;
        const data = {
            _id, 
            email
        };
        return jwt.sign({data}, config.jwt.secret, {expiresIn: config.jwt.expiresIn});
    }

    public static async signUp2(user): Promise<IVerifyUser> {
        const {name, email, password} = user;
        const buffer = crypto.randomBytes(32);
        const verifyToken = buffer.toString('hex');
        const verifyExp = Date.now() + (60 * 30 * 1000);
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({
            name,
            email,
            password: hashedPassword,
            isVerify: false,
            verifyToken,
            verifyExp
        });

        return {
            name,
            email,
            verifyToken
        };
    }

    public static async signUp(user): Promise<object> {
        const {name, email, password} = user;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userRecord = await UserModel.create({
            name,
            email,
            password: hashedPassword
        });
        return {
            _id: userRecord._id,
            name: userRecord.name,
            email: userRecord.email
        };
    }
    
    public static async signIn(user): Promise<any> {
        const userRecord = await UserModel.findOne({ email: user.email });

        return {
            user: {
                _id: userRecord._id,
            },
            token: AuthService.generateToken(userRecord)
        };
    }

    public static async refreshToken(token): Promise<string | boolean> {
        try{
            const decoded = jwt.verify(token, config.jwt.secret);
            return AuthService.generateToken(decoded.data);
        }
        catch(err) {
            console.log(err);
            return false;
        }
    }
}

export default AuthService;