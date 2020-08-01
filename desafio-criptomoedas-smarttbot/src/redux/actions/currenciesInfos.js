import fetchEndpoint from '../../services/fetchEndPoint';

export const REQUEST_CURRENCIES_API = 'REQUEST_CURRENCIES_API';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_FAILURE = 'REQUEST_CURRENCIES_FAILURE';
export const REQUEST_CURRENCY_INFO_API = 'REQUEST_CURRENCY_INFO_API';
export const REQUEST_CURRENCY_INFO_SUCCESS = 'REQUEST_CURRENCY_INFO_SUCCESS';

export const requestCurrenciesApi = () => ({
  type: REQUEST_CURRENCIES_API,
});

export const requestCurrenciesSuccess = (currenciesNames) => ({
  type: REQUEST_CURRENCIES_SUCCESS,
  currenciesNames,
});

const requestCurrenciesFailure = (error) => ({
  type: REQUEST_CURRENCIES_FAILURE,
  error,
});

export const getCurrenciesNames = (endpoint) => {
  return (dispatch) => {
    dispatch(requestCurrenciesApi());
    return fetchEndpoint(endpoint).then(
      (currenciesNamesandValues) =>
        dispatch(
          requestCurrenciesSuccess(Object.keys(currenciesNamesandValues))
        ),
      (error) => dispatch(requestCurrenciesFailure(error))
    );
  };
};

export const requestCurrencyInfoApi = () => ({
  type: REQUEST_CURRENCY_INFO_API,
});

const requestCurrencyInfoSuccess = (currencyInfo) => ({
  type: REQUEST_CURRENCY_INFO_SUCCESS,
  currencyInfo,
});

// essa action é muito parecida com a getCurrenciesNames, estão separadas para facilitar o entendimento.
// ela recebe um parâmetro adicional e, com ele, a action dispacha as informações mais detalhadas 
// da moeda selecionada:
export const getCurrencyInfo = (endpoint, someCurrency) => {
  return (dispatch) => {
    dispatch(requestCurrencyInfoApi());
    return fetchEndpoint(endpoint).then(
      (currenciesNamesandValues) =>
        dispatch(
          requestCurrencyInfoSuccess(currenciesNamesandValues[someCurrency])
        ),
      (error) => dispatch(requestCurrenciesFailure(error))
    );
  };
};
