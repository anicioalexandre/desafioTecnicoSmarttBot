const filterCurrenciesNames = (currenciesData, inputValue) => {
  let filteredCurrencies = [...currenciesData];
  if (inputValue)
  filteredCurrencies = filteredCurrencies.filter((currencyName) =>
      currencyName.toLowerCase().includes(inputValue.toLowerCase())
    );
  return filteredCurrencies;
};

export default filterCurrenciesNames;
