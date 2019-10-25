import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom'

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

const AutoHeader = ({isAuth, history, user}) => {

    const onSignInOrOutClick = () => {
        if(isAuth) {
            console.log('sign out user');
        }
        else {
            history.push('/signin');
        }
    }
    const onSignUpClick = () => {
        history.push('/signup');
    }

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
                        <Button 
                            color="accent" 
                            round
                            onClick={onSignInOrOutClick}
                        >
                            { isAuth ? 'Выйти' : 'Войти' }
                        </Button>
                        {
                            !isAuth && (
                                <Button 
                                    color="accent" 
                                    round
                                    onClick={onSignUpClick}
                                >Регистрация
                                </Button>
                            )
                        }
                    </StyledSignInUpButtons>
                    <StyledNavHeader>
                        <Link to="/">Главная</Link>
                        <Link to="/allcars">Все об автомобилях</Link>
                        <Link to="/facts">Интересные факты</Link>
                        <Link to="/reviews">Обзоры автомобилей</Link>
                    </StyledNavHeader>
                </FlexBlock>
                {
                    isAuth && (
                        <StyledProfile>
                            <img src="/images/avatar.png" alt="avatar"></img>
                            <span>{user.name}</span>
                        </StyledProfile>
                    )
                }
            </StyledMenuHeader>
        </StyledAutoHeader>
    );
}

const mapStateToProps = (state) => {
    const {isAuth, user} = state.currentUser;
    return {
        isAuth,
        user: user
    };
}

export default compose(
    withRouter,
    connect(mapStateToProps)
)(AutoHeader);
