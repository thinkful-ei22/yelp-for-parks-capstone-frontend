import React from "react";
import { connect } from "react-redux";
import "./user-profile.css"

 class UserProfile extends React.Component {
  render() {
    let userLocations = this.props.userState.currentUserLocations;
    let locationsMap = userLocations.map(location => {
      return <div className="user-locations-container">
        <h3>My locations</h3>
        <div className="locations-box">
          <p className="indiv-location">{location.title}<br/>
          {location.description}<br/>
          {location.address}<br/>
          {location.city + ','} {location.state} {location.zipCode}<br/></p>
        </div>
      </div>
    })
    if(userLocations.length !== 0) {
        return (
          <div className="user-profile-container">
            <div className="placeholder"></div>
            <div className="circle"></div>
            <div className="user-info-container">
              <h1 className="username">{this.props.userState.currentUser.username}</h1>
              <h2 className="name">{this.props.userState.currentUser.firstName} {this.props.userState.currentUser.lastName}</h2>
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
