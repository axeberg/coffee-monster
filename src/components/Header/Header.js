import React from 'react';
import {Link} from 'react-router'

const Header = ({}) => (
    <div className="App-header">
        <nav className="main-nav-outer">
            <div className="container">
                <ul className="main-nav">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/fresh">Fresh brews</Link>
                    </li>
                    <li>
                        <Link to="/monsters">Monsters!</Link>
                    </li>
                    <li className="small-logo">
                        <a href="#header"><img src={process.env.PUBLIC_URL + 'img/logo.png'}/></a>
                    </li>
                    <li>
                        <Link to="/home">Some</Link>
                    </li>
                    <li>
                        <Link to="/home">Other</Link>
                    </li>
                    <li>
                        <Link to="/home">Place</Link>
                    </li>
                </ul>
                <a className="res-nav_click" href="#">
                    <i className="fa-bars"></i>
                </a>
            </div>
        </nav>
    </div>
);

export default Header;
