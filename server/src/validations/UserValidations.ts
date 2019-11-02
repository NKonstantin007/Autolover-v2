import {body} from 'express-validator';

const charactersPattern = /[^0-9a-z_-]/i;   // RegExp to validate the input of valid characters

export const UserInfoValidators = [
    body('name').trim(' ')
        .not().isEmpty().withMessage('Введите имя')
        .isLength({max: 20}).withMessage('Длина имени должна быть не более 20 символов')
        .not().matches(charactersPattern).withMessage('Имя содержит недопустимые символы')
];