import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

import Input from '../../../components/formElements/Input'
import Label from '../../../components/formElements/styles/Label';
import Button from '../../../styles/components/Button';
import {ButtonsWrapper} from './styles/ChangePasswordModal';

const validate = (values) => {
    const charactersPattern = /[^0-9a-z_-]/i;   // RegExp to validate the input of valid characters
    const errors = {};
    //--- Old password check ---
    // check old password for emptiness
    if (!values.oldPassword) {
        errors.oldPassword = 'Введите старый пароль';
    }
    // check old password for emptiness with space
     else if (values.oldPassword.trim() === '') {
        errors.password = 'Введите старый пароль';
    }
    // check old password min length 
    else if (values.oldPassword.length < 6) {
        errors.oldPassword = 'Длинна пароля должна быть не меньше 6 символов';
    }
    // check old password for compliance with the pattern
    else if(charactersPattern.test(values.oldPassword.trim())) {
        errors.oldPassword='Старый пароль содержит недопустимые символы';
    }

    //--- New password check ---
    // check new password for emptiness
    if (!values.newPassword) {
        errors.newPassword = 'Введите новый пароль';
    }
     // check new password for emptiness with space
     else if (values.newPassword.trim() === '') {
        errors.newPassword = 'Введите новый пароль';
    }
    // check new password min length 
    else if (values.newPassword.length < 6) {
        errors.newPassword = 'Длинна пароля должна быть не меньше 6 символов';
    }
    // check password for compliance with the pattern
    else if(charactersPattern.test(values.newPassword.trim())) {
        errors.newPassword='Новый пароль содержит недопустимые символы';
    }

    //--- Second new password check ---
    // check new password for emptiness
    if (!values.secondNewPassword) {
        errors.secondNewPassword = 'Введите повторно новый пароль';
    }
     // check new password for emptiness with space
     else if (values.secondNewPassword.trim() === '') {
        errors.secondNewPassword = 'Введите повторно новый пароль';
    }
    // check new password for equal with second new password 
    else if (values.newPassword && (values.newPassword.trim() !== values.secondNewPassword.trim())) {
        errors.secondNewPassword = 'Пароли не совпадают';
    }
    return errors
}

const ChangePasswordModal = (props) => {
    const {handleSubmit, isOpen, onToggle} = props;

    return (
        <Modal isOpen={isOpen} toggle={onToggle}>
            <ModalHeader toggle={onToggle}>Изменение пароля</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label>Старый пароль</Label>
                        <Field name="oldPassword" type="password" component={Input} fontSize="small" />
                    </div>
                    <div>
                        <Label>Новый пароль</Label>
                        <Field name="newPassword" type="password" component={Input} fontSize="small" />
                    </div>

                    <div>
                        <Label>Новый пароль еще раз</Label>
                        <Field name="secondNewPassword" type="password" component={Input} fontSize="small" />
                    </div>

                    <ButtonsWrapper>
                        <Button type="button" color="danger" round onClick={onToggle}>Отмена</Button>
                        <Button type="submit" color="primary" round>Изменить</Button>
                    </ButtonsWrapper>
                </form>
            </ModalBody>
        </Modal>
    );
}

export default reduxForm({
    form: 'ChangePasswordForm',
    validate
})(ChangePasswordModal);