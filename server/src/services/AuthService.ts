import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';

import UserModel from '../models/UserModel';

class AuthService {

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
}

export default AuthService;