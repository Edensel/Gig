import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

