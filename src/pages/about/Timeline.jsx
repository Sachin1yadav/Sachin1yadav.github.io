// Timeline.jsx
import React from 'react';
import './Timeline.scss';

const Timeline = () => {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "SPS",
      duration: "Feb '24 — Present",
      description: "Contributed to the development and maintenance of complex web applications, ensuring high performance and responsiveness.",
    },
    {
      role: "Frontend Developer",
      company: "Furation Tech Solutions Pvt",
      duration: "Jan '23 — Jan '24",
      description: "Developed and implemented interactive web interfaces using React and Redux.",
    },
  ];

  return (
    <div className="timeline">
      {experiences.map((experience, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-role">{experience.role}</h3>
            <h4 className="timeline-company">{experience.company}</h4>
            <span className="timeline-duration">{experience.duration}</span>
            <p className="timeline-description">{experience.description}</p>
          </div>
          {index !== experiences.length - 1 && <div className="timeline-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
