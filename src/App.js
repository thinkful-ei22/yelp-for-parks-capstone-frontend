import React from 'react';
import {connect} from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './components/users/login-page';
import RegistrationPage from './components/users/registration-page';
import LandingPage from './components/main/landing-page';
import Dashboard from './components/main/dashboard';
import {refreshAuthToken} from './actions/login';

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
        <Route path="/" component={LandingPage} />
        <Route path='/dashboard' component ={Dashboard} />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegistrationPage} exact />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  //hasAuthToken: state.auth.authToken !== null,
  //loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
