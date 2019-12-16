import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {reduxForm, Field} from 'redux-form';
import {Alert} from 'reactstrap';
import {Link} from 'react-router-dom';

import {SignUpFormWrapper, StyledSignUpForm}from './styles/SignUpForm';
import Input from '../../../components/formElements/Input'
import Label from '../../../components/formElements/styles/Label';
import Button from '../../../styles/components/Button';
import Spinner from '../../../components/Spinner';

const validate = (values) => {
    const charactersPattern = /[^0-9a-z_-]/i;   // RegExp to validate the input of valid characters
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i // RegExp to validate email
    const errors = {};
    //--- Name check ---
    // check name for emptiness
    if (!values.name) {
        errors.name = 'Введите имя';
    }
    // check name for emptiness with space
    else if (values.name.trim() === '') {
        errors.name = 'Введите имя';
    }
    // check name max length 
    else if (values.name.length > 20) {
    errors.name = 'Длина имени должна быть не более 20 символов';
    }
    // check name for compliance with the pattern
    else if(charactersPattern.test(values.name.trim())) {
        errors.name='Имя содержит недопустимые символы';
    }

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
        errors.password = 'Введите пароль';
    }
    // check password min length 
    else if (values.password.length < 6) {
        errors.password = 'Длинна пароля должна быть не меньше 6 символов';
    }
    // check password for compliance with the pattern
    else if(charactersPattern.test(values.password.trim())) {
        errors.password='Пароль содержит недопустимые символы';
    }

    //--- Second password check ---
    // check second password for emptiness
    if (!values.secondPassword) {
        errors.secondPassword = 'Введите повторный пароль';
    }
     // check second password for emptiness with space
     else if (values.secondPassword.trim() === '') {
        errors.secondPassword = 'Введите повторный пароль';
    }
    // check password for equal with second password 
    else if (values.password && (values.password.trim() !== values.secondPassword.trim())) {
        errors.secondPassword = 'Пароли не совпадают';
    }
    return errors
  }

const SignUpForm = (props) => {
    const {handleSubmit, userName, error, isFetching} = props;
    
    return (
        <SignUpFormWrapper>
            {
                (!error && userName) && <Alert color="success">
                    <b>Поздравляем!</b> Пользователь <em>{userName}</em> успешно зарегистирован.
                    Перейдите по <Link to='/signin'>сcылке</Link> для авторизации
                </Alert>
            }
            { 
                isFetching && <Spinner />
            }
            <StyledSignUpForm noValidate onSubmit={handleSubmit}>
                <div>
                    <Label>Имя</Label>
                    <Field name="name" type="text" component={Input} fontSize="small" />
                </div>

                <div>
                    <Label>Email</Label>
                    <Field name="email" type="email" component={Input} fontSize="small" />
                </div>

                <div>
                    <Label>Пароль</Label>
                    <Field name="password" type="password" component={Input} fontSize="small" />
                </div>

                <div>
                    <Label>Повторный пароль</Label>
                    <Field name="secondPassword" type="password" component={Input} fontSize="small" />
                </div>
                <Button type="submit" color="primary" disabled={isFetching}>Зарегистрироваться</Button>
            </StyledSignUpForm>
        </SignUpFormWrapper>
    );
}

const mapStateToProps = ({signUp}) => {
    const {userName, error, isFetching} = signUp;
    return {
        userName,
        error,
        isFetching
    };
};

export default compose(
    reduxForm({ 
        form: 'SignUpForm',
        validate
    }),
    connect(mapStateToProps)
)(SignUpForm);