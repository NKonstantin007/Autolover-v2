import mongoose from 'mongoose'
import {prop, Typegoose} from '@typegoose/typegoose';

class User extends Typegoose {
    @prop({required: true})
    public name: string;

    @prop({required: true})
    public email: string;

    @prop({required: true})
    public password: string;
}

const UserModel = new User().getModelForClass(User);

export default UserModel;
