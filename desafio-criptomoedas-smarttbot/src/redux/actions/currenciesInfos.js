import fetchEndpoint from '../../services/fetchEndPoint';

export const REQUEST_CURRENCIES_API = 'REQUEST_CURRENCIES_API';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_FAILURE = 'REQUEST_CURRENCIES_FAILURE';
export const REQUEST_CURRENCIES_INFO_API = 'REQUEST_CURRENCIES_INFO_API';
export const REQUEST_CURRENCIES_INFO_SUCCESS = 'REQUEST_CURRENCIES_INFO_SUCCESS';

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

export const requestCurrenciesInfoApi = () => ({
  type: REQUEST_CURRENCIES_INFO_API,
});

const requestCurrenciesInfoSuccess = (currenciesInfo) => ({
  type: REQUEST_CURRENCIES_INFO_SUCCESS,
  currenciesInfo,
});

// essa action é muito parecida com a getCurrenciesNames, estão separadas para facilitar o entendimento.
// e para ambas terem action requests distintas:
export const getCurrenciesInfo = (endpoint) => {
  return (dispatch) => {
    dispatch(requestCurrenciesInfoApi());
    return fetchEndpoint(endpoint).then(
      (currenciesNamesandValues) =>
        dispatch(
          requestCurrenciesInfoSuccess(currenciesNamesandValues)
        ),
      (error) => dispatch(requestCurrenciesFailure(error))
    );
  };
};
