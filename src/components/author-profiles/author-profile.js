import React from "react";
import { connect } from "react-redux";

 class AuthorProfile extends React.Component {
  render() {
    if(this.props.authorState.currentAuthorLocations.length !== 0) {
      for(let i = 0; i < this.props.authorState.currentAuthorLocations.length; i++) {
        return (
          <div className="author-profile-container">
            <div className="author-info-container">
              <p>Username</p>
              <p>{this.props.authorState.currentAuthor.username}</p>
              <p>First Name</p>
              <p>{this.props.authorState.currentAuthor.firstName}</p>
              <p>Last Name</p>
              <p>{this.props.authorState.currentAuthor.lastName}</p>
            </div>
            <div className="author-locations-container">
              <p>{this.props.authorState.currentAuthorLocations[i].title}</p>
              <p>{this.props.authorState.currentAuthorLocations[i].description}</p>
              <p>{this.props.authorState.currentAuthorLocations[i].address}</p>
              <p>{this.props.authorState.currentAuthorLocations[i].city}</p>
              <p>{this.props.authorState.currentAuthorLocations[i].state}</p>
              <p>{this.props.authorState.currentAuthorLocations[i].zipCode}</p>
            </div>
          </div>
        )
      }
    }

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
