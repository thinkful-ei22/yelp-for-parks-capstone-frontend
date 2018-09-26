import React from "react";
import { connect } from "react-redux";
import { fetchLogin, refreshAuthToken } from "../../actions/login";

class LoginForm extends React.Component {
  render() {
    return (
      <form className="login-form">
        <label htmlFor="username" className="login-label" />
        <input
          id="login-username"
          className="login-input"
          type="text"
          ref={input => (this.username = input)}
          placeholder="username"
        />

        <label htmlFor="password" className="login-label" />
        <input
          id="login-password"
          className="login-input"
          type="text"
          ref={input => (this.password = input)}
          placeholder="password"
        />

        <div className="remember-me-container">
          <input
            type="checkbox"
            className="login-input"
            id="remember-me-box"
            name="remember me"
          />
          <label htmlFor="remember-me-box">Remember me</label>
        </div>

        <button
          type="submit"
          name="login-button"
          id="login-button"
          onClick={e => {
            e.preventDefault();
            this.props.dispatch(
              fetchLogin({
                username: this.username.value,
                password: this.password.value
              })
            );
          }}
        >
          Sign in
        </button>

        <button
          type="button"
          name="BUTTON-TO-TEST-AUTHTOKEN-REFRESH"
          onClick={e => {
            e.preventDefault();
            this.props.dispatch(refreshAuthToken());
          }}
        >
          refresher
        </button>
      </form>
    );
  }
}

export default connect()(LoginForm);
