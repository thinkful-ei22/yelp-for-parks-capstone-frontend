import React from "react";
import RegistrationForm from "./registration-form";
import {Link} from 'react-router-dom';

const RegistrationPage = props => {
  return (
    <div>
      <h2>Start Exploring!</h2>
      <RegistrationForm />
      <Link to="/login">Back to Login</Link>
    </div>
  );
};

export default RegistrationPage;
