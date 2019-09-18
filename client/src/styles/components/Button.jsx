import styled from '@emotion/styled';

import {
    AccentColor,
    GrayColor,
    PrimaryColor,
    PurpleColor
} from '../colors';

const Button = styled.button`
    padding: 8px 10px;
    background: radial-gradient(${PurpleColor}	, ${AccentColor});
    border: 2px solid ${PrimaryColor};
    border-radius: 20px;
    color: ${GrayColor};
    transition: 0.3s ease;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        background:  ${AccentColor};
        border: none;
        cursor: pointer;
    }
`;

export default Button;