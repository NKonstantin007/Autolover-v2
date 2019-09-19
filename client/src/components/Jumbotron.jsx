import React from 'react';

import {
    StyledJumbotron,
    JumbotronTitle,
    JumbotronText,
    JumbotronSignUpLink

} from './styles/Jumbotron';

const Jumbotron = () => {
    return (
        <StyledJumbotron>
            <JumbotronTitle>Посвящается автомобильной отрасли</JumbotronTitle>
            <JumbotronText>Как и многие популярные автомобильные сайты, мы рады предоставить целый комплекс сервисов и информационно аналитических материалов для опытных водителей, новичков и тех, кто только планирует сесть за руль</JumbotronText>
            <JumbotronSignUpLink>Зарегистрируйтесь сейчас</JumbotronSignUpLink>
        </StyledJumbotron>
    );
}

export default Jumbotron;