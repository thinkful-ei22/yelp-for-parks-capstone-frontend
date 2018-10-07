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
      <div className="login-page">
        <h2>Login</h2>
        <LoginForm />
        <Link to="/register">Create Account</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LoginPage);
