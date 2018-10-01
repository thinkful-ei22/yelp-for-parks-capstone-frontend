import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/login";
import { Redirect } from "react-router";

class Dashboard extends React.Component {
  componentDidMount() {}

  render() {
    if (this.props.loggedIn.currentUser === null) {
      return (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      );
    }
    return (
      <div className="dashboard">
        <h2>dashboard</h2>
        <button onClick={() => this.props.dispatch(logout())}>Log Out</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(Dashboard);
