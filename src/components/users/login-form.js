import React from 'react';
import { connect } from 'react-redux';
import { fetchLogin } from '../../actions/login';
import './styles/login-form.css';

class LoginForm extends React.Component {
  demoLogin = () => {
      document.getElementById('login-username').value = 'demouser';
      document.getElementById('login-password').value = 'demopassword';
      setTimeout(() => {
        this.props.dispatch(
          fetchLogin({
            username: 'demouser',
            password: 'demopassword'
          })
        );
      }, 500);
    }

  render() {
    return (
      <section className="login-container">
        <br/>
        <h1 className="login-form-header">Log in </h1>
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
            placeholder="password123"
            autoComplete='password'
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

          <div className='demo-account-container'>
            <button type="submit" className='demo-account' onClick={e => {
              e.preventDefault();
              this.demoLogin()
            }}>Play Demo</button>
          </div>

        </form>
      </section>
    );
  }
}

export default connect()(LoginForm);
