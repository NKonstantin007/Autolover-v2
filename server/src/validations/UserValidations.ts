import bcrypt  from 'bcryptjs';
import {body} from 'express-validator';

import UserModel from '../models/UserModel';

const charactersPattern = /[^0-9a-z_-]/i;   // RegExp to validate the input of valid characters

export const UserInfoValidators = [
    body('name').trim(' ')
        .not().isEmpty().withMessage('Введите имя')
        .isLength({max: 20}).withMessage('Длина имени должна быть не более 20 символов')
        .not().matches(charactersPattern).withMessage('Имя содержит недопустимые символы')
];

export const UserUpdatePasswordValidators = [
    body('oldPassword').trim(' ')
        .not().isEmpty().withMessage('Введите старый пароль')
        .isLength({min: 6}).withMessage('Длинна пароля должна быть не меньше 6 символов')
        .not().matches(charactersPattern).withMessage('Старый пароль содержит недопустимые символы')
        .custom(async (value, {req}) => {
            const userId = req.user._id;
            const user = await UserModel.findById(userId);
            const isValidOldPassword = await bcrypt.compare(value, user.password);
            if(!isValidOldPassword) {
                return Promise.reject('Неверный старый пароль');
            }
        }),
    body('newPassword').trim()
        .not().isEmpty().withMessage('Введите новый пароль')
        .isLength({min: 6}).withMessage('Длинна пароля должна быть не меньше 6 символов')
        .not().matches(charactersPattern).withMessage('Новый пароль содержит недопустимые символы'),
    body('secondNewPassword').trim(' ')
        .not().isEmpty().withMessage('Введите повторно новый пароль')
        .custom(async (value, {req}) => {
            if(value !== req.body.newPassword) {
                throw new Error('Пароли не совпадают')
            }
            return true;
        })
];