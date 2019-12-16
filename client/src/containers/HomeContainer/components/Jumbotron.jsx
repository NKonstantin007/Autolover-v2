import React from 'react';
import PropTypes from 'prop-types';

import {
    StyledJumbotron,
    JumbotronTitle,
    JumbotronText,
    JumbotronSignUpLink
} from './styles/Jumbotron';

const Jumbotron = ({isAuth}) => {
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

Jumbotron.propTypes = {
    isAuth: PropTypes.bool.isRequired
};

export default Jumbotron;