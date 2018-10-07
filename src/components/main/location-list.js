import React from "react";
import { connect } from "react-redux";
import { getAllLocations } from "../../actions/location";
import { Redirect } from "react-router";
import LocationListItem from "./location-list-item";
import './styles/location.css';

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirecting: false
    };
  }

  componentDidMount() {
    this.props.dispatch(getAllLocations());
  }

  toggleRedirecting(bool) {
    this.setState({
      redirecting: bool
    });
  }

  render() {
    if (this.state.redirecting === true) {
      return (
        <Redirect
          to={{
            pathname: "/location"
          }}
        />
      );
    }

    if (this.props.locationState.currentLocationByCity.length !== 0) {
      let cityLocations = this.props.locationState.currentLocationByCity;
      let cityMap = cityLocations.map(location => {
        return <LocationListItem class="location-item"
                 locationObject={location}
                 onClick={() => this.toggleRedirecting(true)}
               />
      })

      return (
        <div>{cityMap}</div>
      )
    }

    if (this.props.locationState.currentLocationByKeyword.length !== 0) {
      let keywordLocations = this.props.locationState.currentLocationByKeyword;
      let keywordMap = keywordLocations.map(location => {
        return <LocationListItem class="location-item"
                 locationObject={location}
                 onClick={() => this.toggleRedirecting(true)}
               />
      })

      return (
        <div>{keywordMap}</div>
      )
    }

    return (
      <div className="location-list-items">
        {this.props.locationState.locationList === null ? (
          <div>
            {" "}
            <p>There is nothing here! Do you live in Iowa?</p>{" "}
          </div>
        ) : (
          this.props.locationState.locationList.map(location => {
            return (
              <LocationListItem class="location-item"
                locationObject={location}
                onClick={() => this.toggleRedirecting(true)}
              />
            );
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(LocationList);
