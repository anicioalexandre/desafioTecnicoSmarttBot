import React, { useContext } from 'react';
import CriptoChartContext from '../context/CriptoChartContext';
import { ChartButton, ButtonsContainer, H3 } from '../styles/ChartOptions';
import { timesNames } from '../services/availableIntervals';

const ChartOptionsData = () => {
  const { setInterval, startTime, setStartTime } = useContext(CriptoChartContext);

  return (
    <ButtonsContainer>
      <H3>Tempo: </H3>
      {[86400, 432000, 2592000, 15552000, 31536000].map((someTime) => (
        <ChartButton
          background={startTime === someTime ? '#00b49d' : 'gray'}
          color={startTime === someTime ? '#fff' : '#000'}
          onClick={() => {
            setStartTime(someTime);
            setInterval(14400); // iniciando no intervalo default (4 horas)
          }}
          key={someTime}
        >
          {timesNames(someTime)}
        </ChartButton>
      ))}
    </ButtonsContainer>
  );
};

export default ChartOptionsData;
