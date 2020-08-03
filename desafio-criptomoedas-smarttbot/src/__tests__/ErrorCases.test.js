import React from 'react';
import { waitFor } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import fetchEndpoint from '../services/fetchEndPoint';
import CurrenciesList from '../components/CurrenciesList';
import CriptoCurrency from '../pages/CriptoCurrency';
import CriptoRanking from '../pages/CriptoRanking';
import CriptoChart from '../pages/CriptoChart';
import CurrencyInfo from '../components/CurrencyInfo';

afterEach(() => {
  fetchEndpoint.mockClear();
});

const error = { message: 'Falha na requisição, tente novamente!' };

jest.mock('../services/fetchEndPoint');
fetchEndpoint.mockImplementation(() => Promise.reject(error));

describe('testando casos de erro nos componentes que fazem requisições', () => {
  it('caso de erro no CurrenciesList', async () => {
    const { getByText } = renderWithRedux(renderWithRouter(<CurrenciesList />));
    await waitFor(() => expect(getByText(error.message)).toBeInTheDocument());
  });
  it('caso de erro no CriptoCurrency', async () => {
    const { getByText } = renderWithRedux(renderWithRouter(<CriptoCurrency />));
    await waitFor(() => expect(getByText(error.message)).toBeInTheDocument());
  });
  it('caso de erro no CriptoRanking', async () => {
    const { getByText } = renderWithRedux(renderWithRouter(<CriptoRanking />));
    await waitFor(() => expect(getByText(error.message)).toBeInTheDocument());
  });
  it('caso de erro no CriptoChart', async () => {
    const { getByText } = renderWithRedux(renderWithRouter(<CriptoChart />));
    await waitFor(() => expect(getByText(error.message)).toBeInTheDocument());
  });
  it('caso de erro no CurrencyInfo', async () => {
    const { getByText } = renderWithRedux(renderWithRouter(<CurrencyInfo />));
    await waitFor(() => expect(getByText('Falha na requisição...')).toBeInTheDocument());
  });
});
