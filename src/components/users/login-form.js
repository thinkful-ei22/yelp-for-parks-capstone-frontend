import React from "react";

const LoginForm = props => {
  return (
    <form className="login-form">
      <label for="username" className="login-label" />
      <input
        id="login-username"
        className="login-input"
        type="text"
        placeholder="username"
      />

      <label for="password" className="login-label" />
      <input
        id="login-password"
        className="login-input"
        type="text"
        placeholder="password"
      />

      <div className="remember-me-container">
        <input
          type="checkbox"
          className="login-input"
          id="remember-me-box"
          name="remember me"
        />
        <label for="remember-me-box">Remember me</label>
      </div>

      <button type="submit" name="login-button" id="login-button">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
