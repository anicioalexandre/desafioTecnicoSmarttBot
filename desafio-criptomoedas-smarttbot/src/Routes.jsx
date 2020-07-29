import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Prices from './pages/Prices';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Prices} />
    </Switch>
  );
};

export default Routes;
