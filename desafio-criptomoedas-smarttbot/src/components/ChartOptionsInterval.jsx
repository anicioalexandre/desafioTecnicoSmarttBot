import React, { useContext } from 'react';
import CriptoChartContext from '../context/CriptoChartContext';
import { ChartButton, ButtonsContainer, H3 } from '../styles/ChartOptions';
import {
  availableIntervals,
  intervalsNames,
} from '../services/availableIntervals';

const ChartOptionsInterval = () => {
  const { startTime, interval, setInterval } = useContext(CriptoChartContext);

  return (
    <ButtonsContainer>
      <H3>Intervalo: </H3>
      {/* gerando botôes de intervalo dinamicamente devido ao fato de nem todos os botoes poderem ter acesso a determinados tempos 
      (por questões de tamanho dos dados de requisição de API), os tempos disponiveis para cada intervalo é determiando pela função
      availableIntervals */}
      {availableIntervals(startTime).map((someInterval) => (
        <ChartButton
          color={interval === someInterval ? '#fff' : '#000'}
          background={interval === someInterval ? '#00b49d' : 'gray'}
          onClick={() => setInterval(someInterval)}
        >
          {intervalsNames(someInterval)}
        </ChartButton>
      ))}
    </ButtonsContainer>
  );
};

export default ChartOptionsInterval;
