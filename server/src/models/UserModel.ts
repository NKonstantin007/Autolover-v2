import mongoose from 'mongoose'
import {prop, Typegoose, Ref} from '@typegoose/typegoose';

import {File} from './FileModel';
 
export class User extends Typegoose {
    public _id: mongoose.Types.ObjectId;

    @prop({required: true})
    public name: string;

    @prop({required: true})
    public email: string;

    @prop({required: true})
    public password: string;

    @prop({default: ''})
    public aboutMe: string;

    @prop({required: true, default: false})
    public isVerify: boolean;

    @prop()
    public verifyToken: string;

    @prop()
    public verifyExp: number;

    @prop({ ref: File, default: null })
    public avatar: Ref<File>;
}

const UserModel = new User().getModelForClass(User);

export default UserModel;
