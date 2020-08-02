import createCurrenciesInfoArray from './createCurrenciesInfoArray';

// função pra ordernar números em ordem ASC (order = false) ou DESC (order = true):
const compareNumbers = (columnType, order) => (a, b) => {
  let comparison = 0;
  if (Number(a[columnType]) > Number(b[columnType])) {
    comparison = 1;
  } else if (Number(a[columnType]) < Number(b[columnType])) {
    comparison = -1;
  }
  return order ? comparison * -1 : comparison;
};

const rankingFilterPagination = (currenciesInfo, start, end, filter, order) => {
  const currenciesInfoArray = createCurrenciesInfoArray(currenciesInfo);
  if (filter) currenciesInfoArray.sort(compareNumbers(filter, order));
  return currenciesInfoArray.slice(start, end);
};

export default rankingFilterPagination;
