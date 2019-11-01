import {Request, Response, NextFunction} from 'express'
import Busboy from 'busboy';
import { Readable } from 'stream';

import BaseController from './BaseController';
import isAuth from '../middlewares/isAuth';
import FileService from '../services/FileService';

class FileController extends BaseController {

    public init() {
        this.router.post(
            '/upload',
            isAuth,
            this.uploadFile
        );
    }

    private async uploadFile(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const busboy = new Busboy({headers: req.headers});
        let fileId;

        busboy.on('file', async (fieldname: string, file: Readable, filename: string, encoding: string, mimetype: string) => {
            // check type
            const allowedMimetypes = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'];
            if (!allowedMimetypes.includes(mimetype)) {
                return res.status(422).send('Invalid image format');
            }
            // create file
            fileId =  await FileService.createFile(file, filename);
        });

        busboy.on('finish', async () => {
            const file = await FileService.getFile(fileId);
            return res.status(200).json(file);
        });

        req.pipe(busboy);
    }
}

export default FileController;