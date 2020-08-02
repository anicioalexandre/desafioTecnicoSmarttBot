import createCurrenciesInfoArray from './createCurrenciesInfoArray';

const rankingFilterPagination = (currenciesInfo, start, end) => {
  const currenciesInfoArray = createCurrenciesInfoArray(currenciesInfo);
  return currenciesInfoArray.slice(start, end);
};

export default rankingFilterPagination;
