import React from 'react';

const Navbar = ({ onNavigate }) => {
  const handleNavClick = (e, section) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('landing');
    }
    setTimeout(() => {
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" onClick={(e) => handleNavClick(e, '#about')}>Joshua Lee Penn</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
            <li className="nav-item"><a className="nav-link" href="#interests" onClick={(e) => handleNavClick(e, '#interests')}>Interests</a></li>
            <li className="nav-item"><a className="nav-link" href="#links" onClick={(e) => handleNavClick(e, '#links')}>Links</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
