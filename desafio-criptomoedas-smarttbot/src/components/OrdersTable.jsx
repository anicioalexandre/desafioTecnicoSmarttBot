import React from 'react';
import { Container, TD } from '../styles/OrdersTable';
import { setActionColor } from '../services/setColors';

const OrdersTable = ({ orders, names, reverse }) => {
  return (
    <Container direction={reverse ? 'row-reverse' : 'row'}>
      {names.map((name, index) => (
        <table key={name}>
          <thead>
            <tr key={names[index]}>
              <th>{names[index]}</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index2) => (
              <tr data-testid="values" key={order[index] + index + index2}>
                <TD color={setActionColor(names[index])}>
                  {index === 1 ? order[index].toFixed(3) : order[index]}
                </TD>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </Container>
  );
};

export default OrdersTable;
