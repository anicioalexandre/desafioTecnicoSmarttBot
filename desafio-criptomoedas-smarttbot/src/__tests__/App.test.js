import React from 'react';
import App from '../App';
import { waitFor, fireEvent } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import renderWithRouter from '../helpers/renderWithRouter';
import fecthEndPoint from '../services/fecthEndPoint';
import mockCurrenciesNamesandValues from '../__mocks__/mockCurrenciesNamesandValues';

afterEach(() => {
  fecthEndPoint.mockClear();
});

jest.mock('../services/fecthEndPoint');
fecthEndPoint.mockImplementation(() =>
  Promise.resolve(mockCurrenciesNamesandValues)
);

describe('teste do App', () => {
  it('testando chamada à api e se a quantidade de moedas renderizadas aparecem corretamente na tela', async () => {
    const { getByText, container } = renderWithRedux(renderWithRouter(<App />));
    expect(getByText(/Desafio Técnico SmarttBot/i)).toBeInTheDocument();
    await waitFor(() => expect(fecthEndPoint).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(container.querySelectorAll('p')).toHaveLength(
        Object.keys(mockCurrenciesNamesandValues).length
      )
    );
  });
  it('input de filtro da lista de criptomoedas, testando implementação', async () => {
    const { getByRole, container } = renderWithRedux(renderWithRouter(<App />));
    await waitFor(() => expect(fecthEndPoint).toHaveBeenCalledTimes(1));
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'BTC' } });
    expect(container.querySelectorAll('p')).toHaveLength(12);
    fireEvent.change(input, { target: { value: 'usdt_dash' } });
    expect(container.querySelectorAll('p')).toHaveLength(1);
    fireEvent.change(input, { target: { value: 'moeda_errada' } });
    expect(container.querySelectorAll('p')).toHaveLength(0);
  });
});
