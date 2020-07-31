import React from 'react';
import App from '../App';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';

describe('testes no App', () => {
  it('renderiza sem crash', () => {
    renderWithRedux(renderWithRouter(<App />));
  });
});
