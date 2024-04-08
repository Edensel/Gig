
import PropTypes from "prop-types";

const UserDetailsPopup = ({ username, email, onClose }) => {
  return (
    <div
      className="user-details-popup"
      style={{
        position: "fixed",
        top: 80,
        right: 0,
        width: "150px", // Adjust the width as needed
        height: "50%",
        // backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="user-details-content" style={{ padding: "20px", 
      position: "absolute", top: "10px", right: "150px", width: "150px" }}>
        {/* Display user details here */}
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        {/* Add more user details as needed */}
      </div>
      <button
        className="close-button"
        onClick={onClose}
        style={{
          position: "absolute",
          top: "-15px",
          right: "10px",
          padding: "5px 10px",
          backgroundColor: "#dd8a0e",
          border: "50%",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
};

UserDetailsPopup.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserDetailsPopup;
