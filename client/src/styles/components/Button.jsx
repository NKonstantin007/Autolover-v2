import styled from '@emotion/styled';

import {
    AccentColor,
    GrayColor,
    PrimaryColor,
    PrimaryLightColor,
    PurpleColor,
    MainTextColor
} from '../colors';

const Button = styled.button`
    padding: 8px 10px;
    background: ${(props) => {
        if(props.color === 'primary') return `radial-gradient(${PrimaryLightColor}, ${PrimaryColor})`;
        if(props.color === 'accent') return `radial-gradient(${PurpleColor}, ${AccentColor})`;

        return `radial-gradient(${PurpleColor}, ${AccentColor})`;
    }};
    border-width: ${(props) => {
        if(props.color === 'accent') return '2px';

        return '0px';
    }};
    border-style: solid;
    border-color: ${(props) => {
        if(props.color === 'primary') return 'transparent';
        if(props.color === 'accent') return PrimaryColor;

        return PrimaryColor;
    }};
    border-radius: ${(props) => {
        if(props.round) return '20px';

        return '5px';
    }};;
    color: ${GrayColor};
    transition: color 0.3s ease;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;

    &:hover {
        background: ${(props) => {
            if(props.color === 'accent') return AccentColor;
            if(props.color === 'primary') return PrimaryColor;
    
            return PrimaryColor;
        }};
        color: ${(props) => {
            if(props.color === 'accent') return PrimaryLightColor;
            if(props.color === 'primary') return MainTextColor;
    
            return PrimaryColor;
        }};
        border: none;
        cursor: pointer;

        svg path {
            fill: ${(props) => {
                if(props.color === 'accent') return PrimaryLightColor;
                if(props.color === 'primary') return MainTextColor;
        
                return PrimaryColor;
            }};
        }
    }

    &:disabled {
        pointer-events: none;
        opacity: 0.7;
    }
`;

export default Button;