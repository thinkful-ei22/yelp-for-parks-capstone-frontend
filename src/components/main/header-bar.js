import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/login';
import { Link } from 'react-router-dom';
import './styles/header-bar.css';

export class HeaderBar extends React.Component {

  render() {
    let headerBar, dashboard, myProfile, userLogout;
    if (this.props.validUser) {
      dashboard = (
        <Link className="link" to="/dashboard">
          <button type="button" name="back-to-dashboard" className="header-dashboard-button">
            Dashboard{''}
          </button>
        </Link>
      );
      const userId = this.props.loggedIn.currentUser.id;
      myProfile = (
        <Link className="link" to={`/profile/${userId}`}>
          <button type="button" name="my-profile" className="dashboard-profile-button">
            {''}My Profile
          </button>
        </Link>
      );
      userLogout = (
        <Link className="link" to={'/'}>
          <button type="button" className="dashboard-logout-button" onClick={() => this.props.dispatch(logout())}>
            Log Out
          </button>
        </Link>
      );
      headerBar = (
        <div id="header-bar" className="header-bar">
        <div className="logo-placeholder"></div>
        <br/>
          {dashboard}
          {myProfile}
          {userLogout}
        </div>
      );
    }

    return (
      <div>
        {headerBar}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  validUser: state.user.currentUser !== null,
  loggedIn: state.user
});

export default connect(mapStateToProps)(HeaderBar);
