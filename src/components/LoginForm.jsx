import React, { useState } from 'react';
import '../login.css';
import { loginUser } from './api';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      alert(response.message);
    } catch (error) {
      console.error(error);
      alert(error.message);
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
              title="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              title="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="login-forgot">
            <label>
              <input type="checkbox" /> Remember Me!
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;