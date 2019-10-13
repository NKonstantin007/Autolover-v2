import React from 'react';
import {reduxForm, Field} from 'redux-form';

import StyledSignInForm from './styles/SignInForm';
import Input from '../../../components/formElements/Input'
import Label from '../../../components/formElements/styles/Label';
import Button from '../../../styles/components/Button';

const SignInForm = (props) => {
    const {handleSubmit} = props;
    return (
        <StyledSignInForm onSubmit={handleSubmit}>
            <div>
                <Label>Email</Label>
                <Field name="email" type="email" component={Input} />
            </div>
            <div>
                <Label>Пароль</Label>
                <Field name="password" type="password" component={Input} />
            </div>
            <Button type="submit" color="primary">Вход</Button>
        </StyledSignInForm>
    );
}

export default reduxForm(
    { form: 'SignInForm'}
)(SignInForm);