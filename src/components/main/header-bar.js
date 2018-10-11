import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/login';
import { Link } from 'react-router-dom';
import './styles/header-bar.css';

export class HeaderBar extends React.Component {

  render() {
    let dashboard, myProfile, userLogout;
    if (this.props.validUser) {
      dashboard = (
        <Link to="/dashboard">
          <button type="button" name="back-to-dashboard">
            Dashboard{''}
          </button>
        </Link>
      );
      const userId = this.props.loggedIn.currentUser.id;
      myProfile = (
        <Link to={`/profile/${userId}`}>
          <button type="button" name="my-profile">
            My Profile{''}
          </button>
        </Link>
      );
      userLogout = (
        <Link to={'/'}>
          <button type="button" onClick={() => this.props.dispatch(logout())}>
            Log Out
          </button>
        </Link>
      );
    }

    return (
      <div className="header-bar">
        <h1>Parks!</h1>
        {dashboard}
        {myProfile}
        {userLogout}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  validUser: state.user.currentUser !== null,
  loggedIn: state.user
});

export default connect(mapStateToProps)(HeaderBar);