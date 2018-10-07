import React from "react";
import { connect } from "react-redux";

 class AuthorProfile extends React.Component {
  render() {
    let authorLocations = this.props.authorState.currentAuthorLocations;
    let locationsMap = authorLocations.map(location => {
      return <div className="author-locations-container">
        <p>{location.title}</p>
        <p>{location.description}</p>
        <p>{location.address}</p>
        <p>{location.city}</p>
        <p>{location.state}</p>
        <p>{location.zipCode}</p>
      </div>
    })
    if(authorLocations.length !== 0) {
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
            {locationsMap}
          </div>
        )

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
