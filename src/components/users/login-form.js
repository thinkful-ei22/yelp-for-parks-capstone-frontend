import React from "react";
import { connect } from "react-redux";
import { fetchLogin, refreshAuthToken } from "../../actions/login";
import "./styles/login-form.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-container">
        <br />
        <h1>Log in </h1>
        <form className="login-form">
          <br />
          <input
            id="login-username"
            className="login-input"
            type="text"
            ref={input => (this.username = input)}
            placeholder="username"
          />
          <br />
          <input
            id="login-password"
            className="login-input"
            type="password"
            ref={input => (this.password = input)}
            placeholder="password"
          />
          <br/>
          <button
            type="submit"
            className="login-button"
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
            Get GOing!
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(LoginForm);
