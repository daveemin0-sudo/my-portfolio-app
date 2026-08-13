import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import About from './components/About';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { featuredProject, gridProjects } from './data/projectsData';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <ProjectsGrid
          featuredProject={featuredProject}
          gridProjects={gridProjects}
          onSelectProject={handleSelectProject}
        />
        <About />
        <Contact />
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
