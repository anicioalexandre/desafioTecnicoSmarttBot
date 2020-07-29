import {
  REQUEST_ORDER_API,
  REQUEST_ORDER_FAILURE,
  REQUEST_ORDER_SUCCESS,
} from '../actions/orderBook';

const INITIAL_STATE = {
  loading: false,
};

const orderBook = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ORDER_API:
      return { ...state, loading: true };
    case REQUEST_ORDER_FAILURE:
      return { ...state, loading: false, error: action.error };
    case REQUEST_ORDER_SUCCESS:
      return { ...state, loading: false, orders: action.orders };
    default:
      return state;
  }
};

export default orderBook;
