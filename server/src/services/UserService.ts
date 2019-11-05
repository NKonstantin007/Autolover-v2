import bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';

class UserService {
    public static async updatePassword(user, newPassword): Promise<void> {
        const userId = user._id;
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await UserModel.findByIdAndUpdate(userId, {password: hashedPassword});
    }
}

export default UserService;