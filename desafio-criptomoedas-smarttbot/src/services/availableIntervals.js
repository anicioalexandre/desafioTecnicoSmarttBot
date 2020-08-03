export const availableIntervals = (selectedTime) => {
  switch (selectedTime) {
    case 86400: //1 dia
      return [300, 900, 1800, 7200, 14400];
    case 432000: //5 dias
      return [1800, 7200, 14400, 86400];
    case 2592000: //1 mês
      return [7200, 14400, 86400];
    case 15552000: //6 meses
      return [14400, 86400];
    case 31536000: //1 ano
      return [14400, 86400];
    default:
      break;
  }
};

export const intervalsNames = (interval) => {
  switch (interval) {
    case 300:
      return '5min';
    case 900:
      return '15min';
    case 1800:
      return '30min';
    case 7200:
      return '2 horas';
    case 14400:
      return '4 horas';
    case 86400:
      return '24 horas';
    default:
      break;
  }
};

export const timesNames = (times) => {
  switch (times) {
    case 86400:
      return '1 dia';
    case 432000:
      return '5 dias';
    case 2592000:
      return '1 mês';
    case 15552000:
      return '6 meses';
    case 31536000:
      return '1 ano';
    default:
      break;
  }
};
