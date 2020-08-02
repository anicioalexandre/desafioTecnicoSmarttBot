import React from 'react';
import { waitFor } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import CriptoCurrency from '../pages/CriptoCurrency';
import fetchEndpoint from '../services/fetchEndPoint';
import mockOrders from '../__mocks__/mockOrders';
import mockCurrenciesNamesandValues from '../__mocks__/mockCurrenciesNamesandValues';

afterEach(() => {
  fetchEndpoint.mockClear();
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ currency: 'BTC_BTS' }),
}));

jest.mock('../services/fetchEndPoint');
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockOrders));
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues));
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockOrders));
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues));

describe('testes da página CriptoCurrency', () => {
  it('tamanho das tabelas aparecem corretamente na tela', async () => {
    const {
      getAllByRole,
      getAllByText,
      getAllByTestId,
      getByText,
    } = renderWithRedux(renderWithRouter(<CriptoCurrency />));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(getAllByRole('table')).toHaveLength(4));
    expect(getAllByText('QTD')).toHaveLength(2);
    ['VENDA', 'COMPRA'].forEach((title) =>
      expect(getByText(title)).toBeInTheDocument()
    );
    expect(getAllByTestId('values')).toHaveLength(40);
  });
  it('informações da moeda selecionada aparecem corretamente na tela', async () => {
    const { getByText, getAllByTestId } = renderWithRedux(renderWithRouter(<CriptoCurrency />));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(2));
    await waitFor(() => {
      [
        /Variação/,
        /Volume base/,
        /Volume ajustado/,
        /Máxima/,
        /Mínima/,
      ].forEach((title) => expect(getByText(title)).toBeInTheDocument());
    });
    await waitFor(() => {
      [
        '3.03',
        '0.12884434',
        '54388.49609171',
        '0.00000242',
        '0.00000227',
      ].forEach((mockValue, index) =>
        expect(getAllByTestId('info')[index]).toHaveTextContent(mockValue)
      );
    });
  });
});
