import React from 'react';

const ProjectCard = ({ project, onDelete }) => {
  return (
    <div className="project-card">
      {project.image ? (
        <img src={project.image} alt={project.name} className="project-image" />
      ) : (
        <div className="project-image-placeholder">
          <div className="placeholder-content">
            <span style={{ fontSize: '4rem', opacity: 0.3 }}>
              {project.name.charAt(0)}
            </span>
          </div>
        </div>
      )}
      
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project →
            </a>
          )}
          <button
            onClick={() => onDelete(project.id)}
            style={{
              marginLeft: 'auto',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;