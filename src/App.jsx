import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Interests from './components/Interests';
import Footer from './components/Footer';
import Articles from "./components/Articles";
import Links from './components/Links';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Interests />
        <Articles />
        <Links />
      </main>
      <Footer />
    </div>
  );
}

export default App;
