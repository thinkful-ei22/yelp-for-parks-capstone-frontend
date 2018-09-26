import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/users/login-page";
import RegistrationPage from "./components/users/registration-page";
import LandingPage from "./components/main/landing-page";

class App extends Component {
  render() {
    return (
      <main>
        <Route path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegistrationPage} exact />
      </main>
    );
  }
}

export default App;
