import fetchEndpoint from '../services/fetchEndPoint';
const mockCurrenciesNamesandValues = require('../__mocks__/mockCurrenciesNamesandValues');
const error = { message: 'Falha na requisição, tente novamente!' };

// mokando o método fetch
jest
  .spyOn(global, 'fetch')
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockCurrenciesNamesandValues),
    })
  )
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.reject(error),
    })
  );

describe('testes na função de fetchEndpoints', () => {
  it('caso de sucesso funciona', () => {
    fetchEndpoint('validURLThatReturnsCurrenciesData').then(
      (currenciesData) => {
        expect(global.fetch).toHaveBeenCalled();
        expect(global.fetch).toHaveBeenCalledWith(
          'validURLThatReturnsCurrenciesData'
        );
        expect(currenciesData).toStrictEqual(mockCurrenciesNamesandValues);
      }
    );
  });
  it('caso de falha funciona', () => {
    fetchEndpoint('nonValidURLThatReturnsCurrenciesData').then(
      (currenciesDataError) => {
        expect(global.fetch).toHaveBeenCalled();
        expect(global.fetch).toHaveBeenCalledWith(
          'nonValidURLThatReturnsCurrenciesData'
        );
        expect(currenciesDataError).toStrictEqual(error);
      }
    );
  });
});
