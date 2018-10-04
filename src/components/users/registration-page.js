import React from "react";
import RegistrationForm from "./registration-form";
import { Link } from 'react-router-dom';

import "./styles/registration-page.css"

const RegistrationPage = props => {
  return (
    <div className="row">
      <div className="column">
        <RegistrationForm />
        <Link to="/login" className="login-link">Back to Login</Link>
      </div>
      <div className="column">
        <p>some text explaining what the app does wow</p>
      </div>
    </div>
  );
};

export default RegistrationPage;
