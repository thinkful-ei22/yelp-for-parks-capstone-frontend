import React from 'react';
import {connect} from 'react-redux';
import { createUser } from "../../actions/user";
import { Redirect } from "react-router";
import requiresLogin from './requires-login';

class Dashboard extends React.Component {
  componentDidMount() {

  }

  render() {
    if (this.props.userState.redirecting) {
      return (
        <Redirect
          to={{
            pathname: "/user"
          }}
        />
      );
    }

    return (
      <div className="dashboard">
        <h2>dashboard</h2>
        <button type="button" onClick={() => this.props.dispatch(createUser())}>My Profile</button>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  userState: state.user
});

export default connect(mapStateToProps)(Dashboard);
