import React from 'react';
import App from '../App';
import { waitFor, fireEvent } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import fecthEndPoint from '../services/fetchEndPoint';
import mockCurrenciesNamesandValues from '../__mocks__/mockCurrenciesNamesandValues';
import Prices from '../pages/Prices';

describe('testes no App', () => {
  it('renderiza sem crash', () => {
    renderWithRedux(renderWithRouter(<App />));
  });
});
