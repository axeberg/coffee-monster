import React from 'react';

import './Footer.css';

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <h3>Hacked with much 💖 at </h3>
          <img src="img/chas-logo-white-200.png" alt=""/>
        </div>
      </footer>
    );
  }
}

export default Footer;
