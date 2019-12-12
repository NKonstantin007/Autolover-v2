import {body} from 'express-validator';
import bcrypt from 'bcryptjs';

import UserModel from '../models/UserModel';

const charactersPattern = /[^0-9a-z_-]/i;   // RegExp to validate the input of valid characters

export const SignUpValidators = [
    body('name').trim(' ')
        .not().isEmpty().withMessage('Введите имя')
        .isLength({max: 20}).withMessage('Длина имени должна быть не более 20 символов')
        .not().matches(charactersPattern).withMessage('Имя содержит недопустимые символы'),
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
    body('password').trim(' ')
        .not().isEmpty().withMessage('Введите пароль')
        .isLength({min: 6}).withMessage('Длинна пароля должна быть не меньше 6 символов')
        .not().matches(charactersPattern).withMessage('Пароль содержит недопустимые символы'),
    body('secondPassword').trim(' ')
        .not().isEmpty().withMessage('Введите повторный пароль')
        .custom((value, {req}) => {
            if(value !== req.body.password) {
                throw new Error('Пароли не совпадают')
            }
            return true;
        })
];

export const SignInValidators = [
    body('email').trim(' ')
        .not().isEmpty().withMessage('Введите email')
        .isEmail().withMessage('Email не соответствует шаблону')
        .normalizeEmail()
        .custom(async (value) => {
            try {
                const user = await UserModel.findOne({email: value});
                if(!user) {
                    return Promise.reject('Неверный логин или пароль');
                }
            }
            catch(err) {
                console.log(err);
            }
        }),
    body('password').trim(' ')
        .not().isEmpty().withMessage('Введите пароль')
        .isLength({min: 6}).withMessage('Длинна пароля должна быть не меньше 6 символов')
        .not().matches(charactersPattern).withMessage('Пароль содержит недопустимые символы')
        .custom(async (value, {req}) => {
            const user = await UserModel.findOne({email: req.body.email});
            const isValidPassword = await bcrypt.compare(value, user.password);
            if(!isValidPassword) {
                return Promise.reject('Неверный логин пароль');
            }
        })
]