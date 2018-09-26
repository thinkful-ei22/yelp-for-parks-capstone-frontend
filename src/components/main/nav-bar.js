import React from "react";
import { connect } from 'react-redux';
import { clearAuth } from '../../actions/login';
import { clearAuthToken } from '../../utils';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
}

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn.currentUser) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log out</button>
      );
    }
    return (
      <div>
        <ul>
          <li>App Title</li>
          <li>Add a nature location</li>
          <li>Edit your nature locations</li>
          <li>Home</li>
          <Link to="/">
            <li>{logOutButton}</li>
          </Link>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth !== null
});

export default connect(mapStateToProps)(NavBar);