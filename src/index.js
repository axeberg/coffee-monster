import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App/App';
import Favorites from './containers/Favorites/Favorites';
import Profile from './containers/Profile/Profile';

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path='/favorites' component={Favorites} />
      <Route path='/profile' component={Profile} />
    </Route>
  </Router>
  ),document.getElementById('root'));
