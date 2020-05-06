import React from 'react';
import '../style/projects.scss';

function ProjectItem({name, image, link, git, description, tech}) {
  const techUsed = () => {
    let result = [];
    tech.forEach(t => {
      result.push(<li key={t}>{t}</li>)
    })
    return result;
  }

  return (
    <div className="project-card">
      <div className="card-image">
        <img src={image} alt=""/>
      </div>
      <div className="name-info">
        <h1>{name}</h1>
        <hr/>
        <p className="text-left">{description}</p>
      </div>
      <ul className="tech">{techUsed()}</ul>
      <a href={link} target="blank"><i className="fa fa-github"></i>Website</a>
      <a href={git} target="blank"><i className="fa fa-globe"></i>Code</a>
    </div>
  )
}

export default ProjectItem;
