import React, {Component} from 'react';
import {Link} from 'react-router'

import Header from '../../components/Header/Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
