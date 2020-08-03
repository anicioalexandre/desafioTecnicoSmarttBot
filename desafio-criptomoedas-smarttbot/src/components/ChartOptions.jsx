import React from 'react';
import { connect } from 'react-redux';
import { Container } from '../styles/ChartOptions';
import ChartOptionsData from '../components/ChartOptionsData';
import ChartOptionsTime from '../components/ChartOptionsTime';
import ChartOptionsInterval from './ChartOptionsInterval';

const ChartOptions = () => {
  return (
    <Container>
      <ChartOptionsData />
      <ChartOptionsTime />
      <ChartOptionsInterval />
    </Container>
  );
};

const mapState = (state) => ({
  currenciesInfo: state.currenciesInfos.currenciesInfo,
});

export default connect(mapState)(ChartOptions);
