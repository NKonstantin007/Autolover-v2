import React from 'react';
import StyledInput from './styles/Input';

const Input = ({
  input,
  type,
}) => (
  <StyledInput
    {...input}
    type={type}
  />
);

export default Input;