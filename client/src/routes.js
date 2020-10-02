import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export const useRoutes = (isAuth) => {
  return isAuth ? (
    <Switch>
      <Route path='/' exact component={Home} />
      <Redirect to='/' />
    </Switch>
  ) : (
    <Switch>
      <Route path='/login' component={SignIn} />
      <Route path='/register' component={SignUp} />
      <Redirect to='/login' />
    </Switch>
  );
};
