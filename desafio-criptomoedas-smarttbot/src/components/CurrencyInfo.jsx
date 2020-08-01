/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrenciesInfo } from '../redux/actions/currenciesInfos';
import { Container, NumberInfo } from '../styles/CurrencyInfo';
import { useParams } from 'react-router-dom';
import { setInfoColor } from '../services/setColors';
import Tooltip from '../svg/Tooltip';
import ReactTooltip from 'react-tooltip';

const CurrencyInfo = ({ currenciesInfo, loadingInfo, getCurrenciesInfo }) => {
  const { currency } = useParams();
  useEffect(() => {
    if (currenciesInfo.length === 0)
    getCurrenciesInfo(
        'https://poloniex.com/public?command=returnTicker'
      );
  }, []);
  if (loadingInfo)
    return (
      <Container>
        <h3>Carregando...</h3>
      </Container>
    );
  return (
    <Container>
      <h3>Trade Info</h3>
      <div>
        Variação (%):{' '}
        <NumberInfo
          data-testid="info"
          color={setInfoColor(currenciesInfo[currency]?.percentChange)}
        >
          {(currenciesInfo[currency]?.percentChange * 100).toFixed(2)}
        </NumberInfo>
      </div>
      <div>
        Volume base:{' '}
        <NumberInfo data-testid="info">{currenciesInfo[currency]?.baseVolume}</NumberInfo>
      </div>
      <div>
        Volume ajustado{' '}
        <Tooltip info="Calculado através do volume base vezes o preço médio nas últimas 24h." />
        :{' '}
        <NumberInfo data-testid="info">{currenciesInfo[currency]?.quoteVolume}</NumberInfo>
        <ReactTooltip effect="solid" />
      </div>
      <div>
        Máxima (24h):{' '}
        <NumberInfo data-testid="info">{currenciesInfo[currency]?.high24hr}</NumberInfo>
      </div>
      <div>
        Mínima (24h):{' '}
        <NumberInfo data-testid="info">{currenciesInfo[currency]?.low24hr}</NumberInfo>
      </div>
    </Container>
  );
};

const mapState = (state) => ({
  currenciesInfo: state.currenciesInfos.currenciesInfo,
  loadingInfo: state.currenciesInfos.loadingInfo,
});

const mapDispatch = {
  getCurrenciesInfo,
};

export default connect(mapState, mapDispatch)(CurrencyInfo);
