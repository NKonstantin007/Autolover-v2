import React from 'react';
import {Link} from 'react-router-dom';

import { 
    StyledAutoFooter,
    QuoteFooter,
    NavFooter 
} from './styles/AutoFooter';

const AutoFooter = () => {
    return (
        <StyledAutoFooter>
            <QuoteFooter>На земле, на воде и в небе<br />&copy;Mercedes-Benz</QuoteFooter>
            <NavFooter>
                <Link to="/">Главная</Link>
                <Link to="/allcars">Все об автомобилях</Link>
                <Link to="/facts">Интересные факты</Link>
                <Link to="/reviews">Обзоры автомобилей</Link>
            </NavFooter>
        </StyledAutoFooter>
    );
}

export default AutoFooter;