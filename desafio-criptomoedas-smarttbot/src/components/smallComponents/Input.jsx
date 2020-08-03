import React from 'react';
import { InputStyle } from '../../styles/CurrenciesList';

const Input = ({ onChange, placeholder }) => {
  return <InputStyle placeholder={placeholder} onChange={onChange} />;
};

export default Input;
