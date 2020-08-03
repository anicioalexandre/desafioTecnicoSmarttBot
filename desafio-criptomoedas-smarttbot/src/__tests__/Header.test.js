import React from 'react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import mockCurrenciesNamesandValues from '../__mocks__/mockCurrenciesNamesandValues';
import fetchEndpoint from '../services/fetchEndPoint';
import App from '../App';
import { fireEvent, waitFor } from '@testing-library/react';

jest.mock('../services/fetchEndPoint');
fetchEndpoint.mockImplementation(() => Promise.resolve(mockCurrenciesNamesandValues));

describe('testes no Header', () => {
  it('ao clicar no botao de ranking ou no título deve-se ser redirecionado para as páginas corretas', async () => {
    const { getByText } = renderWithRedux(renderWithRouter(<App />));
    const title = getByText('Desafio SmarttBot');
    const ranking = getByText('Ranking');
    fireEvent.click(ranking);
    await waitFor(() =>
      expect(getByText('Ranking das Criptomoedas')).toBeInTheDocument()
    );
    fireEvent.click(title);
    await waitFor(() =>
      expect(getByText('Escolha um par de moedas!')).toBeInTheDocument()
    );
  });
});
