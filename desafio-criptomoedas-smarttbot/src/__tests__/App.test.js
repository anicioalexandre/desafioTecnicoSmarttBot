import React from 'react';
import App from '../App';
import { waitFor } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import fecthEndPoint from '../services/fecthEndPoint';
import mockCurrenciesNamesandValues from '../__mocks__/mockCurrenciesNamesandValues';

jest.mock('../services/fecthEndPoint');
fecthEndPoint.mockImplementation(() =>
  Promise.resolve(mockCurrenciesNamesandValues)
);

describe('teste do App', () => {
  it('testando chamada à api e se a quantidade de moedas renderizadas aparecem corretamente na tela', async () => {
    const { getByTestId, getByText, container } = renderWithRedux(
      renderWithRouter(<App />)
    );
    expect(getByText(/Desafio Técnico SmarttBot/i)).toBeInTheDocument();
    await waitFor(() => expect(fecthEndPoint).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(container.querySelectorAll('p')).toHaveLength(
        Object.keys(mockCurrenciesNamesandValues).length
      )
    );
  });
});
