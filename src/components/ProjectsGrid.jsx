import React from 'react';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

function ProjectsGrid({ featuredProject, gridProjects, onSelectProject }) {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">My Recent Works</h2>
          <div className="section-divider" />
        </div>

        <FeaturedProject
          project={featuredProject}
          onSelectProject={onSelectProject}
        />

        <div className="projects-grid">
          {gridProjects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              cardIndex={index}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsGrid;
