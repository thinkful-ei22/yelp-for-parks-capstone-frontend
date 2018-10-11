import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/login";

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
      filter: { city: "", keyword: "" }
    };
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
    if (this.props.loggedIn.currentUser === null) {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    }
    const userId = this.props.loggedIn.currentUser.id;

    return (
      <div className="dashboard">
        <button onClick={() => this.props.dispatch(logout())}>Log Out</button>
        <Link to={`/profile/${userId}`}>
          <button type="button">My Profile</button>
        </Link>
        <h2>Parks!</h2>
        <FilterCity handleCityFilter={city => this.filterByCity(city)} />
        <FilterKeyword
          handleKeywordFilter={keyword => this.filterByKeyword(keyword)}
        />
        <LocationList filter={this.state.filter} />
        <Link to="add/location">Add A New Location!</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(Dashboard);
