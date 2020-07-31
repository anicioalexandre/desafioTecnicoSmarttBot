import React from 'react';
import { Container } from '../styles/OrdersTable';

const OrdersTable = ({ orders, names, reverse }) => {
  return (
    <Container direction={reverse ? 'row-reverse' : 'row'}>
      {names.map((name, index) => (
        <table key={names[index]}>
          <thead>
            <tr key={names[index]}>
              <th>{names[index]}</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr data-testid="values" key={order[index]}>
                <td>{index === 1 ? order[index].toFixed(1) : order[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </Container>
  );
};

export default OrdersTable;
