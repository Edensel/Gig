

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import FeatureSection from './components/FeatureSection';
// import Footer from './components/Footer';
// import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
// import OrderPage from './components/OrderPage';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="max-w-7xl mx-auto pt-20 px-6">
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/order" element={<OrderPage />} /> 
//           <Route path="/features" element={<FeatureSection />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'; // Import Footer component
import LoginForm from './components/LoginForm'

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
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
        <Footer /> {/* Include the Footer component here */}
      </div>
    </Router>
  );
};

export default App;

