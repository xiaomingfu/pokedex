import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './pokedex';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                < Pokedex />
            </div>

        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'));