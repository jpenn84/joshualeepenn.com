import React from 'react';

const links = [
  {
    title: "My GitHub Profile",
    description: "Check out my open source contributions and personal projects",
    icon: "fa-github"
  },
  {
    title: "Technical Blog",
    description: "Deep dives into software architecture and best practices",
    icon: "fa-blog"
  },
  {
    title: "LinkedIn Profile",
    description: "Connect with me professionally",
    icon: "fa-linkedin"
  },
  {
    title: "Coin Collection Gallery",
    description: "Browse my numismatic collection with high-resolution images",
    icon: "fa-coins"
  },
  {
    title: "Transit Map Projects",
    description: "Fantasy transit maps and urban planning concepts",
    icon: "fa-map"
  },
  {
    title: "Electronics Portfolio",
    description: "Schematics, PCB designs, and project writeups",
    icon: "fa-microchip"
  }
];

const Links = () => {
  return (
    <section id="links" className="pt-3 pb-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Links</h2>
        <div className="row g-4">
          {links.map((link, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <a href="https://www.fark.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <i className={`fas ${link.icon} fa-2x text-primary`}></i>
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
