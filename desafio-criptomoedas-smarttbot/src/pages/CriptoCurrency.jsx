import React, { useEffect } from 'react';
import { Container, Message } from '../styles/CryptoCurrencies';
import CurrencyOrders from '../components/CurrencyOrders';
import { connect } from 'react-redux';
import { getOrders, cleanOrders } from '../redux/actions/orderBook';
import { useParams } from 'react-router-dom';

const CriptoCurrency = ({ loading, error, orders, getOrders, cleanOrders }) => {
  const { currency } = useParams();
  useEffect(() => {
    getOrders(
      `https://poloniex.com/public?command=returnOrderBook&currencyPair=${currency}&depth=10`
    );
    return () => {
      cleanOrders(); // limpando as ordens quando o componente é desmontado
    };
  }, [getOrders, cleanOrders, currency]);
  
  return (
    <Container>
      {error && <Message>Falha na requisição, tente novamente!</Message>}
      {loading && <Message>Carregando...</Message>}
      {orders.asks && <CurrencyOrders />}
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
  cleanOrders,
};

export default connect(mapState, mapDispatch)(CriptoCurrency);
