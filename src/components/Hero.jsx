import React from 'react';
import mainImage from '../assets/main.png';

const Hero = () => {
  return (
    <section id="about" className="py-5 text-center text-white circuit-bg">
      <div className="container py-5">
        <img
          src={mainImage}
          alt="Personal Avatar"
          className="rounded-circle border border-4 border-white shadow-lg mb-4"
          style={{ width: '100%', maxWidth: '540px', height: 'auto', aspectRatio: '1/1', objectFit: 'cover' }}
        />
        <h1 className="display-4 fw-bold">Hello, I'm a Multidisciplinary Enthusiast</h1>
        <p className="lead">Building software, collecting history, navigating cities, and soldering circuits.</p>
      </div>
    </section>
  );
};

export default Hero;
