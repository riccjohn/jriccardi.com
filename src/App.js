import React, { Component } from 'react';
import { Navigation, About, Contact, ProjectCards } from './Components/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
        <ProjectCards />
        <Contact />
      </div>
    );
  }
}

export default App;
