import { Typegoose } from '@typegoose/typegoose';
import fs from 'fs';
import {Readable, Writable} from 'stream';
import path from 'path';
import mongoose from 'mongoose';

import config from './../config';
import FileModel, {File} from '../models/FileModel';
import { Mongoose } from 'mongoose';


class FileService {
    public static async createFile(readableStream: Readable, fileName: string ): Promise<mongoose.Types.ObjectId|any> {
        try{
            const fileModel = await FileModel.create({name: fileName});
            const fileId = fileModel._id;
            const folder = config.staticFolder;
            const filePath = path.resolve(__dirname, `../${folder}/${fileId}`);
            const writeableStream: Writable = fs.createWriteStream(filePath);
            readableStream.pipe(writeableStream);
            return fileId;
        }
        catch(err) {
            console.log(err);
        }
    }

    public static async getFile(fileId): Promise<File|void>  {
        try {
            const file = await FileModel.findById(fileId).lean();
            return file;
        }
        catch(err) {
            console.log(err);
        }
    }
}

export default FileService;