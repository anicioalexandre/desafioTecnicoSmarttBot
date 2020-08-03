import React from 'react';
import { waitFor, fireEvent } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import mockCurrenciesNamesandValues from '../__mocks__/mockCurrenciesNamesandValues';
import mockOrders from '../__mocks__/mockOrders';
import App from '../App';
import fetchEndpoint from '../services/fetchEndPoint';
import mockChartDataCase1 from '../__mocks__/mockChartDataCase1';

afterEach(() => {
  fetchEndpoint.mockClear();
});

jest.mock('../services/fetchEndPoint');
fetchEndpoint
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockOrders))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockOrders))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockChartDataCase1))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockCurrenciesNamesandValues))
  .mockImplementationOnce(() => Promise.resolve(mockOrders));

describe('testes do componente CurrenciesList no App', () => {
  it('tela inicial e chamada à api e se a quantidade de moedas renderizadas aparecem corretamente na tela', async () => {
    const { container, getByText } = renderWithRedux(renderWithRouter(<App />));
    expect(getByText('Escolha um par de moedas!')).toBeInTheDocument();
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
    const { getByRole, getByText, container } = renderWithRedux(
      renderWithRouter(<App />)
    );
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    const input = getByRole('textbox');
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
    expect(getByText('Book de Ofertas: BTC_ETH')).toBeInTheDocument();
  });
  it('testando chamada à API ao clicar no botão de Ver gráfico', async () => {
    const { getByText, getByRole } = renderWithRedux(renderWithRouter(<App />));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    fireEvent.click(getByText('BTC_BTS'));
    fireEvent.click(getByRole('button'));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(3));
    fireEvent.click(getByText(/Ver gráfico/));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(4));
    expect(getByText('Gráfico de BTC_BTS')).toBeInTheDocument();
  });
  it('ao clicar no nome do par de moedas sé redirecionado para a página de informações sobre ela', async () => {
    const { getByText, getAllByTestId } = renderWithRedux(
      renderWithRouter(<App />)
    );
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    const ranking = getByText('Ranking');
    fireEvent.click(ranking);
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(2));
    const firstCurrencyName = getAllByTestId('currency-name')[0];
    fireEvent.click(firstCurrencyName);
    await waitFor(() =>
      expect(getByText('Book de Ofertas: BTC_BTS')).toBeInTheDocument()
    );
  });
});
