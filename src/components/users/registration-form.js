import React from "react";
import { connect } from "react-redux";
import {
  fetchRegistration,
  toggleRedirecting
} from "../../actions/registration";
import { Redirect } from "react-router";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirecting: false
    };
  }

  componentWillMount() {
    this.props.dispatch(toggleRedirecting(false));
  }

  componentWillUnmount() {
    this.props.dispatch(toggleRedirecting(false));
  }

  render() {
    if (this.props.registrationState.redirecting === true) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    }
    return (
      <form>
        <label htmlFor="registration-username" className="registration-label" />
        <input
          id="registration-username"
          className="registration-input"
          type="text"
          ref={input => (this.username = input)}
          placeholder="username"
        />

        <label
          htmlFor="registration-first-name"
          className="registration-label"
        />
        <input
          id="registration-first-name"
          className="registration-input"
          type="text"
          ref={input => (this.firstName = input)}
          placeholder="first name"
        />

        <label
          htmlFor="registration-last-name"
          className="registration-label"
        />
        <input
          id="registration-last-name"
          className="registration-input"
          type="text"
          ref={input => (this.lastName = input)}
          placeholder="last name"
        />

        <label htmlFor="registration-password" className="registration-label" />
        <input
          id="registration-password"
          className="registration-input"
          type="password"
          ref={input => (this.password = input)}
          placeholder="password"
        />

        <label htmlFor="confirm-password" className="registration-label" />
        <input
          id="registration-confirm-password"
          className="registration-input"
          type="password"
          ref={input => (this.confirmPassword = input)}
          placeholder="confirm password"
        />

        <button
          name="register"
          type="submit"
          onClick={e => {
            e.preventDefault();
            this.props.dispatch(
              fetchRegistration({
                username: this.username.value,
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                password: this.password.value,
                confirmPassword: this.confirmPassword.value
              })
            );
          }}
        >
          Let's go!
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  registrationState: state.registration
});
export default connect(mapStateToProps)(RegistrationForm);
