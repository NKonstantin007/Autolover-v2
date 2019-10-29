import React from 'react';
import styled from '@emotion/styled';
import {ErrorColor, GrayColor} from './colors';

const StyledIcon = styled.svg`
    width:24px;
    height:24px
`;

export const AlertCircleIcon = () => (
    <StyledIcon viewBox="0 0 24 24">
        <path
            fill={ErrorColor}
            d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
        />
    </StyledIcon>
);

export const PencilIcon = () => (
    <StyledIcon viewBox="0 0 24 24">
        <path
            fill={GrayColor}
            d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
        />
    </StyledIcon>
);