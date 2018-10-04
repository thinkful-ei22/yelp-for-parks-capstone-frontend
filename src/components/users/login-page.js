import React from "react";
import LoginForm from "./login-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import './styles/login-page.css';

class LoginPage extends React.Component {
  render() {
    if (this.props.loggedIn.currentUser !== null) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    }
    return (
      <div class="login-page">
      <div className="row">
      <div className="column">
        <LoginForm />
        <Link to="/register" className="register-link">Create Account</Link>
        </div>
        <div className="column">
          <p>some text explaining what the app does wow</p>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LoginPage);
