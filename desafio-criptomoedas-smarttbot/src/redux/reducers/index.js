import { combineReducers } from 'redux';
import currenciesInfos from './currenciesInfoAPI';
import currencyChart from './currencyChartAPI';
import orderBook from './orderBookAPI';

export default combineReducers({ currenciesInfos, orderBook, currencyChart });
