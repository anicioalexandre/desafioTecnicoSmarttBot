import fetchEndpoint from '../../services/fetchEndPoint';

export const REQUEST_ORDER_API = 'REQUEST_ORDER_API';
export const REQUEST_ORDER_SUCCESS = 'REQUEST_ORDER_SUCCESS';
export const REQUEST_ORDER_FAILURE = 'REQUEST_ORDER_FAILURE';

export const requestOrderApi = () => ({
  type: REQUEST_ORDER_API,
});

export const requestOrderSuccess = ({ asks, bids }) => ({
  type: REQUEST_ORDER_SUCCESS,
  orders: { asks, bids },
});

const requestOrderFailure = (error) => ({
  type: REQUEST_ORDER_FAILURE,
  error,
});

export const getOrders = (endpoint) => {
  return (dispatch) => {
    dispatch(requestOrderApi());
    return fetchEndpoint(endpoint).then(
      (orders) => dispatch(requestOrderSuccess(orders)),
      (error) => dispatch(requestOrderFailure(error))
    );
  };
};
