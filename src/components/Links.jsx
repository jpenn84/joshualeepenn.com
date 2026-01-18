import React from 'react';

const links = [
  {
    title: "My GitHub Profile",
    description: "Check out my open source contributions and personal projects",
    icon: "fa-brands fa-github",
    url: "https://github.com/jpenn84"
  },
  {
    title: "My LinkedIn Profile",
    description: "Connect with me professionally",
    icon: "fa-brands fa-linkedin",
    url: "https://www.linkedin.com/in/joshua-lee-penn"
  }
];

const Links = () => {
  return (
    <section id="links" className="pt-3 pb-5 bg-light">
      <div className="container pb-3">
        <h2 className="text-center m-3 fw-bold">Links</h2>
        <div className="row g-4">
          {links.map((link, index) => (
            <div key={index} className="col-md-6 col-lg-6">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none" aria-label={link.title}>
                <div className="card h-100 border-0 shadow-sm p-4">
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <i className={`${link.icon} fa-2x text-primary`} aria-hidden="true"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-bold mb-2">{link.title}</h3>
                      <p className="text-muted mb-0 small">{link.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
