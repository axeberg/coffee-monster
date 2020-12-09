import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './containers/App/App';
import Home from './containers/Home/Home';
import FreshBrews from './containers/FreshBrews/FreshBrews';
import OtherMonsters from './containers/OtherMonsters/OtherMonsters';
import NotFound from './containers/NotFound/NotFound';

import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path='/home' component={Home}/>
            <Route path='/fresh' component={FreshBrews}/>
            <Route path='/monsters' component={OtherMonsters}/>
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
), document.getElementById('root'));
