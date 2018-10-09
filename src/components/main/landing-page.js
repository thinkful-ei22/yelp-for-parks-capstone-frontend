import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import LoginForm from "../users/login-form";
import RegistrationForm from "../users/registration-form";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registering: false,
      redirectingToDash: false
    };
  }

  componentWillMount() {
    this.setState({
      registering: false,
      redirectingToDash: false
    });
  }
  componentWillUnmount() {
    this.setState({
      registering: false,
      redirectingToDash: false
    });
  }

  toggleRegistration(bool) {
    this.setState({
      registering: bool
    });
  }

  toggleRedirectingToDash(bool) {
    this.setState({
      redirectingToDash: bool
    });
  }

  // If we are logged in redirect straight to the user's dashboard
  render() {
    if (this.state.redirectingToDash === true) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    }
    if (this.props.loggedIn.currentUser !== null) {
      return (
        <div className="home">
          <h2>Parks!</h2>
          {/*depending on this.state.registering, we toggle between a registration
        and a login form. The button switches as well.*/}
          <button
            onClick={() => this.toggleRedirectingToDash(true)}
            name="go-to-dashboard"
          >
            Get <strong>GO</strong>
            ing!
          </button>
        </div>
      );
    }

    return (
      <div className="home">
        <h2>Parks!</h2>
        {/*depending on this.state.registering, we toggle between a registration
        and a login form. The button switches as well.*/}
        {this.state.registering ? <RegistrationForm /> : <LoginForm />}
        {this.state.registering ? (
          <button
            onClick={() => this.toggleRegistration(false)}
            name="go-to-login"
          >
            Back to Login
          </button>
        ) : (
          <button
            onClick={() => this.toggleRegistration(true)}
            name="go-to-registration"
          >
            Create Account
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LandingPage);
