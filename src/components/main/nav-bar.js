import React from "react";
import { connect } from 'react-redux';
import { clearAuth } from '../actions/login';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
}

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log out</button>
      );
    }
    return (
      <div>
        <ul>
          <li>App Title</li>
          <Link to="/">
            <li>{logOutButton}</li>
          </Link>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);