import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CriptoCurrency from './pages/CriptoCurrency';
import CriptoRanking from './pages/CriptoRanking';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/orders/:currency" component={CriptoCurrency} />
      <Route path="/ranking" component={CriptoRanking} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
