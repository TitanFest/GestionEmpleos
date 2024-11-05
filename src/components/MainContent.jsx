import React, { useState } from 'react';
import '../styles/MainContent.css';
import { FaBriefcase } from 'react-icons/fa';
import JobModal from './JobModal';

const MainContent = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOffers = [
    { 
      id: 1, 
      title: 'Desarrollador Frontend',
      location: 'Lima, Perú',
      salary: 'S/. 3,000 - 5,000',
      type: 'Tiempo completo',
      description: 'Buscamos un desarrollador frontend con experiencia en React...',
      requirements: [
        'Experiencia con React',
        'Conocimientos de HTML, CSS y JavaScript',
        'Experiencia con control de versiones Git',
        'Capacidad de trabajo en equipo'
      ]
    },
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="main-content">
      <div className="quick-jobs">EMPLEOS RÁPIDOS</div>
      {jobOffers.map((job) => (
        <div 
          key={job.id} 
          className="job-card"
          onClick={() => handleJobClick(job)}
        >
          <FaBriefcase className="job-icon" />
          <span className="job-title">{job.title}</span>
        </div>
      ))}

      {selectedJob && (
        <JobModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </div>
  );
};

export default MainContent;
