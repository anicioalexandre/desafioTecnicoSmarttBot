import React from 'react';
import { ButtonStyle } from '../../styles/CurrenciesList';

const Button = ({ background, children, disabled, onClick, minWidth }) => {
  return (
    <ButtonStyle minWidth={minWidth} background={background} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
