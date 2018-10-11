import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUserById } from "../../actions/user";
import "./user-profile.css";

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUserById(this.props.match.params.id));
  }
  render() {
    console.log(this.props);
    let userLocations = this.props.userState.currentUserLocations;
    const filtered = this.props.locationState.locationList.filter(location => {
      return location.ownerId.id === this.props.match.params.id;
    });
    let locationsMap = filtered.map(location => {
      return (
        <div className="user-locations-container">
          <h3>My locations</h3>
          <div className="locations-box">
            <p className="indiv-location">
              {location.title}
              <br />
              {location.description}
              <br />
              {location.address}
              <br />
              {location.city + ","} {location.state} {location.zipCode}
              <br />
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="user-profile-container">
        <div className="placeholder" />
        <div className="circle" />
        <div className="user-info-container">
          <h1 className="username">
            {this.props.userState.currentUser.username}
          </h1>
          <h2 className="name">
            {this.props.userState.currentUser.firstName}{" "}
            {this.props.userState.currentUser.lastName}
          </h2>
        </div>
        {locationsMap.length ? locationsMap : ""}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userState: state.user,
  locationState: state.location
});

export default connect(mapStateToProps)(UserProfile);
