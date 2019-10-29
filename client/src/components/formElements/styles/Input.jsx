import styled from '@emotion/styled';
import {
  MainTextColor,
  GrayDarkColor,
  ErrorColor,
  PrimaryLightColor
} from '../../../styles/colors';

const StyledInput = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  & input {
    border-width: 0;
    border-bottom-color:${(props => {
      if(props.touched && props.error) return ErrorColor;
      if(props.touched && !props.error) return PrimaryLightColor;
      return GrayDarkColor;
    })};
    border-bottom-width: ${(props) => {
      if(props.touched) return '2px';
      return '1px';
    }};
    background: transparent;
    padding: 0.5rem 0.5rem 0 0.5rem;
    margin-bottom: 0.5rem;
    font-size: ${props => {
      if(props.fontSize === 'small') return '12px';
      if(props.fontSize === 'big') return '18px';
      return '12px';
    }};
    width: 100%;
    color:  ${MainTextColor};
    font-family: Barlow;
  }

  & span {
    color: ${ErrorColor}
  }
`;

export default StyledInput;
