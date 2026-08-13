import React from 'react';
import cardImg0 from '../assets/images/Card Works.png';
import cardImg1 from '../assets/images/Card Works (1).png';
import cardImg2 from '../assets/images/Card Works (2).png';
import cardImg3 from '../assets/images/Card Works (3).png';
import cardImg4 from '../assets/images/Card Works (4).png';
import cardImg5 from '../assets/images/Card Works (5).png';

const cardImages = [cardImg5, cardImg4, cardImg3, cardImg2, cardImg1, cardImg0];

function ProjectCard({ project, onSelectProject, cardIndex }) {
  const currentCardImg = cardImages[cardIndex % cardImages.length];

  return (
    <article className="project-grid-card">
      <div className="card-bg-wrapper">
        <img src={currentCardImg} alt={project.title} className="card-bg-img" />
        <div className="card-overlay" />
      </div>

      <div className="card-content">
        <h4 className="card-title">{project.title}</h4>
        <p className="card-description">{project.description}</p>
        
        <ul className="tags-list tags-light">
          {project.tags.map((tag, idx) => (
            <li key={idx} className="tag-badge tag-glass">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="btn-card-action"
        onClick={() => onSelectProject(project)}
        aria-label={`See details for ${project.title}`}
      >
        See project
      </button>
    </article>
  );
}

export default ProjectCard;
