import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './components/users/login-page';
import RegistrationPage from './components/users/registration-page';
import LandingPage from './components/main/landing-page';
import Dashboard from './components/main/dashboard';
import HeaderBar from './components/main/header-bar';
import LocationForm from './components/locations/location-form';
import LocationIndividual from './components/locations/location-individual';
import UserProfile from './components/user-profiles/user-profile';
import { refreshAuthToken } from './actions/login';
import Notifications from 'react-notify-toast';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
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
      <main className="App">
        <HeaderBar />
        <Route path="/" component={LandingPage} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegistrationPage} exact />
        <Route path="/add/location" component={LocationForm} exact />
        <Route path="/location/:id" component={LocationIndividual} exact />
        <Route path="/profile/:id" component={UserProfile} exact />
        <Notifications />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  //hasAuthToken: state.auth.authToken !== null,
  //loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
