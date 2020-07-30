import React from 'react';
import { ButtonStyle } from '../../styles/CurrenciesList';

const Button = ({ onClick, disabled, children, animation }) => {
  return <ButtonStyle animation={animation} disabled={disabled} onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
