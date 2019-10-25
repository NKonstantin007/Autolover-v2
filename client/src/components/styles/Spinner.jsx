import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';

const spinner = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

const StyledSpinner = styled.div`
    position: relative;
    width: 200px !important;
    height: 200px !important;
    -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);

    div {
        position: absolute;
        width: 80px;
        height: 80px;
        top: 60px;
        -webkit-animation: ${spinner} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        animation: ${spinner} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;

        &:nth-of-type(1) {
            left: 0px;
            background: #13133b;
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
        }

        &:nth-of-type(2) {
            left: 40px;
            background: #186b59;
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
        }

        &:nth-of-type(3) {
            left: 80px;
            background: #1d8e75;
            -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
        }

        &:nth-of-type(4) {
            left: 120px;
            background: #13133b;
        }
    }
`;

export default StyledSpinner;
