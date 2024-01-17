import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store/auth";
import { Link } from "react-router-dom";
import LittleLogicsLogoNavBar from "../../public/images/LittleLogicsLogoNavBar.png";

const AuthForm = (props) => {
  4;
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="logo-container"></div>

        <form onSubmit={handleSubmit} name={name} className="auth-form">
          <img
            src="/images/LittleLogicsLogoNavBar.png"
            alt="LittleLogics Logo"
            className="auth-logo"
          />
          <div className="form-field">
            <label htmlFor="username" className="form-label">
              <small>Username</small>
            </label>
            <input name="username" type="text" className="form-input" />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="form-label">
              <small>Password</small>
            </label>
            <input name="password" type="password" className="form-input" />
          </div>
          <div className="form-field">
            <button type="submit" className="submit-button">
              {displayName}
            </button>
            <div className="text-center">
              <p>
                Not a member?
                <Link to="/signup" className="registerbtn">
                  Register
                </Link>
              </p>
            </div>
          </div>

          {error && error.response && (
            <div className="error-message"> {error.response.data} </div>
          )}
        </form>
      </div>
    </div>
  );
};
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

const getColorfulStyle = () => {
  const keyframes = `
    @keyframes rainbow-text {
      0% { color: rgb(255, 0, 0); }
      100% { color: rgb(255, 0, 0); }
    }
  `;

  return {
    animation: "rainbow-text 20s linear infinite",
    WebkitAnimation: "rainbow-text 20s linear infinite", // for cross-browser compatibility
    MozAnimation: "rainbow-text 20s linear infinite",
    OAnimation: "rainbow-text 20s linear infinite",
    keyframes,
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
