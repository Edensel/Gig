
import "../login.css";

function LoginForm() {
  return (
    <div className="wrapper">
      <form id="login-form" action="/ClientPage" method = "get">
        <span className="icon-close">
          <ion-icon name="close"></ion-icon>
        </span>
        <div className="form-box login">
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required title="Enter Email" id="login-email" />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required title="Enter password" id="login-password" />
            <label>Password</label>
          </div>
          <div className="login-forgot">
            <label>
              <input type="checkbox" />
              Remember Me!
            </label>
            <a href="#"> Forgot Password </a>
          </div>
          <button type="submit" className="btn">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
