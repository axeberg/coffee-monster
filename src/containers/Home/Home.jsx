import React from 'react';

import './Home.css';

class Home extends React.Component {

    render() {
        return (
            <div>
                <header className="header" id="header">
                    <div className="container">
                        <h1>This is Coffee Monster</h1>
                        <ul className="we-create">
                            <li>A place were all us coffee monsters can hang out.</li>
                        </ul>
                        <a className="link" href="#">Seriously, get me coffee!</a>
                    </div>
                </header>
            </div>
        );
    };
}

export default Home;
