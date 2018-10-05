import React from "react";
import RegistrationForm from "./registration-form";
import { Link } from 'react-router-dom';

import "./styles/registration-page.css"

const RegistrationPage = props => {
  return (
    <main>
      <h1>GO helps you explore the great outdoors -
    right in your own neighborhood</h1>
    <div className="row">
      <div className="column">
        <RegistrationForm />
        <Link to="/login" className="login-link">Already have an account? Login</Link>
      </div>
      <div className="column">
      <p>Recommend your favorite nature sites: hiking trails, parks, ponds, mountains, stargazing, campgrounds.. the sky is the limit! </p>
          <p>See what places other users can't stop talking about.</p>
          <p>Join the discussion. Make community. Get Outside.</p>
      </div>
    </div>
    </main>
  );
};

export default RegistrationPage;
