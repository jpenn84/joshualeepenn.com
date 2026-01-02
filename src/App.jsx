import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
