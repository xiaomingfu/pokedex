import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pokegame from './pokegame';
import './index.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                < Pokegame />
            </div>

        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'));