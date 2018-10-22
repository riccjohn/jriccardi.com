import React, { Component } from 'react';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
