import React from 'react';
import {Link} from 'react-router-dom';

import {
    StyledAutoHeader,
    StyledMenuHeader,
    StyledBrandHeader,
    StyledNavHeader,
    StyledProfile,
    StyledSignInUpButtons,
 } from './styles/AutoHeader';
 import Button from '../styles/components/Button';
 import FlexBlock from '../styles/components/FlexBlock';

const AutoHeader = () => {
    return (
        <StyledAutoHeader>
            <StyledBrandHeader>
                <h1>
                    <span>
                        <Link to="/">
                            <img src="/images/favicon.png" alt="logotype"/>
                            Авто<br />Любитель
                        </Link>
                    </span>
                </h1>
            </StyledBrandHeader>
            <StyledMenuHeader>
                <FlexBlock direction="column" justify="space-between">
                    <StyledSignInUpButtons>
                        <Button color="accent" round>Войти</Button>
                        <Button color="accent" round>Регистрация</Button>
                    </StyledSignInUpButtons>
                    <StyledNavHeader>
                        <Link to="/">Главная</Link>
                        <Link to="/allcars">Все об автомобилях</Link>
                        <Link to="/facts">Интересные факты</Link>
                        <Link to="/reviews">Обзоры автомобилей</Link>
                    </StyledNavHeader>
                </FlexBlock>
                <StyledProfile>
                    <img src="/images/avatar.png" alt="avatar"></img>
                    <span>driverK</span>
                </StyledProfile>
            </StyledMenuHeader>
        </StyledAutoHeader>
    );
}

export default AutoHeader;