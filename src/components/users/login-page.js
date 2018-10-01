import React from "react";
import LoginForm from "./login-form";
import {Link} from 'react-router-dom';

const LoginPage = props => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <Link to="/register">Create Account</Link>
    </div>
  );
};

export default LoginPage;
