import { Provider } from 'mobx-react';
import appStore from '../models/app';
import React from 'react';
import {HashRouter, Switch, Redirect} from 'react-router-dom';
import initRouter from './handle';
import routes from './routes';

function Router () {
  return (
    <Provider appStore={appStore}>
      <HashRouter>
        <Switch>
          {
            initRouter(routes)
          }
          <Redirect from="/*" to="/" />
        </Switch>
      </HashRouter>
    </Provider>
  )
}
function ChildrenRouter (childrenRules) {
  return initRouter(childrenRules);
}

export {
  Router,
  ChildrenRouter
};