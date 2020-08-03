import fetchEndpoint from '../../services/fetchEndPoint';

export const REQUEST_CHART_API = 'REQUEST_CHART_API';
export const REQUEST_CHART_SUCCESS = 'REQUEST_CHART_SUCCESS';
export const REQUEST_CHART_FAILURE = 'REQUEST_CHART_FAILURE';

export const requestChartApi = () => ({
  type: REQUEST_CHART_API,
});

export const requestChartSuccess = (chartData) => ({
  type: REQUEST_CHART_SUCCESS,
  chartData,
});

const requestChartFailure = (error) => ({
  type: REQUEST_CHART_FAILURE,
  error,
});

export const getCurrencyChart = (endpoint) => {
  return (dispatch) => {
    dispatch(requestChartApi());
    return fetchEndpoint(endpoint).then(
      (chartData) => dispatch(requestChartSuccess(chartData)),
      (error) => dispatch(requestChartFailure(error))
    );
  };
};
