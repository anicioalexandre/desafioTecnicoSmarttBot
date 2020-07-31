import React, { useEffect } from 'react';
import { Container, Message } from '../styles/CryptoCurrencies';
import CurrencyOrders from '../components/CurrencyOrders';
import { connect } from 'react-redux';
import { getOrders } from '../redux/actions/orderBook';
import { useParams } from 'react-router-dom';

const CriptoCurrencies = ({ loading, error, orders, getOrders }) => {
  const { currency } = useParams();
  useEffect(() => {
    getOrders(
      `https://poloniex.com/public?command=returnOrderBook&currencyPair=${currency}&depth=10`
    );
  }, [getOrders, currency]);
  return (
    <Container>
      {error && <Message>Informe uma moeda válida {error}</Message>}
      {loading && <Message>Carregando...</Message>}
      {orders.length !== 0 && <CurrencyOrders />}
    </Container>
  );
};

const mapState = (state) => ({
  orders: state.orderBook.orders,
  loading: state.orderBook.loading,
  error: state.orderBook.error,
});

const mapDispatch = {
  getOrders,
};

export default connect(mapState, mapDispatch)(CriptoCurrencies);
