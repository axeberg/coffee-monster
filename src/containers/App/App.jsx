import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Home from '../Home/Home';
import FreshBrews from '../FreshBrews/FreshBrews';
import OtherMonsters from '../OtherMonsters/OtherMonsters';

import './App.css';

const App = () => (
  <div className="app">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/fresh">
          <FreshBrews />
        </Route>
        <Route exact path="/monsters">
          <OtherMonsters />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default App;
