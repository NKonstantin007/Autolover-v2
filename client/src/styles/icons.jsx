import React from 'react';
import styled from '@emotion/styled';
import {ErrorColor} from './colors';

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