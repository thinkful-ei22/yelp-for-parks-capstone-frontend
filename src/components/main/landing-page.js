import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import LoginForm from "../users/login-form";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn.currentUser !== null) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h2>Parks!</h2>
      <LoginForm />
      <Link to="/register">Create Account</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LandingPage);
