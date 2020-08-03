import React from 'react';
import { waitFor, fireEvent } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import CriptoChart from '../pages/CriptoChart';
import fetchEndpoint from '../services/fetchEndPoint';
import mockChartDataCase1 from '../__mocks__/mockChartDataCase1';
import mockChartDataCase2 from '../__mocks__/mockChartDataCase2';
import mockChartDataCase3 from '../__mocks__/mockChartDataCase3';

afterEach(() => {
  fetchEndpoint.mockClear();
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ currency: 'BTC_XMR' }),
}));

jest.mock('../services/fetchEndPoint');
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockChartDataCase1));
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockChartDataCase1));
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockChartDataCase2));
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockChartDataCase2));
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockChartDataCase3));
fetchEndpoint.mockImplementationOnce(() => Promise.resolve(mockChartDataCase3));

describe('testes da página CriptoChart', () => {
  it('testando chamada, dados iniciais e botões de intervalos existentes', async () => {
    const { getByText, queryAllByText } = renderWithRedux(
      renderWithRouter(<CriptoChart />)
    );
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    // checando eixo X:
    [
      '02/06/2020',
      '06/06/2020',
      '11/06/2020',
      '16/06/2020',
      '20/06/2020',
      '25/06/2020',
      '30/06/2020',
    ].forEach((date) => expect(queryAllByText(date).length).toBeGreaterThan(0));
    // verificando existencia dos valores corretos no eixo Y em todos os tipos:
    fireEvent.click(getByText(/Média/i));
    ['0.006', '0.008'].forEach((range) =>
      expect(getByText(range)).toBeInTheDocument()
    );
    fireEvent.click(getByText(/Máxima/i));
    ['0.006', '0.008'].forEach((range) =>
      expect(getByText(range)).toBeInTheDocument()
    );
    fireEvent.click(getByText(/Volume base/i));
    ['0', '60'].forEach((range) =>
      expect(getByText(range)).toBeInTheDocument()
    );
    fireEvent.click(getByText(/Volume ajustado/i));
    ['0', '8000'].forEach((range) =>
      expect(getByText(range)).toBeInTheDocument()
    );
  });
  it('testando case 2: tempo:6 meses - intervalo:24 horas', async () => {
    const { getByText, queryAllByText, queryByText } = renderWithRedux(
      renderWithRouter(<CriptoChart />)
    );
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    // simulando entrada no case 2:
    fireEvent.click(getByText(/6 meses/));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(2));
    fireEvent.click(getByText(/24 horas/));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(3));
    //checando eixo X:
    [
      '10/01/2020',
      '07/02/2020',
      '06/03/2020',
      '03/04/2020',
      '01/05/2020',
      '29/05/2020',
      '30/06/2020',
    ].forEach((date) => expect(queryAllByText(date).length).toBeGreaterThan(0));
    // verificando existencia dos valores corretos no eixo Y apenas no tipo média ponderada:
    ['0.005', '0.01'].forEach((range) =>
      expect(getByText(range)).toBeInTheDocument()
    );
    ['4 horas', '24 horas'].forEach((intervalButton) =>
      expect(getByText(intervalButton)).toBeInTheDocument()
    );
    ['5min', '15min', '30min', '2 horas'].forEach((intervalButton) =>
      expect(queryByText(intervalButton)).toBeNull()
    );
  });
  it('testando case 3: tempo:1 dia - intervalo:4 horas', async () => {
    const { getByText, queryByText, queryAllByText } = renderWithRedux(renderWithRouter(<CriptoChart />));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(1));
    // simulando entrada no case 3:
    fireEvent.click(getByText(/1 dia/));
    await waitFor(() => expect(fetchEndpoint).toHaveBeenCalledTimes(2));
    //checando eixo X:
    ['21h', '1h', '5h', '9h', '13h', '17h', '21h'].forEach((hour) =>
      expect(queryAllByText(hour).length).toBeGreaterThan(0)
    );
    // verificando existencia dos valores corretos no eixo Y apenas no tipo média ponderada:
    ['0.008', '0.006'].forEach((range) =>
      expect(queryByText(range)).toBeInTheDocument()
    );
    [
      '5min',
      '15min',
      '30min',
      '2 horas',
      '4 horas',
    ].forEach((intervalButton) =>
      expect(getByText(intervalButton)).toBeInTheDocument()
    );
    expect(queryByText('24 horas')).toBeNull()
  });
});
