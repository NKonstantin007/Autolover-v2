import React from 'react';
import {connect} from 'react-redux';

import {
    StyledJumbotron,
    JumbotronTitle,
    JumbotronText,
    JumbotronSignUpLink
} from './styles/Jumbotron';

const Jumbotron = (props) => {
    const isAuth = props.isAuth;
    return (
        <StyledJumbotron>
            <JumbotronTitle>Посвящается автомобильной отрасли</JumbotronTitle>
            <JumbotronText>Как и многие популярные автомобильные сайты, мы рады предоставить целый комплекс сервисов и информационно аналитических материалов для опытных водителей, новичков и тех, кто только планирует сесть за руль</JumbotronText>
            { 
                !isAuth && <JumbotronSignUpLink to="/signup">Зарегистрируйтесь сейчас</JumbotronSignUpLink>
            }
        </StyledJumbotron>
    );
}

const mapStateToProps = (state) => {
    const {isAuth} = state.currentUser;
    return {
        isAuth
    };
}

export default connect(mapStateToProps)(Jumbotron);