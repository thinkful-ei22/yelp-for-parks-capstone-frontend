import React from "react";
import { connect } from "react-redux";
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
    return (
      <div className="dashboard">
        <div className="filter-container">
          <br/>
          <br/>
          <FilterCity handleCityFilter={city => this.filterByCity(city)} />
          <FilterKeyword
            handleKeywordFilter={keyword => this.filterByKeyword(keyword)}
          />
        </div>
        <LocationList filter={this.state.filter} />
        <div className="add-location-box">
          <h3>Know a good place? Contribute to the community!</h3>
          <br/>
          <Link className="add-location-button" to="/add/location">Add A New Location!</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
});

export default connect(mapStateToProps)(Dashboard);
