import {injectGlobal} from 'emotion';

import {
    PrimaryColor,
    PrimaryLightColor,
    GrayColor,
    MainTextColor
} from '../../../styles/colors';

const GlobalStyles = injectGlobal`

    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed');

    body {
        color: ${MainTextColor};
        background: ${GrayColor};
        font: 300 16px/22px 'Ubuntu Condensed' Georgia, Arial, sans-serif;
        margin: 0;
    }

    h1,
    h3,
    h4,
    h5 {
        font-family: "Ubuntu Condensed", sans-serif;
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 20px;
    }

    h1, h3, h4 {
        color: 	;
    } 

    h1 {
        font-size: 36px;
        line-height: 40px;
    }

    h3 {
        font-size: 24px;
    }

    h5 {
        font-size: 18px;
        color: ${PrimaryLightColor};
        font-weight: normal;
        text-transform: uppercase;
    }

    a,
    Link {
        color: ${PrimaryColor};
        text-decoration: none;
        transition: 0.5s ease;
    }

    a:hover,
    Link:hover {
        color: ${PrimaryLightColor};
        text-decoration: none;
    }

`;

export default GlobalStyles;