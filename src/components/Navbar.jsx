import { useState} from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom"; // Import Link component

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   checkStorage();
  //   return () => {};
  // }, [isLoggedIn]);
  // function checkStorage() {
  //   if (localStorage.getItem("user")) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }
  // const logout = () => {
  //   localStorage.removeItem("user");
  //   setIsLoggedIn(false);
  // };

 const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    // Logic to handle user authentication
    setIsLoggedIn(!isLoggedIn);
  };

  // const handleSignOut = () => {
  //   // Logic to handle user sign out
  //   setIsLoggedIn(false);
  // };

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Gig-Ahooy</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {/* Use Link components instead of anchor tags */}
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
          {/* {isLoggedIn && <button onClick={logout}>Logout</button>} */}
          {isLoggedIn ? (
          <button onClick={handleSignIn} className="py-2 px-3 border rounded-md"> {isLoggedIn ? "" : ""}
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="py-2 px-3 border rounded-md" onClick={handleSignIn} >  {isLoggedIn ? "Sign Out" : ""}
                Sign In
              </Link>
        )}
            <Link
              to="/register"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </Link>
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
              {/* Use Link components instead of anchor tags */}
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
            <Link to="/login" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                to="/register"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;




