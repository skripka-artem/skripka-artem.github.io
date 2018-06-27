import React  from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, type }) =>  (<button  type={type} onClick={onClick}> {text} </button>);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'button',
};

export default Button;