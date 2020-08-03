// essa função converte a data em unix para a data convencional (ou em horas se o tempo for = 1 dia) 
// e adiciona esse novo valor em uma nova chave (convertedData) dentro de cada objeto com os valores
const convertUnixToDate = (chartData, startTime) => {
  const chartDataCopy = [...chartData];
  if (startTime <= 100000)
    chartDataCopy.forEach(
      (dataObj) =>
        (dataObj.covertedData = `${new Date(dataObj.date * 1000).getHours()}h`)
    );
  else
    chartDataCopy.forEach(
      (dataObj) =>
        (dataObj.covertedData = new Date(
          dataObj.date * 1000
        ).toLocaleDateString())
    );
  return chartDataCopy;
};

export default convertUnixToDate;

// 1 dia   : 86400
// 4 horas : 14400
// 2 horas : 7200
// 30 min  : 1800
// 15 min  : 900
// 5 min   : 300

//limites de intervalos para cada tempo
// 1 dia -> min 300 max 14400

// 5 dias -> min 1800
//
// 1 mes -> min 1800

// 6 meses -> min 86400

// 1 ano -> min 86400
