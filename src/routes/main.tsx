import React, { FC } from 'react';
import PrivateRoute from '@/routes/PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import Profile from '@/components/Profile';
import Stocks from '@/components/Stocks';
import Admin from '@/components/Admin';

interface Props {}

const MainRoutes: FC<Props> = () => (
  <Switch>
    <PrivateRoute path="/profile" exact>
      <Profile />
    </PrivateRoute>
    <PrivateRoute path="/stocks" exact>
      <Stocks />
    </PrivateRoute>
    <PrivateRoute path="/admin" exact>
      <Admin />
    </PrivateRoute>
    <Route>
      <h1>Not found</h1>
    </Route>
  </Switch>
);

export default MainRoutes;
