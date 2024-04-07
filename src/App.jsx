import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import OrderPage from './components/OrderPage';
import Footer from './components/Footer'; // Import Footer component
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AboutUs from './components/AboutUs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkStorage();
    return () => {};
  }, []);

  function checkStorage() {
    if (localStorage.getItem('user')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  const handleSignIn = () => {
    // Logic to handle user authentication
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    // Logic to handle user sign out
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          {isLoggedIn && <Route path="/order" element={<OrderPage />} />}
          <Route path="/features" element={<FeatureSection />} />
          {isLoggedIn && <Route path="/pricing" element={<Pricing />} />}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm handleSignIn={handleSignIn} />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer /> {/* Include the Footer component here */}
      </div>
    </Router>
  );
};

export default App;
