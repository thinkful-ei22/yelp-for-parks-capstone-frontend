import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

class Dashboard extends React.Component {
  componentDidMount() {

  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log Out</button>
      );
    }
    return (
      <div className="dashboard">
        <h2>dashboard</h2>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth
});

export default connect(mapStateToProps)(Dashboard);