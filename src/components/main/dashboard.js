import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/login";
import { Redirect } from "react-router";
import LocationList from "./location-list";

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
        <button onClick={() => this.props.dispatch(logout())}>Log Out</button>
        <h2>dashboard</h2>
        <LocationList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(Dashboard);
