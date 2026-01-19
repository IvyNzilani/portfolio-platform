

import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      <h2>Our Projects ({projects.length})</h2>
      <div className="projects-grid">
        {projects.length === 0 ? (
          <p className="no-projects">No projects found. Try a different search or add a new project!</p>
        ) : (
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  )
}

export default ProjectList
