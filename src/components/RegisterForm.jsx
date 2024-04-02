

function RegisterForm() {
    return (
      <div className="wrapper">
        <form id="register-form" action="/services" method="get">
          <div className="form-box register">
            <h2>Registration</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input type="text" required title="Enter Username" id="register-username" />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required title="Enter Email" id="register-email" />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required title="Enter Password" id="register-password" />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox"/>
                I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="btn">Register</button>
  
          </div>
        </form>
        
      </div>
    );
    
  }
  
  export default RegisterForm;