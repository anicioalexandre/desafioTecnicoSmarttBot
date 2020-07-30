import React from 'react';
import CurrenciesList from '../components/CurrenciesList';
import { Container, Message } from '../styles/Prices';
import CurrencyOrders from '../components/CurrencyOrders';
import { connect } from 'react-redux';

const Prices = ({ loading, orders }) => (
  <Container>
    <CurrenciesList />
    {orders.length === 0 && !loading && <Message>Escolha uma moeda!</Message>}
    {loading && <Message>Carregando...</Message>}
    {orders.length !== 0 && <CurrencyOrders />}
  </Container>
);

const mapState = (state) => ({
  orders: state.orderBook.orders,
  loading: state.orderBook.loading,
});

export default connect(mapState)(Prices);
