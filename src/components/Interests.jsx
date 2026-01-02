import React from 'react';

const interests = [
  {
    title: "Software Engineering",
    icon: "fa-code",
    color: "text-primary",
    description: "Building scalable applications and solving complex problems with code."
  },
  {
    title: "Numismatics",
    icon: "fa-coins",
    color: "text-warning",
    description: "Collecting and studying coins and currency from around the world and history."
  },
  {
    title: "Mass Transit",
    icon: "fa-train",
    color: "text-info",
    description: "Exploring urban mobility and the systems that keep cities moving."
  },
  {
    title: "Electronics",
    icon: "fa-microchip",
    color: "text-danger",
    description: "Designing and building custom circuits and hardware projects."
  }
];

const Interests = () => {
  return (
    <section id="interests" className="pb-5 circuit-bg-fade">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Core Interests</h2>
        <div className="row g-4">
          {interests.map((interest, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3">
                  <i className={`fas ${interest.icon} fa-3x ${interest.color}`}></i>
                </div>
                <h3 className="h5 fw-bold mb-3">{interest.title}</h3>
                <p className="text-muted mb-0">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
