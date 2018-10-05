import React from "react";
import { connect } from "react-redux";
import { fetchLogin, refreshAuthToken } from "../../actions/login";
import "./styles/login-form.css"

class LoginForm extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form className="login-form">
          <h1>Log In</h1>
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
            type="password"
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
            className="button"
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

          {/* <button
            type="button"
            name="BUTTON-TO-TEST-AUTHTOKEN-REFRESH"
            className="button"
            onClick={e => {
              e.preventDefault();
              this.props.dispatch(refreshAuthToken());
            }}
          >
            refresher
        </button> */}
        </form>
      </div>
    );
  }
}

export default connect()(LoginForm);
