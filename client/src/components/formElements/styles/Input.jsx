import styled from '@emotion/styled';
import {
  MainTextColor,
  GrayDarkColor,
} from '../../../styles/colors';

const StyledInput = styled.input`
    border-width: 0;
    border-bottom: 1px solid ${GrayDarkColor};
    background: transparent;
    padding: 0.5rem 0.5rem 0 0.5rem;
    margin-bottom: 1rem;
    font-size: 12px;
    width: 100%;
    color:  ${MainTextColor};
    font-family: Barlow;
`;

export default StyledInput;
