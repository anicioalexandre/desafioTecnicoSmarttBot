import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../styles/CurrencyOrders';
import OrdersTable from './OrdersTable';

const CurrencyOrders = ({ orders }) => {
  return (
    <Container>
      <OrdersTable reverse={true} names={['VENDA', 'QTD']} orders={orders?.asks} />
      <OrdersTable names={['COMPRA', 'QTD']} orders={orders?.bids} />
    </Container>
  );
};

const mapState = (state) => ({
  orders: state.orderBook.orders,
});

export default connect(mapState)(CurrencyOrders);
