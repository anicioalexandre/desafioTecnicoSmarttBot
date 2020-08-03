import React, { useContext } from 'react';
import CriptoChartContext from '../context/CriptoChartContext';
import { ChartButton, ButtonsContainer, H3 } from '../styles/ChartOptions';
import { availableTimes, timesNames } from '../services/availableIntervals';

const ChartOptionsData = () => {
  const { interval, startTime, setStartTime } = useContext(CriptoChartContext);

  return (
    <ButtonsContainer>
      <H3>Tempo: </H3>
      {/* gerando botôes de tempo dinamicamente devido ao fato de nem todos os botoes poderem ter acesso a determinados intervalos 
      (por questões de tamanho dos dados de requisição de API), os intervalos disponiveis para cada tempo é determiando pela função
      availableTimes */}
      {availableTimes(interval).map((someTime) => (
        <ChartButton
          color={startTime === someTime ? '#fff' : '#000'}
          background={startTime === someTime ? '#00b49d' : 'gray'}
          onClick={() => setStartTime(someTime)}
        >
          {timesNames(someTime)}
        </ChartButton>
      ))}
    </ButtonsContainer>
  );
};

export default ChartOptionsData;
