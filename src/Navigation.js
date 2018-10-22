import React from 'react';

const Navigation = () => {
  return (
    <nav class="desktop flex">
      <a href="#home">
        <i class="material-icons">code</i>
      </a>
      <a class="section" href="#about">
        About
      </a>
      <a class="section" href="#work">
        Work
      </a>
      <a class="section" href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default Navigation;
