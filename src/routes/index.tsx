import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact render={() => (<Redirect to="/login" />)} />
    <Route path="/login" exact component={Login} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;
