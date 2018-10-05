import React from "react";
import { connect } from "react-redux";

 class UserProfile extends React.Component {
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
