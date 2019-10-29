import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './styles/Input';
import {AlertCircleIcon} from '../../styles/icons';

const Input = ({
  input,
  type,
  fontSize,
  meta: { touched, error },
  onBlurHandler
}) => (
  <StyledInput
    {...input}
    touched={touched}
    fontSize={fontSize}
    error={error}
  >
    <input {...input} type={type} onBlur={onBlurHandler}/>
    {
      (touched && error) && <span> <AlertCircleIcon /> {error}</span>
    }
  </StyledInput>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired,
  onBlurHandler: PropTypes.func
};

Input.defaultProps = {
  onBlurHandler: () => {}
}

export default Input;