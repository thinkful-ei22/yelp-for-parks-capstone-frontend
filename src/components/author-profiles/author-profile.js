import React from "react";
import { connect } from "react-redux";

 class AuthorProfile extends React.Component {
  render() {
    return (
      <div>
      <p>Username</p>
        <p>{this.props.authorState.currentAuthor.username}</p>
        <p>First Name</p>
        <p>{this.props.authorState.currentAuthor.firstName}</p>
        <p>Last Name</p>
        <p>{this.props.authorState.currentAuthor.lastName}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authorState: state.authorProfile
});

export default connect(mapStateToProps)(AuthorProfile);
