import React from 'react';
import { connect } from 'react-redux';
import { fetchLogin } from '../../actions/login';
import './styles/login-form.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-container">
        <br />
        <h1>Log in </h1>
        <form className="login-form">
          <label htmlFor="username" className="login-label">
            Username
          </label>
          <br />
          <input
            id="login-username"
            className="login-input"
            type="text"
            ref={input => (this.username = input)}
            placeholder="happytrails"
          />
          <br />
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <br />
          <input
            id="login-password"
            className="login-input"
            type="password"
            ref={input => (this.password = input)}
            placeholder="password123"
            autoComplete='password'
          />

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
            Go!
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(LoginForm);
