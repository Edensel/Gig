import "../login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


function LoginForm({ handleSignIn }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login Successful");

        // Redirect to the home page or any other desired page
        handleSignIn();
        navigate("/"); // This will navigate the user to the home page after successful login
      } else {
        alert(data.error || "Invalid email address or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="wrapper">
      <form id="login-form" onSubmit={handleSubmit}>
        <span className="icon-close">
          <ion-icon name="close"></ion-icon>
        </span>
        <div className="form-box login">
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label>Password</label>
          </div>
          <div className="login-forgot">
            <label>
              <input type="checkbox" />
              Remember Me!
            </label>
            <a href="#"> Forgot Password </a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
 LoginForm.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
 };

export default LoginForm;
