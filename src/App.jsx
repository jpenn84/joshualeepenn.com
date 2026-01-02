import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Interests from './components/Interests';
import InterestsGrid from './components/InterestsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Interests />
        <InterestsGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
