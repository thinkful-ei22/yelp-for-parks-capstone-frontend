import React from "react";
import { connect } from "react-redux";
import { logout, createUser, createUserLocation } from "../../actions/login";
import { getAllLocations } from "../../actions/location";

import { Redirect } from "react-router";
import LocationList from "./location-list";
import FilterCity from "./filter-city";
import FilterKeyword from "./filter-keyword";
import { Link } from "react-router-dom";
import "./styles/dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToUserProfile: false,
      filter: { city: "", keyword: "" }
    };
  }

  toggleRedirectToUserProfile(bool) {
    this.setState({
      redirectToUserProfile: bool
    });
  }
  componentWillMount() {
    this.toggleRedirectToUserProfile(false);
  }

  componentWillUnmount() {
    this.toggleRedirectToUserProfile(false);
  }

  filterByCity(city) {
    this.setState({
      filter: {
        ...this.state.filter,
        city: city
      }
    });
  }

  filterByKeyword(keyword) {
    this.setState({
      filter: {
        ...this.state.filter,
        keyword: keyword
      }
    });
  }

  render() {
    if (this.state.redirectToUserProfile === true) {
      console.log("what is this");
      return (
        <Redirect
          to={{
            pathname: "/user"
          }}
        />
      );
    }

    if (this.props.loggedIn.currentUser === null) {
      return (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      );
    }

    return (
      <div className="dashboard">
        <button onClick={() => this.props.dispatch(logout())}>Log Out</button>
        <button
          type="button"
          onClick={() => {
            this.props.dispatch(createUser());
            this.props
              .dispatch(createUserLocation(this.props.loggedIn.currentUser.id))
              .then(() => {
                this.toggleRedirectToUserProfile(true);
              });
          }}
        >
          My Profile
        </button>
        <h2>Parks!</h2>
        <FilterCity handleCityFilter={city => this.filterByCity(city)} />
        <FilterKeyword
          handleKeywordFilter={keyword => this.filterByKeyword(keyword)}
        />
        <LocationList filter={this.state.filter} />
        <Link to="/location/add">Add A New Location!</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(Dashboard);
