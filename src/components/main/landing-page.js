import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import "./styles/landing-page.css"

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn.currentUser !== null) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <body >
      <h1>Get</h1>
      <div className="home">
        <h1>Outside</h1>
        <div className="subtitle-container">
          <div className="subtitle-box">
            <h2>Start Here</h2>
            <p>[ What's in your neighborhood? ]</p>
          </div>
        </div>
        <div className="link-container">
        <Link to="/login" className="log-in-link">Log In</Link>
        <Link to="/register" className="sign-up-link">Sign Up</Link>
      </div>
      </div>
    </body>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LandingPage);
