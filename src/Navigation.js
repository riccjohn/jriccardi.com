import React from 'react';
import Icon from '@material-ui/core/Icon';

const Navigation = () => {
  return (
    <nav className="desktop flex">
      <a href="#home">
        <Icon fontSize="large">code</Icon>
      </a>
      <a className="section" href="#about">
        About
      </a>
      <a className="section" href="#work">
        Work
      </a>
      <a className="section" href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default Navigation;
