import React from "react";

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="registration-username" className="registration-label" />
        <input
          id="registration-username"
          className="registration-input"
          type="text"
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
          placeholder="last name"
        />

        <label htmlFor="registration-password" className="registration-label" />
        <input
          id="registration-password"
          className="registration-input"
          type="text"
          placeholder="password"
        />

        <label htmlFor="confirm-password" className="registration-label" />
        <input
          id="registration-confirm-password"
          className="registration-input"
          type="text"
          placeholder="confirm password"
        />

        <button name="register" type="submit">
          Let's go!
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
