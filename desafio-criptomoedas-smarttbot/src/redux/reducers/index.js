import { combineReducers } from 'redux';
import currenciesInfos from './currenciesInfos';
import orderBook from './orderBookAPI';

export default combineReducers({ currenciesInfos, orderBook });
