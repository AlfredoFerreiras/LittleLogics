import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store/auth";
import { Link } from "react-router-dom";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  const handleSignUpBtn = () => {
    <Link to="/signup" />;
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit} name={name} className="auth-form">
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

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
