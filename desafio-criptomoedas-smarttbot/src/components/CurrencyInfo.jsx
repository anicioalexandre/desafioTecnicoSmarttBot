import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrencyInfo } from '../redux/actions/currenciesInfos';
import { Container, NumberInfo } from '../styles/CurrencyInfo';
import { useParams } from 'react-router-dom';
import { setInfoColor } from '../services/setColors';

const CurrencyInfo = ({ currencyInfo, loadingInfo, getCurrencyInfo }) => {
  const { currency } = useParams();
  useEffect(() => {
    getCurrencyInfo(
      'https://poloniex.com/public?command=returnTicker',
      currency
    );
  }, [getCurrencyInfo, currency]);
  if (loadingInfo) return <Container>Carregando...</Container>;
  return (
    <Container>
      <h3>Trade Info</h3>
      <div>
        Variação (%):{' '}
        <NumberInfo color={setInfoColor(currencyInfo?.percentChange)}>
          {currencyInfo?.percentChange}
        </NumberInfo>
      </div>
      <div>
        baseVolume: <NumberInfo>{currencyInfo?.baseVolume}</NumberInfo>
      </div>
      <div>
        quoteVolume: <NumberInfo>{currencyInfo?.quoteVolume}</NumberInfo>
      </div>
      <div>
        high24hr: <NumberInfo>{currencyInfo?.high24hr}</NumberInfo>
      </div>
      <div>
        low24hr: <NumberInfo>{currencyInfo?.low24hr}</NumberInfo>
      </div>
    </Container>
  );
};

const mapState = (state) => ({
  currencyInfo: state.currenciesInfos.currencyInfo,
  loadingInfo: state.currenciesInfos.loadingInfo,
});

const mapDispatch = {
  getCurrencyInfo,
};

export default connect(mapState, mapDispatch)(CurrencyInfo);
