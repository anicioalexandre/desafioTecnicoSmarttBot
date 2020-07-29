import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../redux/reducers';
import thunk from 'redux-thunk';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducers, applyMiddleware(thunk)) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export default renderWithRedux;
