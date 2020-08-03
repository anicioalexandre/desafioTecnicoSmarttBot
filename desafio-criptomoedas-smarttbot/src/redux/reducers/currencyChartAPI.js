import {
  REQUEST_CHART_API,
  REQUEST_CHART_FAILURE,
  REQUEST_CHART_SUCCESS,
} from '../actions/currencyChart';

const INITIAL_STATE = {
  loading: false,
  chartData: [],
};

const currencyChart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHART_API:
      return { ...state, loading: true, chartData: [] };
    case REQUEST_CHART_FAILURE:
      return { ...state, loading: false, error: action.error };
    case REQUEST_CHART_SUCCESS:
      return {
        ...state,
        loading: false,
        chartData: action.chartData,
      };
    default:
      return state;
  }
};

export default currencyChart;
