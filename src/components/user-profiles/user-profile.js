import React from "react";
import { connect } from "react-redux";

 class UserProfile extends React.Component {
  render() {
    if(this.props.userState.currentUserLocations.length !== 0) {
      for(let i = 0; i < this.props.userState.currentUserLocations.length; i++) {
        return (
          <div className="user-profile-container">
            <div className="user-info-container">
              <p>Username</p>
              <p>{this.props.userState.currentUser.username}</p>
              <p>First Name</p>
              <p>{this.props.userState.currentUser.firstName}</p>
              <p>Last Name</p>
              <p>{this.props.userState.currentUser.lastName}</p>
            </div>
            <div className="user-locations-container">
              <p>{this.props.userState.currentUserLocations[i].title}</p>
              <p>{this.props.userState.currentUserLocations[i].description}</p>
              <p>{this.props.userState.currentUserLocations[i].address}</p>
              <p>{this.props.userState.currentUserLocations[i].city}</p>
              <p>{this.props.userState.currentUserLocations[i].state}</p>
              <p>{this.props.userState.currentUserLocations[i].zipCode}</p>
            </div>
          </div>
        )
      }
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
