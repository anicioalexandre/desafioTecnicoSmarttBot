import React, { useEffect, useState } from 'react';
import {
  CurrenciesListStyle,
  InputButtonContainer,
  Container,
  CurrencyName,
} from '../styles/CurrenciesList';
import { connect } from 'react-redux';
import { getCurrenciesNames } from '../redux/actions/currenciesInfos';
import { getOrders } from '../redux/actions/orderBook';
import { useHistory } from 'react-router-dom';
import filterCurrenciesNames from '../services/filterCurrencies';
import Input from './smallComponents/Input';
import Button from './smallComponents/Button';
import SearchIcon from '../svg/SearchIcon';

const CurrenciesList = ({
  getCurrenciesNames,
  currenciesNames,
  getOrders,
  orders,
  loadingNames,
  error,
}) => {
  useEffect(() => {
    getCurrenciesNames('https://poloniex.com/public?command=returnTicker');
  }, [getCurrenciesNames]);

  const [inputValue, setInputValue] = useState('');
  const [selectedCurrency, setCurrency] = useState(null);
  let history = useHistory();

  return (
    <Container>
      <InputButtonContainer>
        <Input
          placeholder="Busque por par de moedas"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          background={!selectedCurrency ? 'gray' : '#00b49d'}
          disabled={!selectedCurrency}
          onClick={() => history.push(`/orders/${selectedCurrency}`)}
        >
          <SearchIcon />
        </Button>
      </InputButtonContainer>
      <CurrenciesListStyle>
        {error && <h3>Falha na requisição, tente novamente!</h3>}
        {loadingNames && <h3>Carregando...</h3>}
        {/* função de filtro que recebe os nomes das moedas e retorna um array filtrado, caso o filtro exista */}
        {filterCurrenciesNames(currenciesNames, inputValue).map(
          (currencyName) => (
            <CurrencyName
              background={currencyName === selectedCurrency ? '#00B49D' : '#c4c4c4'}
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
  currenciesNames: state.currenciesInfos.namesList,
  error: state.currenciesInfos.error,
  loadingNames: state.currenciesInfos.loadingNames,
  orders: state.orderBook.orders,
});

const mapDispatch = {
  getCurrenciesNames,
  getOrders,
};

export default connect(mapState, mapDispatch)(CurrenciesList);
