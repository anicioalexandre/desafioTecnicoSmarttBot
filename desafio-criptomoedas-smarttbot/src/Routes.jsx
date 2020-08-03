import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CriptoCurrency from './pages/CriptoCurrency';
import CriptoRanking from './pages/CriptoRanking';
import CriptoChart from './pages/CriptoChart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/chart/:currency" component={CriptoChart} />
      <Route path="/orders/:currency" component={CriptoCurrency} />
      <Route path="/ranking" component={CriptoRanking} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
