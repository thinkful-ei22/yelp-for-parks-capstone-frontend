import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { refreshAuthToken } from '../actions/login';

import LoginPage from "./components/users/login-page";
import RegistrationPage from "./components/users/registration-page";
import NavBar from "./components/main/nav-bar";

import "./App.css";
class App extends Component {
// Persistence
componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
}

componentWillUnmount() {
    this.stopPeriodicRefresh();
}

startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // One hour
    );
}

stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }

    clearInterval(this.refreshInterval);
}

  render() {
    return (
      <main>
        <NavBar />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegistrationPage} exact />
      </main>
    );
  }
}

export default App;
