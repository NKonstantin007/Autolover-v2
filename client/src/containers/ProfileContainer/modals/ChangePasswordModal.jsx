import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import Input from '../../../components/formElements/Input'
import Label from '../../../components/formElements/styles/Label';
import Button from '../../../styles/components/Button';

const ChangePasswordModal = (props) => {

    const {
        onSubmit,
        isOpen,
        onToggle,
    } = props;

    return (
        <Modal isOpen={isOpen} toggle={onToggle}>
            <ModalHeader toggle={onToggle}>Изменение пароля</ModalHeader>
            <ModalBody>
                <form>
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
                </form>
            </ModalBody>
            <ModalFooter>
                <Button type="submit" color="primary" round onClick={onSubmit}>Изменить</Button>
                <Button type="button" color="danger" round onClick={onToggle}>Отмена</Button>
            </ModalFooter>
        </Modal>
    );
}

export default reduxForm({
    form: 'ChangePasswordForm'
})(ChangePasswordModal);