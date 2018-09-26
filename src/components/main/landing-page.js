import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h4>home</h4>
        <Link to="/login">Log In</Link>
        <Link to="/register">Create Account</Link>
      </div>
    );
}

const mapStateToProps = state => ({
    //loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);