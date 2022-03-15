import React from 'react';
// eslint-disable-next-line
import App from './App';
// eslint-disable-next-line
import finance from './finance';
import {Route, Switch, Redirect} from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/App" component={App} />
        <Route exact path="/">
          <Redirect to="/App" />
        </Route>
        <Route exact path="/finance" component={finance} />
      </Switch>
    </div>
  );
};