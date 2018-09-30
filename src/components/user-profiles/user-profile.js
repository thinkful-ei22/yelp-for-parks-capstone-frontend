import React from "react";
import { connect } from "react-redux";

class UserProfile extends React.Component {
  //There will be Edit User Profile
  //Once they register - we will automatically create
  //a user profile for them
  //But it will only have username/profile

  //Default userProfile - will be a GET request
  //to get firstName, lastName, username but NOT password

  //When we load the individual userProfile page
  //We dispatch a fetch request that will send the request
  //to the get endpoint to the back end to retrieve
  //those 4 piece of information
  render() {
    return (
      <div>
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
