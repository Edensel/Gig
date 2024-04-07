import { useState } from "react";
import PropTypes from "prop-types";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";
import UserDetailsPopup from "./UserDetailsPopup";

const Navbar = ({ isLoggedIn, handleSignOut }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showUserDetailsPopup, setShowUserDetailsPopup] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // Initialize userDetails

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
 
  
  const handleProfileClick = () => {
    // Here you can fetch user details from your backend or set them from your state
    const fetchedUserDetails = { username: "Densel", email: "densel@me.com" };
    setUserDetails(fetchedUserDetails);
    setShowUserDetailsPopup(true);
  };
 
  const handleClosePopup = () => {
    setShowUserDetailsPopup(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Gig-Ahooy</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              {isLoggedIn ? (
                <>
                  <button className="py-2 px-3 border rounded-md" onClick={handleProfileClick}>Profile</button>
                  <button className="py-2 px-3 border rounded-md" onClick={handleSignOut}>Sign Out</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="py-2 px-3 border rounded-md">Sign In</Link>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                  >
                    Create an account
                  </Link>
                </>
              )}
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                {!isLoggedIn && (
                  <Link to="/login" className="py-2 px-3 border rounded-md">Sign In</Link>
                )}
                {!isLoggedIn && (
                  <Link
                    to="/register"
                    className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                  >
                    Create an account
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
      {showUserDetailsPopup && (
        <UserDetailsPopup 
        username={userDetails.username}
        email={userDetails.email}
        onClose={handleClosePopup} />
      )}
    </>
  );
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};

export default Navbar;
