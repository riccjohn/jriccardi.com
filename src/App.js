import React, { Component } from 'react';
import Navigation from './Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
