import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './styles/landing-page.css';

import LoginForm from "../users/login-form";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn.currentUser !== null) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <div className="intro-text">
        <h1>GO helps you explore the great outdoors - <br/>
          right in your own neighborhood</h1>

          <h5>Recommend your favorite nature sites: hiking <br/>
          trails, parks, ponds, mountains, stargazing, <br/>
          campgrounds...the sky is the limit!</h5>

          <img className="backpack" src="https://i.postimg.cc/ZnFx9sN4/climbingpack.png" />

          <h5>See what places other users cannot<br/>
          talking about</h5>

          <img className="tent" src="https://i.postimg.cc/mDSPCvmX/kisspng-camping-tent-campsite-campfire-clip-art-sick-dog-cartoon.png" />

          <h4>Join the discussion.<br/>
          Make community.<br/>
          Get Outside.</h4>
      </div>
      <div className="login-form-placement">
        <LoginForm />
        <Link to="/register">Create Account</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LandingPage);
