import React from 'react';
import { connect } from 'react-redux';
//import { clearAuth } from '../actions/auth';
//import { clearAuthToken } from '../utils/local-storage';
import { Link } from 'react-router-dom';
import './styles/header-bar.css';

export class HeaderBar extends React.Component {
  logOut() {
    //this.props.dispatch(clearAuth());
    //clearAuthToken();
  }

  render() {
    let dashboard, myProfile;
    // if (this.props.validUser) {
    //   dashboard = (
    //     <Link to="/dashboard">
    //       <button type="button" name="back-to-dashboard">
    //         Dashboard{''}
    //       </button>
    //     </Link>
    //   );
    //   const userId = this.props.loggedIn.currentUser.id;
    //   myProfile = (
    //     <Link to={`/profile/${userId}`}>
    //       <button type="button" name="my-profile">
    //         My Profile{''}
    //       </button>
    //     </Link>
    //   );
    // }

    return (
      <div className="header-bar">
        <h1>Parks!</h1>
        {dashboard}
        {myProfile}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  validUser: state.user !== null,
  loggedIn: state.user
});

export default connect(mapStateToProps)(HeaderBar);