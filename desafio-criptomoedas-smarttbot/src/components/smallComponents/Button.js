import React from 'react';
import { ButtonStyle } from '../../styles/CurrenciesList';

const Button = ({ background, children, disabled, onClick }) => {
  return (
    <ButtonStyle background={background} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
