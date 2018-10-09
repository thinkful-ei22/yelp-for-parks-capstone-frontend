import React from "react";
import { connect } from "react-redux";
import { logout, createUser, createUserLocation } from "../../actions/login";
import { Redirect } from "react-router";
import LocationList from "./location-list";
import { Link } from 'react-router-dom';
import './styles/dashboard.css';

class Dashboard extends React.Component {
  componentDidMount() {}

  render() {
    if (this.props.loggedIn.redirecting) {
      return (
        <Redirect
          to={{
            pathname: "/user"
          }}
        />
      );
    }

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
        <div className="buttons-container">
          <button className="logout-button" onClick={() => this.props.dispatch(logout())}>Log Out</button>
          <button className="user-profile-button" type="button" onClick={() => {
            this.props.dispatch(createUser());
            this.props.dispatch(createUserLocation(this.props.loggedIn.currentUser.id));
          }}>My Profile</button>
        </div>
        <h1 className="headline">GO Explore!</h1>
        <LocationList />
        <div className="add-location-container">
          <h2>Know a good place? Add a new location!</h2>
          <br/>
          <Link className="add-location-button" to="/location/add">Add Location</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user,
});

export default connect(mapStateToProps)(Dashboard);
