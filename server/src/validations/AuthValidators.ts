import {body} from 'express-validator';
import UserModel from '../models/UserModel';

const charactersPattern = /[0-9a-z_-]/i;   // RegExp to validate the input of valid characters

export const SignUpValidators = [
    body('name').trim(' ')
        .not().isEmpty().withMessage('Введите имя')
        .isLength({max: 20}).withMessage('Длина имени должна быть не более 20 символов')
        .matches(charactersPattern).withMessage('Имя содержит недопустимые символы'),
    body('email').trim(' ')
        .not().isEmpty().withMessage('Введите email')
        .isEmail().withMessage('Email не соответствует шаблону')
        .normalizeEmail()
        .custom(async (value) => {
            try {
                const user = await UserModel.findOne({email: value});
                if(user) {
                    return Promise.reject('Пользователь с таким email уже существует');
                }
            }
            catch(err) {
                console.log(err);
            }
        }),
    body('password').trim()
        .not().isEmpty().withMessage('Введите пароль')
        .isLength({min: 6}).withMessage('Длинна пароля должна быть не меньше 6 символов')
        .matches(charactersPattern).withMessage('Пароль содержит недопустимые символы'),
    body('secondPassword').trim()
        .not().isEmpty().withMessage('Введите повторный пароль')
        .custom(async (value, {req}) => {
            try {
                if(value !== req.body.password) {
                    return Promise.reject('Пароли не совпадают')
                }
            }
            catch(err) {
                console.log(err);
            }
        })
];