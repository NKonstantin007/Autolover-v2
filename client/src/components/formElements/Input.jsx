import React from 'react';

import StyledInput from './styles/Input';
import {AlertCircleIcon} from '../../styles/icons';

const Input = ({
  input,
  type,
  meta: { touched, error }
}) => (
  <StyledInput
    {...input}
    touched={touched} 
    error={error}
  >
    <input {...input} type={type} />
    {
      (touched && error) && <span> <AlertCircleIcon /> {error}</span>
    }
  </StyledInput>
);

export default Input;