import React from 'react';
import { Switch } from 'react-router-dom';

import AppRoute from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <AppRoute path="/" exact component={SignIn} />
    <AppRoute path="/signup" component={SignUp} />
    <AppRoute path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
