import styled from '@emotion/styled';

import {
    MainTextColor,
    GrayDarkColor,
    AccentColor
} from '../../styles/colors';

export const StyledSlider = styled.div`
    position: relative;

    img {
        width: 100%;
	    padding-bottom: 0; 
    }
`;

export const SlideNumber = styled.p`
    color: ${MainTextColor};
    font-size: 18px;
    font-weight: 500;
    padding: 8px 12px;
    position: absolute;
    top: 0;
    margin-top: 8px;
    z-index: 1;
`;

export const Squares = styled.div`
    text-align: center;
`;

export const SquareItem = styled.span`
    cursor: pointer;
    height: 6px;
    width: 25px;
    margin: 0 2px;
    background: ${(props) => (props.active ? AccentColor : GrayDarkColor)};
    display: inline-block;
    transition: background 0.6s ease-in;

    &:hover {
        background: ${AccentColor};
    }
`;