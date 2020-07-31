import React from 'react';
import { waitFor, fireEvent } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import mockCurrenciesNamesandValues from '../__mocks__/mockCurrenciesNamesandValues';
import mockOrders from '../__mocks__/mockOrders';
import App from '../App';
import fetchEndpoint from '../services/fetchEndPoint';
import CriptoCurrencies from '../pages/CriptoCurrencies';

afterEach(() => {
  fetchEndpoint.mockClear();
});

jest.mock('../services/fetchEndPoint');
fetchEndpoint
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockOrders))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues));

describe('teste no componente CurrenciesList no App', () => {
  it('testando chamada à api e se a quantidade de moedas renderizadas aparecem corretamente na tela', async () => {
    const { container } = renderWithRedux(renderWithRouter(<App />));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(container.querySelectorAll('p')).toHaveLength(
        Object.keys(mockCurrenciesNamesandValues).length
      )
    );
  });
  it('input de filtro da lista de criptomoedas, testando implementação', async () => {
    const { getByRole, container } = renderWithRedux(renderWithRouter(<App />));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'BTC' } });
    expect(container.querySelectorAll('p')).toHaveLength(12);
    fireEvent.change(input, { target: { value: 'usdt_dash' } });
    expect(container.querySelectorAll('p')).toHaveLength(1);
    fireEvent.change(input, { target: { value: 'moeda_errada' } });
    expect(container.querySelectorAll('p')).toHaveLength(0);
  });
  it('botão de seleção de moeda funciona corretamente, acionando a API de ordens', async () => {
    const {
      getByRole,
      getAllByRole,
      getByText,
      getAllByText,
      getAllByTestId,
      container,
    } = renderWithRedux(renderWithRouter(<App />));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
    const searchButton = getByRole('button');
    // checando se o botao está desativado antes da seleção de uma moeda
    expect(searchButton).toBeDisabled();
    fireEvent.change(input, { target: { value: 'BTC_ETH' } });
    const selectedCurrency = container.querySelector('p');
    fireEvent.click(selectedCurrency);
    // apos a seleção da moeda, o botao deve estar ativo e mudar a rota para /orders/BTC_ETH
    fireEvent.click(searchButton);
    // a mudança de rota deve gerar uma nova requisição à API
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(2));
    // checando a existencia e o tamanho das tabelas
    await waitFor(() => expect(getAllByRole('table')).toHaveLength(4));
    expect(getAllByText('QTD')).toHaveLength(2);
    ['VENDA', 'COMPRA'].forEach((title) =>
      expect(getByText(title)).toBeInTheDocument()
    );
    expect(getAllByTestId('values')).toHaveLength(40);
  });
});
