import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <div className="content">

        <a
          href="https://github.com/riccjohn"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          id="github"
        >
          <img src="/img/github-icon.svg" alt="github" />
        </a>
        <p>Made with <span>♥</span> in Madison, WI</p>
        <a
          href="mailto:john@jriccardi.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
          id="email"
        >
          <img src="/img/email-icon.svg" alt="email" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
