import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

import {
    GrayColor,
    AccentColor,
    PrimaryColor
} from '../../../../styles/colors';

export const StyledJumbotron = styled.div`
    text-align: center;
    background: linear-gradient(to bottom, ${GrayColor}, ${AccentColor});
    padding-top: 70px;
    padding-bottom: 40px;
    line-height: 40px;
`;

export const JumbotronTitle = styled.h2`
    font-size: 44px;
    letter-spacing: 8px;
    color: ${PrimaryColor};
    margin-bottom: 20px;
`;

export const JumbotronText = styled.p`
    font-size: 22px;
    color: ${GrayColor};
`;

export const JumbotronSignUpLink = styled(Link)`
    border-radius: 5px;
    color: ${GrayColor};
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    font-weight: normal;
    letter-spacing: 8px;
    margin: 0;
    text-transform: uppercase;
    border: 1px solid ${GrayColor};
    padding: 20px 30px;

    &:hover {
        background: ${GrayColor};
        color: ${PrimaryColor};
    }
`;