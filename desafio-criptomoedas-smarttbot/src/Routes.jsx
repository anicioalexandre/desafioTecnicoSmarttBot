import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CriptoCurrencies from './pages/CriptoCurrencies';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/orders/:currency" component={CriptoCurrencies} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
