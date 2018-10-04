<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/login";
import { Redirect } from "react-router";
import LocationList from "./location-list";
import { Link } from 'react-router-dom';
import './styles/dashboard.css';
=======
import React from 'react';
import {connect} from 'react-redux';
import { createUser } from "../../actions/user";
import { Redirect } from "react-router";
import requiresLogin from './requires-login';
>>>>>>> 340b7681d9a3e382604c9e0be585353ed93de882

class Dashboard extends React.Component {
  componentDidMount() {}

  render() {
<<<<<<< HEAD
    if (this.props.loggedIn.currentUser === null) {
      return (
        <Redirect
          to={{
            pathname: "/login"
=======
    if (this.props.userState.redirecting) {
      return (
        <Redirect
          to={{
            pathname: "/user"
>>>>>>> 340b7681d9a3e382604c9e0be585353ed93de882
          }}
        />
      );
    }
<<<<<<< HEAD
    return (
      <div className="dashboard">
        <button onClick={() => this.props.dispatch(logout())}>Log Out</button>
        <h2>Parks!</h2>
        <LocationList />
        <Link to="/location/add">Add A New Location!</Link>
=======

    return (
      <div className="dashboard">
        <h2>dashboard</h2>
        <button type="button" onClick={() => this.props.dispatch(createUser())}>My Profile</button>

>>>>>>> 340b7681d9a3e382604c9e0be585353ed93de882
      </div>
    );
  }
}

const mapStateToProps = state => ({
<<<<<<< HEAD
  loggedIn: state.user
=======
  userState: state.user
>>>>>>> 340b7681d9a3e382604c9e0be585353ed93de882
});

export default connect(mapStateToProps)(Dashboard);
