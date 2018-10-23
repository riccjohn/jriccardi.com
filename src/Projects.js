import React from 'react';

const Projects = () => {
  return (
    <div id="work">
      <h1 className="button">Projects</h1>
      <div className="content">

          <div id="reactUi" className="project">
            <div className="thumbnail" />
            <div className="description">
              <p><span className="title">React-UI-Animations</span>
                React component library, Anime.js
              </p>
            </div>
          </div>
          <div id="hangry" className="project">
            <div className="thumbnail" />
            <div className="description">
              <p><span className="title">Hangry</span>
                React Native, Firebase, Foursquare API
              </p>
            </div>
          </div>
          <div className="project">
            <div className="thumbnail" />
            <div className="description">
              <p>
                Mare Tranquillitatis
                {'\n'}
                Cinema4D, After Effects, Photoshop &amp; Illustrator
              </p>
            </div>
          </div>
          <div className="project">
            <div className="thumbnail" />
            <div className="description">
              <p>
                Mini Machines
                {'\n'}
                Cinema4D &amp; Photoshop
              </p>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Projects;
