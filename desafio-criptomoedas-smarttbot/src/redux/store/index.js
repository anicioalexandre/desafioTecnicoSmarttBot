import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootCombiner from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(
  rootCombiner,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
