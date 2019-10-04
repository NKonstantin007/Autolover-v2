import {injectGlobal} from 'emotion';

import {
    PrimaryColor,
    PrimaryLightColor,
    GrayColor,
    MainTextColor
} from '../../../styles/colors';

const GlobalStyles = injectGlobal`

    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed');

    html {
        min-height: 100%;
    }

    body {
        color: ${MainTextColor};
        background: ${GrayColor};
        font-size: 14px;
        line-height: 22px;
        font-family: 'Ubuntu Condensed', Georgia, Arial, Barlow, sans-serif;
        margin: 0;
    }

    h1,
    h3,
    h4,
    h5 {
        font-family: "Ubuntu Condensed", sans-serif;
        
    }

    p {
        margin-bottom: 20px;
    }

    h1, h3, h4 {
        color: 	${PrimaryColor};
        font-weight: 200;
        text-transform: uppercase;
    } 

    h1 {
        font-size: 36px;
        line-height: 2rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    h3 {
        font-size: 24px;
    }

    h5 {
        font-size: 18px;
        color: ${PrimaryLightColor};
        font-weight: normal;
    }

    a,
    Link {
        color: ${PrimaryColor};
        text-decoration: none;
        transition: 0.3s ease;
    }

    a:hover,
    Link:hover {
        color: ${PrimaryLightColor};
        text-decoration: none;
    }

`;

export default GlobalStyles;