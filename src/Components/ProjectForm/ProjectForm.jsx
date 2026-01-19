import React, { useState } from 'react';

const ProjectForm = ({ onAddProject, isVisible, onToggle }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    technologies: '',
    image: '',
    link: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
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

    onAddProject(newProject);
    setFormData({
      name: '',
      description: '',
      technologies: '',
      image: '',
      link: ''
    });
    onToggle();
  };

  return (
    <div className="project-form-container">
      <button className="toggle-form-btn" onClick={onToggle}>
        {isVisible ? '✕ Close Form' : '+ Add New Project'}
      </button>
      
      {isVisible && (
        <div className="project-form">
          <h2>Add New Project</h2>
          <input
            type="text"
            name="name"
            placeholder="Project Name *"
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Project Description *"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="technologies"
            placeholder="Technologies (comma-separated) *"
            value={formData.technologies}
            onChange={handleChange}
          />
          <input
            type="url"
            name="image"
            placeholder="Image URL (optional)"
            value={formData.image}
            onChange={handleChange}
          />
          <input
            type="url"
            name="link"
            placeholder="Project Link (optional)"
            value={formData.link}
            onChange={handleChange}
          />
          <button className="submit-btn" onClick={handleSubmit}>
            Add Project
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectForm;