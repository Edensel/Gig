import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { useState } from 'react';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSignIn = () => {
    // Logic to handle user authentication and set isLoggedIn to true
    setIsLoggedIn(true);
  };
  const handleSignOut = () => {
    // Logic to handle user sign out and set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      {/* {isLoggedIn ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )} */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/register" element={<RegisterForm onSignIn={handleSignIn} />} />
          <Route path="/login" element={<LoginForm onSignIn={handleSignIn} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


