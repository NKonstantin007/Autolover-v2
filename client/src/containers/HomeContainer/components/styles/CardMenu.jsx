import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import {Card} from 'reactstrap';

import {PrimaryColor} from '../../../../styles/colors';

export const CardMenuWrapper = styled.div`
    padding: 70px 10% 40px 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        width: 100%;
        margin-left: 10px;

        &:first-of-type {
            margin-right: 0;
        }
    }
`;

const rotate = keyframes`
	from {
        transform: rotate(0deg);
        opacity: 1;
    }
	to{
        transform: rotate(-15deg);
        opacity: 0.9;
    }
`;

export const CardMenuItem = styled(Card)`
    height: 400px;

    &:hover {
        animation-name: ${rotate};
        animation-duration: 0.8s;
        animation-timing-function: ease-in;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
    }
`;

export const CardMenuTitle = styled.h5`
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 3px;
`;

export const CardMenuSubtitle = styled.h3`
    margin-bottom: 20px;
    text-align: center;
`;

export const CardMenuImg = styled.img`
    border-radius: 5px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
    border: 2px solid ${PrimaryColor};  
`;

export const CardMenuText = styled.p`
    padding-left: 5px;
    padding-right: 5px;
`;