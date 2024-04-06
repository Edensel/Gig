import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { useState, useEffect } from 'react';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    checkStorage();
    return () => {};
  }, [isLoggedIn]);
  function checkStorage() {
    if (localStorage.getItem("user")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {isLoggedIn && <button onClick={logout}>Logout</button>}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


