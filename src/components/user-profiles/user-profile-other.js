import React from "react";
import { connect } from "react-redux";

class UserProfileOther extends React.Component {
  render() {
    return (
      <div>
      <p>Username</p>
        <p>{this.props.userState.otherUser.username}</p>
        <p>First Name</p>
        <p>{this.props.userState.otherUser.firstName}</p>
        <p>Last Name</p>
        <p>{this.props.userState.otherUser.lastName}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userState: state.user
});

export default connect(mapStateToProps)(UserProfileOther);
