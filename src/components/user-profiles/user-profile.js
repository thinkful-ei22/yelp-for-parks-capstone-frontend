import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

 class UserProfile extends React.Component {
  render() {
    let userLocations = this.props.userState.currentUserLocations;
    let locationsMap = userLocations.map(location => {
      return <div className="user-locations-container">
        <p>{location.title}</p>
        <p>{location.description}</p>
        <p>{location.address}</p>
        <p>{location.city}</p>
        <p>{location.state}</p>
        <p>{location.zipCode}</p>
      </div>
    })
    if(userLocations.length !== 0) {
        return (
          <div className="user-profile-container">
          <Link to="/dashboard">Dashboard</Link>
            <div className="user-info-container">
              <p>Username</p>
              <p>{this.props.userState.currentUser.username}</p>
              <p>First Name</p>
              <p>{this.props.userState.currentUser.firstName}</p>
              <p>Last Name</p>
              <p>{this.props.userState.currentUser.lastName}</p>
            </div>
            {locationsMap}
          </div>
        )
    }
    return (
      <div className="user-info-container">
        <p>Username</p>
        <p>{this.props.userState.currentUser.username}</p>
        <p>First Name</p>
        <p>{this.props.userState.currentUser.firstName}</p>
        <p>Last Name</p>
        <p>{this.props.userState.currentUser.lastName}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userState: state.user
});

export default connect(mapStateToProps)(UserProfile);
