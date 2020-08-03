import React from 'react';
import { InputStyle } from '../../styles/CurrenciesList';

const Input = ({ onChange, placeholder }) => {
  return <InputStyle onChange={onChange} placeholder={placeholder} />;
};

export default Input;
