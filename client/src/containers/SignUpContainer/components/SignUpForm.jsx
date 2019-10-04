import React from 'react';
import {reduxForm, Field} from 'redux-form';

import {SignUpFormWrapper, StyledSignUpForm} from './styles/SignUpForm';
import Input from '../../../components/formElements/Input'
import Label from '../../../components/formElements/styles/Label';
import Button from '../../../styles/components/Button';

const SignUpForm = (props) => {
    const {handleSubmit} = props;
    return (
        <SignUpFormWrapper>
            <StyledSignUpForm onSubmit={handleSubmit}>
                <div>
                    <Label>Имя</Label>
                    <Field name="name" type="text" component={Input} />
                </div>

                <div>
                    <Label>Email</Label>
                    <Field name="email" type="email" component={Input} />
                </div>

                <div>
                    <Label>Пароль</Label>
                    <Field name="password" type="password" component={Input} />
                </div>

                <div>
                    <Label>Повторный пароль</Label>
                    <Field name="secondPassword" type="password" component={Input} />
                </div>
                <Button type="submit" color="primary">Зарегистрироваться</Button>
            </StyledSignUpForm>
        </SignUpFormWrapper>
    );
}

export default reduxForm({
    form: 'SignUpForm'
})(SignUpForm);