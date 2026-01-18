import React from 'react';
import mainImage from '../assets/main.png';

const Hero = () => {
  return (
    <section id="about" className="text-center text-white circuit-bg">
      <div className="container pt-4 pb-3 position-relative">
        <img
          src={mainImage}
          alt="Joshua Lee Penn"
          className="rounded-circle border border-4 border-white shadow-lg mb-4 position-relative"
          style={{ width: '100%', maxWidth: '540px', height: 'auto', aspectRatio: '1/1', objectFit: 'cover', zIndex: 1 }}
        />
        <h1 className="display-4 fw-bold">Hello, I'm Joshua Lee Penn</h1>
        <p className="lead">Software Engineer, Numismatist, Mass Transit Nerd, Electronics Hobbyist</p>
      </div>
    </section>
  );
};

export default Hero;
