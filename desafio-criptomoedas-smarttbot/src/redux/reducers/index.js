import { combineReducers } from 'redux';
import currenciesNames from './currenciesNamesAPI';
import orderBook from './orderBookAPI';

export default combineReducers({ currenciesNames, orderBook });
