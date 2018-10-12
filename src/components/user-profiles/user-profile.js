import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserById } from '../../actions/user';
import './user-profile.css';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUserById(this.props.match.params.id));
  }
  render() {
    const userProfileObj = {};

    if (!this.props.userState.currentUser){
      return <div>Loading...</div>;
    }
    const filtered = this.props.locationState.locationList.filter(location => {
      return location.ownerId.id === this.props.match.params.id;
    });
    let locationsMap = filtered.map((location, i) => {
      userProfileObj.username = location.ownerId.username;
      userProfileObj.firstName = location.ownerId.firstName;
      userProfileObj.lastName = location.ownerId.lastName;
      const locationId = `/location/${location.id}`;
      return (
        <p key={i} className="indiv-location">
          <Link to={locationId}>{location.title}</Link>
          <br />
          {location.description}
          <br />
          {/* {location.address}
          <br /> */}
          {location.city + ','} {location.state} {/*{location.zipCode}*/}
          <br />
        </p>
      );
    });

    const { username, firstName, lastName } = this.props.user.currentUser;

    return (
      <div className="user-profile-container">
        <div className="user-info-container">
          <h1 className="username">
            {username }
          </h1>
          <h2 className="name">
            {firstName}
            {' '}
            {lastName}
          </h2>
        </div>
        <div className="user-locations-container">
          <h3>My locations</h3>
          <div className="locations-box">
            {locationsMap.length ? locationsMap : ' You have not created a location yet'}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userState: state.user,
  user: state.userProfile,
  locationState: state.location
});

export default connect(mapStateToProps)(UserProfile);
