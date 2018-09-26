import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import { refreshAuthToken } from './actions/login';

import LoginPage from "./components/users/login-page";
import RegistrationPage from "./components/users/registration-page";
import NavBar from "./components/main/nav-bar";
import LandingPage from "./components/main/landing-page";
import Dashboard from "./components/main/dashboard";

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
      <Router>
        <main>
          <NavBar />
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/register" component={RegistrationPage} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </main>
      </Router>
    );
  }
}



export default App;
