import React from 'react';

const Projects = () => {
  return (
    <div id="work">
      <h1 className="button">Projects</h1>
      <div className="content">
        <a href='https://github.com/riccjohn/react-ui-animations'>
          <div id="reactUi" className="project">
            <div className="thumbnail" />
            <div className="description">
              <p><span className="title">React-UI-Animations</span>
                React component library, Anime.js
              </p>
            </div>
          </div>
        </a>
        <a href='https://github.com/Hangry-App/Hangry'>
          <div id="hangry" className="project">
            <div className="thumbnail" />
            <div className="description">
              <p><span className="title">Hangry</span>
                React Native, Firebase, Foursquare API
              </p>
            </div>
          </div>
        </a>
        <a href='https://medium.com/coinmonks/understanding-and-building-your-own-tiny-blockchain-in-javascript-a16f2137cfec'>
          <div id="blockchain" className="project">
            <div className="thumbnail" />
            <div className="description">
              <p><span className="title">JS Blockchain Article</span>
                Medium article, node.js, javascript, blockchain
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
