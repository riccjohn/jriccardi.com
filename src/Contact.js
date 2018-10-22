import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <div className="content">
        <a
          href="https://www.behance.net/riccjohn"
          target="_blank"
          rel="noopener noreferrer"
          title="Behance"
          id="behance"
        >
          <img src="/behance-icon.svg" alt="behance" />
        </a>
        <a
          href="https://github.com/riccjohn"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          id="github"
        >
          <img src="/github-icon.svg" alt="github" />
        </a>
        <a
          href="https://dribbble.com/jriccardi"
          target="_blank"
          rel="noopener noreferrer"
          title="Dribbble"
          id="dribbble"
        >
          <img src="/dribbble-icon.svg" alt="dribble" />
        </a>
        <a
          href="mailto:john@jriccardi.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
          id="email"
        >
          <img src="/email-icon.svg" alt="email" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
