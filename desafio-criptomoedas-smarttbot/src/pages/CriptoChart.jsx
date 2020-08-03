/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCurrencyChart } from '../redux/actions/currencyChart';
import { useParams } from 'react-router-dom';
import convertUnixToDate from '../services/convertUnixToDate';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
} from 'recharts';
import ChartOptions from '../components/ChartOptions';
import CriptoChartContext from '../context/CriptoChartContext';
import { Container } from '../styles/CriptoRanking';
import { Message } from '../styles/CryptoCurrencies';
import ReactTooltip from 'react-tooltip';
import Tooltip from '../svg/Tooltip';

const CriptoChart = ({ getCurrencyChart, chartData, loading, error }) => {
  const actualUnixDate = Math.floor(new Date().getTime() / 1000);
  const { currency } = useParams();
  const [visibleData, setvisibleData] = useState('weightedAverage');
  const [visibleData2, setvisibleData2] = useState('');
  const [startTime, setStartTime] = useState(2592000); //default 1 mes
  const [interval, setInterval] = useState(14400); // default: 4 horas

  // estado local armazenado em um contexto (CriptoChartContext) e distribuido
  // para os filhos de ChartOptions
  const state = {
    visibleData,
    setvisibleData,
    visibleData2,
    setvisibleData2,
    startTime,
    setStartTime,
    interval,
    setInterval,
  };

  useEffect(() => {
    getCurrencyChart(
      `https://poloniex.com/public?command=returnChartData&currencyPair=${currency}&start=${
        actualUnixDate - startTime
      }&end=${actualUnixDate}&period=${interval}`
    );
  }, [currency, startTime, interval]);

  return (
    <Container>
      {error && <Message>Falha na requisição, tente novamente!</Message>}
      {loading && <Message>Carregando...</Message>}
      {chartData.length !== 0 && (
        <>
          <h2>Gráfico de {currency}</h2>
          <LineChart
            width={700}
            height={350}
            data={convertUnixToDate(chartData, startTime)}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="solid" strokeOpacity="0.1" />
            <XAxis
              tick={{ fontSize: 13 }}
              stroke="white"
              dataKey="covertedData"
            />
            <YAxis tick={{ fontSize: 13 }} stroke="white" width={70} />
            <ChartTooltip offset={100} />
            <Line
              strokeWidth={2.5}
              dot={false}
              type="monotone"
              dataKey={visibleData}
              stroke="#00b49d"
            />
            <Line
              strokeWidth={2.5}
              dot={false}
              type="monotone"
              dataKey={visibleData2}
              stroke="red"
            />
          </LineChart>

          <CriptoChartContext.Provider value={state}>
            <ChartOptions />
          </CriptoChartContext.Provider>
          <span>
            Intervalos disponíveis{' '}
            <Tooltip info="Alguns intervalos não estão disponíveis para todos os tempos, devido ao elevado volume de dados." />
            <ReactTooltip />
          </span>
        </>
      )}
    </Container>
  );
};

const mapState = (state) => ({
  chartData: state.currencyChart.chartData,
  loading: state.currencyChart.loading,
  error: state.currencyChart.error,
});

const mapDispatch = {
  getCurrencyChart,
};

export default connect(mapState, mapDispatch)(CriptoChart);
