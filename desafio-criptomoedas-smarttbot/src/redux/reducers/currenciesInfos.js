import {
  REQUEST_CURRENCIES_API,
  REQUEST_CURRENCIES_FAILURE,
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_INFO_API,
  REQUEST_CURRENCIES_INFO_SUCCESS,
} from '../actions/currenciesInfos';

const INITIAL_STATE = {
  loadingNames: false,
  loadingInfo: false,
  namesList: [],
  currenciesInfo: [],
};

const currenciesInfos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CURRENCIES_API:
      return { ...state, loadingNames: true };
    case REQUEST_CURRENCIES_FAILURE:
      return { ...state, loadingNames: false, loadingInfo: false, error: action.error };
    case REQUEST_CURRENCIES_SUCCESS:
      return { ...state, loadingNames: false, namesList: action.currenciesNames };
    case REQUEST_CURRENCIES_INFO_API:
      return { ...state, loadingInfo: true };
    case REQUEST_CURRENCIES_INFO_SUCCESS:
      return { ...state, loadingInfo: false, currenciesInfo: action.currenciesInfo };
    default:
      return state;
  }
};

export default currenciesInfos;
