import React from 'react';
import { waitFor, fireEvent } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import mockCurrencies from '../__mocks__/mockCurrenciesNamesandValues';
import fetchEndpoint from '../services/fetchEndPoint';
import CriptoRanking from '../pages/CriptoRanking';
import {
  decreasingPercentChangeMock,
  increasingPercentChangeMock,
  decreasingBaseVolumeMock,
  increasingBaseVolumeMock,
  decreasingQuoteVolumeMock,
  increasingQuoteVolumeMock,
} from '../__mocks__/mockCurrencyOrder';

afterEach(() => {
  fetchEndpoint.mockClear();
});

jest.mock('../services/fetchEndPoint');
fetchEndpoint.mockImplementation(() => Promise.resolve(mockCurrencies));

describe('testes da página CriptoRanking', () => {
  it('paginação mostra no máximo 10 moedas por vez e botões funcionam corretamente', async () => {
    const { getByText, getByTestId, getAllByTestId } = renderWithRedux(
      renderWithRouter(<CriptoRanking />)
    );
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    const previousButton = getByText('Anterior');
    const nextButton = getByText('Próximo');
    expect(getAllByTestId('currency-name')).toHaveLength(10);
    const pageNumber = Math.ceil(Object.keys(mockCurrencies).length / 10);
    // testando número de cliques ate a desativação do botão de próxima página
    for (let index = 1; index <= pageNumber; index += 1) {
      expect(getByTestId('page-display')).toHaveTextContent(
        `${index}/${pageNumber}`
      );
      fireEvent.click(nextButton);
    }
    expect(nextButton).toBeDisabled();

    // testando número de cliques ate a desativação do botão de página anterior
    for (let index = pageNumber; index > 0; index -= 1) {
      expect(getByTestId('page-display')).toHaveTextContent(
        `${index}/${pageNumber}`
      );
      fireEvent.click(previousButton);
    }
    expect(previousButton).toBeDisabled();
  });

  it('ordenação crescente e decrescente dos parametros deve estar funcionando', async () => {
    const { getByText, getAllByTestId } = renderWithRedux(
      renderWithRouter(<CriptoRanking />)
    );
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    // checando ordenação nas primeiras 10 moedas após ordenação por variação
    fireEvent.click(getByText(/variação/i));
    decreasingPercentChangeMock.forEach((mockValue, index) =>
      expect(getAllByTestId('currency-name')[index]).toHaveTextContent(
        mockValue
      )
    );
    fireEvent.click(getByText(/variação/i));
    increasingPercentChangeMock.forEach((mockValue, index) =>
      expect(getAllByTestId('currency-name')[index]).toHaveTextContent(
        mockValue
      )
    );
    // checando ordenação nas primeiras 10 moedas após ordenação por volume base
    fireEvent.click(getByText(/volume base/i));
    decreasingBaseVolumeMock.forEach((mockValue, index) =>
      expect(getAllByTestId('currency-name')[index]).toHaveTextContent(
        mockValue
      )
    );
    fireEvent.click(getByText(/volume base/i));
    increasingBaseVolumeMock.forEach((mockValue, index) =>
      expect(getAllByTestId('currency-name')[index]).toHaveTextContent(
        mockValue
      )
    );
    // checando ordenação nas primeiras 10 moedas após ordenação por volume ajustado
    fireEvent.click(getByText(/volume ajustado/i));
    decreasingQuoteVolumeMock.forEach((mockValue, index) =>
      expect(getAllByTestId('currency-name')[index]).toHaveTextContent(
        mockValue
      )
    );
    fireEvent.click(getByText(/volume ajustado/i));
    increasingQuoteVolumeMock.forEach((mockValue, index) =>
      expect(getAllByTestId('currency-name')[index]).toHaveTextContent(
        mockValue
      )
    );
  });
});
