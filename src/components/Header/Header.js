import React from 'react';
import { Link } from 'react-router'

import logo from './coffeemonster.png';

const Header = ({}) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <nav className="App-nav navbar navbar-dark">
      <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse"></button>
      <div className="collapse navbar-toggleable-md" id="mainNavbarCollapse">
        <ul className="nav navbar-nav">
          <Link className='nav-item nav-link' to='/'>Home</Link>
          <Link className='nav-item nav-link' to='/favorites'>Favorites</Link>
          <Link className='nav-item nav-link' to='/profile'>Profile</Link>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
