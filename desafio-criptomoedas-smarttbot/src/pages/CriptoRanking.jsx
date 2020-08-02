import React, { useEffect, useState } from 'react';
import { Container, TableContainer } from '../styles/CriptoRanking';
import { connect } from 'react-redux';
import rankingFilterPagination from '../services/rankingFilterPagination';
import { getCurrenciesInfo } from '../redux/actions/currenciesInfos';
import { TD } from '../styles/OrdersTable';
import { setInfoColor } from '../services/setColors';
import Tooltip from '../svg/Tooltip';
import ReactTooltip from 'react-tooltip';
import RankingPagination from '../components/RankingPagination';
import { Message } from '../styles/CryptoCurrencies';

const CriptoRanking = ({
  currenciesInfo,
  loadingInfo,
  error,
  getCurrenciesInfo,
}) => {
  useEffect(() => {
    if (currenciesInfo.length === 0)
      getCurrenciesInfo('https://poloniex.com/public?command=returnTicker');
  }, []);

  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(10);

  return (
    <Container>
      {error && <Message>Falha na requisição, tente novamente!</Message>}
      {loadingInfo && <Message>Carregando...</Message>}
      {currenciesInfo.length !== 0 && (
        <>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Variação (%)</th>
                  <th>Volume base</th>
                  <th>
                    Volume ajustado{' '}
                    <Tooltip info="Calculado através do volume base dividido pelo preço médio nas últimas 24h." />
                  </th>
                </tr>
              </thead>
              <tbody>
                {rankingFilterPagination(
                  currenciesInfo,
                  startPage,
                  endPage
                ).map(({ percentChange, baseVolume, quoteVolume, name }) => (
                  <tr>
                    <TD>{name}</TD>
                    <TD color={setInfoColor(percentChange)}>
                      {(percentChange * 100).toFixed(2)}
                    </TD>
                    <TD>{Number(baseVolume).toFixed(4)}</TD>
                    <TD>{Number(quoteVolume).toFixed(4)}</TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
          <RankingPagination
            previous={[startPage, setStartPage]}
            next={[endPage, setEndPage]}
          />
        </>
      )}
      <ReactTooltip type="light" effect="solid" />
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

export default connect(mapState, mapDispatch)(CriptoRanking);
