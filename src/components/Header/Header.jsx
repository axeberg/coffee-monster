import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="App-header">
    <nav className="main-nav-outer">
      <div className="container">
        <ul className="main-nav">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/fresh">Fresh brews</NavLink>
          </li>
          <li>
            <NavLink exact to="/monsters">Monsters!</NavLink>
          </li>
          <li className="small-logo">
            <a href="#header">
              <img src={`${process.env.PUBLIC_URL}img/logo.png`} alt="" />
            </a>
          </li>
        </ul>
        <a className="res-nav_click" href="/">
          <i className="fa-bars" />
        </a>
      </div>
    </nav>
  </div>
);

export default Header;
