import React from 'react';
import { HeaderStyle } from '../styles/Header';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <h3 onClick={() => history.push('/')}>Desafio SmarttBot</h3>
      <h6 onClick={() => history.push('/ranking')}>Ranking</h6>
    </HeaderStyle>
  );
};

export default Header;
