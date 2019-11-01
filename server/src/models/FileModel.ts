import mongoose from 'mongoose'
import {prop, Typegoose} from '@typegoose/typegoose';

export class File extends Typegoose {
    public _id: mongoose.Types.ObjectId;

    @prop({required: true})
    public name: string;
}

const FileModel = new File().getModelForClass(File);

export default FileModel;
