import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/users/login-page";
import RegistrationPage from "./components/users/registration-page";
import LocationForm from "./components/locations/location-form";

class App extends Component {
  render() {
    return (
      <main>
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegistrationPage} exact />
        <Route path="/add/location" component={LocationForm} exact />
      </main>
    );
  }
}

export default App;
