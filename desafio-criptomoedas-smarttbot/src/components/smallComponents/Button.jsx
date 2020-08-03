import React from 'react';
import { ButtonStyle } from '../../styles/CurrenciesList';

const Button = ({ background, children, disabled, onClick, minWidth }) => {
  return (
    <ButtonStyle
      background={background}
      disabled={disabled}
      minWidth={minWidth}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
