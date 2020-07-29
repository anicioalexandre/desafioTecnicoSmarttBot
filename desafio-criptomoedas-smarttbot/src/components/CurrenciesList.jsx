import React, { useEffect, useState } from 'react';
import { CurrenciesListStyle } from '../styles/CurrenciesListStyle';
import { connect } from 'react-redux';
import { getCurrenciesNames } from '../redux/actions/currenciesNames';
import { Input } from '../styles/InputStyle';
import filterCurrenciesNames from '../services/filterCurrencies';

const CurrenciesList = ({ getCurrenciesNames, currenciesNames }) => {
  useEffect(() => {
    getCurrenciesNames('https://poloniex.com/public?command=returnTicker');
  }, []);

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Input onChange={(e) => setInputValue(e.target.value) } />
      <CurrenciesListStyle>
        {filterCurrenciesNames(currenciesNames, inputValue).map((currencyName) => (
          <p key={currencyName}>{currencyName}</p>
        ))}
      </CurrenciesListStyle>
    </>
  );
};

const mapState = (state) => ({
  currenciesNames: state.currenciesNames.namesList,
});

const mapDispatch = {
  getCurrenciesNames,
};

export default connect(mapState, mapDispatch)(CurrenciesList);
