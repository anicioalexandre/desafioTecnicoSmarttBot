import React, { useContext } from 'react';
import CriptoChartContext from '../context/CriptoChartContext';
import { ChartButton, ButtonsContainer, H3 } from '../styles/ChartOptions';

const ChartOptionsData = () => {
  const { visibleData, setvisibleData, setvisibleData2 } = useContext(
    CriptoChartContext
  );

  return (
    <ButtonsContainer>
      <H3>Tipo: </H3>
      <ChartButton
        background={visibleData === 'weightedAverage' ? '#00b49d' : 'gray'}
        color={visibleData === 'weightedAverage' ? '#fff' : '#000'}
        onClick={() => {
          setvisibleData('weightedAverage');
          setvisibleData2('');
        }}
      >
        Média ponderada
      </ChartButton>
      <ChartButton
        color={visibleData === 'high' ? '#fff' : '#000'}
        background={visibleData === 'high' ? '#00b49d' : 'gray'}
        onClick={() => {
          setvisibleData('high');
          setvisibleData2('low');
        }}
      >
        Máxima & Mínima
      </ChartButton>

      <ChartButton
        color={visibleData === 'volume' ? '#fff' : '#000'}
        background={visibleData === 'volume' ? '#00b49d' : 'gray'}
        onClick={() => {
          setvisibleData('volume');
          setvisibleData2('');
        }}
      >
        Volume base
      </ChartButton>
      <ChartButton
        color={visibleData === 'quoteVolume' ? '#fff' : '#000'}
        background={visibleData === 'quoteVolume' ? '#00b49d' : 'gray'}
        onClick={() => {
          setvisibleData('quoteVolume');
          setvisibleData2('');
        }}
      >
        Volume ajustado
      </ChartButton>
    </ButtonsContainer>
  );
};

export default ChartOptionsData;
