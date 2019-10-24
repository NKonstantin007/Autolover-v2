import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';

import UserModel from '../models/UserModel';
import config from '../config';
import getTokenFromHeader from '../utils/getTokenFromHeader';


class AuthService {

    private static generateToken(user) {
        const {_id, name, email} = user;
        const data = {
            _id, 
            name,
            email
        };
        return jwt.sign({data}, config.jwt.secret, {expiresIn: config.jwt.expiresIn});
    }

    public static async signUp(user): Promise<any> {
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

    public static async refreshToken(token): Promise<any> {
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