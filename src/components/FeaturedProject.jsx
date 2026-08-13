import React from 'react';
import imgPlaceholder from '../assets/images/Img Placeholder.png';

function FeaturedProject({ project, onSelectProject }) {
  if (!project) return null;

  return (
    <div className="featured-card">
      <div className="featured-image-wrapper">
        <div className="featured-image-canvas">
          <img src={imgPlaceholder} alt={project.title} className="featured-img" />
        </div>
      </div>

      <div className="featured-details">
        <h3 className="featured-title">{project.title}</h3>
        <p className="featured-description">{project.subtitle || project.description}</p>
        
        <ul className="tags-list featured-tags">
          {project.tags.map((tag, idx) => (
            <li key={idx} className="tag-badge tag-light-bg">
              {tag}
            </li>
          ))}
        </ul>

        <button
          className="btn-primary"
          onClick={() => onSelectProject(project)}
        >
          See project
        </button>
      </div>
    </div>
  );
}

export default FeaturedProject;
