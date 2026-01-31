import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedTours from './components/FeaturedTours';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedTours />
      <Footer />
    </div>
  );
}

export default App;
