import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getAllLocations } from "../../actions/location";
import "./styles/landing-page.css";

import LoginForm from "../users/login-form";
import RegistrationForm from "../users/registration-form";

class LandingPage extends React.Component {
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
  render() {
    let formContainer;
    console.log(this.props.loggedIn.currentUser);
    //if they've logged in, we allow them to redirect to dashboard
    if (this.props.loggedIn.currentUser !== null) {
      formContainer = (
        <div>
          <button
            name="redirect-to-dash"
            onClick={() => {
              this.props
                .dispatch(getAllLocations())
                .then(() => this.toggleRedirectingToDash(true));
            }}
          >
            Get GOing
          </button>
        </div>
      );
    }
    //else we present them with the login or the registration form
    else {
      formContainer = (
        <div className="login-form-placement">
          {/* depending on this.state.registering, we toggle between a registration
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

    if (this.state.redirectingToDash === true) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    }

    return (
      <div>
        <div className="intro-topper">
          <h1>
            GO helps you explore the great outdoors - <br />
            right in your own neighborhood
          </h1>
        </div>

        <div className="intro-text">
          <h3>
            Recommend your favorite nature sites: hiking <br />
            trails, parks, ponds, mountains, stargazing, <br />
            campgrounds...the sky is the limit!
          </h3>
          <br />
          <img
            className="backpack"
            src="https://i.postimg.cc/ZnFx9sN4/climbingpack.png"
          />
          <br />
          <h3>
            See what places other users cannot
            <br />
            talking about
          </h3>

          <img
            className="tent"
            src="https://i.postimg.cc/mDSPCvmX/kisspng-camping-tent-campsite-campfire-clip-art-sick-dog-cartoon.png"
          />
          <br />
          <h2>
            Join the discussion.
            <br />
            Make community.
            <br />
            Get Outside.
          </h2>
          {formContainer}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LandingPage);
