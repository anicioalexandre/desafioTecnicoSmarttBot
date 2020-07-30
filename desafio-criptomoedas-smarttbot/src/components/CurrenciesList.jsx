import React, { useEffect, useState } from 'react';
import {
  CurrenciesListStyle,
  InputButtonContainer,
  Container,
  CurrencyName,
} from '../styles/CurrenciesList';
import { connect } from 'react-redux';
import { getCurrenciesNames } from '../redux/actions/currenciesNames';
import filterCurrenciesNames from '../services/filterCurrencies';
import Input from './smallComponents/Input';
import Button from './smallComponents/Button';
import SearchIcon from '../svg/SearchIcon';
import { getOrders } from '../redux/actions/orderBook';

const CurrenciesList = ({
  getCurrenciesNames,
  getOrders,
  currenciesNames,
  loading,
  error,
  orders,
}) => {
  useEffect(() => {
    getCurrenciesNames('https://poloniex.com/public?command=returnTicker');
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [selectedCurrency, setCurrency] = useState(null);

  return (
    <Container>
      <InputButtonContainer>
        <Input
          placeholder="Busque sua moeda"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          disabled={!selectedCurrency}
          animation={
            selectedCurrency && orders.length === 0 ? 'infinite' : 'none'
          }
          onClick={() =>
            getOrders(
              `https://poloniex.com/public?command=returnOrderBook&currencyPair=${selectedCurrency}&depth=10`
            )
          }
        >
          <SearchIcon />
        </Button>
      </InputButtonContainer>
      <CurrenciesListStyle>
        {error && <p>Falha na requisição, tente novamente!</p>}
        {loading && <p>Carregando...</p>}
        {/* função de filtro que recebe os nomes das moedas e retorna um array filtrado, caso o filtro exista */}
        {filterCurrenciesNames(currenciesNames, inputValue).map(
          (currencyName) => (
            <CurrencyName
              background={
                currencyName === selectedCurrency ? '#00B49D' : '#c4c4c4'
              }
              color={currencyName === selectedCurrency ? '#fff' : '#000'}
              onClick={() => setCurrency(currencyName)}
              key={currencyName}
            >
              {currencyName}
            </CurrencyName>
          )
        )}
      </CurrenciesListStyle>
    </Container>
  );
};

const mapState = (state) => ({
  currenciesNames: state.currenciesNames.namesList,
  loading: state.currenciesNames.loading,
  error: state.currenciesNames.error,
  orders: state.orderBook.orders,
});

const mapDispatch = {
  getCurrenciesNames,
  getOrders,
};

export default connect(mapState, mapDispatch)(CurrenciesList);
