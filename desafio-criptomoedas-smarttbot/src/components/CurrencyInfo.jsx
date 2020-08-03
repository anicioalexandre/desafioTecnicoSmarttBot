/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrenciesInfo } from '../redux/actions/currenciesInfos';
import { Container, NumberInfo } from '../styles/CurrencyInfo';
import { useParams, useHistory } from 'react-router-dom';
import { setInfoColor } from '../services/setColors';
import Tooltip from '../svg/Tooltip';
import ReactTooltip from 'react-tooltip';
import Button from './smallComponents/Button';

const CurrencyInfo = ({
  error,
  loadingInfo,
  currenciesInfo,
  getCurrenciesInfo,
}) => {
  const { currency } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (currenciesInfo.length === 0)
      getCurrenciesInfo('https://poloniex.com/public?command=returnTicker');
  }, []);

  return (
    <Container>
      {error && <h3>Falha na requisição...</h3>}
      {loadingInfo && <h3>Carregando...</h3>}
      {Object.keys(currenciesInfo).length !== 0 && (
        <>
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
            <NumberInfo data-testid="info">
              {currenciesInfo[currency]?.baseVolume}
            </NumberInfo>
          </div>
          <div>
            Volume ajustado{' '}
            <Tooltip info="Calculado através do volume base dividido pelo preço médio nas últimas 24h." />
            :{' '}
            <NumberInfo data-testid="info">
              {currenciesInfo[currency]?.quoteVolume}
            </NumberInfo>
            <ReactTooltip effect="solid" />
          </div>
          <div>
            Máxima (24h):{' '}
            <NumberInfo data-testid="info">
              {currenciesInfo[currency]?.high24hr}
            </NumberInfo>
          </div>
          <div>
            Mínima (24h):{' '}
            <NumberInfo data-testid="info">
              {currenciesInfo[currency]?.low24hr}
            </NumberInfo>
          </div>
          <Button
            onClick={() => history.push(`/chart/${currency}`)}
            minWidth={`${150}px`}
          >
            Ver gráfico
          </Button>
        </>
      )}
    </Container>
  );
};

const mapState = (state) => ({
  currenciesInfo: state.currenciesInfos.currenciesInfo,
  loadingInfo: state.currenciesInfos.loadingInfo,
  error: state.currenciesInfos.error,
});

const mapDispatch = {
  getCurrenciesInfo,
};

export default connect(mapState, mapDispatch)(CurrencyInfo);
