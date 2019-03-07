import React from 'react';

const SingleProject = props => {
  const { project } = props;
  return (

      <a href={project.linkUrl}>
        <div id={project.id} className="project">
          <div className='img-container'>
            <img src={project.imgUrl} alt={project.imgAlt}/>
          </div>
          <div className="description">
            <p>
              <span className="title">{project.title}</span>
              {project.description}
            </p>
          </div>
        </div>
      </a>

  )
}

export default SingleProject;
