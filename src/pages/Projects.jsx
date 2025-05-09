import React from 'react';
import { ProjectItem } from '../components/ProjectItem';
import { data } from '../utils/data';

function Projects() {
  return (
    <section className='projects'>
      {data.projects.map( project => (
        <ProjectItem 
          key={project.name}
          name={project.name}
          description={project.description}
          deploy={project.deploy}
          github={project.github}
          tecnologies={project.tecnologies}
          picture={project.picture}
          />
      ))}
    </section>
  )
}

export { Projects };