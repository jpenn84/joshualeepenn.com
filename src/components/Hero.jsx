import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="py-5 text-center text-white circuit-bg">
      <div className="container py-5">
        <img 
          src="https://placecats.com/300/300" 
          alt="Personal Avatar" 
          className="rounded-circle border border-4 border-white shadow-lg mb-4" 
          style={{ width: '180px', height: '180px', objectFit: 'cover' }} 
        />
        <h1 className="display-4 fw-bold">Hello, I'm a Multidisciplinary Enthusiast</h1>
        <p className="lead">Building software, collecting history, navigating cities, and soldering circuits.</p>
      </div>
    </section>
  );
};

export default Hero;
