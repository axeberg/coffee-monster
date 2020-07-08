import React from 'react';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <h3>
        Hacked with much
        {' '}
        <span aria-label="heart-emoji" role="img">💖</span>
        {' '}
        by
        {' '}
        <span className="twitter-handle" aria-label="twitter">@axelolsson</span>
      </h3>
    </div>
  </footer>
);

export default Footer;
