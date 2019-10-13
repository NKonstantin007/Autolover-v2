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

const SignUpForm = (props) => {
    const {handleSubmit, userName, error} = props;
    return (
        <SignUpFormWrapper>
            {
                (!error && userName) && <Alert color="success">
                    <b>Поздравляем!</b> Пользователь <em>{userName}</em> успешно зарегистирован.
                    Перейдите по <Link to='/signin'>сcылке</Link> для авторизации
                </Alert>
            }
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

const mapStateToProps = ({signUp}) => {
    const {userName, error} = signUp;
    return {
        userName,
        error
    };
};

export default compose(
    connect(mapStateToProps),
    reduxForm({ form: 'SignUpForm'}),
)(SignUpForm);