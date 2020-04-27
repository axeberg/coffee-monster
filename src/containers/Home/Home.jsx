import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <div>
      <header className="header" id="header">
        <div className="container">
          <h1>This is Coffee Monster</h1>
          <ul className="we-create">
            <li>A place were all us coffee monsters can hang out.</li>
          </ul>
          <Link className="link" to="/fresh">
            Seriously, get me coffee!
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
