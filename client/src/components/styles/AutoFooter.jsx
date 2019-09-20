import styled from '@emotion/styled';

import {
    AccentColor,
    GrayColor,
    PrimaryLightColor
} from '../../styles/colors';

export const StyledAutoFooter = styled.div`
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 10px;
    background: ${AccentColor};
    opacity: 0.98;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const NavFooter = styled.nav`
    font-weight: normal;
	font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    
    a {
        padding: 5px 10px;
        margin-left: 5px;
        border-radius: 5px;
    }

    a:hover {
        background: ${GrayColor};
        color: ${PrimaryLightColor}
    }
`;

export const QuoteFooter = styled.small`
    color: ${GrayColor};
`;

