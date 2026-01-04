import React from 'react';
import Hero from './Hero';
import Interests from './Interests';
import Articles from './Articles';
import Links from './Links';

const LandingPage = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <Interests />
      <Articles onNavigate={onNavigate} />
      <Links />
    </>
  );
};

export default LandingPage;
