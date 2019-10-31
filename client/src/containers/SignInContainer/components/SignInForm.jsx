import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';

import StyledSignInForm from './styles/SignInForm';
import Input from '../../../components/formElements/Input'
import Label from '../../../components/formElements/styles/Label';
import Button from '../../../styles/components/Button';

const validate = (values) => {
    const charactersPattern = /[^0-9a-z_-]/i;   // RegExp to validate the input of valid characters
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i // RegExp to validate email
    const errors = {}
    //--- Email check ---
    // check email for emptiness
    if (!values.email) {
        errors.email = 'Введите email';
    }
    // check email for emptiness with space
    else if (values.email.trim() === '') {
        errors.name = 'Введите email';
    }
    // check email for compliance with the pattern
    else if (!emailPattern.test(values.email.trim())) {
        errors.email = 'Email не соответствует шаблону';
    }

    //--- Password check ---
    // check password for emptiness
    if (!values.password) {
        errors.password = 'Введите пароль';
    }
    // check password for emptiness with space
     else if (values.password.trim() === '') {
        errors.name = 'Введите пароль';
    }
    // check password min length 
    else if (values.password.length < 6) {
        errors.password = 'Длинна пароля должна быть не меньше 6 символов';
    }
    // check password for compliance with the pattern
    else if(!charactersPattern.test(values.password.trim())) {
        errors.name='Пароль содержит недопустимые символы';
    }
    return errors
  }

const SignInForm = (props) => {
    const {handleSubmit, isFetching} = props;
    return (
        <StyledSignInForm noValidate onSubmit={handleSubmit}>
            <div>
                <Label>Email</Label>
                <Field name="email" type="email" component={Input} fontSize="small" />
            </div>
            <div>
                <Label>Пароль</Label>
                <Field name="password" type="password" component={Input} fontSize="small" />
            </div>
            <Button type="submit" color="primary" disabled={isFetching}>Вход</Button>
        </StyledSignInForm> 
    );
}

const mapStateToProps = ({signIn}) => {
    const {isFetching} = signIn;
    return {
        isFetching
    };
};

export default compose(
    reduxForm({ 
        form: 'SignInForm',
        validate
    }),
    connect(mapStateToProps)
)(SignInForm);