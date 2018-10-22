import React from 'react';

const Projects = () => {
  return (
    <div id="work">
      <h1 className="button">Projects</h1>
      <div className="content">
        <div className="section">
          <div className="project" id="project01">
            <div className="thumbnail" />
            <div className="description">
              <p>
                Project description goes here
                {'\n'}
                Cinema4D, After Effects, Photoshop &amp; Illustrator
              </p>
            </div>
          </div>
          <div className="project" id="project02">
            <div className="thumbnail" />
            <div className="description">
              <p>
                Mare Tranquillitatis
                {'\n'}
                Cinema4D, After Effects, Photoshop &amp; Illustrator
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="project" id="project03">
            <div className="thumbnail" />
            <div className="description">
              <p>
                Candy Loop
                {'\n'}
                Cinema4D, After Effects, &amp; Photoshop
              </p>
            </div>
          </div>
          <div className="project" id="project04">
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
    </div>
  );
};

export default Projects;
