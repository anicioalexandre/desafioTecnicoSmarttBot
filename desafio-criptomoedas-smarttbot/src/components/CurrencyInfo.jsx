import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrencyInfo } from '../redux/actions/currenciesInfos';
import { Container, NumberInfo } from '../styles/CurrencyInfo';
import { useParams } from 'react-router-dom';
import { setInfoColor } from '../services/setColors';
import Tooltip from '../svg/Tooltip';
import ReactTooltip from 'react-tooltip';

const CurrencyInfo = ({ currencyInfo, loadingInfo, getCurrencyInfo }) => {
  const { currency } = useParams();
  useEffect(() => {
    if (!loadingInfo) getCurrencyInfo(
      'https://poloniex.com/public?command=returnTicker',
      currency
    );
    console.log('getInfo');
  }, [currency]);
  if (loadingInfo) return <Container><h3>Carregando...</h3></Container>;
  return (
    <Container>
      <h3>Trade Info</h3>
      <div>
        Variação (%):{' '}
        <NumberInfo color={setInfoColor(currencyInfo?.percentChange)}>
          {(currencyInfo?.percentChange * 100).toFixed(2)}
        </NumberInfo>
      </div>
      <div>
        Volume base: <NumberInfo>{currencyInfo?.baseVolume}</NumberInfo>
      </div>
      <div>
        Volume ajustado{' '}
        <Tooltip info="Calculado através do volume base vezes o preço médio nas últimas 24h." />
        : <NumberInfo>{currencyInfo?.quoteVolume}</NumberInfo>
        <ReactTooltip effect="solid" />
      </div>
      <div>
        Máxima (24h): <NumberInfo>{currencyInfo?.high24hr}</NumberInfo>
      </div>
      <div>
        Mínima (24h): <NumberInfo>{currencyInfo?.low24hr}</NumberInfo>
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
