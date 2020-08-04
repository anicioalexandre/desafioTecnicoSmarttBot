/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import rankingFilterPagination from '../services/rankingFilterPagination';
import { getCurrenciesInfo } from '../redux/actions/currenciesInfos';
import { Container, TableContainer, TH } from '../styles/CriptoRanking';
import { Message } from '../styles/CryptoCurrencies';
import { TD } from '../styles/OrdersTable';
import { setInfoColor } from '../services/setColors';
import Tooltip from '../svg/Tooltip';
import ReactTooltip from 'react-tooltip';
import RankingPagination from '../components/RankingPagination';
import { useHistory } from 'react-router-dom';

const CriptoRanking = ({
  currenciesInfo,
  loadingInfo,
  error,
  getCurrenciesInfo,
}) => {
  const history = useHistory();
  useEffect(() => {
    if (currenciesInfo.length === 0)
      getCurrenciesInfo('https://poloniex.com/public?command=returnTicker');
  }, []);

  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(10);
  const [filter, setFilter] = useState('');
  const [order, setOrder] = useState(false);

  return (
    <Container>
      {error && <Message>Falha na requisição, tente novamente!</Message>}
      {loadingInfo && <Message>Carregando...</Message>}
      {currenciesInfo.length !== 0 && (
        <>
          <h2>Ranking das Criptomoedas</h2>
          <span>
            Clique nos títulos da tabela para ordernar os números em ordem
            crescente ou decrescente. Para ver mais informações sobre um par de
            moedas específico, clique sobre seu nome!
          </span>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <TH
                    background={
                      filter === 'percentChange' ? '#00b49d' : '#212121'
                    }
                    onClick={() => {
                      setFilter('percentChange');
                      setOrder(!order);
                    }}
                  >
                    Variação (%)
                  </TH>
                  <TH
                    background={filter === 'baseVolume' ? '#00b49d' : '#212121'}
                    onClick={() => {
                      setFilter('baseVolume');
                      setOrder(!order);
                    }}
                  >
                    Volume base
                  </TH>
                  <TH
                    background={
                      filter === 'quoteVolume' ? '#00b49d' : '#212121'
                    }
                    onClick={() => {
                      setFilter('quoteVolume');
                      setOrder(!order);
                    }}
                  >
                    Volume ajustado{' '}
                    <Tooltip info="Calculado através do volume base dividido pelo preço médio nas últimas 24h." />
                    <ReactTooltip type="light" effect="solid" />
                  </TH>
                </tr>
              </thead>
              <tbody>
                {/* função que recebe os nomes e informações das moedas, dados de paginação e de filtro,retornando
                um array paginado (10 elementos de cada vez), filtrado e ordenado (caso o filtro exista): */}
                {rankingFilterPagination(
                  currenciesInfo,
                  startPage,
                  endPage,
                  filter,
                  order
                ).map(({ name, percentChange, baseVolume, quoteVolume }) => (
                  <tr
                    onClick={() => history.push(`/orders/${name}`)}
                    key={name}
                  >
                    <TD data-testid="currency-name">{name}</TD>
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
