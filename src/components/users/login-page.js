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
      <main>
      <h1>GO helps you explore the great outdoors -
    right in your own neighborhood</h1>
      <div className="row">
      <div className="column">
        <LoginForm />
        <Link to="/register" className="register-link">Create Account</Link>
        </div>
        <div className="column">
          <p>Recommend your favorite nature sites: hiking trails, parks, ponds, mountains, stargazing, campgrounds.. the sky is the limit! </p>
          <p>See what places other users can't stop talking about.</p>
          <p>Join the discussion. Make community. Get Outside.</p>
        </div>
      </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LoginPage);
