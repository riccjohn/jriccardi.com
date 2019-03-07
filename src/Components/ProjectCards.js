import React from 'react';
import SingleProject from './SingleProject';
import { codeProjects } from '../data/projectData';

const ProjectCards = props => {
  return (
    <div id="work">
      <h1 className="button">Projects</h1>
      <div className="content">
        { codeProjects.map( project => (
          <SingleProject key={project.id} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectCards;
