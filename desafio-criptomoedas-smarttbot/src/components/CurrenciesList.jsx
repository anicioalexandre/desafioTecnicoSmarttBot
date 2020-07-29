import React, { useEffect } from 'react';
import { CurrenciesListStyle } from '../styles/CurrenciesListStyle';
import { connect } from 'react-redux';
import { getCurrenciesNames } from '../redux/actions/currenciesNames';

const CurrenciesList = ({ getCurrenciesNames, currenciesNamesList }) => {
  useEffect(() => {
    getCurrenciesNames('https://poloniex.com/public?command=returnTicker');
  }, []);
  return (
    <CurrenciesListStyle>
      {currenciesNamesList.map((currencyName) => (
        <p key={currencyName}>{currencyName}</p>
      ))}
    </CurrenciesListStyle>
  );
};

const mapState = (state) => ({
  currenciesNamesList: state.currenciesNames.namesList,
});

const mapDispatch = {
  getCurrenciesNames,
};

export default connect(mapState, mapDispatch)(CurrenciesList);
