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
    <div className="home">
      <h1>Get Outside</h1>
      <main className="landing-img-section">
      <img src={require('../../images/landing-img.jpg')} alt="Image of a park in Honolulu, Hawaii" className="landing-img" />
      <div>
        <h2>Start Here</h2>
        <p>What's in your neighborhood?</p>
      </div>
      </main>
  <div>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LandingPage);
