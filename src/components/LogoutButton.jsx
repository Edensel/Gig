

function LogoutButton({ onLogout }) {
    const handleLogout = () => {
      // Perform logout logic here
      if (typeof onLogout === 'function') {
        onLogout();
      }
    };
  
    return (
      <button onClick={handleLogout} className="btn">
        Logout
      </button>
    );
  }
  
  export default LogoutButton;
  