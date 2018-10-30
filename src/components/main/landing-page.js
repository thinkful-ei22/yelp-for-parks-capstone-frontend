import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./styles/landing-page.css";

import LoginForm from "../users/login-form";
import RegistrationForm from "../users/registration-form";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registering: false
    };
  }

  componentWillMount() {
    this.setState({
      registering: false
    });
  }
  componentWillUnmount() {
    this.setState({
      registering: false
    });
  }

  toggleRegistration(bool) {
    this.setState({
      registering: bool
    });
  }

  render() {
    let formContainer;

    //if they've logged in, we allow them to redirect to dashboard
    if (this.props.loggedIn.currentUser !== null) {
      return <Redirect to="/dashboard" />;
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
              className="toggle-login"
              name="go-to-login"
            >
              Back to Login
            </button>
          ) : (
            <button
              onClick={() => this.toggleRegistration(true)}
              className="toggle-registration"
              name="go-to-registration"
            >
              Create Account
            </button>
          )}
        </div>
      );
    }

    return (
      <section className="landing-page-container">
        <div className="intro-topper">
          <h1 className="landing-page-header">
            GO helps you explore the great outdoors - <br />
            right in your own neighborhood
          </h1>
        </div>

        <div className="intro-text">
          <h3 className="intro-text-h3">
            Recommend your favorite nature sites: hiking <br />
            trails, parks, ponds, mountains, stargazing, <br />
            campgrounds...the sky is the limit!
          </h3>
          <img
            className="backpack"
            src="https://i.postimg.cc/ZnFx9sN4/climbingpack.png"
            alt='backpack'
          />
          <br />
          <h3 className="intro-text-h4">
            See what places other users can't stop talking about!
          </h3>

          <img
            className="tent"
            src="https://i.postimg.cc/mDSPCvmX/kisspng-camping-tent-campsite-campfire-clip-art-sick-dog-cartoon.png"
            alt='tent'
          />

          <h2 className="intro-text-h2">
            Join the discussion.
            <br />
            Make community.
            <br />
            Get Outside.
            <br />
            Demo user: demouser1
            <br /> 
            Demo pass: password123
          </h2>
          {formContainer}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(LandingPage);
