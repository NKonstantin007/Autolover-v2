import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {
    StyledHeader,
    StyledMenuHeader,
    StyledBrandHeader,
    StyledNavHeader,
    StyledProfile,
    StyledSignInUpButtons,
 } from './styles/Header';
import Button from '../.../../../../styles/components/Button';
import FlexBlock from '../.../../../../styles/components/FlexBlock';


const Header = (props) => {
    const {isAuth, user, handleSignOut, history} = props;

    const handleSignInOrOutClick = () => {
        if(isAuth) {
            handleSignOut(history);
        }
        else {
            history.push('/signin');
        }
    }

    const handleSignUpClick = () => {
        history.push('/signup');
    }

    return (
        <StyledHeader>
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
                            onClick={handleSignInOrOutClick}
                        >
                            { isAuth ? 'Выйти' : 'Войти' }
                        </Button>
                        {
                            !isAuth && (
                                <Button 
                                    color="accent" 
                                    round
                                    onClick={handleSignUpClick}
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
                        <StyledProfile to="/profile">
                            <img src={user.avatar ? `/images/${user.avatar._id}` : '/images/avatar.png'} alt="avatar" />
                            <span>{user.name}</span>
                        </StyledProfile>
                    )
                }
            </StyledMenuHeader>
        </StyledHeader>
    );
}

Header.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    handleSignOut: PropTypes.func.isRequired,
    user: PropTypes.object
}

export default withRouter(Header);
