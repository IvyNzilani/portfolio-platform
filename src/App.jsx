import React, { useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/375896/pexels-photo-375896.jpeg',
      link: ''
    },
    {
      id: 2,
      name: 'Task Management App',
      description:
        'A collaborative task management tool with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://images.pexels.com/photos/6833785/pexels-photo-6833785.jpeg',
      link: ''
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      description:
        'Real-time weather information dashboard with 7-day forecasts and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      image: 'https://images.pexels.com/photos/17718280/pexels-photo-17718280.jpeg',
      link: ''
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    technologies: '',
    image: '',
    link: ''
  });

  const handleAddProject = () => {
    if (!formData.name || !formData.description || !formData.technologies) {
      alert('Please fill in all required fields');
      return;
    }

    const newProject = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      technologies: formData.technologies.split(',').map(t => t.trim()),
      image: formData.image,
      link: formData.link
    };

    setProjects([newProject, ...projects]);
    setFormData({
      name: '',
      description: '',
      technologies: '',
      image: '',
      link: ''
    });
    setShowForm(false);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Portfolio Showcase</h1>
        <p>Explore and manage creative projects</p>
      </header>

      <div className="container">
        <div className="project-form-container">
          <button
            className="toggle-form-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? '✕ Close Form' : '+ Add New Project'}
          </button>

          {showForm && (
            <div className="project-form">
              <h2>Add New Project</h2>

              <input
                type="text"
                placeholder="Project Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <textarea
                placeholder="Project Description *"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Technologies (comma-separated) *"
                value={formData.technologies}
                onChange={(e) =>
                  setFormData({ ...formData, technologies: e.target.value })
                }
              />

              <input
                type="url"
                placeholder="Image URL (optional)"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />

              <input
                type="url"
                placeholder="Project Link (optional)"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
              />

              <button className="submit-btn" onClick={handleAddProject}>
                Add Project
              </button>
            </div>
          )}
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search projects by name, description, or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="project-list">
          <h2>Projects ({filteredProjects.length})</h2>

          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <div key={project.id} className="project-card">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="project-image"
                    />
                  ) : (
                    <div className="project-image-placeholder">
                      <span>{project.name.charAt(0)}</span>
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

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project →
                        </a>
                      )}

                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        style={{
                          marginLeft: 'auto',
                          background: '#ef4444',
                          color: 'white',
                          border: 'none',
                          padding: '0.5rem 1rem',
                          borderRadius: '8px',
                          cursor: 'pointer'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-projects">
                No projects found. Try a different search or add a new project.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
