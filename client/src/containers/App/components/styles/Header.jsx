import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {
    AccentColor,
    PrimaryLightColor,
    GrayColor
} from '../../../../styles/colors';

export const StyledHeader = styled.header`
    padding-left: 10%;
    padding-right: 10%;
    background: ${AccentColor};
    opacity: 0.98;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StyledBrandHeader = styled.div`
    font-size: 36px;
    line-height: 1em;
    border-top: 4px solid #186B59;
    border-bottom: 4px solid #186B59;
    text-transform: uppercase;
    font-family: Barlow;

    img { 
        height: 3rem;
        width: 3rem;    
    }

    &:hover {
        border-color: ${PrimaryLightColor};
        transition: 0.3s linear;
    }
`;

export const StyledMenuHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const StyledNavHeader = styled.nav`
    font-weight: normal;
	font-size: 16px;
    text-transform: uppercase;
    display: flex;
    align-self: flex-end;
    margin-bottom: 5px;
    
    a {
        padding: 5px 10px;
        margin-right: 5px;
        border-radius: 5px;
    }

    a:hover {
        background: ${GrayColor};
        color: ${PrimaryLightColor}
    }
`;

export const StyledSignInUpButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
    padding-top: 5px;

    button:last-of-type {
        margin-left: 20px;
    }
`;

export const StyledProfile = styled(Link)`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-left: 1px solid ${GrayColor};

    img {
        border 1px solid ${GrayColor};
        border-radius: 50%;
        height: 3rem;
        transition: 0.3s ease;
    }

    span {
        font-size: 16px;
        color: ${GrayColor};
        transition: 0.3s linear;
        transition-delay: 0.2s;
    }

    &:hover {
        img {
            height: 4rem;
            border-color: ${PrimaryLightColor};
        }
        span {
            color: ${PrimaryLightColor};
        }
    }
`;
