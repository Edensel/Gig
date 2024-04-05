

// Gig/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import OrderPage from './components/OrderPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* Main content area */}
        <div className="flex-grow">
          <div className="max-w-7xl mx-auto pt-20 px-6">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/features" element={<FeatureSection />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
