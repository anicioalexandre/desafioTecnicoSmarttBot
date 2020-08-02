// essa função recebe o objeto (gerado pela API) de informações das criptomoedas do tipo
// { BTC_BTS: {...}, ... , USDT_RING: {...}} e o transforma em um array com o nome de cada
// moeda dentro do seu respectivo objeto que contém as demais informações das moedas do tipo
// [ { ..., name: 'BTC_BTS' }, ... , { ..., name: 'USDT_RING' } ]

const createCurrenciesInfoArray = (currenciesInfo) => {
  let currenciesInfoArray = [];
  Object.entries(currenciesInfo).forEach(([currencyName, currencyValues]) => {
    currencyValues.name = currencyName;
    currenciesInfoArray = [...currenciesInfoArray, currencyValues];
  });
  return currenciesInfoArray;
};

export default createCurrenciesInfoArray;
