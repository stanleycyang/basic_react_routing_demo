import React from 'react';
import Router from 'react-router';

import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// Import Main Views
import ChatApp from './components/ChatApp';
import Login from './components/Login';

const routes = (
  <Route name='app' path='/' handler={ChatApp}>
    <Route name='login' path='/login' handler={Login}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

