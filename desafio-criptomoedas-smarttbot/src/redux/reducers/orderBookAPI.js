import {
  REQUEST_ORDER_API,
  REQUEST_ORDER_FAILURE,
  REQUEST_ORDER_SUCCESS,
  CLEAN_ORDERS,
} from '../actions/orderBook';

const INITIAL_STATE = {
  loading: false,
  orders: [],
};

const orderBook = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ORDER_API:
      return { ...state, loading: true, orders: [] };
    case REQUEST_ORDER_FAILURE:
      return { ...state, loading: false, error: action.error };
    case REQUEST_ORDER_SUCCESS:
      return { ...state, loading: false, orders: action.orders };
    case CLEAN_ORDERS:
      return { ...state, orders: [] };
    default:
      return state;
  }
};

export default orderBook;
