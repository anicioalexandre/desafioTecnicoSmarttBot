import { REQUEST_CURRENCIES_API, REQUEST_CURRENCIES_FAILURE, REQUEST_CURRENCIES_SUCCESS } from '../actions/currenciesNames';

const INITIAL_STATE = {
  loading: false,
  namesList: [],
};

const currenciesNames = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CURRENCIES_API:
      return { ...state, loading: true };
    case REQUEST_CURRENCIES_FAILURE:
      return { ...state, loading: false, error: action.error };
    case REQUEST_CURRENCIES_SUCCESS:
      return { ...state, loading: false, namesList: action.currenciesNames };
    default:
      return state;
  }
};

export default currenciesNames;
