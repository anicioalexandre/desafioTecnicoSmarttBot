import React from 'react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import mockCurrenciesNamesandValues from '../__mocks__/mockCurrenciesNamesandValues';
import fetchEndpoint from '../services/fetchEndPoint';
import App from '../App';

jest.mock('../services/fetchEndPoint');
fetchEndpoint
  .mockImplementation(() => Promise.resolve(mockCurrenciesNamesandValues))

describe('testes da página NotFound', () => {
  it('ao passar um rota não existente deve-se acessar a rota NotFound', () => {
    const { getByText } = renderWithRedux(renderWithRouter(<App />, ['/rota/não/existente']));
    expect(getByText('Página não encontrada.'));
  });
});
