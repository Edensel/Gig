import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function RegisterForm() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    username: "",
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
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration Successful");

        // Reset the form data to clear the form fields
        setFormData({
          username: "",
          email: "",
          password: "",
        });

        // Redirect to the home page or newly registered user
        navigate("/"); // This will navigate the user to the home page, showing the newly registered user
      } else {
        alert(data.error || "An error occurred");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div className="wrapper">
      <form id="register-form" onSubmit={handleSubmit}>
        <div className="form-box register">
          <h2>Registration</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input
              type="text"
              required
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label>Username</label>
          </div>
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
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;