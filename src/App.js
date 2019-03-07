import React, { Component } from 'react';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import ProjectCards from './ProjectCards';
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
