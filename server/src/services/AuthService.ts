import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';

import UserModel from '../models/UserModel';
import config from '../config';

class AuthService {

    private static generateToken(user) {
        const {_id, name, email} = user;
        const data = {
            _id, 
            name,
            email
        };
        return jwt.sign({data}, config.jwtSecret, {expiresIn: 100});
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
            name: userRecord.name,
            email: userRecord.email
        }
    }
    
    public static async signIn(user): Promise<any> {
        const {email, password} = user;
        const userRecord = await UserModel.findOne({email});
        if(!userRecord) {
            throw new Error('User does not registered');
        }

        const isValidPassword = await bcrypt.compare(password, userRecord.password);
        if(!isValidPassword) {
            throw new Error('Password is not valid')
        }
        return {
            user: {
                name: userRecord.name,
                email: userRecord.email
            },
            token: AuthService.generateToken(userRecord)
        }
    }
}

export default AuthService;